import { X, CheckCircle } from "lucide-react";
import React from "react";
export function ProblemSolutionSection() {
  const problems = [
    "Manual, repetitive tasks consuming valuable time",
    "Disconnected tools and fragmented workflows", 
    "Human errors in routine processes",
    "Difficulty scaling operations efficiently",
    "Lack of visibility into process bottlenecks"
  ];

  const solutions = [
    "AI-powered automation handles routine tasks instantly",
    "Unified platform connecting all your tools seamlessly",
    "Intelligent error detection and prevention",
    "Effortless scaling with smart workflow optimization",
    "Real-time analytics and performance insights"
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-foreground mb-4">
            Stop Fighting Your Workflow
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform chaotic manual processes into streamlined, intelligent automation that works for you, not against you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Problems */}
          <div className="bg-card rounded-lg p-8 shadow-lg border border-destructive/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mr-4">
                <X className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl text-card-foreground">Without WorkFlow.AI</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start">
                  <X className="w-5 h-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-card rounded-lg p-8 shadow-lg border border-green-500/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mr-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-2xl text-card-foreground">With WorkFlow.AI</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg">
            <span className="mr-2">⚡</span>
            <span>Save 40+ hours per week with intelligent automation</span>
          </div>
        </div>
      </div>
    </section>
  );
}