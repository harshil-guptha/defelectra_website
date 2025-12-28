import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-brand-dark/80 border-b border-brand-surface">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <ShieldCheck className="w-12 h-12 text-brand-primary" />
          <span className="text-3xl font-bold tracking-tight text-white">Deflectra</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium text-brand-muted">
          <a href="#problem" className="hover:text-brand-text transition-colors">The Problem</a>
          <a href="#solution" className="hover:text-brand-text transition-colors">Solution</a>
          <a href="#features" className="hover:text-brand-text transition-colors">Features</a>
          <a href="#impact" className="hover:text-brand-text transition-colors">Impact</a>
          <a href="#faq" className="hover:text-brand-text transition-colors">FAQ</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;