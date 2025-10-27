import React from 'react';
import { Camera, Sparkles, BookOpen, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: 'Capture or Choose',
    desc: 'Upload a topic or snap a photo of a problem from the mobile app.',
  },
  {
    icon: Sparkles,
    title: 'Create Similar Tasks',
    desc: 'Our tutor analyzes the content and generates look‑alike practice tasks—not the solution.',
  },
  {
    icon: BookOpen,
    title: 'Watch & Learn',
    desc: 'Auto-generated explainer video and audio guide teach the method step by step.',
  },
  {
    icon: CheckCircle,
    title: 'Practice & Assess',
    desc: 'Take adaptive quizzes. Parents track progress and set new goals.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-gradient-to-b from-white to-orange-50/50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How it works</h2>
          <p className="mt-3 text-gray-600">From problem to understanding in minutes—without giving away answers.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 text-orange-700">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
