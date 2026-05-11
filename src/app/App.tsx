import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Partnerships } from './components/Partnerships';
import { Stats } from './components/Stats';
import { WhatWeDo } from './components/WhatWeDo';
import { HowToAcquire } from './components/HowToAcquire';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <Hero />
      <Partnerships />
      <Stats />
      <WhatWeDo />
      <HowToAcquire />
      <Pricing />
      <Testimonials />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  );
}