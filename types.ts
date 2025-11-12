// FIX: By importing 'react/jsx-runtime', we ensure that the base JSX type definitions are loaded.
// This allows our augmentation of `JSX.IntrinsicElements` to merge with the standard HTML element types
// instead of overwriting them, resolving errors for all standard JSX tags.
import 'react/jsx-runtime';
// FIX: Changed to namespace import for consistency
import * as React from 'react';

export interface PricingCategory {
  name: string;
  pricingTableIds: string[];
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
