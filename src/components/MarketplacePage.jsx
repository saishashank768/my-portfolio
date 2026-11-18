import { useState } from "react";
import { ArrowRight, BriefcaseBusiness, Code2, MailCheck } from "lucide-react";
import InquiryForm from "./InquiryForm";

function MarketplacePage() {
  const [role, setRole] = useState("project");

  return (
    <main className="page-shell">
      <section className="marketplace-hero">
        <p className="eyebrow">Independent project connections</p>
        <h1>Good work starts with a good introduction.</h1>
        <p>Whether you have a software project or you’re a freelancer looking for your next opportunity, share a few details and I’ll follow up by email.</p>
        <div className="marketplace-note"><MailCheck size={18} /><span>Email-managed introductions · No account required</span></div>
      </section>
      <section className="marketplace-content">
        <div className="marketplace-choice" role="group" aria-label="Choose your enquiry type">
          <button type="button" aria-pressed={role === "project"} className={role === "project" ? "choice-card choice-active" : "choice-card"} onClick={() => setRole("project")}>
            <span className="icon-tile"><BriefcaseBusiness size={21} /></span><span><b>Post a project enquiry</b><small>For a business, startup, student, or individual with an IT project.</small></span><ArrowRight size={17} />
          </button>
          <button type="button" aria-pressed={role === "freelancer"} className={role === "freelancer" ? "choice-card choice-active" : "choice-card"} onClick={() => setRole("freelancer")}>
            <span className="icon-tile"><Code2 size={21} /></span><span><b>Introduce yourself as a freelancer</b><small>Share your skills, experience, availability, and portfolio links.</small></span><ArrowRight size={17} />
          </button>
        </div>
        <div className="marketplace-form">
          <div className="marketplace-explainer"><p className="eyebrow">How it works today</p><h2>{role === "project" ? "Tell me about the work." : "Share your professional profile."}</h2><p>Submissions go to my email for a personal follow-up. This email-first pilot does not create login accounts, publish a project board, or provide application tracking.</p></div>
          <InquiryForm key={role} marketplaceRole={role} />
        </div>
      </section>
    </main>
  );
}

export default MarketplacePage;
