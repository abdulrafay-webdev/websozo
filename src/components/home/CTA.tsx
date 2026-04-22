'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-[#030014] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] p-12 md:p-24 text-center overflow-hidden border border-white/10 group"
        >
          {/* Neon Background Effects */}
          <div className="absolute inset-0 bg-[#0a0a0f] -z-20" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] -z-10 group-hover:bg-cyan-600/30 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 group-hover:bg-purple-600/30 transition-colors duration-700" />
          
          <div className="max-w-4xl mx-auto space-y-10 relative z-10">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="inline-block p-4 rounded-3xl bg-white/5 border border-white/10 mb-4"
            >
              <Sparkles className="text-cyan-400 w-8 h-8" />
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-tight">
              Ready to Own Your <br />
              <span className="text-gradient">Digital Space?</span>
            </h2>
            
            <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
              Get a professional, modern website for just Rs. 3000. 
              Limited time offer for businesses looking to scale.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/contact"
                  className="block px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-black text-xl text-white shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_50px_rgba(0,229,255,0.5)] transition-all flex items-center justify-center space-x-3 group"
                >
                  <span>Get Started for Rs. 3000</span>
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
