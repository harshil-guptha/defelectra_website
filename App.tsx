import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import TransitionBanner from './components/TransitionBanner';
import Solution from './components/Solution';
import Features from './components/Features';
import Impact from './components/Impact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-text font-sans antialiased selection:bg-brand-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <TransitionBanner />
        <Solution />
        <Features />
        <Impact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;