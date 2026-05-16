import { HomeLandingEffects } from "@/components/common/HomeLandingEffects";
import {
  HeroSection,
  TrustStripSection,
  MarqueeSection,
  ProblemSection,
  ServicesSection,
  StatsSection,
  ProcessSection,
  TestimonialSection,
  IntegrationsSection,
  FAQInlineSection,
  AboutSection,
  CTASection,
  ContactSection,
  Footer,
  StickyCtaBar,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <HomeLandingEffects />
      <HeroSection />
      <TrustStripSection />
      <MarqueeSection />
      <ProblemSection />
      <ServicesSection />
      <StatsSection />
      <ProcessSection />
      <TestimonialSection />
      <IntegrationsSection />
      <FAQInlineSection />
      <AboutSection />
      <CTASection />
      <ContactSection />
      <StickyCtaBar />
      <Footer />
    </>
  );
}
