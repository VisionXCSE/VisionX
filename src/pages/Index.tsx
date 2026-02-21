import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ChiefGuestsSection from "@/components/ChiefGuestsSection";
import BrochureSection from "@/components/BrochureSection";
import TracksSection from "@/components/TracksSection";
// import ProcessSection from "@/components/ProcessSection";
import RewardsSection from "@/components/RewardsSection";
import RegistrationSection from "@/components/RegistrationSection";
import CoordinatorsSection from "@/components/CoordinatorsSection";
import ContactSection from "@/components/ContactSection";
// import SponsorsSection from "@/components/SponsorsSection";

interface IndexProps {
  onVideoReady: () => void;
}

const Index = ({ onVideoReady }: IndexProps) => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection onVideoReady={onVideoReady} />
    <AboutSection />
    <ChiefGuestsSection />
    <BrochureSection />
    <TracksSection />
    {/* <ProcessSection /> */}
    <RewardsSection />
    <RegistrationSection />
    <CoordinatorsSection />
    <ContactSection />
    {/* <SponsorsSection /> */}
  </div>
);

export default Index;
