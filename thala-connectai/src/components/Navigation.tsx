import { Button } from "@/components/ui/button";
import { Heart, Home, Star, Play, Users, MessageCircle } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-background/80 backdrop-blur-md border border-border/50 rounded-full px-6 py-3 shadow-lg">
      <div className="flex items-center space-x-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => scrollToSection('hero')}
          className="rounded-full hover:bg-primary/10"
        >
          <Home size={16} className="mr-2" />
          Home
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => scrollToSection('features')}
          className="rounded-full hover:bg-primary/10"
        >
          <Star size={16} className="mr-2" />
          Features
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => scrollToSection('demo')}
          className="rounded-full hover:bg-primary/10"
        >
          <Play size={16} className="mr-2" />
          Demo
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => scrollToSection('crowdfunding')}
          className="rounded-full hover:bg-primary/10"
        >
          <Heart size={16} className="mr-2" />
          Donate
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => scrollToSection('about')}
          className="rounded-full hover:bg-primary/10"
        >
          <Users size={16} className="mr-2" />
          About
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => scrollToSection('contact')}
          className="rounded-full hover:bg-primary/10"
        >
          <MessageCircle size={16} className="mr-2" />
          Contact
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;