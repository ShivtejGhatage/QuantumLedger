import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-clean.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="Professional data visualization" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-8 font-medium">
            Enterprise Tax Engine
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-8 text-foreground">
            The Tax Engine for{" "}
            <span className="text-primary">
              High-Frequency Trading
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Stop wrestling with spreadsheets and software that breaks at scale. Quantum Ledger processes 
            billions of transactions seamlessly, delivering audit-proof tax reporting for HFT and 
            proprietary trading firms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="font-semibold px-8 py-3 hover:shadow-glow transition-all duration-200"
              onClick={() => window.location.href = 'mailto:kush39agrawal@gmail.com?subject=Technical Demo Request - Quantum Ledger'}
            >
              Request Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="font-semibold px-8 py-3 hover:bg-muted transition-all duration-200"
              onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Platform
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1B+</div>
              <div className="text-muted-foreground font-medium">Transactions Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground font-medium">Audit Compliance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">SOC 2</div>
              <div className="text-muted-foreground font-medium">Type II Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;