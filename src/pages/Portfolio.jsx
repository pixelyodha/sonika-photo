import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const getFilterClass = (filter) => {
    return activeFilter === filter
      ? "filter-tab active text-primary pb-1 transition-colors duration-300 font-bold"
      : "filter-tab pb-1 hover:text-primary transition-colors duration-300";
  };

  return (
    <>
      {/* Page Header */}
      <section className="max-w-container-max-width mx-auto px-4 md:px-12 mb-16 text-center">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">Portfolio Gallery</h1>
        <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto mb-12">A curated selection of our finest work across e-commerce, creative campaigns, and catalog photography. Each image is a testament to minimal precision.</p>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-label-sm text-label-sm uppercase tracking-widest text-secondary">
          {['All', 'E-commerce', 'Creative', 'Model', 'Catalog'].map(filter => (
            <button
              key={filter}
              className={getFilterClass(filter)}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="max-w-container-max-width mx-auto px-4 md:px-8">
        <div className="masonry-grid">
          {/* Item 1 */}
          <div className="masonry-item relative group image-hover-wrapper bg-white border border-outline-variant/30">
            <img
              alt="E-commerce watch photography"
              className="w-full h-auto block object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4T1mwqcgmqaz7apDdUILyiJSCW_cirlyUFPBam4hwMo2F1kv9-jkHt7WKEFIlFbp3T0o8EfxEwF7V9HfhJFC838KC7-MoLq-lMO6kF6xUxYEkX9Wlk843BQVsY8leQc_AgvmLk-gtgkgAq8fjBd1sM2aB5AOLAWQGuPrhEL2j6m35I2Can5wAjlc5dvtVb-znYsti0LFiEPgCnByCHKnANRkjwLaJSqNMc44AQMq5tOxozCqRjYW7O6hWOFnuqQI6vBxYaleRtbY"
            />
            <div className="absolute inset-0 bg-surface/0 group-hover:bg-surface/20 transition-colors duration-300 flex items-end p-6 opacity-0 group-hover:opacity-100">
              <div className="bg-surface/90 backdrop-blur-sm p-4 w-full border border-outline-variant/30">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-1">E-commerce</span>
                <span className="font-body-md text-body-md text-primary font-medium cursor-pointer hover:underline">View Project</span>
              </div>
            </div>
          </div>
          {/* Item 2 */}
          <div className="masonry-item relative group image-hover-wrapper bg-white border border-outline-variant/30">
            <img
              alt="Creative headphones shot"
              className="w-full h-auto block object-cover aspect-[3/4]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe1AVsQIa3WRVjQFOPPqx9_0LHEGOCE15AkuFsZzXn-M8V3eJAfMQCnjL-uLc7pvV21J6UcSXd92pn8fhD1JJzoXWUrUxO7SKGDOyVwU2L30AanjiygKOi1yDdKftjJg8mKv5VZFF9CpiXtOmODt_P5pMUJyP6mI05spotfaYL32eXM1eL_3WZDCqn-9WfrDsfs_Bm3PNZGj_yUM3NbdiYUx2mU8P9IktqmrJ9dOyhVZjbuNoUlNMwui3fCyWBxhpryw3CRdPbLw8"
            />
            <div className="absolute inset-0 bg-surface/0 group-hover:bg-surface/20 transition-colors duration-300 flex items-end p-6 opacity-0 group-hover:opacity-100">
              <div className="bg-surface/90 backdrop-blur-sm p-4 w-full border border-outline-variant/30">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-1">Creative</span>
                <span className="font-body-md text-body-md text-primary font-medium cursor-pointer hover:underline">View Project</span>
              </div>
            </div>
          </div>
          {/* Item 3 */}
          <div className="masonry-item relative group image-hover-wrapper bg-white border border-outline-variant/30">
            <img
              alt="Catalog shoe photography"
              className="w-full h-auto block object-cover aspect-square"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBboQQ0ksXEko9Sa_SsFIp_WHLEAJhhg-415XssOqP7XDQhixuhmnU3txqAN-VZZTj3Q-EAl7QOClb9axW7USVOqPYH6lub8aGMhPDKa_bkMJb4gecEIyKIWf-y2Ipwwj4Jmp5OFwWpyZ7n90t7YUgWs1GceWd91pC79-4i9E-Ru7RX83VdOzMXEUjEvIrK1lIVhiO5V13y1NNJd6z5rQcqgmazOoAdMgDGEFzElPTBWTkSm6nTzpZF3sGSr65e3kq9Uk2CItYG-Tc"
            />
            <div className="absolute inset-0 bg-surface/0 group-hover:bg-surface/20 transition-colors duration-300 flex items-end p-6 opacity-0 group-hover:opacity-100">
              <div className="bg-surface/90 backdrop-blur-sm p-4 w-full border border-outline-variant/30">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-1">Catalog</span>
                <span className="font-body-md text-body-md text-primary font-medium cursor-pointer hover:underline">View Project</span>
              </div>
            </div>
          </div>
          {/* Item 4 */}
          <div className="masonry-item relative group image-hover-wrapper bg-white border border-outline-variant/30">
            <img
              alt="Model fashion photography"
              className="w-full h-auto block object-cover aspect-[4/5]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDklMDtQ3ycrrdZUe8OYLI4a9ggpPyqmtTLT9VlwAID4iTc9V-bAcG04e3oFQtXOHpPVGmBbg1Uq9ESU7Wtu_oshmcIlMC6g-ANAk1ASsvC0eM2e8WMO79I_0Kdc9TkXWis3musTagcKEn-u0ww11Fuy49QQtLSGULV--9Rll5IBmqpSGgrM-rDmlMYQTpT0CEMqP7G3mWUmJXtrkO_pWnjvG4NG2m6R0EcaMVLueAr4PV7QQI7Fg2LLxwoGyIt700tHABbncwptaE"
            />
            <div className="absolute inset-0 bg-surface/0 group-hover:bg-surface/20 transition-colors duration-300 flex items-end p-6 opacity-0 group-hover:opacity-100">
              <div className="bg-surface/90 backdrop-blur-sm p-4 w-full border border-outline-variant/30">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-1">Model</span>
                <span className="font-body-md text-body-md text-primary font-medium cursor-pointer hover:underline">View Project</span>
              </div>
            </div>
          </div>
          {/* Item 5 */}
          <div className="masonry-item relative group image-hover-wrapper bg-white border border-outline-variant/30">
            <img
              alt="E-commerce perfume photography"
              className="w-full h-auto block object-cover aspect-[3/2]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbbkoprrCWRVa_T8a7w2vC6zIUMyN6_QB-GEa2yR2uUiTQUw2G-h4oZaSguTPZ6uxtQbflhj3f-DdAIJfdxxeNrnG5C_-vT-qbPCXIoao9x0ajakDj2-2m3O9HB_sfdDKbzYMTsl3Vj1duDYgGTEnXwQ-bc5oEZw-8l8ruf1mYkPqTG1rZfQ0KlKj-HKX2P1d58cPAr-maV0JrZo-z5Exwqi6p5DxU859Dx5ZIQCx3GGN-Nbw7kNL4BlZeOr6D5VGr0jN6H8Pga2Q"
            />
            <div className="absolute inset-0 bg-surface/0 group-hover:bg-surface/20 transition-colors duration-300 flex items-end p-6 opacity-0 group-hover:opacity-100">
              <div className="bg-surface/90 backdrop-blur-sm p-4 w-full border border-outline-variant/30">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-1">E-commerce</span>
                <span className="font-body-md text-body-md text-primary font-medium cursor-pointer hover:underline">View Project</span>
              </div>
            </div>
          </div>
          {/* Item 6 */}
          <div className="masonry-item relative group image-hover-wrapper bg-white border border-outline-variant/30">
            <img
              alt="Creative lifestyle product shot"
              className="w-full h-auto block object-cover aspect-[4/3]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdG9qDe-nMigN-NBxnR-rQ4qLB-k9rKGg-xGfVYV3sOWOL8Ml33F1-bkTzuroRl3gIvNAiOAYAu-k93A6XaKXxNvjoM3Emyr5sTKQDjEM7p8BdOUSx_jHQtJSXdV6mkK1S-OsPuApmgisG2sfD1hptcGCBZ9a2iIW4goHBu69kDPsf7sqgzp3b2--Otgti080k65dE09yVYXygRhuMblt0oKqRQCPg2UXIuTpp4RDjVdncLPzcfPlnkZDMIVZFNYotbs-X6fe8vq0"
            />
            <div className="absolute inset-0 bg-surface/0 group-hover:bg-surface/20 transition-colors duration-300 flex items-end p-6 opacity-0 group-hover:opacity-100">
              <div className="bg-surface/90 backdrop-blur-sm p-4 w-full border border-outline-variant/30">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-1">Creative</span>
                <span className="font-body-md text-body-md text-primary font-medium cursor-pointer hover:underline">View Project</span>
              </div>
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-16">
          <button className="bg-transparent border border-primary text-primary px-8 py-3 font-label-sm text-label-sm uppercase tracking-widest hover:bg-surface-container-low transition-colors duration-300">
            Load More Projects
          </button>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
