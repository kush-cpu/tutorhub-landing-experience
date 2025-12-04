import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ValueProposition from "@/components/landing/ValueProposition";
import HowItWorks from "@/components/landing/HowItWorks";
import TrustIndicators from "@/components/landing/TrustIndicators";
import PricingSection from "@/components/landing/PricingSection";
import TutorCallout from "@/components/landing/TutorCallout";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <HowItWorks />
        <TrustIndicators />
        <PricingSection />
        <TutorCallout />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
