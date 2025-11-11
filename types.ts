// FIX: Using a standard `import React from 'react'` and referencing `React.DetailedHTMLProps`
// resolves issues where base HTML element types were being lost during global JSX augmentation.
// FIX: The import style for React was inconsistent with the rest of the application.
// Using `import * as React from 'react'` ensures that TypeScript correctly merges
// the JSX namespace augmentation, resolving errors for all standard HTML elements.
import * as React from 'react';

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
