"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

const practiceAreas = [
  "Constitutional Law",
  "Civil Litigation",
  "Criminal Defense",
  "Corporate Law",
  "Consumer Law",
  "Family Law",
  "Property Law",
  "Arbitration",
  "Commercial Disputes"
];

export function PracticeAreasSection() {
  return (
    <section id="practice-areas" className="py-24 md:py-32 relative border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading 
          title="Practice Areas" 
          subtitle="Domains of Expertise & Legal Command" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area, idx) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-black-primary border border-border p-10 h-64 flex flex-col justify-end overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-gray-light hover:shadow-[0_10px_40px_rgba(255,255,255,0.03)] cursor-pointer"
            >
              {/* Background gradient reveal on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-hover to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Number/Index */}
              <div className="absolute top-6 left-6 font-sans text-xs tracking-widest text-border group-hover:text-gray-dark transition-colors duration-500">
                {String(idx + 1).padStart(2, '0')}
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-white transition-colors duration-500" />

              <h3 className="relative z-10 font-serif text-2xl lg:text-3xl uppercase tracking-wider text-gray-light group-hover:text-white transition-all duration-500 transform group-hover:scale-[1.02] origin-left">
                {area}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
