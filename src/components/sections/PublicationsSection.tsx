"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

const publications = [
  {
    title: "The Evolving Landscape of Data Privacy: A Constitutional Perspective",
    date: "October 12, 2025",
    readTime: "8 MIN READ",
    category: "Constitutional Law",
    summary: "An in-depth analysis of the intersection between the right to privacy as a fundamental right and the emergent legislative frameworks governing digital data protection in India."
  },
  {
    title: "Arbitration Clauses in Unsigned Contracts: Judicial Trends",
    date: "August 04, 2025",
    readTime: "12 MIN READ",
    category: "Commercial Disputes",
    summary: "Examining recent Supreme Court precedents on the validity and enforceability of arbitration agreements embedded within unsigned purchase orders and invoices."
  },
  {
    title: "Corporate Criminal Liability in Environmental Offences",
    date: "March 22, 2025",
    readTime: "15 MIN READ",
    category: "Corporate Law",
    summary: "A critical review of the attribution of mens rea to corporate entities in environmental degradation cases, contrasting Indian jurisprudence with international standards."
  }
];

export function PublicationsSection() {
  return (
    <section id="publications" className="py-24 md:py-32 relative border-t border-border bg-black-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading 
          title="Publications" 
          subtitle="Legal Research & Editorial Contributions" 
        />

        <div className="flex flex-col space-y-0">
          {publications.map((pub, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative flex flex-col md:flex-row md:items-start justify-between py-12 border-b border-border hover:bg-surface transition-colors duration-500 cursor-pointer"
            >
              {/* Decorative side line on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />

              <div className="md:w-1/4 mb-6 md:mb-0 md:pr-8 flex flex-col justify-between pl-6 md:pl-8">
                <span className="font-sans text-xs uppercase tracking-widest text-white mb-2">
                  {pub.category}
                </span>
                <div className="flex flex-col space-y-1 mt-auto">
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gray-dark">
                    {pub.date}
                  </span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-border">
                    {pub.readTime}
                  </span>
                </div>
              </div>

              <div className="md:w-3/4 pl-6 md:pl-0 pr-6">
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-light group-hover:text-white transition-colors duration-500 mb-6 leading-snug">
                  {pub.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-gray-dark group-hover:text-gray-light leading-relaxed transition-colors duration-500 max-w-3xl">
                  {pub.summary}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
