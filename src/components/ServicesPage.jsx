import { ArrowRight, BriefcaseBusiness, Code2, GraduationCap, MessageCircle, Target } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import InquiryForm from "./InquiryForm";

const services = {
  "students-freshers": {
    icon: GraduationCap,
    eyebrow: "For students & freshers",
    title: "Build practical IT skills and a portfolio you can explain.",
    intro: "Learn core concepts through guided practice, real-world projects, and career preparation tailored to your starting point.",
    offerings: ["Python, SQL, Data Science & AI foundations", "Full-stack web development with Python/Django", "Hands-on and final-year project guidance", "Resume, GitHub & portfolio reviews", "Mock interviews and job-search guidance"],
    detail: "Training focuses on understanding the problem, building the solution, and communicating your decisions—not just following a tutorial.",
    serviceName: "Training for students & freshers",
  },
  "working-professionals": {
    icon: Target,
    eyebrow: "For working professionals",
    title: "Make your next career move with a clear, practical plan.",
    intro: "Explore a structured path for an IT career switch, upskilling, or reskilling, with project work tied to your goals.",
    offerings: ["Career transition and skills roadmap", "Advanced Python, SQL, Data Science & AI", "Full-stack development with Python/Django", "Real-world project mentorship", "Interview and career coaching"],
    detail: "Start with your current experience and target role; then focus sessions on the skills and evidence that matter for your next step.",
    serviceName: "Upskilling for working professionals",
  },
  "interview-preparation": {
    icon: MessageCircle,
    eyebrow: "Interview preparation",
    title: "Prepare with focused practice—not guesswork.",
    intro: "Build confidence through personalized preparation, mock interviews, coding practice, and clear feedback for your target role.",
    offerings: ["Python and SQL interviews", "Data Analyst and Data Scientist roles", "Full-stack developer interviews", "AI / ML interviews", "Experienced professional interviews", "Resume review and scenario-based practice"],
    detail: "Sessions can combine role-specific questions, coding exercises, real-world scenarios, and a practical plan for what to improve next.",
    serviceName: "Interview preparation",
  },
  "freelancing-mentorship": {
    icon: BriefcaseBusiness,
    eyebrow: "Freelancing mentorship",
    title: "Turn your skills into a thoughtful freelance practice.",
    intro: "Learn the practical steps of finding and delivering freelance work, from choosing your services to communicating with clients.",
    offerings: ["Identify and package your skills", "Build a clear portfolio", "Find and qualify potential clients", "Write proposals and estimate project costs", "Set expectations, handle revisions, and deliver", "Understand payment and long-term client relationships"],
    detail: "Work through practical project scenarios and communication examples. Mentorship supports your decisions; it does not promise clients, income, or placements.",
    serviceName: "Freelancing mentorship",
  },
  "software-development": {
    icon: Code2,
    eyebrow: "Software development",
    title: "Build a useful software solution around your needs.",
    intro: "Discuss a website, custom application, data workflow, or business system with an independent developer.",
    offerings: ["Website and custom application development with Python/Django", "ERP and inventory management systems", "Business process automation", "Data analytics dashboards", "AI-powered applications", "Database design and API integrations"],
    detail: "Share your goals, users, constraints, and timeline. I’ll review the requirements and follow up to discuss a realistic scope and next steps.",
    serviceName: "Software development project",
  },
};

function ServicesPage() {
  const { slug } = useParams();
  const service = services[slug];

  if (!service) {
    return (
      <main className="page-shell">
        <section className="not-found"><p className="eyebrow">Service not found</p><h1>Let’s find the right place to start.</h1><Link className="button button-primary" to="/">Back to home <ArrowRight size={16} /></Link></section>
      </main>
    );
  }

  const Icon = service.icon;
  return (
    <main className="page-shell">
      <section className="service-hero">
        <div className="service-copy">
          <Link className="back-link" to="/">Home <span>/</span> Services</Link>
          <span className="icon-tile service-icon"><Icon size={22} /></span>
          <p className="eyebrow">{service.eyebrow}</p>
          <h1>{service.title}</h1>
          <p className="service-intro">{service.intro}</p>
          <a className="button button-primary" href="#enquiry">Enquire about this service <ArrowRight size={16} /></a>
        </div>
        <div className="service-detail-card">
          <p className="eyebrow">Ways I can help</p>
          <ul>{service.offerings.map((item) => <li key={item}><span className="check-mark">✓</span>{item}</li>)}</ul>
          <p className="service-detail-note">{service.detail}</p>
        </div>
      </section>
      <section className="service-bottom">
        <div className="section-heading">
          <p className="eyebrow">Let’s discuss your goals</p>
          <h2>A good first conversation starts with context.</h2>
          <p>Share what you’re aiming for and I’ll get back to you by email.</p>
        </div>
        <div id="enquiry"><InquiryForm service={service.serviceName} /></div>
      </section>
    </main>
  );
}

export default ServicesPage;
