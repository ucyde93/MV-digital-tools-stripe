import * as React from 'react';

export interface PricingCategory {
  name: string;
  pricingTableIds: string[];
  publishableKey: string;
}

// Augment the global JSX namespace to add custom elements.
// This avoids overwriting the global JSX namespace and ensures standard elements like 'div' remain available.
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