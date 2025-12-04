import { ClipboardList, Users, Rocket } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Tell Us Your Learning Need",
    description: "Share your subject, grade level, learning goals, and preferred schedule. It takes less than 2 minutes.",
  },
  {
    icon: Users,
    step: "02",
    title: "Get Matched with Best-Fit Tutors",
    description: "Our smart algorithm matches you with verified tutors based on expertise, location, and teaching style.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Start Personalised Sessions",
    description: "Begin your learning journey with customised lesson plans and track progress with regular assessments.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            How TutorHub Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started is easy. Find your perfect tutor in three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
              )}
              
              <div className="relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                  Step {item.step}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6 mt-2 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
