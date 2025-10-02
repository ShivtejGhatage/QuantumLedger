import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValuePillars from "@/components/ValuePillars";
import HowItWorks from "@/components/HowItWorks";
import Security from "@/components/Security";
import DemoRequest from "@/components/DemoRequest";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ValuePillars />
      <HowItWorks />
      <Security />
      <DemoRequest />
      <Footer />
    </div>
  );
};

export default Index;
