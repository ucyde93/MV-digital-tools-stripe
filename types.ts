// FIX: The `import 'react/jsx-runtime'` was incorrectly causing the base JSX types to be overwritten.
// Removing it and relying solely on `import * as React from 'react'` ensures that the JSX namespace
// is correctly augmented, not replaced, fixing errors for all standard JSX elements.

export interface PricingCategory {
  name: string;
  pricingTableIds: string[];
  publishableKey: string;
}

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
