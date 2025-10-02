import { Card, CardContent } from "@/components/ui/card";
import { Database, Zap, Shield, BarChart3 } from "lucide-react";

const ValuePillars = () => {
  const pillars = [
    {
      icon: Database,
      title: "Effortless Data Ingestion",
      description: "Connect to any exchange, blockchain, or internal audit trail. We normalize the chaos so you don't have to.",
      features: ["Direct API & log file integration", "Multi-venue support", "Real-time data processing"]
    },
    {
      icon: Zap,
      title: "Process at Scale",
      description: "From 1 million to 1 billion transactions, our platform scales effortlessly. No crashes. No timeouts. Guaranteed.",
      features: ["High-throughput processing engine", "Distributed architecture", "99.99% uptime SLA"]
    },
    {
      icon: BarChart3,
      title: "Audit-Proof Reporting",
      description: "Generate precise, fully reconciled tax forms in minutes, not weeks. Every number is traceable back to the source transaction.",
      features: ["Automated Form 4797 generation", "Multi-jurisdictional compliance", "Complete audit trail"]
    },
    {
      icon: Shield,
      title: "Institutional-Grade Security",
      description: "Built for the stringent security and compliance demands of the financial industry.",
      features: ["SOC 2 Type II compliance", "End-to-end encryption", "Zero-trust architecture"]
    }
  ];

  return (
    <section className="py-24 bg-muted/30" id="platform">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Built for the Demands of{" "}
            <span className="text-primary">
              Modern Trading
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every component engineered for precision, scale, and reliability at the nanosecond level.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-200 bg-white border border-border/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                    <pillar.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{pillar.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {pillar.description}
                    </p>
                    <ul className="space-y-2">
                      {pillar.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
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

export default ValuePillars;