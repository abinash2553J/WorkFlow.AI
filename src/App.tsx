import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { ProblemSolutionSection } from "./components/problem-solution-section";
import { FeaturesSection } from "./components/features-section";
import { PricingSection } from "./components/pricing-section";
import { Footer } from "./components/footer";
import React from "react";

export default function App() {
  return (
    <div
      className="min-h-screen dark bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 relative"
    >
      {/* Subtle radial accent glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
      >
        <div className="absolute -top-32 -left-24 w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full bg-[radial-gradient(circle_at_center,theme(colors.primary/20),transparent_60%)] blur-3xl" />
        <div className="absolute -top-16 right-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle_at_center,theme(colors.accent/18),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-[-20%] left-1/3 w-[55vw] h-[55vw] max-w-[850px] max-h-[850px] rounded-full bg-[radial-gradient(circle_at_center,theme(colors.primary/12),transparent_65%)] blur-3xl" />
      </div>
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <ProblemSolutionSection />
        <FeaturesSection />
        <PricingSection />
        <Footer />
      </div>
    </div>
  );
}