import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[870px] md:h-[921px] w-full flex items-center justify-center overflow-hidden bg-surface-container-low">
        {/* Background Image Carousel/Static for now */}
        <div className="absolute inset-0 w-full h-full">
          <img
            alt="High-end product photography studio setup"
            className="w-full h-full object-cover object-center opacity-90 transition-transform duration-[20s] hover:scale-105"
            data-alt="A sleek, high-end product photography studio setup featuring a minimalist composition. The lighting is sophisticated and dramatic, emphasizing crisp shadows and brilliant highlights indicative of premium commercial photography. A luxury watch sits elegantly on a polished surface, surrounded by subtle, diffused lighting gear in the blurred background. The overall color palette is dominated by deep charcoal, pristine whites, and metallic accents, creating a calm, authoritative, and expensive editorial aesthetic."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-34CRX8P9e-b_2f61OTfDlYgyRe_uR3AHwlJ3ePvaSR9180qJ4_xTKgg6-upgJGVaCJ1-DNYEvfMAlCQ6RbPOv-iCPkofrhENWcCu8bgwC0-Y7wrFnDjQw9yQbNAye6zBa3601F91E1_elcNvcXbxSsilzmqR85Eb5--QlV8EeWanm6x_h2voP6GxOUCaB4EcFWoPPZeBngfAJX0vZzMLnPpykDKKdOElUuXUIE2a56UqWwcNGh6x3gnbdcqwCZ2mrRG3hwJK3bo"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/30"></div>
        </div>
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary mb-6 block border border-primary/20 px-4 py-2 bg-surface/50 backdrop-blur-sm">
            Sonika Professional Photography
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8 text-shadow-subtle leading-tight">
            Product Photography <br />
            <span className="italic font-light text-secondary">that Sells</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            We craft compelling visual narratives for premium brands. Specializing in high-resolution, editorial-style imagery that elevates your products across all platforms.
          </p>
          <a
            className="group flex items-center justify-center w-14 h-14 rounded-full border border-primary text-primary hover:bg-primary hover:text-on-primary transition-all duration-300"
            href="#services"
          >
            <span className="material-symbols-outlined transition-transform group-hover:translate-y-1">arrow_downward</span>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop px-6 md:px-12 max-w-container-max-width mx-auto" id="services">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">Our Expertise</h2>
            <p className="font-body-md text-body-md text-secondary">
              Precision, clarity, and style. We offer tailored photography solutions designed to meet the rigorous standards of modern commerce and editorial publication.
            </p>
          </div>
          <Link
            className="font-label-sm text-label-sm uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors whitespace-nowrap"
            to="/portfolio"
          >
            View Full Portfolio
          </Link>
        </div>
        {/* Services Bento/Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter">
          {/* Service 1: E-Commerce */}
          <div className="md:col-span-8 group relative border border-outline-variant/50 overflow-hidden bg-surface-container-lowest flex flex-col justify-end min-h-[400px] md:min-h-[500px]">
            <img
              alt="Crisp e-commerce product shot"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              data-alt="A flawless e-commerce product photograph featuring a sleek, modern tech gadget isolated on a pure, bright white background. The lighting is perfectly balanced, eliminating harsh shadows and highlighting the product's textures and subtle curves. The composition follows a minimalist, editorial style, conveying precision and premium quality. The color palette focuses on whites, soft grays, and the natural metallic finish of the product."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2fPxUWLRJp_0_WSA9J5AgIrJB1sQe9oBZq8au9jXcB1VqK7tHZOnFoPkkfqB7vI0NbDPisL65ptH7c6TKbfdRV67T2jhICOt5c1HugiR7Tgoo6UY9rihy3PyNoxvZ6XLtxunMXYdYLgj5Yp4ut84aOOG8ByMmtrHEnJegswyoSQs8PeGp81ETPkgfPEL2hP1bPxvB28nugIYGoapUHrvjbOD8rKIUu1BastgscVHRqnwdiZ8DPXODRCl02foNTz6uSMrKbezuuks"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative z-10 p-8 md:p-12 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
              <span className="inline-block px-3 py-1 border border-primary/20 bg-surface/80 backdrop-blur-sm font-label-sm text-label-sm mb-4 uppercase tracking-wider">01</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">E-commerce Product Shoots</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                Clean, crisp, and standard-compliant imagery optimized for high conversion rates on your independent storefront.
              </p>
              <Link className="inline-flex items-center text-primary font-label-sm text-label-sm uppercase tracking-widest hover:text-secondary transition-colors" to="/services">
                Explore Service <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
          {/* Service 2: Catalog */}
          <div className="md:col-span-4 group relative border border-outline-variant/50 overflow-hidden bg-surface-container-lowest flex flex-col justify-end min-h-[400px] md:min-h-[500px]">
            <img
              alt="Marketplace catalog photography"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              data-alt="A pair of stylish, modern sneakers presented in a clean, catalog-style composition suitable for major e-commerce platforms. The background is a seamless, soft off-white surface that gently reflects the light. The lighting is bright and even, ensuring accurate color representation of the vibrant red and crisp white materials. The overall mood is commercial yet refined, fitting a high-end retail aesthetic."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNKCG10nNv8rdYB-snxSZBkn1r1sn5gvExYuXQ6-YuzcjtoYjrekqSDtZDbttpA1L6uLAmkJV2NVY29bJjD8h8MYrIZruVb1HHEwJZ4HRhMO1uK6L9Zg6krdZ3Jrtfya2d_Xx0PmTU7NnK5avZ2TdgrnRu7OUc4uMaKPNAaaC1CXCUbnGOWCqIxqhPdX8DBzYX3SfZAlh4pscDzx5BXD-T4t2sWLcI98D9koAAILqeqgbpocUb1gu7UvTuCoH9FatYztcBSoy7tlg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
            <div className="relative z-10 p-8 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
              <span className="inline-block px-3 py-1 border border-primary/20 bg-surface/80 backdrop-blur-sm font-label-sm text-label-sm mb-4 uppercase tracking-wider">02</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Marketplace Catalog</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                Strictly adhering to Myntra, Amazon, and Flipkart guidelines without compromising on visual quality.
              </p>
            </div>
          </div>
          {/* Service 3: Conceptual */}
          <div className="md:col-span-6 group relative border border-outline-variant/50 overflow-hidden bg-surface-container-lowest flex flex-col justify-end min-h-[450px]">
            <img
              alt="Creative conceptual product photography"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale hover:grayscale-0"
              data-alt="An artistic, conceptual product photography shot featuring premium skincare bottles arranged on varied geometric pedestals. The scene employs a sophisticated monochromatic palette of subtle greys and charcoal, heavily relying on stark, dramatic shadows and intentional negative space to create a modern, minimalist gallery feel. The lighting is directional and artistic, evoking a sense of luxury, calm, and high-end editorial design."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXKZUAahmS8GYtvTG-wu4_P7MhBa8netfePMjrBYx9WwuNi5hV_XyVYBYR3zFNqb3UJcR9-88lvkyu5hYthjxyemhAj30friB1VovAOZG57uLoMEOOuuq6YU-lbJOhwGBilOv4YTK_-o99zabwNbAmtBrCIrJ6tLt8XYG2GtvkQxjkekckTQC2PD5PV1q_LQUBejhF9kVe5iYB8jmrCElMOtwYSE-wTEm_nyjrBHRrKEQf5LxD1I9seRAA8Q3EyoeNO0v5DRNNSXU"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent opacity-90"></div>
            <div className="relative z-10 p-8 md:p-12">
              <span className="inline-block px-3 py-1 border border-primary/20 bg-surface/80 backdrop-blur-sm font-label-sm text-label-sm mb-4 uppercase tracking-wider">03</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Conceptual Shoots</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-6">
                Art-directed, creative campaigns that build brand identity through unique, storytelling visuals and striking compositions.
              </p>
            </div>
          </div>
          {/* Service 4: Model Shoots */}
          <div className="md:col-span-6 group relative border border-outline-variant/50 overflow-hidden bg-surface-container-lowest flex flex-col justify-end min-h-[450px]">
            <img
              alt="Fashion model wearing apparel"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              data-alt="A fashion editorial photograph showing a model wearing contemporary, minimalist apparel. The setting is a quiet, natural-light studio with large windows and an expansive concrete floor, providing a vast amount of breathing room and negative space. The aesthetic is clean, sophisticated, and slightly desaturated, emphasizing the texture of the clothing and the elegant posture of the model. The mood is calm and intentional."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtCEk-R2465GmtfZTGGEiD607vvyBq_Ekg1rjpL5WlXx4NrFaSlCTG0TGwlZt8uuZgUtX76FuHMG5fkGt5YLkN9e5SSrHUivTdj987_huw0ImEg7_hH2w2eRkUl9la8h2Sbb8Y04bVoL9vXgahyNb4jg2RUogAxTgGxH85urjUSUjAm7LIxPuqsUB4OtVF_TyWIDDPmKoqxzbclo-Qw_IMZHdA_yJx_iw2DeLqCjpdkjB7oyH839uku6lkFlpJjKv3MmnCiLc4OF0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent opacity-90"></div>
            <div className="relative z-10 p-8 md:p-12 text-right flex flex-col items-end">
              <span className="inline-block px-3 py-1 border border-primary/20 bg-surface/80 backdrop-blur-sm font-label-sm text-label-sm mb-4 uppercase tracking-wider">04</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Apparel & Model Shoots</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-6 text-right">
                Bringing your garments to life. High-end fashion editorial styling combined with commercial clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aesthetic Spacer / Quote */}
      <section className="py-24 bg-surface flex justify-center items-center px-6">
        <div className="text-center max-w-3xl">
          <span className="material-symbols-outlined text-4xl text-outline-variant mb-6">format_quote</span>
          <p className="font-headline-md text-headline-md text-primary leading-relaxed">
            "Great photography doesn't just show a product; it reveals its value, creating a silent dialogue between the object and the observer."
          </p>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-low border-y border-outline-variant/20 overflow-hidden relative">
        <div className="max-w-container-max-width mx-auto px-6 md:px-12 mb-12 flex justify-between items-center">
          <h2 className="font-headline-sm text-headline-sm text-primary uppercase tracking-widest text-sm">Client Perspectives</h2>
          {/* Carousel Controls */}
          <div className="flex space-x-2">
            <button aria-label="Previous testimonial" className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
            </button>
            <button aria-label="Next testimonial" className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors">
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
        {/* Carousel Track */}
        <div className="flex overflow-x-auto no-scrollbar gap-6 px-6 md:px-12 pb-8 max-w-container-max-width mx-auto snap-x snap-mandatory">
          {/* Card 1 */}
          <div className="min-w-[300px] md:min-w-[400px] flex-shrink-0 snap-center bg-surface p-8 border border-outline-variant/30 relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary/10"></div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
              "The conceptual shoot Sonika Studio delivered elevated our entire brand identity. The attention to negative space and lighting was exactly what our minimalist skincare line needed."
            </p>
            <div>
              <p className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-1">Aura Botanics</p>
              <p className="font-body-md text-body-md text-secondary text-sm">Creative Director</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="min-w-[300px] md:min-w-[400px] flex-shrink-0 snap-center bg-surface p-8 border border-outline-variant/30 relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary/10"></div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
              "Their understanding of marketplace guidelines is unmatched. We saw a 30% increase in conversions on Amazon after updating our catalog with their crisp, standardized imagery."
            </p>
            <div>
              <p className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-1">Nexus Electronics</p>
              <p className="font-body-md text-body-md text-secondary text-sm">E-commerce Manager</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="min-w-[300px] md:min-w-[400px] flex-shrink-0 snap-center bg-surface p-8 border border-outline-variant/30 relative opacity-50">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary/10"></div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
              "Professional, calm, and incredibly detail-oriented. The model shoot went flawlessly, and the final selects look like they belong in a high-fashion editorial magazine."
            </p>
            <div>
              <p className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-1">Maison Verve</p>
              <p className="font-body-md text-body-md text-secondary text-sm">Founder</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
