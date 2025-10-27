import React from 'react';
import { Video, Headphones, Brain, Users, Camera, BookOpen } from 'lucide-react';

const features = [
  {
    icon: Video,
    title: 'Auto Video Creation',
    desc: 'Turn any topic into an age-appropriate explainer video with voiceover and captions.',
  },
  {
    icon: Headphones,
    title: 'Audio-First Lessons',
    desc: 'Listen to lessons in clear, friendly voices—great for dyslexia and ADHD support.',
  },
  {
    icon: Brain,
    title: 'LLM Tutor, Not Answering Machine',
    desc: 'Recognizes tasks and generates similar practice—not direct answers—to build mastery.',
  },
  {
    icon: Users,
    title: 'Parent Supervision',
    desc: 'Set learning targets, assign paths, and monitor progress with weekly reports.',
  },
  {
    icon: Camera,
    title: 'Mobile Scan',
    desc: 'Snap a photo of homework; the system creates look‑alike tasks and a matching explainer video.',
  },
  {
    icon: BookOpen,
    title: 'Exams & Progress',
    desc: 'Adaptive quizzes mirror school standards with detailed skill breakdowns.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything a modern tutor needs</h2>
        <p className="mt-3 text-gray-600">Built for inclusivity and peak performance—from enrichment to special education.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 text-orange-700">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
