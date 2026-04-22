'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/lib/data';

const Process = () => {
  return (
    <section className="py-24 bg-[#030014] relative overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-purple-400 font-black tracking-[0.3em] uppercase text-xs"
          >
            Workflow
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white"
          >
            Mission <span className="text-gradient">Timeline</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            A high-efficiency execution roadmap from initial contact to deployment.
          </motion.p>
        </div>

        <div className="relative">
          {/* Central Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[2.25rem] left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500/20 via-purple-500/50 to-cyan-500/20 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 group"
              >
                <div className="w-16 h-16 bg-[#030014] border-2 border-white/10 rounded-2xl flex items-center justify-center text-2xl font-black mb-8 relative group-hover:border-cyan-500 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400 group-hover:from-cyan-400 group-hover:to-purple-400 transition-colors">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {step.description}
                </p>

                {/* Vertical Decorative Bar */}
                <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity md:hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
