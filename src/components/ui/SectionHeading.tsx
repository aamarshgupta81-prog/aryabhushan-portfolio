import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-16 md:mb-24", className)}>
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-gray-light font-sans text-sm md:text-base uppercase tracking-widest max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="mt-8 h-px w-24 bg-border" />
    </div>
  );
}
