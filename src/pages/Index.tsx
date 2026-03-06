import HeroSection from "@/components/HeroSection";
import TransformationsSection from "@/components/TransformationsSection";
import StatsSection from "@/components/StatsSection";
import PipelineSection from "@/components/PipelineSection";
import TechStackSection from "@/components/TechStackSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <TransformationsSection />
      <PipelineSection />
      <TechStackSection />

      <footer className="py-12 border-t border-border">
        <div className="container text-center">
          <p className="text-muted-foreground text-sm font-mono-code">
            Triton Robotics — Data Augmentation Pipeline
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
