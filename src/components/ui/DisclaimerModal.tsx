"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";

export function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasAgreed = localStorage.getItem("legal_disclaimer_accepted");
    if (!hasAgreed) {
      setIsOpen(true);
      document.body.style.overflow = "hidden"; // Block scrolling
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem("legal_disclaimer_accepted", "true");
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleDisagree = () => {
    // If they disagree, we can redirect them to google or keep it open with a message
    window.location.href = "https://www.google.com";
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black-primary/90 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-surface border border-border max-w-2xl w-full p-8 md:p-12 shadow-2xl rounded-none"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 uppercase tracking-wider">
              Legal Disclaimer
            </h2>
            <div className="space-y-4 text-gray-light font-sans text-sm md:text-base leading-relaxed mb-10">
              <p>
                By accessing this website, you acknowledge and confirm that you are seeking information relating to Advocate Aryabhushan of your own accord and that there has been no form of solicitation, advertisement, or inducement by Advocate Aryabhushan or his members.
              </p>
              <p>
                The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. No material/information provided on this website should be construed as legal advice. Advocate Aryabhushan shall not be liable for consequences of any action taken by relying on the material/information provided on this website.
              </p>
              <p>
                The rules of the Bar Council of India prohibit law firms and advocates from soliciting work or advertising in any manner.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-end">
              <Button variant="outline" onClick={handleDisagree}>
                I Do Not Agree
              </Button>
              <Button variant="primary" onClick={handleAgree}>
                I Agree
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
