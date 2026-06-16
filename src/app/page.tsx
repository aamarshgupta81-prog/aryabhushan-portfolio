"use client";

import { CustomCursor } from "@/components/ui/CustomCursor";
import { DisclaimerModal } from "@/components/ui/DisclaimerModal";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { PracticeAreasSection } from "@/components/sections/PracticeAreasSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { PublicationsSection } from "@/components/sections/PublicationsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      {/* Required for Indian legal compliance */}
      <DisclaimerModal />
      
      {/* Premium custom cursor */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {/* Main Layout */}
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <ProfileSection />
        <EducationSection />
        <PracticeAreasSection />
        <ExperienceSection />
        <PublicationsSection />
        <AchievementsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 bg-black-primary border-t border-border flex items-center justify-center">
        <p className="font-sans text-xs uppercase tracking-widest text-gray-dark">
          &copy; {new Date().getFullYear()} Advocate Aryabhushan. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
