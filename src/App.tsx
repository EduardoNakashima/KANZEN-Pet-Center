/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HighlightsBar } from './components/HighlightsBar';
import { ServicesSection } from './components/ServicesSection';
import { BookingSimulator } from './components/BookingSimulator';
import { DifferentialsSection } from './components/DifferentialsSection';
import { DeliveryAndStoreSection } from './components/DeliveryAndStoreSection';
import { UnitsSection } from './components/UnitsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-[#FAFAF9] text-slate-800 selection:bg-red-200 selection:text-red-950">
      <Navbar />
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Hero />
        <HighlightsBar />
        <ServicesSection />
        <BookingSimulator />
        <DifferentialsSection />
        <DeliveryAndStoreSection />
        <UnitsSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
