# Sai Shashank — personal professional platform

A Vite and React personal portfolio for independent IT training, career and interview mentoring, freelancing guidance, and software development. Existing About, Projects, and Resume pages remain available alongside the new service, resource, contact, and email-managed project-introduction pages.

## Local development

```sh
npm install
npm run dev
```

`npm run build` creates the static frontend in `dist`. `npm run lint` runs ESLint.

The enquiry API is a Vercel Function, so plain `npm run dev` does not run `/api/leads`. In the local preview, submitting a form shows a prefilled email link; the visitor must send that email from their mail app. To test automatic submission locally, run the app with Vercel's development runtime and the server-side environment variables.

## Vercel deployment and enquiry email

The site uses Vercel Functions for `/api/leads`, `/sitemap.xml`, and `/robots.txt`. Configure these server-side environment variables in the Vercel project settings:

- `RESEND_API_KEY` — a Resend API key. Keep it server-side; do not use a `VITE_` prefix.
- `LEADS_FROM_EMAIL` — a sender address verified with Resend.
- `SITE_URL` — the production site origin, such as `https://www.example.com`; used for the sitemap and robots file.

Enquiries are sent to `saishashank.pvs@gmail.com` by default. Optionally set `LEADS_TO_EMAIL` to override the destination. After adding the variables, redeploy. The enquiry form validates fields in the browser and function, then sends a plain-text email with the sender as `reply_to`. If the function or email provider is unavailable, the form reports the failure and offers a direct email link. Do not collect sensitive information in enquiry messages.

## Current enquiry and marketplace model

No database or authentication service existed in the original project. Enquiries and freelancer/project introductions are therefore sent to the configured email inbox; they are not stored in a shared dashboard. The marketplace page is an email-managed introduction flow—not a public job board, user account system, or application-status tracker. Do not advertise those features until persistent storage and authenticated roles are implemented.

Testimonials are not fabricated, prices are not hardcoded, and no job or placement guarantees are made. Add genuine testimonials and editable prices only when a secure content-management approach is chosen.

## Main routes

- `/` — personal homepage and service overview
- `/services/students-freshers`
- `/services/working-professionals`
- `/services/interview-preparation`
- `/services/freelancing-mentorship`
- `/services/software-development`
- `/marketplace` — email-managed project/freelancer introductions
- `/resources` — curated free learning links
- `/contact` — centralized enquiry form
- `/about`, `/projects`, `/resume` — existing portfolio pages

Vercel rewrites serve React Router routes directly and map `/robots.txt` and `/sitemap.xml` to serverless handlers. The sitemap and robots endpoint require a configured `SITE_URL` (or Vercel's deployment URL).
