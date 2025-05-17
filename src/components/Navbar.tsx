
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white shadow-md py-2" 
        : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-fintech-primary font-roboto font-bold text-2xl">FinxBridge</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#leadership" className="font-inter text-fintech-primary hover:text-fintech-secondary transition-colors">Leadership</a>
            <a href="#baas" className="font-inter text-fintech-primary hover:text-fintech-secondary transition-colors">BaaS</a>
            <a href="#payments" className="font-inter text-fintech-primary hover:text-fintech-secondary transition-colors">Payments</a>
            <a href="#integration" className="font-inter text-fintech-primary hover:text-fintech-secondary transition-colors">Integration</a>
            <a href="#impact" className="font-inter text-fintech-primary hover:text-fintech-secondary transition-colors">Impact</a>
          </nav>

          <Button
            className="hidden md:block bg-fintech-primary hover:bg-fintech-secondary text-white"
          >
            Contact Us
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-fintech-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white mt-4 py-4 rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4 px-4">
              <a 
                href="#leadership" 
                className="font-inter text-fintech-primary hover:text-fintech-secondary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Leadership
              </a>
              <a 
                href="#baas" 
                className="font-inter text-fintech-primary hover:text-fintech-secondary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                BaaS
              </a>
              <a 
                href="#payments" 
                className="font-inter text-fintech-primary hover:text-fintech-secondary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Payments
              </a>
              <a 
                href="#integration" 
                className="font-inter text-fintech-primary hover:text-fintech-secondary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Integration
              </a>
              <a 
                href="#impact" 
                className="font-inter text-fintech-primary hover:text-fintech-secondary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Impact
              </a>
              <Button
                className="bg-fintech-primary hover:bg-fintech-secondary text-white w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
