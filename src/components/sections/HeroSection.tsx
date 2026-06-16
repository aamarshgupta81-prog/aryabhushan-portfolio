"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Background Textures */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Architectural diagonal lines (placeholder effect) */}
        <div className="absolute right-0 bottom-0 w-1/2 h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,var(--color-border)_10px,var(--color-border)_11px)] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="font-sans text-gray-light uppercase tracking-[0.3em] text-sm mb-6">
              Advocate
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white uppercase mb-8">
              Arya<br />
              <span className="text-gray-light">bhushan</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col space-y-4 mb-12"
          >
            <h2 className="font-sans text-white uppercase tracking-widest text-lg md:text-xl">
              Legal Researcher & Litigation Associate
            </h2>
            <p className="font-sans text-gray-light text-base md:text-lg max-w-md leading-relaxed">
              Future Supreme Court Practitioner dedicated to constitutional law, civil litigation, and corporate defense. Precision in research, authority in advocacy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Button variant="primary" onClick={() => document.getElementById("contact")?.scrollIntoView()}>
              Book Consultation
            </Button>
            <Button variant="outline" onClick={() => document.getElementById("profile")?.scrollIntoView()}>
              View Profile
            </Button>
          </motion.div>
        </div>

        {/* Right Content - Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[60vh] lg:h-[80vh] w-full flex items-center justify-center lg:justify-end"
        >
          {/* Portrait Container - Sharp, geometric */}
          <div className="relative w-full max-w-md aspect-[3/4] bg-surface border border-border overflow-hidden">
            {/* Using a placeholder for now since we don't have the actual image. 
                In a real scenario, an img/next-image component goes here. 
                We use a stark gradient as placeholder to match the aesthetic. */}
            <div className="absolute inset-0 bg-gradient-to-b from-surface-hover to-black-primary mix-blend-multiply" />
            
            {/* Frame accent */}
            <div className="absolute inset-4 border border-border/50" />
            
            <div className="absolute bottom-6 left-6 text-gray-dark font-sans text-xs uppercase tracking-widest">
              Figure 1.0 — Aryabhushan
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
