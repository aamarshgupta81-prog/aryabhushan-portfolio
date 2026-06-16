"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

const educationData = [
  {
    year: "2020 — 2025",
    degree: "B.A. LL.B. (Hons.)",
    institution: "National Law University",
    details: "Specialization in Constitutional Law. Graduated with honors. Active participant in Supreme Court moot court competitions.",
  },
  {
    year: "2018 — 2020",
    degree: "Senior Secondary",
    institution: "St. Xavier's High School",
    details: "Humanities with Mathematics. Awarded Academic Excellence Trophy.",
  },
  {
    year: "2023",
    degree: "Certification in Corporate Law",
    institution: "Indian Law Institute",
    details: "Advanced diploma focusing on Mergers & Acquisitions and Corporate Governance.",
  },
];

export function EducationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" className="py-24 md:py-32 relative bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading 
          title="Education" 
          subtitle="Academic Pedigree & Certifications" 
        />

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-[15px] md:left-[50%] top-0 bottom-0 w-[1px] bg-border" />
          <motion.div 
            className="absolute left-[15px] md:left-[50%] top-0 w-[1px] bg-white origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-16">
            {educationData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-start justify-between w-full">
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute left-[11px] md:left-[calc(50%-4px)] w-[9px] h-[9px] bg-black-primary border border-white z-10 rounded-none mt-2"
                  />

                  {/* Content - Mobile: always right. Desktop: alternates */}
                  <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${!isEven ? 'md:ml-auto' : 'md:text-right md:pr-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6 }}
                      className="group"
                    >
                      <span className="font-sans text-xs tracking-[0.2em] uppercase text-gray-dark block mb-2">
                        {item.year}
                      </span>
                      <h3 className="font-serif text-2xl text-white uppercase tracking-wide mb-1">
                        {item.degree}
                      </h3>
                      <h4 className="font-sans text-sm uppercase tracking-widest text-gray-light mb-4">
                        {item.institution}
                      </h4>
                      <p className="font-sans text-gray-dark text-sm leading-relaxed group-hover:text-gray-light transition-colors duration-300">
                        {item.details}
                      </p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
