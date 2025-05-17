
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center pt-20 bg-gradient-to-br from-white via-fintech-supporting2 to-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-roboto text-fintech-primary leading-tight">
              Shaping the Future of Fintech, 
              <span className="text-fintech-growth"> One Innovation at a Time</span>
            </h1>
            <p className="text-lg md:text-xl font-inter text-fintech-supporting1">
              We build cutting-edge financial technology solutions that power digital banking, payments, 
              and lending for businesses worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-fintech-primary hover:bg-fintech-secondary text-white font-inter px-6 py-5 rounded-md"
              >
                Explore Our Expertise
              </Button>
              <Button 
                variant="outline" 
                className="border-fintech-primary text-fintech-primary hover:bg-fintech-primary/5 font-inter px-6 py-5 rounded-md"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
          
          {/* Modified this div to be visible on all screen sizes */}
          <div className="mt-8 md:mt-0">
            <div className="relative">
              <div className="w-full h-[300px] md:h-[400px] bg-gradient-to-br from-fintech-primary/10 to-fintech-secondary/5 rounded-2xl flex items-center justify-center p-4 md:p-8 animate-fade-in">
                <div className="grid grid-cols-2 gap-3 md:gap-6 w-full">
                  <div className="bg-white p-3 md:p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-fintech-accent/20 flex items-center justify-center mb-2 md:mb-4">
                      <span className="text-xl md:text-2xl font-bold text-fintech-accent">$</span>
                    </div>
                    <h3 className="font-roboto font-bold text-fintech-primary text-sm md:text-lg">Digital Banking</h3>
                    <p className="font-inter text-xs md:text-sm text-fintech-supporting1 mt-1 md:mt-2">API-first banking solutions</p>
                  </div>
                  <div className="bg-white p-3 md:p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-fintech-growth/20 flex items-center justify-center mb-2 md:mb-4">
                      <span className="text-xl md:text-2xl font-bold text-fintech-growth">↗</span>
                    </div>
                    <h3 className="font-roboto font-bold text-fintech-primary text-sm md:text-lg">Payment Systems</h3>
                    <p className="font-inter text-xs md:text-sm text-fintech-supporting1 mt-1 md:mt-2">Secure payment infra</p>
                  </div>
                  <div className="bg-white p-3 md:p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-fintech-secondary/20 flex items-center justify-center mb-2 md:mb-4">
                      <span className="text-xl md:text-2xl font-bold text-fintech-secondary">🔗</span>
                    </div>
                    <h3 className="font-roboto font-bold text-fintech-primary text-sm md:text-lg">System Integration</h3>
                    <p className="font-inter text-xs md:text-sm text-fintech-supporting1 mt-1 md:mt-2">Connected systems</p>
                  </div>
                  <div className="bg-white p-3 md:p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-fintech-stability/20 flex items-center justify-center mb-2 md:mb-4">
                      <span className="text-xl md:text-2xl font-bold text-fintech-stability">🛡️</span>
                    </div>
                    <h3 className="font-roboto font-bold text-fintech-primary text-sm md:text-lg">Compliance & Risk</h3>
                    <p className="font-inter text-xs md:text-sm text-fintech-supporting1 mt-1 md:mt-2">Regulatory-ready infra</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 md:w-24 h-16 md:h-24 bg-fintech-accent rounded-full opacity-30 z-0"></div>
              <div className="absolute -top-4 -left-4 w-12 md:w-16 h-12 md:h-16 bg-fintech-primary rounded-full opacity-20 z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
