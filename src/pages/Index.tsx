
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  const { toast } = useToast();

  // Mock functions for CTA buttons
  const handleCTAClick = () => {
    toast({
      title: "Request received!",
      description: "Our team will contact you shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      
      <HeroSection />
      
      <ExpertiseSection
        id="leadership"
        emoji="🧠"
        title="Fintech Leadership That Delivers"
        subtitle="Pioneering the Future of Financial Services"
        description="With over 20 years in fintech innovation, we've built platforms that power the next generation of digital finance. From digital banks to lending tech and embedded finance, our expertise helps businesses unlock new revenue and reimagine financial access."
        highlights={[
          "100+ fintech products launched",
          "Experience with NBFCs, neobanks, and fintech unicorns",
          "Deep knowledge in lending, KYC, compliance, and risk"
        ]}
        ctaText="Let's Build Your Fintech Product"
        ctaAction={handleCTAClick}
        accentColor="bg-fintech-primary"
      />
      
      <div className="bg-fintech-supporting2/30">
        <ExpertiseSection
          id="baas"
          emoji="🏦"
          title="API-First Banking-as-a-Service (BaaS)"
          subtitle="Empowering Non-Banks to Become Fintechs"
          description="We offer full-stack BaaS platforms that enable seamless integration of banking services into your applications — from account opening and e-KYC to loan disbursement and fund movement."
          highlights={[
            "Plug-and-play modules: CKYC, PAN, Aadhaar, AML",
            "Secure, regulatory-ready infrastructure",
            "Integrations with leading banks and fintech rails"
          ]}
          ctaText="Launch BaaS with Us"
          ctaAction={handleCTAClick}
          isReversed={true}
          accentColor="bg-fintech-secondary"
        />
      </div>
      
      <ExpertiseSection
        id="payments"
        emoji="💳"
        title="Payments & Cards Platform Engineering"
        subtitle="Build, Issue, Transact – At Scale"
        description="We engineer robust payments and card issuance platforms to power your digital finance strategy — whether you're launching prepaid cards, integrating UPI, or managing global remittance."
        highlights={[
          "PCI-DSS compliant infrastructure",
          "EMV card lifecycle & virtual card issuance",
          "UPI, QR, POS, wallet and tokenization integrations"
        ]}
        ctaText="Get Your Payment Stack Ready"
        ctaAction={handleCTAClick}
        accentColor="bg-fintech-growth"
      />
      
      <div className="bg-fintech-supporting2/30">
        <ExpertiseSection
          id="integration"
          emoji="🔗"
          title="Fintech System Integration & Engineering"
          subtitle="Connecting the Fintech Stack Seamlessly"
          description="As an SI partner, we help you integrate with fintech APIs, CBS systems, and third-party services — with a focus on performance, observability, and compliance."
          highlights={[
            "LOS, LMS, CBS, and DMS integrations",
            "Real-time dashboards & observability tools",
            "Cloud-native, microservices architecture on AWS/Azure/GCP"
          ]}
          ctaText="Talk to Our Integration Team"
          ctaAction={handleCTAClick}
          isReversed={true}
          accentColor="bg-fintech-stability"
        />
      </div>
      
      <ExpertiseSection
        id="impact"
        emoji="📈"
        title="Impact That Speaks for Itself"
        subtitle="Millions Served, Billions Processed"
        description="Our fintech platforms have reached over 10 million end users and processed billions in transactions. From urban neobanks to rural lending apps, we make fintech work where it matters."
        highlights={[
          "10M+ end users onboarded",
          "50+ integrations with fintech APIs",
          "99.99% uptime for mission-critical systems"
        ]}
        ctaText="Explore Our Case Studies"
        ctaAction={handleCTAClick}
        accentColor="bg-fintech-accent"
      />
      
      <ContactCTA />
      
      <Footer />
    </div>
  );
};

export default Index;
