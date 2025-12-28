import React, { useState } from 'react';
import { APP_CONTENT } from '../constants';
import { ArrowRight, Sparkles, Play, X } from 'lucide-react';

const Hero: React.FC = () => {
  const { hero } = APP_CONTENT;
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-primary/30 text-brand-accent text-xs font-semibold uppercase tracking-wider mb-8 animate-fade-in-up">
          <Sparkles className="w-3 h-3" />
          {hero.tagline}
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight max-w-4xl mx-auto">
          Stop Managing Tickets. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-400">
            Start Eliminating Them.
          </span>
        </h1>

        <p className="text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          {hero.subHeadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://drive.google.com/file/d/1V2B93coGUfvmTg0VztuAKIR4u6eyc8hF/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-accent text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40"
          >
            {hero.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={() => setIsVideoOpen(true)}
            className="group px-8 py-4 rounded-xl font-semibold text-lg text-white border border-brand-surface hover:bg-brand-surface transition-colors flex items-center gap-2"
          >
            <Play className="w-5 h-5 fill-current group-hover:text-brand-accent transition-colors" />
            View Video Illustration
          </button>
        </div>

        <p className="text-sm font-medium text-brand-muted text-center animate-fade-in-up">
          Product Demo Will Be Showcased On Demo Day
        </p>
      </div>

      {/* Video Modal Overlay */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsVideoOpen(false)}
          />
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 animate-fade-in-up">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors z-20 backdrop-blur-sm"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              className="w-full h-full"
              src="https://drive.google.com/file/d/1LApien4r3W2u7AKfolriz15q-TR52fkQ/preview"
              title="Deflectra Demo Video"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;