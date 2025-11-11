

import * as React from 'react';
import '../types';

const steps = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400 icon-animate-plan" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <path className="line line-1" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16" />
        <path className="line line-2" strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" />
        <path className="line line-3" strokeLinecap="round" strokeLinejoin="round" d="M4 18h7" />
      </svg>
    ),
    title: 'Choose Your Plan',
    description: 'Browse our categories and select the subscription that fits your needs.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400 icon-animate-checkout" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <g className="card-base">
            <path d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3" />
            <path d="M3.75 21h16.5a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v13.5a2.25 2.25 0 002.25 2.25z" />
        </g>
        <path className="lock" strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75" opacity="0" />
      </svg>
    ),
    title: 'Secure Checkout',
    description: 'Complete your purchase with our secure Stripe-powered payment system.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400 icon-animate-access" viewBox="0 0 24 24" fill="none">
        <path className="bolt-bg" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" fill="currentColor" opacity="0.3"/>
        <path className="bolt-fg" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Access Your Subscription',
    description: 'Receive your subscription details instantly and start using your new tools.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400 icon-animate-manage" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        <path className="cog" strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.092 1.21-.138 2.43-.138 3.662s.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.092-1.21.138-2.43.138-3.662z" />
        <path className="cog" strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
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
          <div key={index} className="hiw-card">
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