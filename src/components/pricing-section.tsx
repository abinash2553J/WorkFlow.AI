import { Button } from "./ui/button";
import { Check, Star, Zap } from "lucide-react";
import React, { useState } from "react";

export function PricingSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const plans = [
    {
      name: "Basic",
      price: "₹10000/month per plant",
      description: "Perfect for individuals and small teams getting started",
      features: [
        "Up to 100 workflow runs/month",
        "5 active workflows",
        "Basic integrations",
        "Email support",
        "Community access"
      ],
      cta: "Start Now",
      popular: false,
      gradient: "from-slate-500/20 to-slate-600/20"
    },
    {
      name: "Standard",
      price: "₹25000/month per plant",
      description: "For growing teams that need more power and flexibility",
      features: [
        "Up to 10,000 workflow runs/month",
        "Unlimited workflows",
        "Advanced integrations",
        "Priority support",
        "Analytics dashboard",
        "Custom templates",
        "API access"
      ],
      cta: "Start Now",
      popular: true,
      gradient: "from-primary/20 to-accent/20"
    },
    {
      name: "Premium",
      price: "₹50000/month per plant",
      description: "For large organizations with complex requirements",
      features: [
        "Unlimited workflow runs",
        "Advanced security controls",
        "Dedicated support manager",
        "Custom integrations",
        "On-premise deployment",
        "SLA guarantee",
        "Training & onboarding"
      ],
      cta: "Start Now",
      popular: false,
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden" id="pricing">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-foreground mb-4 animate-fade-in-up">
            Simple, Transparent Pricing for Your Plants
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up delay-200">
            Choose the plan that fits your needs. Start now and scale as you grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular 
                  ? 'ring-2 ring-primary scale-105 hover:scale-110' 
                  : 'border-border/50 hover:border-primary/50'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full text-sm flex items-center animate-pulse-glow">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl text-card-foreground mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl text-card-foreground font-bold">{plan.price}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="flex items-start hover:text-foreground transition-colors duration-300"
                    style={{ animationDelay: `${featureIndex * 50}ms` }}
                  >
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 animate-pulse" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-primary/25'
                    : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground hover:shadow-lg'
                }`}
              >
                {hoveredCard === index && <Zap className="w-4 h-4 mr-2 animate-pulse" />}
                {plan.cta}
              </Button>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none ${
                hoveredCard === index ? 'opacity-100' : ''
              }`}></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">All plans include:</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {[
              "99.9% uptime SLA",
              "30-day money-back guarantee", 
              "No setup fees",
              "Cancel anytime"
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center hover:text-foreground transition-colors duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Check className="w-4 h-4 text-green-500 mr-2 animate-pulse" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}