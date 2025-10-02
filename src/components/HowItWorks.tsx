import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Connect Your Data Sources",
      description: "Seamlessly integrate with exchanges, wallets, and trading platforms through secure APIs or direct log file uploads.",
      details: ["FIX protocol support", "REST & WebSocket APIs", "CSV/Excel import", "Custom integrations"]
    },
    {
      step: "02", 
      title: "Automated Processing Engine",
      description: "Our distributed processing engine normalizes, validates, and reconciles millions of transactions in real-time.",
      details: ["Data validation & cleansing", "Multi-currency support", "Duplicate detection", "Smart categorization"]
    },
    {
      step: "03",
      title: "Generate Tax Reports",
      description: "Receive complete, audit-ready tax forms with full transaction traceability and compliance documentation.",
      details: ["Form 4797 automation", "Gain/loss calculations", "Audit trail generation", "Multi-jurisdiction support"]
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Three Steps to{" "}
            <span className="text-primary">
              Tax Compliance
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transform your tax compliance from a manual nightmare into an automated process.
          </p>
        </div>

        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="group hover:shadow-card transition-all duration-200 bg-white border border-border/50">
                  <CardContent className="p-8 text-center relative">
                    {/* Step number */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white font-bold text-xl mb-6">
                      {step.step}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-2 text-left">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* Arrow for desktop */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2">
                        <ArrowRight className="h-8 w-8 text-primary/50" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;