import { Zap, Brain, Shield, BarChart3, Workflow, Clock } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";

export function FeaturesSection() {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Automation",
      description: "Deploy workflows in minutes with our drag-and-drop builder and pre-built templates.",
      gradient: "from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-500"
    },
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Smart decision-making, pattern recognition, and predictive optimization built-in.",
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption, SOC 2 compliance, and granular access controls.",
      gradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-500"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track performance, identify bottlenecks, and optimize workflows with detailed insights.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500"
    },
    {
      icon: Workflow,
      title: "Seamless Integrations",
      description: "Connect with 500+ tools including Slack, Salesforce, Google Workspace, and more.",
      gradient: "from-indigo-500/20 to-purple-500/20",
      iconColor: "text-indigo-500"
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Automatic error detection, smart alerts, and self-healing workflows that never sleep.",
      gradient: "from-red-500/20 to-pink-500/20",
      iconColor: "text-red-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleFeatures(prev => [...prev, index]);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden" id="features">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-foreground mb-4 animate-fade-in-up">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up delay-200">
            Everything you need to automate complex workflows and accelerate your business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isVisible = visibleFeatures.includes(index);
            
            return (
              <div
                key={index}
                className={`group p-6 rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 bg-card/50 backdrop-blur-sm hover:bg-card/80 transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <IconComponent className={`w-7 h-7 ${feature.iconColor} group-hover:animate-pulse`} />
                </div>
                <h3 className="text-xl text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-muted/30 via-accent/20 to-muted/30 rounded-2xl p-8 border border-border/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group">
            <h3 className="text-2xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
              Ready to see it in action?
            </h3>
            <p className="text-muted-foreground mb-6 group-hover:text-foreground/80 transition-colors duration-300">
              Join thousands of teams already saving time with WorkFlow.AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full border-2 border-background hover:scale-110 transition-transform duration-300 cursor-pointer"
                    style={{ animationDelay: `${i * 100}ms` }}
                  ></div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Trusted by 10,000+ teams worldwide
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}