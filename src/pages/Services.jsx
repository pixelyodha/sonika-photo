import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-section-padding-desktop px-8 md:px-12 max-w-[1440px] mx-auto flex flex-col items-center justify-center text-center min-h-[614px]">
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8 max-w-4xl">Our Specialized Services</h1>
        <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto">
          Delivering uncompromising quality through technical precision and artistic vision. We provide end-to-end photographic solutions tailored for brands that demand perfection.
        </p>
      </section>

      {/* Service Breakdown */}
      <section className="w-full py-section-padding-desktop px-8 md:px-12 max-w-[1440px] mx-auto space-y-32">
        {/* Service 1: E-commerce */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter items-center">
          <div className="md:col-span-5 md:col-start-1 space-y-6 order-2 md:order-1">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">01</span>
            <h2 className="font-headline-md text-headline-md text-primary">E-commerce Product Shoots</h2>
            <p className="font-body-md text-body-md text-secondary">
              High-volume, impeccable white-background cataloging designed specifically for platforms like Amazon, Flipkart, and Myntra. We ensure strict adherence to marketplace guidelines while maintaining the visual integrity of your product.
            </p>
            <ul className="space-y-3 pt-4 border-t border-outline-variant/30">
              <li className="flex items-center text-on-surface-variant font-body-md text-body-md">
                <span className="material-symbols-outlined text-outline mr-3 text-sm">check</span> 24-Hour Turnaround
              </li>
              <li className="flex items-center text-on-surface-variant font-body-md text-body-md">
                <span className="material-symbols-outlined text-outline mr-3 text-sm">check</span> Exact Color Accuracy
              </li>
              <li className="flex items-center text-on-surface-variant font-body-md text-body-md">
                <span className="material-symbols-outlined text-outline mr-3 text-sm">check</span> Efficient Batch Processing
              </li>
            </ul>
          </div>
          <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container">
              <img
                alt="E-commerce product photography setup"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                data-alt="A minimalist product photography setup featuring a sleek smart watch resting on a pure white, seamless background. The lighting is bright, even, and high-key, casting very soft, diffused shadows to emphasize the product's clean lines and metallic textures. The overall aesthetic is extremely clean, professional, and optimized for e-commerce cataloging, relying on a palette of crisp whites and deep charcoal blacks with absolute color precision."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK4NIjJ8ietgLLT16KXoppdBerKkVJUkeMtRIrAxAaQDIhOFKQccy8ftwBkPnD7OHpTFxG_x2dw4JzvY5rXvkxs19ptgCaE3Ecy61XGKI2uMxbbRhybwX7bFIYhCyg8FERw3LjNLQb4qnYsYkCqs6uYKd6M0ySqSAJ_bwgBf_7qBUWzKsfvR1j1P0UEUdmeZnqol7mF009wziNl8cQuPGg4oXyCo2RT6t7SXykT0-zFY_DtEr8ZFM7LVH_CFZt-xSfq4AaqhCyWKM"
              />
            </div>
          </div>
        </div>

        {/* Service 2: Conceptual */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter items-center">
          <div className="md:col-span-6 md:col-start-1">
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container">
              <img
                alt="Conceptual creative shoot"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                data-alt="An artistic, conceptual still-life photography composition featuring luxury skincare bottles arranged on minimal, geometric beige pedestals. The lighting is dramatic and directional, creating sharp, stark shadows that add depth and mood. The aesthetic is highly editorial and high-end, utilizing a sophisticated palette of warm off-whites, muted sand tones, and deep shadows, conveying a sense of premium brand storytelling and meticulous set design."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtAric4YbwksApV30Izw6OnGY5R9JapJ7ciss73EqQmlP9BBk9gSLs9g9KkRTWdaCv3ugc3yHjlJ-oqe9z8RG4VhIVADF2sFYrVXQQtyUKPU91rAdym0MJ7_UTC75P-26GPs3PDCuVd7qZWmT5qb62k0bXqlp8Qikp5A2Q1yqni0duK_PcUqard2OkGtZk-pJKTymkezFTaEuT7zJw_g2y4jXVyxSM6BLdhaVIY77D3Wb-FXlKVlEP4Cz_6iM75Ci80XG__D0i6Ps"
              />
            </div>
          </div>
          <div className="md:col-span-5 md:col-start-8 space-y-6">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">02</span>
            <h2 className="font-headline-md text-headline-md text-primary">Conceptual &amp; Creative Shoots</h2>
            <p className="font-body-md text-body-md text-secondary">
              Elevate your brand identity with artistic storytelling. We provide comprehensive art direction, unique lighting setups, and custom set designs to create striking, memorable imagery that sets your brand apart.
            </p>
            <ul className="space-y-3 pt-4 border-t border-outline-variant/30">
              <li className="flex items-center text-on-surface-variant font-body-md text-body-md">
                <span className="material-symbols-outlined text-outline mr-3 text-sm">check</span> Full Art Direction
              </li>
              <li className="flex items-center text-on-surface-variant font-body-md text-body-md">
                <span className="material-symbols-outlined text-outline mr-3 text-sm">check</span> Custom Set Construction
              </li>
              <li className="flex items-center text-on-surface-variant font-body-md text-body-md">
                <span className="material-symbols-outlined text-outline mr-3 text-sm">check</span> Advanced Lighting Techniques
              </li>
            </ul>
          </div>
        </div>

        {/* Service 3: Model & Apparel */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter items-center">
          <div className="md:col-span-5 md:col-start-1 space-y-6 order-2 md:order-1">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">03</span>
            <h2 className="font-headline-md text-headline-md text-primary">Model &amp; Apparel Shoots</h2>
            <p className="font-body-md text-body-md text-secondary">
              Complete lookbook and campaign productions. We handle all aspects including professional model sourcing, styling, and hair &amp; makeup coordination, available both in our studio or on-location.
            </p>
            <ul className="space-y-3 pt-4 border-t border-outline-variant/30">
              <li className="flex items-center text-on-surface-variant font-body-md text-body-md">
                <span className="material-symbols-outlined text-outline mr-3 text-sm">check</span> Studio &amp; On-Location
              </li>
              <li className="flex items-center text-on-surface-variant font-body-md text-body-md">
                <span className="material-symbols-outlined text-outline mr-3 text-sm">check</span> Professional Styling
              </li>
              <li className="flex items-center text-on-surface-variant font-body-md text-body-md">
                <span className="material-symbols-outlined text-outline mr-3 text-sm">check</span> Hair &amp; makeup Coordination
              </li>
            </ul>
          </div>
          <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container">
              <img
                alt="Model fashion photography"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                data-alt="A high-fashion editorial portrait of a model wearing minimalist, contemporary clothing, shot in a bright, airy studio environment. The lighting is soft and natural, creating a clean, sophisticated atmosphere typical of premium lookbooks. The image uses a muted, neutral color palette with emphasis on textures and subtle skin tones, reflecting a quiet, refined, and highly professional photographic approach."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEbqGmKJ0cwJwnAyHqXNfpeEvww0XH7hKi9eF3C2Z2Uax47iHHV-XVosRkSPgl_VJsP87whOYSMMc9FwDbgC2C4aOC-uWdTe9I1K92OLzx418j9L6zjkAA4oBvqOMu7jFBtCJPsQLDn_tEm3oT4w4_on7WaV3RqScPWfu8vbZiIZ2wi7VzXAVhZjOne33XrnPHwmM1KKW54aL9uBoT61urYdn_heeCbJuiL-mUHVZICy51piX5ICmuLukXloQFSKChJd1q80ux_SU"
              />
            </div>
          </div>
        </div>

        {/* Service 4: Marketplace */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter items-center">
          <div className="md:col-span-6 md:col-start-1">
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container border border-outline-variant/20 p-8 flex items-center justify-center bg-surface-container-low">
              <img
                alt="Marketplace compliant photography"
                className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                data-alt="A meticulously lit, perfectly centered red sneaker photographed against a flawless white background, specifically formatted for online marketplace cataloging. The image demonstrates technical perfection with edge-to-edge sharpness, accurate color representation, and zero distracting shadows. The visual aesthetic is highly utilitarian yet premium, emphasizing strict adherence to e-commerce technical specifications and clean, minimalist presentation."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsVWmiNNAq5_UAR68Wvhk6c8uXzsIMM1ZlO15MBqqYpiE05z7Pl6fnqfjYQDMi4wus8Z1p7HfN7CIQHPKZUvcBSCqeM7vAoTmUAdP7hUTvQEHBphYszs8SkI3faDmOsx_aN3iIRXq7c67bB-LgE8FIfGop6tQ7iuF9C-Wg1_h1wyql3FH5vfAJYTLK6iaf8s4pmu0upY4EdZjZoHXkHSHXykwcqljd2szQoeg998hN9Aldx_wOIIaPby3KI22d6EfajPO1NVbisz0"
              />
            </div>
          </div>
          <div className="md:col-span-5 md:col-start-8 space-y-6">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">04</span>
            <h2 className="font-headline-md text-headline-md text-primary">Marketplace Cataloging</h2>
            <p className="font-body-md text-body-md text-secondary">
              Navigating the complex technical requirements of various online marketplaces. We guarantee that your images meet all specific guidelines for cropping, margins, resolution, and file formats across all major platforms.
            </p>
            <ul className="space-y-3 pt-4 border-t border-outline-variant/30">
              <li className="flex items-center text-on-surface-variant font-body-md text-body-md">
                <span className="material-symbols-outlined text-outline mr-3 text-sm">check</span> Platform Guideline Compliance
              </li>
              <li className="flex items-center text-on-surface-variant font-body-md text-body-md">
                <span className="material-symbols-outlined text-outline mr-3 text-sm">check</span> Correct Aspect Ratios
              </li>
              <li className="flex items-center text-on-surface-variant font-body-md text-body-md">
                <span className="material-symbols-outlined text-outline mr-3 text-sm">check</span> Multi-format Delivery
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="w-full py-section-padding-desktop px-8 md:px-12 max-w-[1440px] mx-auto bg-surface-container-lowest border-t border-b border-outline-variant/20">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-headline-md text-primary">Our Process</h2>
          <p className="font-body-md text-body-md text-secondary mt-4 max-w-2xl mx-auto">A seamless, transparent workflow designed to deliver excellence from first contact to final delivery.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Step 1 */}
          <div className="timeline-item relative flex flex-col items-center text-center">
            <div className="timeline-line w-full"></div>
            <div className="w-12 h-12 bg-surface border border-outline-variant rounded-full flex items-center justify-center z-10 mb-6 text-primary">
              <span className="font-label-sm text-label-sm">01</span>
            </div>
            <h3 className="font-body-lg text-body-lg text-primary mb-2">Inquiry</h3>
            <p className="font-body-md text-body-md text-secondary px-4">Initial consultation to understand your brand guidelines, volume, and specific requirements.</p>
          </div>
          {/* Step 2 */}
          <div className="timeline-item relative flex flex-col items-center text-center">
            <div className="timeline-line w-full"></div>
            <div className="w-12 h-12 bg-surface border border-outline-variant rounded-full flex items-center justify-center z-10 mb-6 text-primary">
              <span className="font-label-sm text-label-sm">02</span>
            </div>
            <h3 className="font-body-lg text-body-lg text-primary mb-2">Shooting</h3>
            <p className="font-body-md text-body-md text-secondary px-4">Execution of the agreed creative brief with meticulous attention to detail and lighting.</p>
          </div>
          {/* Step 3 */}
          <div className="timeline-item relative flex flex-col items-center text-center">
            <div className="timeline-line w-full"></div>
            <div className="w-12 h-12 bg-surface border border-outline-variant rounded-full flex items-center justify-center z-10 mb-6 text-primary">
              <span className="font-label-sm text-label-sm">03</span>
            </div>
            <h3 className="font-body-lg text-body-lg text-primary mb-2">Post-Production</h3>
            <p className="font-body-md text-body-md text-secondary px-4">Rigorous retouching, color correction, and formatting to ensure flawless final output.</p>
          </div>
          {/* Step 4 */}
          <div className="timeline-item relative flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary border border-primary rounded-full flex items-center justify-center z-10 mb-6 text-on-primary">
              <span className="font-label-sm text-label-sm">04</span>
            </div>
            <h3 className="font-body-lg text-body-lg text-primary mb-2">Delivery</h3>
            <p className="font-body-md text-body-md text-secondary px-4">Secure transfer of high-resolution files, organized and formatted for immediate use.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-section-padding-desktop px-8 md:px-12 max-w-[1440px] mx-auto text-center" id="book">
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8">Start Your Project</h2>
        <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto mb-12">
          Ready to elevate your brand's visual presence? Contact us to discuss your requirements and receive a custom proposal.
        </p>
        <Link className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest hover:bg-surface-tint transition-colors duration-300" to="/contact">
          Book a Consultation
        </Link>
      </section>
    </>
  );
};

export default Services;
