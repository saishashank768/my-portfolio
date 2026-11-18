import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Home, UserRound, BriefcaseBusiness, FileText, BookOpen, UsersRound, GraduationCap, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import profileIcon from "./components/assets/profile-2026.ico";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import ResumePage from "./components/ResumePage";
import ServicesPage from "./components/ServicesPage";
import ResourcesPage from "./components/ResourcesPage";
import MarketplacePage from "./components/MarketplacePage";
import ContactPage from "./components/ContactPage";
import "./App.css";

const serviceTitles = {
  "students-freshers": ["IT Training for Students & Freshers | Sai Shashank", "Online Python, SQL, Data Science, AI, and full-stack training with practical projects, portfolio guidance, and interview preparation."],
  "working-professionals": ["IT Upskilling & Career Mentorship | Sai Shashank", "Career transition mentorship and AI training for working professionals, with practical Python, SQL, Data Science, and full-stack projects."],
  "interview-preparation": ["Python, SQL & IT Interview Preparation | Sai Shashank", "Personalized Python and SQL interview coaching for data, full-stack, and AI/ML roles, with practical mock interviews."],
  "freelancing-mentorship": ["Freelancing Mentorship in India | Sai Shashank", "Practical freelance mentorship on portfolios, proposals, client communication, scoping, and delivery."],
  "software-development": ["Custom Software & Web Development | Sai Shashank", "Discuss custom websites, ERP, inventory systems, automation, analytics dashboards, and AI applications."],
};

const pageMetadata = {
  "/": ["Sai Shashank | IT Trainer, Developer & Mentor", "Learn by building with Sai Shashank: practical IT training, career and interview mentoring, freelancing guidance, and software development."],
  "/about": ["About Sai Shashank | Developer & IT Mentor", "Learn about Sai Shashank's experience in full-stack development, data science, business applications, project delivery, and mentoring."],
  "/projects": ["Software & Data Projects | Sai Shashank", "Explore selected ERP, analytics, machine-learning, and full-stack projects by Sai Shashank."],
  "/resume": ["Resume | Sai Shashank", "Professional experience, skills, projects, and education of Sai Shashank."],
  "/resources": ["Free Python, SQL, AI & Career Resources | Sai Shashank", "Free learning resources for Python, SQL, data science, AI, web development, Git, and freelancing."],
  "/marketplace": ["Find IT Project Support | Sai Shashank", "Share a software project enquiry or introduce your freelancer profile for an email-managed follow-up."],
  "/contact": ["Book a Demo or Discuss a Project | Sai Shashank", "Contact Sai Shashank about training, interview preparation, freelancing mentorship, or software development."],
};

function PageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const slug = pathname.split("/").filter(Boolean)[1];
    const metadata = pathname.startsWith("/services/") ? serviceTitles[slug] : pageMetadata[pathname];
    if (!metadata) return;

    document.title = metadata[0];
    let icon = document.querySelector('link[rel="icon"]');
    if (!icon) {
      icon = document.createElement("link");
      icon.rel = "icon";
      document.head.appendChild(icon);
    }
    icon.href = profileIcon;

    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    description.content = metadata[1];

    [["og:title", metadata[0]], ["og:description", metadata[1]]].forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    });
  }, [pathname]);

  return null;
}

function AppLayout() {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: UserRound },
    { name: "Services", url: "/services/students-freshers", icon: GraduationCap },
    { name: "Projects", url: "/projects", icon: BriefcaseBusiness },
    { name: "Resources", url: "/resources", icon: BookOpen },
    { name: "Marketplace", url: "/marketplace", icon: UsersRound },
    { name: "Resume", url: "/resume", icon: FileText },
  ];

  return (
    <>
      <PageMetadata />
      <NavBar items={navItems} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/services/:slug" element={<ServicesPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<main className="page-shell"><div className="not-found"><p className="eyebrow">404 · Page not found</p><h1>This page isn’t here.</h1><a className="button button-primary" href="/">Back to home</a></div></main>} />
      </Routes>
      <footer className="site-footer">
        <div className="footer-inner">
          <div><Link className="footer-brand" to="/">Sai Shashank<span>.</span></Link><p>Independent IT trainer, developer & mentor · Bengaluru, India</p></div>
          <div className="footer-links"><Link to="/about">About</Link><Link to="/projects">Projects</Link><Link to="/resources">Resources</Link><Link to="/contact">Contact</Link></div>
          <p className="footer-copy">© {new Date().getFullYear()} Sai Shashank S</p>
        </div>
      </footer>
      <a className="whatsapp-float" href="https://wa.me/919483508971" target="_blank" rel="noreferrer" aria-label="Message Sai on WhatsApp">
        <MessageCircle size={23} />
      </a>
    </>
  );
}

function App() {
  return <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><AppLayout /></Router>;
}

export default App;
