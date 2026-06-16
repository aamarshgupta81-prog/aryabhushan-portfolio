"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

const coreValues = [
  { title: "Integrity", desc: "Uncompromising adherence to moral and ethical principles." },
  { title: "Discipline", desc: "Rigorous preparation and systematic approach to every brief." },
  { title: "Research", desc: "Exhaustive legal analysis to uncover decisive precedents." },
  { title: "Advocacy", desc: "Persuasive, authoritative, and articulate representation." },
  { title: "Justice", desc: "Relentless pursuit of equitable outcomes for clients." },
];

export function ProfileSection() {
  return (
    <section id="profile" className="py-24 md:py-32 relative border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading 
          title="Profile" 
          subtitle="Identity & Professional Philosophy" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8 font-sans text-gray-light leading-relaxed text-base md:text-lg"
          >
            <p className="text-white font-serif text-2xl md:text-3xl leading-snug">
              "The law is not merely a set of rules, but the architectural framework of civilization. Mastery requires not just knowledge, but strategic application."
            </p>
            <p>
              Advocate Aryabhushan is a meticulous legal practitioner specializing in constitutional matters, complex civil litigation, and corporate defense. With an unwavering commitment to legal excellence, he approaches every case with the precision of an architect and the strategic foresight of a grandmaster.
            </p>
            <p>
              His practice is built on the foundation of exhaustive research, rigorous intellectual discipline, and a profound respect for the judicial process. He believes that the courtroom is an arena where preparation consistently overcomes mere rhetoric.
            </p>
          </motion.div>

          {/* Values Column */}
          <div className="space-y-8">
            <h3 className="font-serif text-2xl text-white uppercase tracking-widest border-b border-border pb-4 mb-8">
              Core Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {coreValues.map((value, idx) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group"
                >
                  <h4 className="font-sans font-medium text-white uppercase tracking-wider mb-2 flex items-center">
                    <span className="w-4 h-[1px] bg-border mr-3 group-hover:bg-white transition-colors duration-300" />
                    {value.title}
                  </h4>
                  <p className="font-sans text-sm text-gray-dark pl-7">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
