'use client';

import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#030014] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block p-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-white/10 mb-8"
        >
          <div className="px-6 py-1 rounded-full bg-[#030014] text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400">
            System Subpage
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter"
        >
          <span className="text-gradient">{title}</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default PageHero;
