import React from "react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { LineShadowText } from "@/components/ui/line-shadow-text";

import { useTheme } from "next-themes";
import HyperText from "@/components/ui/hyper-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { motion } from "framer-motion";
import myphoto from "../assets/myphoto.png";
import { Github, Linkedin, Mail } from "lucide-react";

function HomePage() {
  const theme = useTheme();
  const shadowColor = theme?.resolvedTheme === "dark" ? "white" : "black";

  return (
    <div>
      {/* hero */}
      <div className="flex flex-col lg:flex-row min-h-screen justify-center w-full md:pt-20 pt-4 pb-14 md:pb-0 px-4 lg:px-0">
        {/* left */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex items-center">
          <div className="relative bg-transparent flex w-full flex-col items-center lg:items-start justify-center overflow-visible rounded-lg">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="z-50 lg:ml-48 whitespace-pre-wrap text-center text-lg md:text-xl font-medium tracking-tighter text-black dark:text-white"
            >
              Hello <span className="animate-pulse">👋</span>
            </motion.p>

            <p className="z-50 whitespace-pre-wrap flex flex-row lg:ml-48 text-center text-3xl md:text-4xl lg:text-5xl font-extrabold md:items-baseline items-center tracking-tighter text-black dark:text-white">
              I'm <HyperText>Sai Shashank S</HyperText>
            </p>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-balance z-50 rounded-tl-xl pr-0 rounded-tr-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:ml-48 mt-3 font-semibold leading-none tracking-tighter text-center lg:text-left"
            >
              <span className="pr-2">Data</span>
              <LineShadowText className="italic bg-orange-50 rounded-tr-3xl pr-4 pl-2" shadowColor={shadowColor}>
                Scientist & ERP Developer
              </LineShadowText>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 z-50 lg:ml-48 max-w-xl text-center lg:text-left text-gray-700"
            >
              MSc Data Science · I build ERP systems and web apps (Django, React, Azure, Postgres). Currently open to work as freelancer and full-time roles.
            </motion.p>

            <div className="flex flex-row gap-3 items-center justify-center lg:justify-start lg:ml-48 mt-6 z-50">
              <a href="mailto:saishashank.pvs@gmail.com" aria-label="Email Sai">
                <RainbowButton className="transition-all hover:rounded-2xl">
                  <ShinyButton className="text-white px-4 py-1">Hire Me</ShinyButton>
                </RainbowButton>
              </a>

              {/* Download CV: uses public/myResume.pdf. If you want to import from src/assets, I can change it */}
              <a
                href="/myResume.pdf"
                download="Sai_Shashank_Resume.pdf"
                className="flex items-center px-3 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm"
              >
                Download CV
              </a>

              <a
                href="https://github.com/sai2001"
                target="_blank"
                rel="noreferrer"
                className="bg-orange-100 hover:bg-orange-200 transition-all rounded-full p-2"
                aria-label="GitHub"
              >
                <Github />
              </a>

              <a
                href="https://www.linkedin.com/in/sai2001"
                target="_blank"
                rel="noreferrer"
                className="bg-orange-100 hover:bg-orange-200 transition-all rounded-full p-2"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>

              <a
                href="mailto:saishashank.pvs@gmail.com"
                className="bg-orange-100 hover:bg-orange-200 transition-all rounded-full p-2"
                aria-label="Email"
              >
                <Mail />
              </a>
            </div>

            <DotPattern className={cn("[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] hidden lg:block")} />
          </div>
        </div>

        {/* right */}
        <div className="flex justify-center lg:justify-start items-center lg:items-center lg:w-1/2">
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            src={myphoto}
            alt="Sai Shashank"
            className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 border-4 border-green-900 rounded-full object-cover shadow-xl"
          />
        </div>
      </div>

      {/* quick contact bar (mobile) */}
      <div className="fixed left-4 bottom-6 z-50 flex gap-3 md:hidden">
        <a href="mailto:saishashank.pvs@gmail.com" className="bg-white p-3 rounded-full shadow">
          <Mail />
        </a>
        <a href="https://github.com/sai2001" target="_blank" rel="noreferrer" className="bg-white p-3 rounded-full shadow">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/sai2001" target="_blank" rel="noreferrer" className="bg-white p-3 rounded-full shadow">
          <Linkedin />
        </a>
      </div>
    </div>
  );
}

export default HomePage;
