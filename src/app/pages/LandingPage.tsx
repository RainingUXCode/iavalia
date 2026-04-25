import { Header } from "../components/institutional/Header";
import { HeroSection } from "../components/landing/HeroSection";
import { FeaturesSection } from "../components/landing/FeaturesSection";
import { HowItWorksSection } from "../components/landing/HowItWorksSection";
import { Footer } from "../components/landing/Footer";

interface LandingPageProps {
  onLogin: () => void;
}

export function LandingPage({ onLogin }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={onLogin} />
      <HeroSection onLogin={onLogin} />
      <FeaturesSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
}
