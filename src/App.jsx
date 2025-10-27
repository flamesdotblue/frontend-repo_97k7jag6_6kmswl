import React from 'react';
import Hero3D from './components/Hero3D';
import FeatureGrid from './components/FeatureGrid';
import HowItWorks from './components/HowItWorks';
import PricingPlans from './components/PricingPlans';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="fixed left-0 right-0 top-0 z-50 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600" />
            <span className="text-base font-semibold">TutorBlocks</span>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-gray-700 sm:flex">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#how" className="hover:text-gray-900">How it works</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden text-sm text-gray-700 hover:text-gray-900 sm:inline">Sign in</a>
            <a href="#pricing" className="rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white hover:bg-black">Get started</a>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <Hero3D />
        <FeatureGrid />
        <HowItWorks />
        <PricingPlans />
      </main>

      <footer className="border-t border-orange-100 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-600 sm:flex-row">
          <p>© {new Date().getFullYear()} TutorBlocks. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
