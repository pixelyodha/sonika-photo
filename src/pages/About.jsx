import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-12 mb-section-padding-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-grid-gutter items-center">
          <div className="space-y-8 pr-0 lg:pr-12">
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
              Precision &amp; Artistry in Every Frame.
            </h1>
            <p className="font-body-lg text-body-lg text-secondary">
              Based in Gurgaon, Sonika Studio is a premium commercial photography space dedicated to elevating brands. Specializing in high-end e-commerce, editorial, and product photography for industry leaders like Myntra, Amazon, and Flipkart. We don't just capture images; we craft visual narratives that sell.
            </p>
            <div className="flex gap-4">
              <Link
                className="inline-block border border-primary text-primary px-8 py-4 font-label-sm text-label-sm tracking-widest hover:bg-primary hover:text-on-primary transition-colors duration-300"
                to="/contact"
              >
                INQUIRE NOW
              </Link>
            </div>
          </div>
          <div className="h-[614px] lg:h-[819px] w-full bg-surface-container overflow-hidden">
            <img
              alt="Photography Studio Interior"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDafhrvRB3jzqgssGx_gJcWw4qE4LXsBwfCCg7jJ4D9ge05vqEjTx9jMNZ2NR8BFgByRTs3qgUp0tJCth0d0f7wVS6O5ICskBRTx1XXw23SoIO2wIGCRaetSeH1l4Nfd0us9PQMQ7igNGF6yc4aS8fG1mYNf94J5AQMKPEpygvsR7whSD8WWfz6fGwnOwFmIlG4E7GBwWZYMFVSsQ_kScL1fxMRA4Ebv4HlxygKSBM9sM3X0SMvHtWttfWFsqyetg-B9I151eSpKXY"
            />
          </div>
        </div>
      </section>

      {/* Services / Pricing Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-section-padding-desktop bg-surface-container-low mb-section-padding-desktop">
        <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">Investment &amp; Packages</h2>
          <p className="font-body-md text-body-md text-secondary">Transparent, high-value solutions tailored for commercial excellence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter">
          {/* Package 1 */}
          <div className="border border-outline-variant/50 bg-surface p-8 md:p-12 flex flex-col hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-500 bg-white">
            <div className="mb-8">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">E-Commerce Standard</h3>
              <p className="font-label-sm text-label-sm tracking-widest text-secondary mb-6 border-b border-outline-variant/30 pb-6">FLIPKART / AMAZON READY</p>
              <div className="font-headline-md text-headline-md text-primary">
                ₹15,000<span className="font-body-md text-body-md text-secondary ml-2">/ shift</span>
              </div>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                <span className="font-body-md text-body-md text-on-surface-variant">White background cataloging</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                <span className="font-body-md text-body-md text-on-surface-variant">Standard studio lighting setup</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                <span className="font-body-md text-body-md text-on-surface-variant">Basic retouching included</span>
              </li>
            </ul>
            <Link
              className="block w-full text-center border border-primary text-primary px-6 py-3 font-label-sm text-label-sm tracking-widest hover:bg-primary hover:text-on-primary transition-colors duration-300"
              to="/contact"
            >
              SELECT PLAN
            </Link>
          </div>
          {/* Package 2 */}
          <div className="border border-primary bg-primary text-on-primary p-8 md:p-12 flex flex-col transform md:-translate-y-4 shadow-[0_30px_60px_rgba(0,0,0,0.1)]">
            <div className="mb-8">
              <h3 className="font-headline-sm text-headline-sm mb-2">Premium Editorial</h3>
              <p className="font-label-sm text-label-sm tracking-widest text-inverse-primary mb-6 border-b border-outline-variant/30 pb-6">MYNTRA / BRAND CAMPAIGNS</p>
              <div className="font-headline-md text-headline-md">
                ₹35,000<span className="font-body-md text-body-md text-inverse-primary ml-2">/ shift</span>
              </div>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-on-primary text-[18px]">check</span>
                <span className="font-body-md text-body-md text-inverse-on-surface">Creative set design &amp; styling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-on-primary text-[18px]">check</span>
                <span className="font-body-md text-body-md text-inverse-on-surface">Advanced lighting techniques</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-on-primary text-[18px]">check</span>
                <span className="font-body-md text-body-md text-inverse-on-surface">High-end specialized retouching</span>
              </li>
            </ul>
            <Link
              className="block w-full text-center bg-on-primary text-primary px-6 py-3 font-label-sm text-label-sm tracking-widest hover:bg-surface-variant transition-colors duration-300"
              to="/contact"
            >
              SELECT PLAN
            </Link>
          </div>
          {/* Package 3 */}
          <div className="border border-outline-variant/50 bg-surface p-8 md:p-12 flex flex-col hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-500 bg-white">
            <div className="mb-8">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Lookbook / Look</h3>
              <p className="font-label-sm text-label-sm tracking-widest text-secondary mb-6 border-b border-outline-variant/30 pb-6">CUSTOM STYLING</p>
              <div className="font-headline-md text-headline-md text-primary">
                ₹50,000<span className="font-body-md text-body-md text-secondary ml-2">/ project</span>
              </div>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                <span className="font-body-md text-body-md text-on-surface-variant">Full creative direction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                <span className="font-body-md text-body-md text-on-surface-variant">Location scouting or custom sets</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                <span className="font-body-md text-body-md text-on-surface-variant">Extensive post-production</span>
              </li>
            </ul>
            <Link
              className="block w-full text-center border border-primary text-primary px-6 py-3 font-label-sm text-label-sm tracking-widest hover:bg-primary hover:text-on-primary transition-colors duration-300"
              to="/contact"
            >
              SELECT PLAN
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
