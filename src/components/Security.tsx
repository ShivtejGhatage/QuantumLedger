import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, FileCheck } from "lucide-react";
import securityImage from "@/assets/security-clean.jpg";

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "SOC 2 Type II Certified",
      description: "Independently audited security controls and procedures meet the highest industry standards."
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All data encrypted in transit and at rest using AES-256 encryption with perfect forward secrecy."
    },
    {
      icon: Eye,
      title: "Zero Trust Architecture",
      description: "Every access request verified, authenticated, and authorized before granting system access."
    },
    {
      icon: FileCheck,
      title: "Complete Audit Trail",
      description: "Immutable logs of every transaction and system action for full regulatory compliance."
    }
  ];

  const compliance = [
    "SOC 2 Type II",
    "PCI DSS Level 1",
    "ISO 27001",
    "GDPR Compliant",
    "FINRA Approved",
    "SEC Compliant"
  ];

  return (
    <section className="py-24 bg-background" id="security">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-2xl -m-4"></div>
            <img 
              src={securityImage} 
              alt="Security and compliance visualization" 
              className="relative rounded-2xl shadow-professional"
            />
          </div>
          
          <div>
            <Badge variant="secondary" className="mb-6 bg-secondary/50">
              Enterprise Security
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              Security That Meets{" "}
              <span className="text-primary">
                Your Standards
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Built from the ground up with financial-grade security architecture. 
              Your most sensitive trading data deserves institutional-level protection.
            </p>

            <div className="grid gap-6 mb-12">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-muted-foreground uppercase tracking-wide text-sm">
                Compliance & Certifications
              </h3>
              <div className="flex flex-wrap gap-2">
                {compliance.map((cert, index) => (
                  <Badge key={index} variant="outline" className="border-primary/20 text-primary">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;