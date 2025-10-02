import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-xl">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="#" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <div className="h-4 w-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-semibold text-foreground">Quantum Ledger</span>
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#platform" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Platform
              </a>
              <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Solutions
              </a>
              <a href="#security" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Security
              </a>
            </nav>
          </div>
          <Button 
            className="font-medium px-6 hover:shadow-glow transition-all duration-200"
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;