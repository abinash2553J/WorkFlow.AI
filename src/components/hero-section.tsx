import { Button } from "./ui/button";
import { ArrowRight, Play, Sparkles, Zap, Search, BarChart3, PieChart, MessageCircle, Boxes, Shield, User } from "lucide-react";
import React, { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleImageError = useCallback(() => {
    console.error('Failed to load hero image');
  }, []);

  return (
    <section 
      className={cn(
        "relative py-12 md:py-20 px-4 sm:px-6 overflow-hidden",
        className
      )}
      aria-label="Hero section"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-sm border border-primary/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
                <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                <span className="group-hover:text-primary-foreground transition-colors">AI-Powered Automation</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl text-foreground leading-tight">
                <span className="inline-block hover:scale-105 transition-transform duration-300">Transform Your</span>
                <br />
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary/90 via-accent to-primary/90 animate-gradient-x">Workflow</span>
                <br />
                <span className="inline-block hover:scale-105 transition-transform duration-300">with AI</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up">
                Automate repetitive tasks, streamline processes, and boost productivity with our intelligent workflow automation platform. Let AI handle the routine while you focus on what matters.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                aria-label="Start free trial"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-primary/25 transition-transform duration-300 hover:scale-105 group will-change-transform"
              >
                <Zap className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                aria-label="Watch demo video"
                className="group border-border/50 text-foreground hover:bg-accent/50 hover:border-primary/50 backdrop-blur-sm transition-transform duration-300 hover:scale-105 will-change-transform"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              {[
                "No credit card required",
                "14-day free trial", 
                "Cancel anytime"
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center hover:text-foreground transition-colors duration-300 cursor-default"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <span className="mr-2 text-green-500 animate-pulse">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative z-10 group">
              {/* Dashboard Mockup Card */}
              <div className="w-full rounded-2xl border border-border/50 bg-card/60 backdrop-blur-md shadow-2xl overflow-hidden">
                {/* Top Bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-border/50 bg-gradient-to-r from-black/30 via-slate-900/30 to-black/30">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center text-[10px] text-primary-foreground animate-glow">⚡</div>
                    <span className="text-sm font-medium text-foreground/90">WorkFlow.AI</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="hidden sm:flex items-center gap-2 rounded-md bg-background/60 border border-border/50 px-2.5 py-1.5 text-muted-foreground">
                      <Search className="w-4 h-4" />
                      <input
                        aria-label="Search"
                        className="bg-transparent outline-none placeholder:text-muted-foreground/70 text-xs w-36"
                        placeholder="Search workflows..."
                      />
                    </div>
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 border border-border/50 flex items-center justify-center">
                      <User className="w-4 h-4 text-foreground/80" />
                    </div>
                  </div>
                </div>

                <div className="flex">
                  {/* Sidebar */}
                  <aside className="hidden md:flex w-28 flex-col gap-2 p-3 border-r border-border/50 bg-background/30">
                    {[
                      { label: 'Sales', icon: BarChart3 },
                      { label: 'Marketing', icon: PieChart },
                      { label: 'Support', icon: MessageCircle },
                      { label: 'Inventory', icon: Boxes },
                      { label: 'Security', icon: Shield },
                    ].map(({ label, icon: Icon }, i) => (
                      <div
                        key={label}
                        title={label}
                        className="group flex flex-col items-center gap-1 rounded-lg px-2 py-3 hover:bg-accent/10 border border-transparent hover:border-border/50 cursor-default select-none"
                        style={{ animationDelay: `${i * 80}ms` }}
                        aria-label={label}
                      >
                        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                        <span className="text-[11px] text-muted-foreground group-hover:text-foreground">{label}</span>
                      </div>
                    ))}
                  </aside>

                  {/* Main Grid */}
                  <main className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Sales Card */}
                    <div className="relative rounded-xl border border-border/50 bg-background/50 p-4 hover:border-primary/40 transition-colors">
                      {/* Live badge */}
                      <div className="absolute -top-2 -right-2 flex items-center gap-1 bg-red-500/20 text-red-300 border border-red-500/30 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wide shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                        Live
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Sales</span>
                        <BarChart3 className="w-4 h-4 text-foreground/70" />
                      </div>
                      <div className="text-lg text-foreground font-semibold">Active Leads: 120</div>
                      {/* Mini line chart */}
                      <svg viewBox="0 0 100 28" className="mt-3 w-full h-14">
                        <polyline className="chart-line" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" points="0,22 10,18 20,20 30,12 40,14 50,8 60,10 70,6 80,10 90,4 100,6" />
                      </svg>
                    </div>

                    {/* Marketing Card */}
                    <div className="relative rounded-xl border border-border/50 bg-background/50 p-4 hover:border-primary/40 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Marketing</span>
                        <PieChart className="w-4 h-4 text-foreground/70" />
                      </div>
                      <div className="text-lg text-foreground font-semibold">CTR: 8.2%</div>
                      {/* Pie chart */}
                      <svg viewBox="0 0 36 36" className="w-16 h-16 mt-3">
                        <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
                        <circle cx="18" cy="18" r="16" fill="none" stroke="hsl(var(--primary))" strokeWidth="4" strokeDasharray="28 100" strokeLinecap="round" transform="rotate(-90 18 18)" />
                        <circle cx="18" cy="18" r="16" fill="none" stroke="hsl(var(--accent))" strokeWidth="4" strokeDasharray="8 100" strokeLinecap="round" transform="rotate(-90 18 18)" />
                      </svg>
                      {/* Legend */}
                      <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(var(--primary))' }} />
                          Clicks
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(var(--accent))' }} />
                          Impressions
                        </div>
                      </div>
                    </div>

                    {/* Support Card */}
                    <div className="relative rounded-xl border border-border/50 bg-background/50 p-4 hover:border-primary/40 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Support</span>
                        <MessageCircle className="w-4 h-4 text-foreground/70" />
                      </div>
                      <div className="text-lg text-foreground font-semibold">Tickets Resolved: 95%</div>
                      {/* Chatbot bubble */}
                      <div className="mt-3 inline-flex items-start gap-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-border/50 px-3 py-2 text-sm text-foreground/90">
                        <span className="mt-[2px]">💬</span>
                        <span>Hi! I’ve auto-resolved your request. Anything else?</span>
                      </div>
                      {/* Support sparkline */}
                      <svg viewBox="0 0 100 24" className="mt-3 w-full h-10">
                        <polyline className="chart-line" fill="none" stroke="rgba(34,197,94,0.8)" strokeWidth="2" points="0,18 10,16 20,14 30,15 40,12 50,10 60,8 70,9 80,6 90,5 100,6" />
                      </svg>
                    </div>

                    {/* Inventory Card */}
                    <div className="relative rounded-xl border border-border/50 bg-background/50 p-4 hover:border-primary/40 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Inventory</span>
                        <Boxes className="w-4 h-4 text-foreground/70" />
                      </div>
                      <div className="text-lg text-foreground font-semibold mb-2">Stock Health: Optimized</div>
                      {/* Progress bar */}
                      <div className="h-2 w-full rounded-full bg-muted/40 overflow-hidden">
                        <div className="h-full w-4/5 rounded-full bg-green-500/80 animate-glow"></div>
                      </div>
                    </div>

                    {/* Security Card */}
                    <div className="relative rounded-xl border border-border/50 bg-background/50 p-4 hover:border-primary/40 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Security</span>
                        <Shield className="w-4 h-4 text-foreground/70" />
                      </div>
                      <div className="text-lg text-foreground font-semibold">0 Threats Detected Today</div>
                      <div className="mt-3 inline-flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)] animate-glow">
                          <Shield className="w-4 h-4 text-green-400" />
                        </div>
                        <span className="text-sm text-muted-foreground">All systems secure</span>
                      </div>
                    </div>
                  </main>
                </div>
              </div>

              {/* Floating Elements */}
              {isMounted && (
                <>
                  <div 
                    className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce delay-1000 will-change-transform"
                    aria-hidden="true"
                  />
                  <div 
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-bounce delay-500 will-change-transform"
                    aria-hidden="true"
                  />
                </>
              )}
            </div>
            
            {/* Enhanced Background Glow */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl transform rotate-3 -z-10 blur-xl group-hover:blur-2xl transition-all duration-500 will-change-transform"
              aria-hidden="true"
            />
            <div 
              className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl transform -rotate-2 -z-20 blur-2xl group-hover:blur-3xl transition-all duration-500 will-change-transform"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}