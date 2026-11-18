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
  if (!origin) return res.status(503).send("Set SITE_URL to enable robots.txt.");

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=86400");
  return res.status(200).send(`User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
}
import process from "node:process";

