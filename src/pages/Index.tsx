import HeroSection from "@/components/HeroSection";
import TargetAudience from "@/components/TargetAudience";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TargetAudience />
      <HowItWorks />
      <Benefits />
    </div>
  );
};

export default Index;
