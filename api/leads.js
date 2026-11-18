import process from "node:process";

const MAX_LENGTHS = {
  name: 100,
  email: 254,
  phone: 40,
  audience: 50,
  service: 120,
  experience: 50,
  technologies: 300,
  learningMode: 60,
  preferredTime: 120,
  budget: 100,
  deadline: 100,
  portfolio: 500,
  linkedin: 500,
  availability: 100,
  message: 4000,
  page: 200,
};

const FIELD_LABELS = {
  name: "Name",
  email: "Email",
  phone: "WhatsApp / mobile",
  audience: "Status",
  service: "Interested service",
  experience: "Experience level",
  technologies: "Technologies of interest",
  learningMode: "Preferred learning mode",
  preferredTime: "Preferred demo / consultation time",
  budget: "Budget",
  deadline: "Deadline",
  portfolio: "Portfolio / GitHub",
  linkedin: "LinkedIn",
  availability: "Availability",
  message: "Message",
  page: "Submitted from",
};

function respond(res, status, body) {
  res.status(status).json(body);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return respond(res, 405, { error: "Method not allowed." });
  }

  const { RESEND_API_KEY, LEADS_TO_EMAIL, LEADS_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !LEADS_FROM_EMAIL) {
    return respond(res, 503, { error: "Enquiry email is not configured yet. Please use the email link instead." });
  }
  const recipientEmail = LEADS_TO_EMAIL || "saishashank.pvs@gmail.com";

  const body = req.body;
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return respond(res, 400, { error: "Please submit a valid enquiry." });
  }

  if (typeof body.website === "string" && body.website.trim()) {
    return respond(res, 200, { ok: true });
  }

  const fields = {};
  for (const [field, maxLength] of Object.entries(MAX_LENGTHS)) {
    const value = body[field];
    if (value !== undefined && value !== null && typeof value !== "string") {
      return respond(res, 400, { error: "Please check your enquiry and try again." });
    }
    const normalized = typeof value === "string" ? value.trim() : "";
    if (normalized.length > maxLength) {
      return respond(res, 400, { error: `Please keep ${FIELD_LABELS[field].toLowerCase()} under ${maxLength} characters.` });
    }
    fields[field] = normalized;
  }

  if (!fields.name || !fields.email || !fields.phone || !fields.audience || !fields.service || !fields.message) {
    return respond(res, 400, { error: "Name, email, phone, status, service, and message are required." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return respond(res, 400, { error: "Please enter a valid email address." });
  }

  const content = Object.entries(FIELD_LABELS)
    .filter(([field]) => fields[field])
    .map(([field, label]) => `${label}: ${fields[field]}`)
    .join("\n");

  const subjectDetails = `${fields.service || "New enquiry"} — ${fields.name}`.replace(/[\r\n]/g, " ").replace(/\s+/g, " ").slice(0, 180);
  let emailResponse;
  try {
    emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: LEADS_FROM_EMAIL,
        to: [recipientEmail],
        reply_to: fields.email,
        subject: `Portfolio enquiry: ${subjectDetails}`,
        text: content,
      }),
    });
  } catch {
    return respond(res, 502, { error: "The email service could not be reached. Please try again or email me directly." });
  }

  if (!emailResponse.ok) {
    return respond(res, 502, { error: "The enquiry could not be sent. Please try again or email me directly." });
  }

  return respond(res, 200, { ok: true });
}

