import { useState } from "react";
import { MotionConfig } from "motion/react";
import { useLenis } from "./hooks/useLenis";
import { BackToTop, DemoModal, Navbar } from "./components";
import { Hero } from "./sections/Hero";
import { TrustedBy } from "./sections/TrustedBy";
import { Features } from "./sections/Features";
import { ProductAbout } from "./sections/ProductAbout";
import { HowItWorks } from "./sections/HowItWorks";
import { Statistics } from "./sections/Statistics";
import { Solutions } from "./sections/Solutions";
import { Testimonials } from "./sections/Testimonials";
import { Pricing } from "./sections/Pricing";
import { Faq } from "./sections/Faq";
import { FinalCta } from "./sections/FinalCta";
import { Footer } from "./sections/Footer";
import { SectionStubs } from "./sections/SectionStubs";

export default function App() {
  useLenis();
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <div id="top" className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[70] focus:rounded-lg focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main" className="flex-1 pt-16">
          <Hero onWatchDemo={() => setDemoOpen(true)} />

          <TrustedBy />

          <Features />

          <ProductAbout />

          <HowItWorks />

          <Statistics />

          <Solutions />

          <Testimonials />

          <Pricing />

          <Faq />

          <FinalCta />

          <SectionStubs />
        </main>

        <Footer />

        <BackToTop />

        <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
      </div>
    </MotionConfig>
  );
}
