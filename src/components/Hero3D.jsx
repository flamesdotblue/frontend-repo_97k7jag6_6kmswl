import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Sparkles } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/90 via-white/60 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-3 py-1 text-xs font-medium text-orange-700 shadow-sm backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" />
          AI Tutor for Every Child
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
          Playful, inclusive learning with
          <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent"> videos</span>,
          <span className="bg-gradient-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent"> audio</span>, and
          <span className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent"> LLM tutors</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base text-gray-600 sm:text-lg">
          A single platform for elementary to high school learners, including talented students and kids with learning differences. Personalized lessons, automatic explainer videos, and practice exams—supervised by parents.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-5 py-3 text-white shadow-lg shadow-orange-600/20 transition hover:bg-orange-700"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Start Free Trial
          </a>
          <a
            href="#how"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-800 transition hover:border-gray-400"
          >
            <Shield className="mr-2 h-5 w-5 text-emerald-600" />
            For Parents and Educators
          </a>
        </div>

        <div className="mt-6 text-xs text-gray-500">
          COPPA-friendly, privacy-first. No ads. Cancel anytime.
        </div>
      </div>
    </section>
  );
}
