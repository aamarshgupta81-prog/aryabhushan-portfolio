"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 relative border-t border-border bg-black-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading 
          title="Chamber" 
          subtitle="Consultation & Legal Engagement" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mt-16">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-gray-dark mb-4">
                Office Location
              </h3>
              <p className="font-serif text-2xl text-white leading-relaxed max-w-sm">
                Supreme Court Bar Association<br />
                Supreme Court of India,<br />
                Tilak Marg, New Delhi 110001
              </p>
            </div>

            <div>
              <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-gray-dark mb-4">
                Direct Communication
              </h3>
              <div className="space-y-2 font-sans text-lg text-gray-light">
                <p className="hover:text-white transition-colors duration-300 cursor-pointer w-max">
                  +91 98765 43210
                </p>
                <p className="hover:text-white transition-colors duration-300 cursor-pointer w-max">
                  consult@aryabhushan.law
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-gray-dark mb-4">
                Professional Network
              </h3>
              <a 
                href="#" 
                className="font-sans text-lg text-gray-light hover:text-white transition-colors duration-300 inline-block border-b border-border hover:border-white pb-1"
              >
                LinkedIn Profile
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-surface border border-border p-8 md:p-12"
          >
            <h3 className="font-serif text-3xl text-white uppercase tracking-wider mb-8">
              Request Consultation
            </h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-sans text-xs uppercase tracking-[0.2em] text-gray-dark">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-black-primary border border-border p-4 text-white font-sans focus:outline-none focus:border-gray-light transition-colors rounded-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-xs uppercase tracking-[0.2em] text-gray-dark">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-black-primary border border-border p-4 text-white font-sans focus:outline-none focus:border-gray-light transition-colors rounded-none"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-sans text-xs uppercase tracking-[0.2em] text-gray-dark">Subject Matter</label>
                <input 
                  type="text" 
                  className="w-full bg-black-primary border border-border p-4 text-white font-sans focus:outline-none focus:border-gray-light transition-colors rounded-none"
                  placeholder="E.g., Civil Dispute, Corporate Advisory"
                />
              </div>
              <div className="space-y-2">
                <label className="font-sans text-xs uppercase tracking-[0.2em] text-gray-dark">Brief Description</label>
                <textarea 
                  className="w-full bg-black-primary border border-border p-4 text-white font-sans focus:outline-none focus:border-gray-light transition-colors h-32 resize-none rounded-none"
                  placeholder="Provide a brief overview of the matter..."
                />
              </div>
              <div className="pt-4">
                <Button variant="primary" type="submit" className="w-full">
                  Submit Request
                </Button>
              </div>
              <p className="font-sans text-[10px] text-gray-dark uppercase tracking-widest text-center mt-6">
                * All communications are strictly privileged and confidential.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
