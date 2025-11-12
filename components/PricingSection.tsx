// FIX: Import `../types` for its side-effects to load global type augmentations for custom elements like <stripe-pricing-table>. This must be the first import.
import '../types';
import * as React from 'react';
import type { PricingCategory } from '../types';

interface PricingSectionProps {
  category: PricingCategory;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ category }) => {
  return (
    <section id={category.name.toLowerCase().replace(/\s+/g, '-')}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {category.name}
        </h2>
      </div>
      <div className="space-y-8">
        {category.pricingTableIds.map(tableId => (
          <div key={tableId} className="bg-slate-800/50 p-2 rounded-xl shadow-lg ring-1 ring-white/10">
            <stripe-pricing-table
              pricing-table-id={tableId}
              publishable-key={category.publishableKey}
            >
            </stripe-pricing-table>
          </div>
        ))}
      </div>
    </section>
  );
};
