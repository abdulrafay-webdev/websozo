'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Laptop, Sparkles, Code, Globe } from 'lucide-react';

const Hero = () => { 
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#030014]">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] -z-10 animate-pulse delay-1000" />
      
      {/* Grid Pattern Background */} 
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030014]/50 to-[#030014] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-10 relative">
          {/* Animated Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-xl px-6 py-2 rounded-full border border-white/10 shadow-[0_0_20px_rgba(139,92,246,0.1)] group hover:border-cyan-500/50 transition-all cursor-default">
              <Sparkles size={18} className="text-cyan-400 animate-pulse" />
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-gray-300 group-hover:text-cyan-300 transition-colors">
                Next-Gen Web Solutions
              </span>
            </div>
            <div className="inline-flex items-center space-x-3 bg-cyan-500/10 backdrop-blur-xl px-6 py-2 rounded-full border border-cyan-500/30 shadow-[0_0_20px_rgba(0,229,255,0.2)] group hover:border-cyan-400 transition-all cursor-default animate-bounce">
              <span className="text-sm font-black tracking-widest uppercase text-cyan-400">
                Lowest Market Price Guaranteed
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.95] text-white"
          >
            Professional Websites <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]">
              At Unbeatable Prices
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed font-medium"
          >
            Get your business online with a premium, high-performance website at prices much lower than the current market rates. 
            Websozo combines futuristic design with speed to give your brand the digital edge it deserves.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-5 sm:space-y-0 sm:space-x-6 pb-20"
          >
            <a
              href="https://wa.me/923239518506?text=Hi%20Websozo%2C%20I%20want%20to%20claim%20the%20special%20offer%20for%20a%20professional%20website.%20Please%20provide%20me%20more%20information."
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full sm:w-auto group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-12 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-black text-white text-xl flex items-center justify-center space-x-3">
                <span>Claim This Offer</span>
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </motion.div>
        </div>

        {/* Floating Decorative Tech Elements */}
        <div className="relative h-40 w-full max-w-4xl mx-auto hidden md:block">
          <motion.div 
            animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-0 left-0 p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-3xl flex items-center space-x-4"
          >
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Code size={20} />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Scalable</p>
              <p className="text-xs text-gray-400">Custom Architecture</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-10 right-0 p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-3xl flex items-center space-x-4"
          >
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
              <Globe size={20} />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">Global</p>
              <p className="text-xs text-gray-400">Modern Reach</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
