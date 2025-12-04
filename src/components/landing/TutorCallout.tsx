import { Button } from "@/components/ui/button";
import { ArrowRight, Banknote, Clock, Award } from "lucide-react";

const benefits = [
  {
    icon: Banknote,
    title: "Earn ₹50,000+/month",
    description: "Top tutors earn significantly more with flexible hours",
  },
  {
    icon: Clock,
    title: "Work on Your Schedule",
    description: "Choose when and where you want to teach",
  },
  {
    icon: Award,
    title: "Build Your Brand",
    description: "Get verified, collect reviews, and grow your reputation",
  },
];

const TutorCallout = () => {
  return (
    <section id="become-tutor" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 md:p-12 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary-foreground rounded-full translate-x-1/4 translate-y-1/4" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Are You a Great Teacher?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Join India's fastest-growing tutoring network. Share your knowledge, 
                inspire students, and earn on your own terms. Our simple onboarding 
                process gets you started in less than 48 hours.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="group"
              >
                Become a Tutor
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-primary-foreground/80">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorCallout;
