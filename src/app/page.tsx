"use client";

import Hero from "@/src/components/home/Hero";
import Vision from "@/src/components/home/Vision";
import Services from "@/src/components/home/Services";
import FAQAccordion from "@/src/components/home/FAQAccordion";
import DynamicCTA from "@/src/components/home/DynamicCTA";
import CorporateSegment from "@/src/components/home/CorporateSegment";
import CapabilitiesSlider from "@/src/components/home/CapabilitiesSlider";
import Reviews from "@/src/components/home/Reviews";
import SocialGallery from "@/src/components/home/SocialGallery";

export default function HomePage() {
  return (
    <>
      {/* Hero Landing */}
      <Hero />

      {/* Vision Section */}
      <Vision />

      {/* Core Services Section */}
      <Services />

      {/* FAQ Accordion Section */}
      <FAQAccordion />

      {/* High Conversion CTA visual segment */}
      <DynamicCTA />

      {/* Corporate plans detailed row */}
      <CorporateSegment />

      {/* Horizontally sliding technology capabilities */}
      <CapabilitiesSlider />

      {/* Customer Reviews card grid */}
      <Reviews />

      {/* Social connections links & horizontal infinite gallery marquee */}
      <SocialGallery />
    </>
  );
}
