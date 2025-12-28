import React from 'react';
import { APP_CONTENT } from '../constants';

const TransitionBanner: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-brand-dark via-brand-surface to-brand-dark border-y border-white/5 text-center px-6">
      <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-text via-brand-primary to-brand-accent max-w-5xl mx-auto leading-tight">
        "{APP_CONTENT.transitionBanner.text}"
      </h2>
    </section>
  );
};

export default TransitionBanner;