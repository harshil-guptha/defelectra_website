import React from 'react';
import { APP_CONTENT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-brand-muted mb-4">{APP_CONTENT.footer.text}</p>
        <p className="text-sm text-brand-muted/50">
          &copy; {new Date().getFullYear()} Deflectra. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;