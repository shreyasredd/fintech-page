
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Banknote, Building, CreditCard, Link as LinkIcon, TrendingUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface HighlightProps {
  text: string;
}

const Highlight: React.FC<HighlightProps> = ({
  text
}) => <div className="flex items-center mb-3">
    <div className="w-2 h-2 rounded-full bg-fintech-accent mr-3"></div>
    <span className="font-inter text-fintech-primary">{text}</span>
  </div>;

interface ExpertiseSectionProps {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  ctaText: string;
  ctaAction: () => void;
  isReversed?: boolean;
  accentColor?: string;
}

const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({
  id,
  emoji,
  title,
  subtitle,
  description,
  highlights,
  ctaText,
  ctaAction,
  isReversed = false,
  accentColor = "bg-fintech-accent"
}) => {
  const isMobile = useIsMobile();
  
  const getIconByEmoji = (emoji: string) => {
    switch(emoji) {
      case '🧠': return <TrendingUp className="w-8 h-8 text-fintech-primary" />;
      case '🏦': return <Building className="w-8 h-8 text-fintech-primary" />;
      case '💳': return <CreditCard className="w-8 h-8 text-fintech-primary" />;
      case '🔗': return <LinkIcon className="w-8 h-8 text-fintech-primary" />;
      case '📈': return <Banknote className="w-8 h-8 text-fintech-primary" />;
      default: return null;
    }
  };

  return (
    <section id={id} className="py-12 md:py-16 scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn(
          "flex flex-col gap-8 md:gap-12", 
          isMobile ? "" : (isReversed ? "md:flex-row-reverse" : "md:flex-row"),
          "md:items-center"
        )}>
          <div className="space-y-5 md:space-y-6 flex-1 animate-fade-in">
            <div className={cn("inline-flex items-center gap-3 mb-2 md:mb-4 p-3 rounded-2xl", accentColor + "/10")}>
              <span className="text-3xl">{emoji}</span>
              {getIconByEmoji(emoji)}
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-roboto text-fintech-primary">{title}</h2>
            <h3 className="text-lg md:text-xl lg:text-2xl font-inter text-fintech-secondary">{subtitle}</h3>
            <p className="font-inter text-fintech-supporting1 text-sm md:text-base">{description}</p>
            
            <div className="pt-2">
              <h4 className="font-roboto font-bold text-fintech-primary mb-3 md:mb-4">Highlights:</h4>
              <div className="space-y-2 md:space-y-3">
                {highlights.map((highlight, index) => <Highlight key={index} text={highlight} />)}
              </div>
            </div>
            
            <Button 
              onClick={ctaAction} 
              className={cn(
                "bg-fintech-primary hover:bg-fintech-secondary text-white rounded-md font-inter w-full md:w-auto",
                "mt-4 py-2 px-4 md:py-2 md:px-6"
              )}
            >
              {ctaText} →
            </Button>
          </div>
          
          <div className="flex-1 mt-6 md:mt-0">
            <div className="relative">
              <div className={cn("w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-2xl flex items-center justify-center p-4 sm:p-5 md:p-8", accentColor + "/5")}>
                <div className="w-full h-full bg-white rounded-xl shadow-lg relative overflow-hidden border border-gray-100">
                  <div className={cn("h-2 w-full", accentColor)}></div>
                  
                  <div className="absolute top-6 sm:top-8 md:top-10 left-6 sm:left-8 md:left-10 right-6 sm:right-8 md:right-10 bottom-6 sm:bottom-8 md:bottom-10 flex flex-col">
                    <div className="mb-4 md:mb-6">
                      <div className="w-2/3 h-6 md:h-8 bg-gray-100 rounded-md"></div>
                      <div className="w-1/2 h-4 md:h-6 bg-gray-100 rounded-md mt-2"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-auto">
                      {[1, 2, 3, 4].map(item => <div key={item} className="h-16 sm:h-20 md:h-24 bg-gray-50 border border-gray-100 rounded-md p-2 sm:p-3 md:p-4 flex flex-col justify-between">
                          <div className="w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 md:h-3 bg-gray-100 rounded"></div>
                          <div className="w-full h-3 sm:h-3.5 md:h-4 bg-gray-100 rounded"></div>
                        </div>)}
                    </div>
                    
                    <div className="mt-auto flex justify-end">
                      <div className={cn("w-16 sm:w-18 md:w-20 h-6 sm:h-7 md:h-8 rounded-md", accentColor + "/50")}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cn("absolute -bottom-4 -right-4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full opacity-20 z-0", accentColor)}></div>
              <div className={cn("absolute -top-4 -left-4 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full opacity-10 z-0", accentColor)}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
