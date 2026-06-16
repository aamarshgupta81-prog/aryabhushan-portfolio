"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

const testimonials = [
  {
    quote: "Aryabhushan's ability to dissect complex constitutional issues and present them with crystalline clarity is exceptional. His research is exhaustive and his drafting, precise.",
    author: "Sr. Adv. K. R. Salve",
    title: "Senior Advocate, Supreme Court of India",
  },
  {
    quote: "A rare combination of meticulous preparation and articulate advocacy. He approaches every brief not just as a legal problem, but as an architectural challenge demanding structural integrity.",
    author: "Justice M. N. Venkatachaliah",
    title: "Former Chief Justice of India (Hypothetical)",
  },
  {
    quote: "In matters of corporate litigation, his strategic foresight is unparalleled. He anticipates opposing arguments and neutralizes them before they are even articulated.",
    author: "R. Desai",
    title: "Managing Partner, XYZ Law Associates",
  }
];

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  // A subtle horizontal parallax effect based on vertical scroll
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section id="testimonials" className="py-24 md:py-32 relative border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading 
          title="Endorsements" 
          subtitle="Peer Recognition & Professional Standing" 
        />
      </div>

      <div ref={scrollRef} className="relative w-full overflow-hidden pb-12 mt-12">
        <motion.div 
          style={{ x: xTransform }}
          className="flex gap-8 px-6 lg:px-12 w-max"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="w-[85vw] md:w-[600px] lg:w-[800px] bg-black-primary border border-border p-8 md:p-16 flex flex-col justify-between shrink-0"
            >
              <div>
                <span className="font-serif text-6xl md:text-8xl text-border leading-none block h-12 md:h-16">
                  &ldquo;
                </span>
                <p className="font-serif text-xl md:text-3xl lg:text-4xl text-gray-light leading-snug mt-4 mb-12">
                  {testimonial.quote}
                </p>
              </div>
              
              <div className="flex items-center space-x-6 border-t border-border pt-8">
                {/* Monochrome Thumbnail Placeholder */}
                <div className="w-16 h-16 bg-surface border border-border shrink-0 flex items-center justify-center text-gray-dark font-sans text-xs uppercase">
                  Img
                </div>
                <div>
                  <h4 className="font-sans text-white uppercase tracking-widest text-sm md:text-base mb-1">
                    {testimonial.author}
                  </h4>
                  <p className="font-sans text-gray-dark text-xs uppercase tracking-wider">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
