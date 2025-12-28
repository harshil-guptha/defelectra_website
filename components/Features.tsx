import React from 'react';
import { APP_CONTENT } from '../constants';
import { Database, Zap, ShieldAlert } from 'lucide-react';

const ICONS = [Database, Zap, ShieldAlert];

const Features: React.FC = () => {
  const { features } = APP_CONTENT;

  return (
    <section id="features" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Under The Hood</h2>
          <p className="text-brand-muted">Built with enterprise-grade technology.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = ICONS[index];
            return (
              <div key={index} className="group p-8 rounded-2xl bg-brand-surface border border-white/5 hover:border-brand-primary/50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-brand-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;