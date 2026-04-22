'use client';

import PageHero from "@/components/common/PageHero";
import CTA from "@/components/home/CTA";
import { motion } from "framer-motion";
import { portfolioItems } from "@/lib/data";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const PortfolioPage = () => {
  return (
    <div className="bg-[#030014]">
      <PageHero 
        title="Project Archive"
        subtitle="Exploring the frontier of digital engineering through our most successful mission deployments."
      />
      
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group space-y-8"
              >
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 group-hover:border-cyan-500/30 transition-all duration-700 shadow-2xl">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/20 to-transparent" />
                  <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="flex justify-between items-end px-4">
                  <div className="space-y-3">
                    <p className="text-cyan-400 font-black uppercase tracking-[0.3em] text-[10px]">{item.category}</p>
                    <h3 className="text-3xl font-black text-white group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="w-14 h-14 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all shadow-xl"
                  >
                    <ArrowUpRight size={24} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default PortfolioPage;
