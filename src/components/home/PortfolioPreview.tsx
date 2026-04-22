'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { portfolioItems } from '@/lib/data';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const PortfolioPreview = () => {
  return ( 
    <section className="py-24 bg-[#030014]" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4 max-w-2xl text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-cyan-400 font-black tracking-[0.3em] uppercase text-xs"
            >
              Excellence
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white"
            >
              Selected <span className="text-gradient">Artifacts</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/portfolio"
              className="group flex items-center space-x-3 text-white font-black hover:text-cyan-400 transition-colors"
            >
              <span className="border-b-2 border-white/10 group-hover:border-cyan-400 transition-colors pb-1">View Archive</span>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all">
                <ArrowUpRight size={20} />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioItems.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                />
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-80" />
              </div>

              <div className="p-8 absolute bottom-0 left-0 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-end">
                  <div className="space-y-2">
                    <p className="text-cyan-400 font-bold uppercase tracking-widest text-[10px]">{project.category}</p>
                    <h3 className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-white group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all"
                  >
                    <ExternalLink size={20} />
                  </motion.div>
                </div>
              </div>

              {/* Hover Border Glow */}
              <div className="absolute inset-0 border-2 border-cyan-500/0 group-hover:border-cyan-500/30 rounded-3xl transition-all duration-500 pointer-events-none shadow-[inset_0_0_20px_rgba(0,229,255,0)] group-hover:shadow-[inset_0_0_20px_rgba(0,229,255,0.1)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
