import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Phone } from 'lucide-react';
import { Card, CardHeader } from "@/components/ui/card";
import { motion } from 'framer-motion';

const AboutPage = () => {
  const skills = [
    { name: "Python", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.20.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zM7.95 2.16l-.23.33-.08.41.08.41.23.33.33.22.41.09.41-.09.33-.22.23-.33.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22z"/></svg> },
    { name: "Django", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M3 3h18v18H3V3z"/></svg> },
    { name: "Azure", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236z"/></svg> },
    { name: "Git", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624"/></svg> },
    { name: "Github", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg> },
    { name: "PostgreSql", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M3 3h18v18H3V3z"/></svg> },
    { name: "Deeplearning", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M3 3h18v18H3V3z"/></svg> },
    { name: "Machine Learning", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M3 3h18v18H3V3z"/></svg> },
  ];

  const education = [
    {
      year: "Sep 2022 – Aug 2024",
      degree: "MSc in Data Science",
      institution: "REVA University, Bengaluru",
      description: "Coursework & thesis-level projects in ML, time series (ARIMA), NLP and recommendation systems. CGPA: 6.8"
    },
    {
      year: "Jul 2019 – Sep 2022",
      degree: "BSc PCM (Physics, Chemistry, Mathematics)",
      institution: "REVA University, Bengaluru",
      description: "Undergraduate studies with strong analytical foundation. CGPA: 7.8"
    }
  ];

  return (
    <div className="min-h-screen bg-orange-50 z-50 p-8 pb-28 md:pb-8 md:pt-32">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Sai Shashank S
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-gray-600"
          >
            MSc Data Science · Full-Stack Developer · ML & Product — I build data-driven products, ERPs and ML solutions for business impact.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold mb-4"
              >
                My Journey
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-gray-600 leading-relaxed"
              >
                Data Science graduate turned Full-Stack Developer—experienced in web scraping, ML models, and building ERP systems. Worked on real-time analytics, Azure deployments, and client-focused full-stack solutions, earning a Problem Solver award.
              </motion.p>
            </div>

            {/* Education Timeline */}
            <div className="mt-8">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold mb-6"
              >
                Education
              </motion.h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="relative border-l-4 border-black pl-4 hover:shadow-lg transition-all cursor-pointer">
                    <CardHeader className="space-y-1 p-4">
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-between items-start"
                      >
                        <div>
                          <h3 className="font-bold">{edu.degree}</h3>
                          <p className="text-sm text-gray-600">{edu.institution}</p>
                        </div>
                        <span className="text-sm font-medium bg-gray-100 px-2 py-1 rounded">
                          {edu.year}
                        </span>
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-sm text-gray-600"
                      >
                        {edu.description}
                      </motion.p>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Skills</h2>
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="p-2 bg-white rounded-md shadow-sm"
                    >
                      {skill.icon}
                    </motion.div>
                    <span className="text-xs md:text-base font-semibold">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
             <div className="flex justify-center">
  <div className="flex space-x-8">
    
    <a href='https://github.com/sai2001' target='_blank' rel="noreferrer"
      className="p-3 hover:bg-gray-100 rounded-lg transition-colors">
      <Github className="w-7 h-7" />
    </a>

    <a href='https://www.linkedin.com/in/saishashank768' target='_blank' rel="noreferrer"
      className="p-3 hover:bg-gray-100 rounded-lg transition-colors">
      <Linkedin className="w-7 h-7" />
    </a>

    <a href="mailto:saishashank.pvs@gmail.com"
      className="p-3 hover:bg-gray-100 rounded-lg transition-colors">
      <Mail className="w-7 h-7" />
    </a>

    <a href="tel:+917483105774"
      className="p-3 hover:bg-gray-100 rounded-lg transition-colors">
      <Phone className="w-7 h-7" />
    </a>

  </div>
</div>


              <div className="mt-4 text-sm text-gray-600">
                <div>📞 +91-7483105774</div>
                <div>✉️ <a href="mailto:saishashank.pvs@gmail.com" className="underline">saishashank.pvs@gmail.com</a></div>
                <div>📍 Bengaluru, Karnataka, India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="border-t pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xl font-medium">Interested in working together?</p>
            <a href="/projects">
              <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                View My Work
                <ExternalLink className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
