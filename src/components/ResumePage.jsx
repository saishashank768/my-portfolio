import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

import cv from "../assets/myResume.pdf";

const ResumePage = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "CKP Software Technologies, Bengaluru",
      period: "Nov 2024 – Jul 2025",
      responsibilities: [
        "Developed and deployed ERP solutions for manufacturing, aerospace, and educational clients.",
        "Managed complete CI/CD lifecycle: requirement gathering, backend APIs, frontend UI, and server-side deployment via IIS.",
        "Ensured performance, security, and uptime on client servers.",
      ],
      highlights: [
        "LG Chennai (Laljee Godhoo & Co) – ERP for hinge manufacturing across two units (inventory, billing, order tracking); full-stack build + IIS hosting; earned Problem Solver Award.",
        "Macro Precision Components – Designed HR module: onboarding, attendance, and payroll; integrated Django REST APIs with dynamic dashboards.",
        "Pinnacle School of Commerce & Management – Developed WhatsApp alert system (Msg91/Twilio API) for fee and academic notifications; promoted to Reporting Manager after project delivery.",
      ],
    },
  ];

  const internship = {
    company: "Go Get Solutions Pvt Ltd, Bengaluru",
    period: "Apr 2024 – Jul 2024",
    details: [
      "Built clustering-based customer segmentation, sentiment analysis from social/blog data, and sales forecasting for millet products.",
      "Generated insights using ML and visualized trends via dashboards for stakeholders.",
    ],
  };

  const projects = [
    {
      id: 1,
      title: "Image Classification – Crack Detection",
      details:
        "Built deep learning models (CNN, ResNet, VGG, EfficientNet) to detect structural cracks with data augmentation and transfer learning, achieving high accuracy.",
    },
    {
      id: 2,
      title: "Oxygen Mask Fall Detection (IoT)",
      details:
        "Created an Arduino solution using accelerometers and IR sensors to detect oxygen mask drop events and trigger urgent alerts.",
    },
    {
      id: 3,
      title: "Millet Analytics & Recommendation System",
      details:
        "Conducted web scraping of consumer reviews, sentiment analysis using TextBlob, and developed a rule-based product recommendation engine for personalized marketing outreach.",
    },
  ];

  const education = [
    {
      id: 1,
      degree: "MSc in Data Science",
      institution: "REVA University, Bengaluru",
      year: "Sep 2022 – Aug 2024",
      extra: "CGPA: 6.8",
    },
    {
      id: 2,
      degree: "BSc PCM (Physics, Chemistry, Mathematics)",
      institution: "REVA University, Bengaluru",
      year: "Jul 2019 – Sep 2022",
      extra: "CGPA: 7.8",
    },
  ];

  const technicalSkills = [
    "Azure",
    "Python",
    "Django",
    "Git",
    "Github",
    "MySQL",
    "PostgreSQL",
    "Power BI",
    "Tableau",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Seaborn",
    "Matplotlib",
    "IIS Hosting",
  ];

  const certifications = [
    "Microsoft Azure DP-900 – Microsoft",
    "Google Cybersecurity Foundation Certified – Google",
    "Cisco Certified Support Technician – Cybersecurity",
    "Prompt Engineering – Independent",
  ];

  const recognitions = [
    "First Prize – Creative Art Event (Sarang 2022), REVA University",
    "Best Player Award – Cricket (Taluk Level, Pavagada, 2012)",
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45 },
  };

  return (
    <div className="min-h-screen bg-orange-50 md:pt-20 pt-6 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <h1 className="md:text-3xl text-2xl font-bold text-gray-900">Sai Shashank S</h1>
                <p className="text-gray-700 mt-1">Full-Stack Developer · MSc Data Science</p>

                <div className="text-sm text-gray-600 mt-3 space-y-1">
                  <div>📞 +91-7483105774</div>
                  <div>✉️ <a href="mailto:saishashank.pvs@gmail.com" className="underline">saishashank.pvs@gmail.com</a></div>
                  <div>🔗 <a href="https://www.linkedin.com/in/sai2001" target="_blank" rel="noreferrer" className="underline">LinkedIn</a> · <a href="https://github.com/sai2001" target="_blank" rel="noreferrer" className="underline ml-1">GitHub</a></div>
                </div>
              </div>

              <motion.a
                href={cv}
                download="Sai_Shashank_Resume.pdf"
                className="flex items-center px-3 md:px-4 text-sm md:text-base py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={16} className="mr-2" />
                Download CV
              </motion.a>
            </div>
{/* Professional Summary */}
<motion.section {...fadeInUp} className="mb-6 text-center">
  <h2 className="text-xl md:text-2xl font-semibold mb-2">
    Professional Summary
  </h2>

  <p className="text-gray-700 max-w-3xl mx-auto">
    Results-driven Full-Stack Developer with expertise in Python/Django, MySQL,
    frontend development, and on-premises hosting (IIS). Proven track record in
    ERP systems across manufacturing, aerospace, and education sectors. Skilled in
    backend API design, frontend UI, and real-time messaging modules.
    Recognized for problem-solving and leadership.
  </p>
</motion.section>


{/* Professional Experience */}
<motion.section {...fadeInUp} className="mb-6 text-center">
  <h2 className="text-xl md:text-2xl font-semibold mb-3">
    Professional Experience
  </h2>

  {experiences.map((exp) => (
    <div key={exp.id} className="mb-6 max-w-3xl mx-auto text-left">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 text-center">
          {exp.title}
        </h3>
        <p className="text-gray-600 text-center">
          {exp.company} · <span className="font-medium">{exp.period}</span>
        </p>
      </div>

      <ul className="list-disc mt-3 text-gray-700 space-y-1 pl-6">
        {exp.responsibilities.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>

      <div className="mt-3 text-gray-700">
        <strong>Key Projects / Highlights:</strong>
        <ul className="list-disc mt-2 space-y-1 pl-6">
          {exp.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</motion.section>


            {/* Internship */}
            <motion.section {...fadeInUp} className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">Internship</h2>
              <div className="text-gray-800">
                <h3 className="text-lg font-semibold">Data Analyst Intern</h3>
                <p className="text-gray-600">{internship.company} · <span className="font-medium">{internship.period}</span></p>
                <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
                  {internship.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </motion.section>

            {/* Projects */}
            <motion.section {...fadeInUp} className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">Projects</h2>
              <div className="space-y-4">
                {projects.map((p) => (
                  <div key={p.id} className="bg-gray-50 p-4 rounded-md border">
                    <h4 className="font-semibold text-gray-900">{p.title}</h4>
                    <p className="text-gray-700 mt-1">{p.details}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Technical Skills */}
            <motion.section {...fadeInUp} className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">Technical Skills</h2>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((s, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-800">{s}</span>
                ))}
              </div>
            </motion.section>

            {/* Certifications */}
            <motion.section {...fadeInUp} className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">Certifications</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {certifications.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </motion.section>

            {/* Recognition */}
            <motion.section {...fadeInUp} className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">Recognition</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {recognitions.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </motion.section>

            {/* Education */}
            <motion.section {...fadeInUp} className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">Education</h2>
              <div className="space-y-4">
                {education.map((e) => (
                  <div key={e.id}>
                    <h4 className="font-semibold text-gray-900">{e.degree}</h4>
                    <p className="text-gray-600">{e.institution} · <span className="font-medium">{e.year}</span></p>
                    <p className="text-gray-700 mt-1">{e.extra}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Personal Details */}
            <motion.section {...fadeInUp} className="mb-2">
              <h2 className="text-xl md:text-2xl font-semibold mb-2">Personal Details</h2>
              <div className="text-gray-700">
                <p><strong>Date of Birth:</strong> 28-Jan-2001</p>
                <p><strong>Gender:</strong> Male</p>
                <p><strong>Languages:</strong> English • Kannada • Hindi • Telugu</p>
              </div>
            </motion.section>

            <div className="mt-6 text-sm text-gray-500">
              <strong>Declaration:</strong> I hereby declare that the above information is true to the best of my knowledge.<br />
              <strong>Place:</strong> Bengaluru, Karnataka, India
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumePage;
