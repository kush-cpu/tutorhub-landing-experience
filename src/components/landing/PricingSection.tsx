import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Pay Per Session",
    description: "Perfect for occasional help",
    price: "₹500",
    period: "per session",
    features: [
      "No commitment required",
      "Book anytime, anywhere",
      "Access to all verified tutors",
      "Session recordings available",
      "24/7 support",
    ],
    popular: false,
  },
  {
    name: "Monthly Plan",
    description: "Best value for regular learners",
    price: "₹3,999",
    period: "per month",
    features: [
      "8 sessions per month",
      "Priority tutor matching",
      "Custom learning roadmap",
      "Progress tracking dashboard",
      "Free trial session",
      "Money-back guarantee",
    ],
    popular: true,
  },
  {
    name: "Premium Plan",
    description: "Comprehensive exam preparation",
    price: "₹7,999",
    period: "per month",
    features: [
      "Unlimited sessions",
      "Dedicated tutor coordinator",
      "Mock tests & assessments",
      "Parent-teacher meetings",
      "Study materials included",
      "Exam strategy sessions",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose a plan that works for you. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-border bg-card ${
                plan.popular 
                  ? "ring-2 ring-primary shadow-lg scale-105" 
                  : "hover:border-primary/50"
              } transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-2 pt-8">
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">/{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
