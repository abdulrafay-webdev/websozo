'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300 border-b border-transparent',
        scrolled
          ? 'glass-nav py-4 border-white/10'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <img 
              src="/images/logo.png" 
              alt="Websozo Logo" 
              className="h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
            />
            <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:from-purple-500 group-hover:to-cyan-400 transition-all duration-500">
              Websozo
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium text-sm tracking-wide relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full duration-300 shadow-[0_0_10px_#00e5ff]" />
              </Link>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://wa.me/923239518506?text=Hi%20Websozo%2C%20I%20want%20to%20build%20a%20website.%20Please%20provide%20me%20more%20information."
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-6 py-2 rounded-full font-medium text-white overflow-hidden group bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 text-sm group-hover:text-cyan-300 transition-colors">Get Started</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#030014]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-6 px-4"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 text-lg font-medium py-2 border-b border-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/923239518506?text=Hi%20Websozo%2C%20I%20want%20to%20build%20a%20website.%20Please%20provide%20me%20more%20information."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold text-center shadow-[0_0_15px_rgba(0,229,255,0.3)] mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
