// FIX: Import 'types.ts' for its side-effects to load global type augmentations. This must be the first import.
import './types';
import * as React from 'react';
import { Header } from './components/Header';
import { TabbedPricing } from './components/TabbedPricing';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FAQ } from './components/FAQ';
import type { PricingCategory } from './types';

const pricingCategories: PricingCategory[] = [
  {
    name: 'Streaming',
    pricingTableIds: ['prctbl_1SRtplEEfxP3B25SauM1aisV', 'prctbl_1SSVjCEEfxP3B25SaVf8yZup'],
    publishableKey: 'pk_live_51OSNXXEEfxP3B25S2C3EhDuF9TayWZaPwGvdxP6qChRz04raDqGTDDEJLXsUuTCaa2LL6mHWqVpCQ1SeqIWCSmLf0065cANulg',
  },
  {
    name: 'Productivity',
    pricingTableIds: ['prctbl_1SRtt6EEfxP3B25SElGRlcl0', 'prctbl_1SStxwEEfxP3B25SRg7SRcU4'],
    publishableKey: 'pk_live_51OSNXXEEfxP3B25S2C3EhDuF9TayWZaPwGvdxP6qChRz04raDqGTDDEJLXsUuTCaa2LL6mHWqVpCQ1SeqIWCSmLf0065cANulg',
  },
  {
    name: 'Video and Photo Design',
    pricingTableIds: ['prctbl_1SRtvoEEfxP3B25SxplmRNRg'],
    publishableKey: 'pk_live_51OSNXXEEfxP3B25S2C3EhDuF9TayWZaPwGvdxP6qChRz04raDqGTDDEJLXsUuTCaa2LL6mHWqVpCQ1SeqIWCSmLf0065cANulg',
  },
  {
    name: 'AI Tools',
    pricingTableIds: ['prctbl_1SRtwrEEfxP3B25Sp7Zj83e7', 'prctbl_1SUMQPEEfxP3B25Sh0a76hpk'],
    publishableKey: 'pk_live_51OSNXXEEfxP3B25S2C3EhDuF9TayWZaPwGvdxP6qChRz04raDqGTDDEJLXsUuTCaa2LL6mHWqVpCQ1SeqIWCSmLf0065cANulg',
  },
  {
    name: 'Financial',
    pricingTableIds: ['prctbl_1SS8gJEEfxP3B25Sq0yajQiC'],
    publishableKey: 'pk_live_51OSNXXEEfxP3B25S2C3EhDuF9TayWZaPwGvdxP6qChRz04raDqGTDDEJLXsUuTCaa2LL6mHWqVpCQ1SeqIWCSmLf0065cANulg',
  },
  {
    name: 'Accessories',
    pricingTableIds: ['prctbl_1SXx6uEEfxP3B25S1kQaKQji'],
    publishableKey: 'pk_live_51OSNXXEEfxP3B25S2C3EhDuF9TayWZaPwGvdxP6qChRz04raDqGTDDEJLXsUuTCaa2LL6mHWqVpCQ1SeqIWCSmLf0065cANulg',
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black font-sans isolate">
      {/* Animated Background */}
      <div className="background-aurora">
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 
              className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white fade-in"
              style={{ textShadow: '0 2px 20px rgba(192, 132, 252, 0.4)' }}
            >
              <span className="block">Premium Subscriptions.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                Unbeatable Prices.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-300 fade-in fade-in-delay-1">
              Access top-tier tools in streaming, productivity, design, and AI for up to 90% off. Your favorite subscriptions, all in one place.
            </p>
          </div>

          <div id="pricing" className="mt-20 flex justify-center fade-in fade-in-delay-2 scroll-mt-24">
            <TabbedPricing categories={pricingCategories} />
          </div>

          <div className="mt-20 md:mt-32 fade-in fade-in-delay-3">
            <HowItWorks />
          </div>

          <div className="mt-20 md:mt-32 fade-in fade-in-delay-4">
            <WhyChooseUs />
          </div>

          <div className="mt-20 md:mt-32 fade-in fade-in-delay-5">
            <FAQ />
          </div>
        </main>
        <footer className="w-full bg-black/30 border-t border-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-slate-400">
            <div className="text-center mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <div className="flex flex-col items-center space-y-2 text-slate-300">
                <p>
                  WhatsApp/Viber/Call: <a href="tel:+9607566658" className="hover:text-white transition-colors duration-300 font-medium text-slate-200">+960 7566658</a>
                </p>
                <p>
                  Telegram: <a href="https://t.me/mvdigitaltools" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 font-medium text-slate-200">@mvdigitaltools</a>
                </p>
                <p>
                  Email: <a href="mailto:support@mvdigital.tools" className="hover:text-white transition-colors duration-300 font-medium text-slate-200">support@mvdigital.tools</a>
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 my-10 text-slate-300">
              <div className="flex items-center space-x-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
                </svg>
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3M3.75 21h16.5a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v13.5a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <span>Stripe Secure Payments</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Satisfaction Guarantee</span>
              </div>
            </div>

             <div className="flex justify-center space-x-8 mb-6">
                <a href="https://www.tiktok.com/@mv_digital_tools" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
                  <span className="sr-only">TikTok</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/mvDigitalTools" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
             </div>
              <p className="text-center text-sm text-slate-500">&copy; {new Date().getFullYear()} MV DIGITAL TOOLS. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;