import { useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import PropTypes from "prop-types";

const audienceOptions = ["Student", "Fresher", "Working Professional", "Freelancer", "Business Owner", "Individual / entrepreneur", "Startup / small business"];
const experienceOptions = ["Beginner", "Less than 1 year", "1–3 years", "3–5 years", "5+ years"];
const emailFieldLabels = {
  name: "Name",
  email: "Email",
  phone: "WhatsApp / mobile",
  audience: "Status",
  service: "Interested service",
  experience: "Experience level",
  technologies: "Technologies",
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

function createEmailFallback(payload) {
  const body = Object.entries(payload)
    .filter(([field, value]) => field !== "website" && typeof value === "string" && value.trim())
    .map(([field, value]) => `${emailFieldLabels[field] || field}: ${value}`)
    .join("\n");
  const subject = `Portfolio enquiry: ${payload.service || "New enquiry"}`;
  return `mailto:saishashank.pvs@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function InquiryForm({ service = "", marketplaceRole = "" }) {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fallbackHref, setFallbackHref] = useState("mailto:saishashank.pvs@gmail.com");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload.page = window.location.pathname;
    payload.service = service || (marketplaceRole === "freelancer" ? "Marketplace: freelancer profile" : marketplaceRole === "project" ? "Marketplace: project posting" : payload.service);
    setFallbackHref(createEmailFallback(payload));

    if (import.meta.env.DEV || ["localhost", "127.0.0.1"].includes(window.location.hostname)) {
      setErrorMessage("The local preview cannot send email automatically. Open the prefilled email and press Send.");
      setStatus("fallback");
      return;
    }

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const responseText = await response.text();
      let result;
      try {
        result = responseText ? JSON.parse(responseText) : null;
      } catch {
        throw new Error("The enquiry service returned an unexpected response. Use the prefilled email link below to send your message.");
      }

      if (response.status === 404) {
        throw new Error("The enquiry API is unavailable in this preview. Use the prefilled email link below to send your message.");
      }

      if (!response.ok) {
        const serviceError = result && typeof result.error === "string" ? result.error : "";
        throw new Error(serviceError || "Your message could not be sent. Please try again or email me directly.");
      }
      if (!result || result.ok !== true) {
        throw new Error("The enquiry service could not confirm delivery. Use the prefilled email link below to send your message.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(error.message || "Your message could not be sent. Please use the prefilled email link below.");
      setStatus("error");
    }
  }

  const isMarketplace = Boolean(marketplaceRole);

  return (
    <div className="inquiry-card">
      {status === "success" ? (
        <div className="form-success" role="status">
          <CheckCircle2 size={30} />
          <h3>Thanks for reaching out.</h3>
          <p>Your enquiry has been sent. I’ll follow up using the contact details you provided.</p>
          <button type="button" className="text-link" onClick={() => setStatus("idle")}>Send another enquiry</button>
        </div>
      ) : (
        <form className="inquiry-form" onSubmit={handleSubmit}>
          <div className="form-heading">
            <h2>{isMarketplace ? (marketplaceRole === "freelancer" ? "Share your freelancer profile" : "Tell me about your project") : "Let’s start a conversation"}</h2>
            <p>{isMarketplace ? "This email-managed introduction helps connect project needs with relevant skills." : "Share a few details so I can suggest a useful next step."}</p>
          </div>

          <div className="form-grid">
            <label className="form-field">Name <span aria-hidden="true">*</span>
              <input name="name" autoComplete="name" required maxLength={100} />
            </label>
            <label className="form-field">Email <span aria-hidden="true">*</span>
              <input name="email" type="email" autoComplete="email" required maxLength={254} />
            </label>
            <label className="form-field">WhatsApp / mobile <span aria-hidden="true">*</span>
              <input name="phone" type="tel" autoComplete="tel" required maxLength={40} />
            </label>
            <label className="form-field">{isMarketplace ? "You are a" : "I’m a"} <span aria-hidden="true">*</span>
              <select name="audience" required defaultValue={marketplaceRole === "freelancer" ? "Freelancer" : marketplaceRole === "project" ? "Business Owner" : ""}>
                <option value="">Choose one</option>
                {audienceOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            {isMarketplace ? (
              <>
                <label className="form-field form-field-wide">{marketplaceRole === "freelancer" ? "Skills / technologies" : "Required technologies"}
                  <input name="technologies" maxLength={300} required={marketplaceRole === "freelancer"} placeholder="e.g. Python, React, SQL" />
                </label>
                {marketplaceRole === "freelancer" ? (
                  <>
                    <label className="form-field">Portfolio or GitHub link
                      <input name="portfolio" type="url" maxLength={500} placeholder="https://" />
                    </label>
                    <label className="form-field">LinkedIn link
                      <input name="linkedin" type="url" maxLength={500} placeholder="https://" />
                    </label>
                    <label className="form-field">Experience <span aria-hidden="true">*</span>
                      <select name="experience" required defaultValue=""><option value="">Choose one</option>{experienceOptions.map((option) => <option key={option}>{option}</option>)}</select>
                    </label>
                    <label className="form-field">Availability <span aria-hidden="true">*</span>
                      <input name="availability" required maxLength={100} placeholder="e.g. 10 hours/week" />
                    </label>
                  </>
                ) : (
                  <>
                    <label className="form-field">Budget (optional)
                      <input name="budget" maxLength={100} placeholder="Your estimated range" />
                    </label>
                    <label className="form-field">Target deadline
                      <input name="deadline" maxLength={100} placeholder="e.g. Flexible / end of month" />
                    </label>
                  </>
                )}
              </>
            ) : (
              <>
                {!service && <label className="form-field">Interested service <span aria-hidden="true">*</span>
                  <select name="service" required defaultValue=""><option value="">Choose a service</option>
                    <option>Training for students & freshers</option>
                    <option>Upskilling for working professionals</option>
                    <option>Interview preparation</option>
                    <option>Freelancing mentorship</option>
                    <option>Software development</option>
                    <option>Free demo / consultation</option>
                  </select>
                </label>}
                <label className="form-field">Experience level
                  <select name="experience" defaultValue=""><option value="">Choose one</option>{experienceOptions.map((option) => <option key={option}>{option}</option>)}</select>
                </label>
                <label className="form-field form-field-wide">Technologies or skills you’re interested in
                  <input name="technologies" maxLength={300} placeholder="e.g. Python, SQL, Data Science" />
                </label>
                <label className="form-field">Preferred learning mode
                  <select name="learningMode" defaultValue=""><option value="">Choose one</option><option>Online one-to-one</option><option>Online group</option><option>In person</option><option>Not sure yet</option></select>
                </label>
                <label className="form-field">Budget (optional)
                  <input name="budget" maxLength={100} placeholder="Share a range if you have one" />
                </label>
                <label className="form-field form-field-wide">Preferred time for a free demo or consultation
                  <input name="preferredTime" maxLength={120} placeholder="e.g. weekday evenings / share a time range" />
                </label>
              </>
            )}
            <label className="form-field form-field-wide">{marketplaceRole === "freelancer" ? "Project types you’re looking for" : isMarketplace ? "Project requirements" : "How can I help?"} <span aria-hidden="true">*</span>
              <textarea name="message" rows="4" required maxLength={4000} placeholder={marketplaceRole === "freelancer" ? "What work are you interested in? Include a brief introduction." : isMarketplace ? "Describe the goal, scope, and any useful context." : "Tell me about your goals, questions, or project idea."} />
            </label>
          </div>

          <label className="honeypot" aria-hidden="true">Leave this field empty<input name="website" tabIndex="-1" autoComplete="off" /></label>
          {(status === "error" || status === "fallback") && (
            <p className={status === "fallback" ? "form-notice" : "form-error"} role={status === "fallback" ? "status" : "alert"}>
              {errorMessage} <a href={fallbackHref}>Open email with this enquiry</a>.
            </p>
          )}
          <button className="button button-primary form-submit" type="submit" disabled={status === "sending"}>
            {status === "sending" ? <><LoaderCircle className="spin" size={17} /> Sending…</> : <>Send enquiry <ArrowRight size={17} /></>}
          </button>
          <p className="form-privacy">Your details are used only to respond to this enquiry.</p>
        </form>
      )}
    </div>
  );
}

InquiryForm.propTypes = {
  service: PropTypes.string,
  marketplaceRole: PropTypes.oneOf(["", "freelancer", "project"]),
};

export default InquiryForm;
