import { ArrowUpRight, BookOpenCheck } from "lucide-react";
import { Link } from "react-router-dom";

const resourceGroups = [
  {
    title: "Python & programming",
    description: "Start with official learning guides and build a habit of writing small, testable programs.",
    resources: [
      ["The Python Tutorial", "Official language tutorial and reference.", "https://docs.python.org/3/tutorial/"],
      ["Python Packaging User Guide", "Learn how Python projects are packaged and distributed.", "https://packaging.python.org/en/latest/"],
    ],
  },
  {
    title: "SQL & databases",
    description: "Practice relational concepts, queries, joins, and database fundamentals.",
    resources: [
      ["PostgreSQL Tutorial", "A hands-on introduction to PostgreSQL.", "https://www.postgresql.org/docs/current/tutorial.html"],
      ["SQLBolt", "Interactive SQL lessons and exercises.", "https://sqlbolt.com/"],
    ],
  },
  {
    title: "Data science & machine learning",
    description: "Explore structured learning material for data workflows and model building.",
    resources: [
      ["scikit-learn User Guide", "Guides and examples for common machine-learning workflows.", "https://scikit-learn.org/stable/user_guide.html"],
      ["Pandas Getting Started", "Official introductions to working with tabular data.", "https://pandas.pydata.org/docs/getting_started/"],
    ],
  },
  {
    title: "AI & generative AI",
    description: "Use official documentation to understand concepts, APIs, and responsible application design.",
    resources: [
      ["Microsoft Learn: AI", "Explore AI learning paths and modules.", "https://learn.microsoft.com/en-us/training/browse/?products=ai-services"],
      ["Hugging Face Learn", "Open learning courses for machine learning and language models.", "https://huggingface.co/learn"],
    ],
  },
  {
    title: "Web development",
    description: "Learn the web platform and build up from HTML, CSS, and JavaScript fundamentals.",
    resources: [
      ["MDN Learn Web Development", "Structured guides for core front-end web skills.", "https://developer.mozilla.org/en-US/docs/Learn_web_development"],
      ["React Learn", "Official interactive React learning materials.", "https://react.dev/learn"],
    ],
  },
  {
    title: "Career & freelancing",
    description: "Use these as starting points for portfolio work, client communication, and career planning.",
    resources: [
      ["GitHub Skills", "Practice GitHub workflows in guided exercises.", "https://skills.github.com/"],
      ["Git documentation", "Learn version control through the official documentation.", "https://git-scm.com/doc"],
    ],
  },
];

function ResourcesPage() {
  return (
    <main className="page-shell">
      <section className="resources-hero">
        <span className="icon-tile"><BookOpenCheck size={22} /></span>
        <p className="eyebrow">Free learning resources</p>
        <h1>Good learning starts with good references.</h1>
        <p>A curated set of free documentation, courses, and exercises to help you keep learning at your own pace.</p>
      </section>
      <section className="resource-grid">
        {resourceGroups.map((group) => (
          <article className="resource-card" key={group.title}>
            <h2>{group.title}</h2><p>{group.description}</p>
            <ul>{group.resources.map(([title, description, href]) => (
              <li key={title}><a href={href} target="_blank" rel="noreferrer"><span><b>{title}</b><small>{description}</small></span><ArrowUpRight size={17} /></a></li>
            ))}</ul>
          </article>
        ))}
      </section>
      <section className="resource-cta"><div><p className="eyebrow">Want a personalized roadmap?</p><h2>Bring your goals and questions.</h2><p>We can discuss where you are, what you want to learn, and a practical next step.</p></div><Link to="/contact" className="button button-primary">Ask about mentorship <ArrowUpRight size={16} /></Link></section>
    </main>
  );
}

export default ResourcesPage;
