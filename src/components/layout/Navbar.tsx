"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Profile", href: "#profile" },
  { name: "Education", href: "#education" },
  { name: "Practice Areas", href: "#practice-areas" },
  { name: "Experience", href: "#experience" },
  { name: "Publications", href: "#publications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Simple scrollspy logic (can be enhanced with IntersectionObserver)
      const sections = navItems.map((item) => item.name);
      for (const section of sections.reverse()) {
        const el = document.getElementById(section.toLowerCase().replace(" ", "-"));
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveItem(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b",
          isScrolled ? "bg-black-primary/90 backdrop-blur-md border-border" : "bg-transparent border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
          <div className="font-serif text-2xl tracking-widest text-white uppercase font-medium">
            Adv. Aryabhushan
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className="relative px-5 py-2 text-sm uppercase tracking-widest font-sans group"
              >
                <span
                  className={cn(
                    "relative z-10 transition-colors duration-300",
                    activeItem === item.name ? "text-black-primary" : "text-gray-light group-hover:text-white"
                  )}
                >
                  {item.name}
                </span>
                {activeItem === item.name && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-white"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {/* Hover indicator (if not active) */}
                {activeItem !== item.name && (
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Slide Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-black-primary border-l border-border flex flex-col"
          >
            <div className="h-24 px-6 flex items-center justify-between border-b border-border">
              <div className="font-serif text-xl tracking-widest text-white uppercase">
                Menu
              </div>
              <button
                className="text-white p-2"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-12 flex flex-col space-y-6">
              {navItems.map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.2 }}
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.name);
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "text-3xl font-serif uppercase tracking-widest transition-colors",
                    activeItem === item.name ? "text-white" : "text-gray-dark hover:text-gray-light"
                  )}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
