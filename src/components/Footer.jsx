import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full py-section-padding-desktop border-t border-outline-variant/20 bg-surface dark:bg-surface-container-low mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter px-8 md:px-12 max-w-[1440px] mx-auto w-full">
        {/* Brand */}
        <div className="flex flex-col space-y-4">
          <span className="font-headline-md text-headline-md text-primary dark:text-on-primary">Sonika Studio</span>
          <p className="font-body-md text-body-md text-secondary max-w-xs">Premium product photography that commands attention.</p>
        </div>
        {/* Contact / Links */}
        <div className="flex flex-col space-y-4 md:col-span-1">
          <span className="font-label-sm text-label-sm tracking-widest text-primary uppercase">Contact</span>
          <a className="font-body-md text-body-md text-secondary dark:text-on-secondary-fixed-variant hover:text-primary dark:hover:text-on-primary transition-colors underline w-fit" href="tel:7210000220">7210000220</a>
          <Link className="font-body-md text-body-md text-secondary dark:text-on-secondary-fixed-variant hover:text-primary dark:hover:text-on-primary transition-colors underline w-fit" to="/contact">Quick Inquiry</Link>
        </div>
        {/* Socials */}
        <div className="flex flex-col space-y-4 md:col-span-1">
          <span className="font-label-sm text-label-sm tracking-widest text-primary uppercase">Social</span>
          <a className="font-body-md text-body-md text-secondary dark:text-on-secondary-fixed-variant hover:text-primary dark:hover:text-on-primary transition-colors underline w-fit" href="#">Instagram</a>
          <a className="font-body-md text-body-md text-secondary dark:text-on-secondary-fixed-variant hover:text-primary dark:hover:text-on-primary transition-colors underline w-fit" href="#">YouTube</a>
        </div>
      </div>
      <div className="px-8 md:px-12 max-w-[1440px] mx-auto w-full mt-16 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="font-label-sm text-label-sm tracking-widest text-secondary dark:text-on-secondary-fixed-variant uppercase">© 2024 Sonika Professional Photography Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
