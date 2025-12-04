import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Target, Home, Wallet } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Verified Tutors",
    description: "Every tutor undergoes rigorous background checks and credential verification for your peace of mind.",
  },
  {
    icon: Target,
    title: "Personalised Learning",
    description: "Custom learning plans designed around your child's unique needs, pace, and goals.",
  },
  {
    icon: Home,
    title: "Flexible Options",
    description: "Choose between home tutoring, online sessions, or a hybrid approach that fits your schedule.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    description: "No hidden fees. Clear pricing with honest reviews from other parents and students.",
  },
];

const ValueProposition = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Parents & Students Choose TutorHub
          </h2>
          <p className="text-lg text-muted-foreground">
            We're not just another tutoring platform. We're your partner in academic excellence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border bg-background hover:border-primary/50"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                  <benefit.icon className="w-7 h-7 text-accent-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
