import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full h-20 bg-surface/80 dark:bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 flex justify-between items-center px-8 md:px-12 max-w-[1440px] mx-auto z-50 transition-all duration-300 ${scrolled ? 'shadow-sm py-4' : 'py-6'}`}
      id="main-nav"
    >
      <Link className="font-headline-sm text-headline-sm tracking-tighter text-primary dark:text-on-primary" to="/">
        Sonika Studio
      </Link>
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-8">
        <NavLink to="/" end className={({ isActive }) => `font-body-md text-body-md uppercase tracking-widest ${isActive ? 'text-primary dark:text-on-primary font-bold border-b border-primary hover:opacity-70 transition-opacity' : 'text-secondary dark:text-secondary-fixed hover:text-primary transition-colors hover:opacity-70'} duration-300`}>Home</NavLink>
        <NavLink to="/services" className={({ isActive }) => `font-body-md text-body-md uppercase tracking-widest ${isActive ? 'text-primary dark:text-on-primary font-bold border-b border-primary hover:opacity-70 transition-opacity' : 'text-secondary dark:text-secondary-fixed hover:text-primary transition-colors hover:opacity-70'} duration-300`}>Services</NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => `font-body-md text-body-md uppercase tracking-widest ${isActive ? 'text-primary dark:text-on-primary font-bold border-b border-primary hover:opacity-70 transition-opacity' : 'text-secondary dark:text-secondary-fixed hover:text-primary transition-colors hover:opacity-70'} duration-300`}>Portfolio</NavLink>
        <NavLink to="/about" className={({ isActive }) => `font-body-md text-body-md uppercase tracking-widest ${isActive ? 'text-primary dark:text-on-primary font-bold border-b border-primary hover:opacity-70 transition-opacity' : 'text-secondary dark:text-secondary-fixed hover:text-primary transition-colors hover:opacity-70'} duration-300`}>About</NavLink>
      </nav>
      <div className="flex items-center space-x-4">
        <button className="bg-primary text-on-primary px-6 py-3 rounded-none font-label-sm text-label-sm uppercase tracking-widest hover:opacity-90 transition-opacity">
          <a href="https://wa.me/7210000220" target="_blank" rel="noopener noreferrer">Book Now</a>
        </button>
        {/* Mobile Menu Toggle */}
        <button aria-label="Open menu" className="md:hidden text-primary">
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
