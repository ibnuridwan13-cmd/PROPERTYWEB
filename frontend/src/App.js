import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CategorySection } from "@/components/sections/CategorySection";
import { PromoSection } from "@/components/sections/PromoSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PriceSection } from "@/components/sections/PriceSection";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { LeadCaptureSection } from "@/components/sections/LeadCaptureSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { WhatsAppFloat } from "@/components/common/WhatsAppFloat";
import "./App.css";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <PromoSection />
        <HowItWorksSection />
        <TrustSection />
        <SocialProofSection />
        <BeforeAfterSection />
        <PriceSection />
        <ServiceAreaSection />
        <TestimonialsSection />
        <TeamSection />
        <FAQSection />
        <LeadCaptureSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
