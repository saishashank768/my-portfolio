import process from "node:process";

const routes = [
  "",
  "/about",
  "/projects",
  "/resume",
  "/resources",
  "/marketplace",
  "/contact",
  "/services/students-freshers",
  "/services/working-professionals",
  "/services/interview-preparation",
  "/services/freelancing-mentorship",
  "/services/software-development",
];

function getSiteOrigin() {
  const configured = process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (!configured) return null;
  try {
    const candidate = configured.includes("://") ? configured : `https://${configured}`;
    const parsed = new URL(candidate);
    return ["http:", "https:"].includes(parsed.protocol) ? parsed.origin : null;
  } catch {
    return null;
  }
}

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).send("Method not allowed.");
  }
  const origin = getSiteOrigin();
  if (!origin) return res.status(503).send("Set SITE_URL to enable the sitemap.");

  const entries = routes.map((route) => `  <url><loc>${origin}${route}</loc></url>`).join("\n");
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=86400");
  return res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`);
}

