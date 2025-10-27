import React from 'react';
import { User, Users, CreditCard } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    highlight: 'Great to explore',
    features: [
      '1 learner profile',
      'Core subjects (K-8)',
      '10 auto videos / month',
      'Basic quizzes & reports',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Family',
    price: '$14',
    period: 'per month',
    highlight: 'Most popular',
    features: [
      'Up to 4 learners',
      'K-12 full curriculum',
      'Unlimited explainer videos',
      'Adaptive exams & goals',
      'Parent dashboard & weekly email',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Educator',
    price: '$49',
    period: 'per month',
    highlight: 'For tutors & small classes',
    features: [
      'Up to 25 learners',
      'Assignments & progress export',
      'Custom content generation',
      'Priority support',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function PricingPlans() {
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple pricing</h2>
        <p className="mt-3 text-gray-600">Start free, upgrade when you’re ready. Cancel anytime.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative flex flex-col rounded-2xl border p-6 shadow-sm ${
              t.popular ? 'border-orange-300 bg-gradient-to-b from-white to-orange-50' : 'border-orange-100 bg-white'
            }`}
          >
            {t.popular && (
              <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-orange-600 px-3 py-1 text-xs font-medium text-white shadow">
                <Users className="h-3.5 w-3.5" /> Most popular
              </span>
            )}
            <div className="flex items-baseline gap-2">
              <h3 className="text-xl font-semibold text-gray-900">{t.name}</h3>
            </div>
            <div className="mt-2 flex items-end gap-1">
              <span className="text-4xl font-extrabold text-gray-900">{t.price}</span>
              <span className="text-sm text-gray-500">{t.period}</span>
            </div>
            {t.highlight && <p className="mt-2 text-sm text-orange-700">{t.highlight}</p>}

            <ul className="mt-6 space-y-2">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className={`mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium shadow-sm transition ${
                t.popular
                  ? 'bg-orange-600 text-white hover:bg-orange-700'
                  : 'border border-gray-300 bg-white text-gray-800 hover:border-gray-400'
              }`}
            >
              {t.popular ? <CreditCard className="mr-2 h-4 w-4" /> : <User className="mr-2 h-4 w-4" />} {t.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
