import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const stats = [
  { value: "10,000+", label: "Verified Tutors" },
  { value: "50+", label: "Cities Covered" },
  { value: "60,000+", label: "Hours Taught" },
  { value: "98%", label: "Satisfaction Rate" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent, Mumbai",
    content: "TutorHub transformed my daughter's approach to mathematics. She went from struggling to scoring 95% in her boards. The tutor was patient, knowledgeable, and truly cared about her progress.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Student, Delhi",
    content: "The flexibility of online sessions helped me prepare for JEE while managing school. My tutor's teaching style made complex physics concepts easy to understand.",
    rating: 5,
  },
  {
    name: "Meera Patel",
    role: "Parent, Bangalore",
    content: "What impressed me most was the verification process. Knowing that our tutor was thoroughly vetted gave us complete peace of mind. Excellent service!",
    rating: 5,
  },
];

const TrustIndicators = () => {
  return (
    <section id="why-tutorhub" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-xl bg-background border border-border"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Loved by Parents & Students
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our community says.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-background hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
