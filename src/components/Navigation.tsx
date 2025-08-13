"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Home, Star, Play, Users, MessageCircle } from "lucide-react";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Close on mobile after click
    }
  };

  const navItems = [
    { id: "hero", icon: <Home size={20} />, label: "Home" },
    { id: "features", icon: <Star size={20} />, label: "Features" },
    { id: "demo", icon: <Play size={20} />, label: "Demo" },
    { id: "crowdfunding", icon: <Heart size={20} />, label: "Donate" },
    { id: "about", icon: <Users size={20} />, label: "About" },
    { id: "contact", icon: <MessageCircle size={20} />, label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Vertical Nav - Top Left */}
      <nav
        className="
          hidden md:flex fixed z-50
          bg-background/80 backdrop-blur-md border border-border/50 shadow-lg p-2 rounded-2xl
          flex-col top-4 left-4 space-y-2
        "
      >
        {navItems.map(({ id, icon, label }) => (
          <Button
            key={id}
            variant="ghost"
            size="icon"
            aria-label={label}
            onClick={() => scrollToSection(id)}
            className="rounded-full hover:bg-primary/10"
          >
            {icon}
          </Button>
        ))}
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-background/80 backdrop-blur-md border shadow-md"
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      {/* Mobile Slide-in Vertical Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-56 z-40 bg-background/95 backdrop-blur-md border-r border-border/50 shadow-lg transform transition-transform duration-300 md:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col items-center mt-16 space-y-6">
          {navItems.map(({ id, icon, label }) => (
            <Button
              key={id}
              variant="ghost"
              size="sm"
              aria-label={label}
              onClick={() => scrollToSection(id)}
              className="rounded-full hover:bg-primary/10 flex items-center gap-2"
            >
              {icon}
              <span>{label}</span>
            </Button>
          ))}
        </div>
      </nav>

      {/* Safe space for content */}
      <style jsx global>{`
        @media (min-width: 768px) {
          main {
            padding-left: 70px; /* Space for vertical nav */
          }
        }
        @media (max-width: 767px) {
          main {
            padding-bottom: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;