"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

const experienceData = [
  {
    role: "Litigation Intern",
    chamber: "Chambers of Sr. Adv. Ram Jethmalani (Hypothetical/Placeholder)",
    duration: "May 2024 — July 2024",
    description: "Assisted in drafting Special Leave Petitions, researched constitutional validity of statutory provisions, and attended Supreme Court hearings.",
  },
  {
    role: "Legal Researcher",
    chamber: "XYZ Law Firm",
    duration: "Dec 2023 — Jan 2024",
    description: "Conducted due diligence for corporate mergers, drafted commercial contracts, and prepared legal opinions on corporate governance.",
  },
  {
    role: "Judicial Clerkship Intern",
    chamber: "Hon'ble High Court of Delhi",
    duration: "June 2023 — July 2023",
    description: "Summarized case files, prepared bench memorandums, and observed courtroom proceedings in complex civil disputes.",
  },
];

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 md:py-32 relative bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading 
          title="Experience" 
          subtitle="Professional Tenure & Legal Practice" 
        />

        <div ref={containerRef} className="relative max-w-4xl mx-auto mt-16">
          {/* Timeline Line */}
          <div className="absolute left-[20px] md:left-[50px] top-0 bottom-0 w-[1px] bg-border" />
          <motion.div 
            className="absolute left-[20px] md:left-[50px] top-0 w-[1px] bg-gray-light origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-20">
            {experienceData.map((item, idx) => (
              <div key={idx} className="relative flex flex-col pl-16 md:pl-32">
                
                {/* Timeline Marker */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="absolute left-[16px] md:left-[46px] w-[9px] h-[1px] bg-white top-6"
                />

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className="group"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                    <h3 className="font-serif text-2xl text-white uppercase tracking-wider">
                      {item.role}
                    </h3>
                    <span className="font-sans text-xs tracking-[0.2em] uppercase text-gray-dark mt-2 md:mt-0">
                      {item.duration}
                    </span>
                  </div>
                  <h4 className="font-sans text-sm uppercase tracking-widest text-gray-light mb-6">
                    {item.chamber}
                  </h4>
                  <p className="font-sans text-gray-dark text-base leading-relaxed max-w-2xl group-hover:text-gray-light transition-colors duration-300">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
