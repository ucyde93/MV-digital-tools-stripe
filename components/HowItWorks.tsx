

import * as React from 'react';
import '../types';

const steps = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    ),
    title: 'Choose Your Plan',
    description: 'Browse our categories and select the subscription that fits your needs.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    title: 'Secure Checkout',
    description: 'Complete your purchase with our secure Stripe-powered payment system.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Access Your Subscription',
    description: 'Receive your subscription details instantly and start using your new tools.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Manage Your Account',
    description: 'Easily view and manage your subscriptions from the "My Account" portal.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="text-center">
        <h2 
          className="text-3xl md:text-4xl font-extrabold tracking-tighter text-white"
          style={{ textShadow: '0 2px 20px rgba(192, 132, 252, 0.4)' }}
        >
          How It Works
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
          Simple, fast, and secure. Get started in minutes.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div key={index}>
            <div className="flex flex-col items-center text-center p-8 bg-black/30 rounded-2xl shadow-lg ring-1 ring-white/10 backdrop-blur-md h-full transition-all duration-300 hover:ring-indigo-400 hover:shadow-indigo-500/20 transform hover:-translate-y-1">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500/10 ring-2 ring-indigo-500/30">
                  {step.icon}
                </div>
              </div>
              <div className="mt-6">
                 <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-base text-slate-400">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};