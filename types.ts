// FIX: Using a standard `import React from 'react'` and referencing `React.DetailedHTMLProps`
// resolves issues where base HTML element types were being lost during global JSX augmentation.
import React from 'react';

export interface PricingCategory {
  name: string;
  pricingTableId: string;
  publishableKey: string;
}

// FIX: Wrap in `declare global` to correctly augment the global JSX namespace from within a module.
// Extend JSX to recognize the Stripe custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'pricing-table-id': string;
        'publishable-key': string;
      };
    }
  }
}