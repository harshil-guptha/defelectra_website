import React from 'react';
import { APP_CONTENT } from '../constants';
import { CheckCircle2, Bot, BrainCircuit, Timer, HeartHandshake, FileText } from 'lucide-react';

const ICONS = [
  FileText,       // Contextual Entry
  BrainCircuit,   // Real-Time Intelligence
  Bot,            // Smart Intercept
  Timer,          // Review Window
  HeartHandshake, // Sentiment Safety
  CheckCircle2    // Proactive Triage
];

const Solution: React.FC = () => {
  const { solution } = APP_CONTENT;

  return (
    <section id="solution" className="py-24 bg-brand-surface relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How Deflectra Works</h2>
          <p className="text-brand-muted">An intelligent flow designed to solve before submitting.</p>
        </div>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-12 w-0.5 bg-gradient-to-b from-brand-primary via-purple-500 to-brand-primary/20 md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {solution.steps.map((step, index) => {
              const Icon = ICONS[index % ICONS.length];
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} group`}>
                  
                  {/* Icon Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-brand-dark border-4 border-brand-surface flex items-center justify-center z-10 shadow-xl shadow-brand-primary/10 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-brand-accent" />
                  </div>

                  {/* Content Card - Desktop: Alternating sides, Mobile: Always right of line */}
                  <div className={`ml-20 md:ml-0 w-full md:w-[42%] ${isEven ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className="bg-brand-dark/50 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-brand-primary/30 transition-colors">
                      <div className={`text-brand-primary font-bold text-sm mb-1 uppercase tracking-wide flex items-center gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="bg-brand-primary/10 px-2 py-0.5 rounded">Step 0{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-brand-muted text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Spacer for the other side on desktop */}
                  <div className="hidden md:block w-[42%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;