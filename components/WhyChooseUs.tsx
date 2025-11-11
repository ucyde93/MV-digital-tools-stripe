

import * as React from 'react';
import '../types';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Unbeatable Prices',
    description: 'Save up to 90% on top-tier subscriptions. We leverage bulk purchasing to bring you the best deals.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a12.025 12.025 0 01-4.132 4.032m-4.132-4.032L6.91 9.512a12.025 12.025 0 014.132-4.032m4.132 4.032l-.458-2.56a12.025 12.025 0 00-4.132-4.032m-4.132 4.032L6.91 9.512a12.025 12.025 0 00-4.132 4.032M4.5 12l-.458 2.56a12.025 12.025 0 004.132 4.032m0 0l.458-2.56a12.025 12.025 0 014.132-4.032m-4.132 4.032L9.63 14.37m-3.12-4.86l.458-2.56a12.025 12.025 0 014.132-4.032m0 0l-.458 2.56" />
      </svg>
    ),
    title: 'Instant Delivery',
    description: 'Your subscription details are delivered to you securely and instantly after purchase.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: '100% Secure Payments',
    description: 'All transactions are processed through Stripe, a global leader in online payment security.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.006 3 12c0 2.252.79 4.33 2.076 5.97l-.634 2.287a.75.75 0 00.942.942l2.287-.635A9.01 9.01 0 0012 20.25z" />
      </svg>
    ),
    title: '24/7 Local Support',
    description: "As a locally based business, we're in your timezone. Get fast, friendly, and expert help whenever you need it.",
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="text-center">
        <h2 
          className="text-3xl md:text-4xl font-extrabold tracking-tighter text-white"
          style={{ textShadow: '0 2px 20px rgba(192, 132, 252, 0.4)' }}
        >
          Why Choose Us?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
          Your trusted source for premium digital tools at a fraction of the cost.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div key={index}>
            <div className="flex flex-col items-center text-center p-8 bg-black/30 rounded-2xl shadow-lg ring-1 ring-white/10 backdrop-blur-md h-full transition-all duration-300 hover:ring-indigo-400 hover:shadow-indigo-500/20 transform hover:-translate-y-1">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500/10 ring-2 ring-indigo-500/30">
                  {feature.icon}
                </div>
              </div>
              <div className="mt-6">
                 <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="mt-2 text-base text-slate-400">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};