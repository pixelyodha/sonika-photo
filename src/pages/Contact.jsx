import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project_type: 'E-Commerce Catalog',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, phone, project_type, message } = formData;
    
    // Construct WhatsApp message
    const whatsappMessage = `Hello Studio, I have a new inquiry!

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Project Type:* ${project_type}

*Project Details:*
${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = '917827043420'; // Assuming +91 is standard here as the placeholder says +91
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Contact Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-section-padding-desktop mb-section-padding-desktop" id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info & Links */}
          <div>
            <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8">Let's Create Together.</h2>
            <p className="font-body-lg text-body-lg text-secondary mb-16 max-w-md">
              Ready to elevate your brand's visual identity? Reach out to schedule a consultation or request a detailed quote for your next project.
            </p>
            <div className="space-y-8">
              <div>
                <p className="font-label-sm text-label-sm tracking-widest text-outline mb-2">DIRECT LINE</p>
                <a className="font-headline-sm text-headline-sm text-primary hover:text-secondary transition-colors flex items-center gap-3" href="tel:7827043420">
                  <span className="material-symbols-outlined text-[24px]">call</span>
                  7827043420
                </a>
              </div>
              <div>
                <p className="font-label-sm text-label-sm tracking-widest text-outline mb-2">STUDIO LOCATION</p>
                <p className="font-body-lg text-body-lg text-primary max-w-sm">
                  Level 4, DLF Cyber Hub<br />
                  Sector 24, Gurugram<br />
                  Haryana 122002
                </p>
              </div>
              <div className="pt-8 border-t border-outline-variant/30 flex gap-6">
                <a className="border border-outline-variant p-4 hover:border-primary hover:bg-surface-container-low transition-all" href="#">
                  <span className="material-symbols-outlined text-[24px] text-primary">chat</span>
                </a>
                <a className="border border-outline-variant p-4 hover:border-primary hover:bg-surface-container-low transition-all" href="#">
                  <span className="material-symbols-outlined text-[24px] text-primary">photo_camera</span>
                </a>
                <a className="border border-outline-variant p-4 hover:border-primary hover:bg-surface-container-low transition-all" href="#">
                  <span className="material-symbols-outlined text-[24px] text-primary">play_arrow</span>
                </a>
              </div>
            </div>
          </div>
          {/* Inquiry Form */}
          <div className="bg-surface p-8 md:p-12 border border-outline-variant/20 shadow-[0_20px_40px_rgba(0,0,0,0.02)]">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-8">Send an Inquiry</h3>
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <label className="font-label-sm text-label-sm tracking-widest text-secondary block mb-2" htmlFor="name">FULL NAME</label>
                <input
                  className="w-full bg-transparent border-0 border-b border-primary/20 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-primary placeholder-outline-variant transition-colors"
                  id="name"
                  placeholder="Jane Doe"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="font-label-sm text-label-sm tracking-widest text-secondary block mb-2" htmlFor="email">EMAIL ADDRESS</label>
                  <input
                    className="w-full bg-transparent border-0 border-b border-primary/20 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-primary placeholder-outline-variant transition-colors"
                    id="email"
                    placeholder="jane@company.com"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="font-label-sm text-label-sm tracking-widest text-secondary block mb-2" htmlFor="phone">PHONE NUMBER</label>
                  <input
                    className="w-full bg-transparent border-0 border-b border-primary/20 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-primary placeholder-outline-variant transition-colors"
                    id="phone"
                    placeholder="+91 "
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label className="font-label-sm text-label-sm tracking-widest text-secondary block mb-2" htmlFor="project_type">PROJECT TYPE</label>
                <select
                  className="w-full bg-transparent border-0 border-b border-primary/20 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-primary transition-colors"
                  id="project_type"
                  value={formData.project_type}
                  onChange={handleChange}
                >
                  <option>E-Commerce Catalog</option>
                  <option>Brand Campaign</option>
                  <option>Editorial / Lookbook</option>
                  <option>Product Photography</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="font-label-sm text-label-sm tracking-widest text-secondary block mb-2" htmlFor="message">PROJECT DETAILS</label>
                <textarea
                  className="w-full bg-transparent border-0 border-b border-primary/20 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-primary placeholder-outline-variant transition-colors resize-none"
                  id="message"
                  placeholder="Tell us about your brand, timeline, and vision..."
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                className="w-full bg-primary text-on-primary px-8 py-4 font-label-sm text-label-sm tracking-widest hover:bg-secondary transition-colors duration-300 mt-8"
                type="submit"
              >
                SUBMIT INQUIRY
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
