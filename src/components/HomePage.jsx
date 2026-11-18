import { ArrowDown, ArrowRight, BriefcaseBusiness, Code2, Database, GraduationCap, Layers3, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import profile from "../assets/profile-2027.jpg";
import universityErp from "../assets/getmaterial.png";
import recommendations from "../assets/thekeepnotes2.png";
import mlProject from "../assets/picaura.png";

const pathways = [
  {
    icon: GraduationCap,
    title: "Students & freshers",
    description: "Build practical skills, complete portfolio-ready projects, and prepare for your first technical interviews.",
    link: "/services/students-freshers",
  },
  {
    icon: Layers3,
    title: "Working professionals",
    description: "Plan an IT career switch or level up with applied Python, SQL, analytics, AI, and full-stack development.",
    link: "/services/working-professionals",
  },
  {
    icon: MessageCircle,
    title: "Interview candidates",
    description: "Get focused practice, mock interviews, scenario questions, and a personalized preparation plan.",
    link: "/services/interview-preparation",
  },
  {
    icon: BriefcaseBusiness,
    title: "Aspiring freelancers",
    description: "Learn how to present your skills, find clients, scope work, communicate, and deliver confidently.",
    link: "/services/freelancing-mentorship",
  },
];

const expertise = [
  ["Python & SQL", "Programming, databases, data analysis, and interview practice"],
  ["Data science & AI", "Machine learning, analytics, forecasting, and generative AI"],
  ["Full-stack & web development", "Python/Django, React, APIs, integrations, and databases"],
  ["Business applications", "ERP, inventory, warehouse, and university workflows"],
];

const projects = [
  {
    title: "University ERP",
    image: universityErp,
    description: "An ERP application for student, staff, course, examination, and university operations.",
    tags: ["Python", "Django", "PostgreSQL", "Azure"],
  },
  {
    title: "Product recommendations & sentiment analysis",
    image: recommendations,
    description: "Review analysis and structured insights to support product recommendations.",
    tags: ["Python", "Machine learning", "Analytics"],
  },
  {
    title: "Machine-learning project deployment",
    image: mlProject,
    description: "A machine-learning project deployed on Microsoft Azure with a user-facing application.",
    tags: ["Python", "Machine learning", "Azure"],
  },
];

function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Independent training, mentoring & software services</p>
            <h1>Learn by building.<br /><span>Grow with confidence.</span></h1>
            <p className="hero-description">
              I’m Sai Shashank — an IT trainer, full-stack developer, data science mentor,
              freelancing mentor, and interview coach. I connect practical industry work
              with clear, hands-on learning.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/contact">Book a free demo <ArrowRight size={17} /></Link>
              <Link className="button button-secondary" to="/projects">Explore my work</Link>
            </div>
            <div className="hero-proof">
              <span><Code2 size={16} /> 3 projects completed</span>
              <span><GraduationCap size={16} /> 10+ students trained</span>
              <span><MessageCircle size={16} /> Free demo available</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img src={profile} alt="Sai Shashank S" />
            </div>
            <div className="floating-note note-top"><span className="note-icon"><Sparkles size={18} /></span><span><b>Learn by doing</b><small>Real-world project guidance</small></span></div>
            <div className="floating-note note-bottom"><span className="note-icon note-icon-blue"><Database size={18} /></span><span><b>From skills to solutions</b><small>Code, data & business systems</small></span></div>
            <span className="hero-orbit orbit-one" /><span className="hero-orbit orbit-two" />
          </div>
        </div>
        <a className="scroll-cue" href="#services"><ArrowDown size={16} /> Explore services</a>
      </section>

      <section className="section section-tint" id="services">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">A path that fits where you are</p>
            <h2>Practical support for your next step</h2>
            <p>Choose a learning or career path, and we’ll shape the next steps around your goals.</p>
          </div>
          <div className="pathway-grid">
            {pathways.map(({ icon: Icon, title, description, link }) => (
              <Link to={link} className="pathway-card" key={title}>
                <span className="icon-tile"><Icon size={21} /></span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="text-link">Explore this path <ArrowRight size={15} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner expertise-layout">
          <div>
            <p className="eyebrow">What I work with</p>
            <h2>Technology skills grounded in real projects</h2>
            <p className="section-copy">From first principles to production-minded workflows, explore the technologies and business problems I teach and build with.</p>
            <Link to="/services/software-development" className="text-link">Discuss a software project <ArrowRight size={15} /></Link>
          </div>
          <div className="expertise-list">
            {expertise.map(([title, description], index) => (
              <div className="expertise-row" key={title}>
                <span className="expertise-number">0{index + 1}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
                <ArrowRight size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="section-inner">
          <div className="section-heading section-heading-light">
            <p className="eyebrow">Selected work</p>
            <h2>Real-world projects, practical lessons</h2>
            <p>Examples drawn from software, analytics, and applied machine learning.</p>
          </div>
          <div className="work-grid">
            {projects.map((project) => (
              <article className="work-card" key={project.title}>
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="work-card-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="center-action"><Link className="button button-light" to="/projects">See portfolio projects <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner trust-layout">
          <div>
            <p className="eyebrow">Experience that connects the dots</p>
            <h2>Teaching informed by building</h2>
            <p className="section-copy">My experience spans ERP and business applications, analytics, full-stack delivery, requirements gathering, and project coordination. I bring those real-world contexts into mentorship and training.</p>
            <Link to="/about" className="text-link">More about my background <ArrowRight size={15} /></Link>
          </div>
          <div className="trust-card">
            <div className="trust-stat"><span>01</span><div><b>Understand the goal</b><small>Clarify the problem before choosing a tool.</small></div></div>
            <div className="trust-stat"><span>02</span><div><b>Build practical skills</b><small>Apply concepts through guided exercises and projects.</small></div></div>
            <div className="trust-stat"><span>03</span><div><b>Show your work</b><small>Present your projects, thinking, and progress clearly.</small></div></div>
            <div className="trust-stat"><span>04</span><div><b>Interview assistance</b><small>Some students I’ve trained have joined MNCs with packages up to ₹8 LPA after interview support. Outcomes vary; placement is not guaranteed.</small></div></div>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="section-inner resource-promo">
          <div>
            <p className="eyebrow">Start learning for free</p>
            <h2>Useful resources, without the paywall</h2>
            <p>Browse official documentation, learning paths, and practice material for Python, SQL, data science, AI, and freelancing.</p>
          </div>
          <Link className="button button-primary" to="/resources">Explore resources <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="section">
        <div className="section-inner testimonial-note">
          <span className="icon-tile"><MessageCircle size={21} /></span>
          <div><p className="eyebrow">Testimonials</p><h2>Genuine feedback belongs here.</h2><p>Testimonials and client stories will be added only with permission. In the meantime, explore the project work and experience on this site.</p></div>
        </div>
      </section>

      <section className="closing-cta">
        <div><p className="eyebrow">Ready when you are</p><h2>Tell me what you’re working towards.</h2><p>Share your learning goal, interview plans, freelancing questions, or software idea.</p></div>
        <Link className="button button-light" to="/contact">Start a conversation <ArrowRight size={16} /></Link>
      </section>
    </main>
  );
}

export default HomePage;
