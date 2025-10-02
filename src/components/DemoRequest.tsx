import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const DemoRequest = () => {
  return (
    <section id="demo" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              Ready to Scale Your{" "}
              <span className="text-primary">
                Tax Compliance?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Schedule a technical demonstration tailored to your firm's specific requirements. 
              See how Quantum Ledger handles your transaction volume and complexity.
            </p>
          </div>

          <Card className="bg-white border shadow-professional">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John"
                      className="focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Smith"
                      className="focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Business Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@tradingfirm.com"
                      className="focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Firm Name</Label>
                    <Input 
                      id="company" 
                      placeholder="Your Trading Firm"
                      className="focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role</Label>
                    <Input 
                      id="role" 
                      placeholder="Head of Operations"
                      className="focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="volume">Monthly Transaction Volume</Label>
                    <Input 
                      id="volume" 
                      placeholder="e.g., 50M transactions"
                      className="focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Specific Requirements or Current Challenges</Label>
                  <Textarea 
                    id="requirements" 
                    placeholder="Tell us about your current tax compliance challenges, transaction volumes, data sources, and any specific requirements..."
                    rows={4}
                    className="focus:border-primary transition-colors resize-none"
                  />
                </div>

                <div className="pt-4">
                  <Button 
                    size="lg" 
                    className="w-full font-semibold hover:shadow-glow transition-all duration-200 py-3"
                    onClick={() => window.location.href = 'mailto:kush39agrawal@gmail.com?subject=Technical Demo Request - Quantum Ledger'}
                    type="button"
                  >
                    Request Technical Demo
                  </Button>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Our technical team will contact you within 24 hours to schedule your personalized demonstration.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DemoRequest;