'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Smartphone, Globe, Layers, BarChart } from 'lucide-react';

const reasons = [
  {
    title: 'Extreme Performance',
    description: 'We build lightning-fast websites using Next.js 15+ for the ultimate speed score.',
    icon: Zap,
    color: 'text-cyan-400',
    glow: 'bg-cyan-500/20'
  },
  {
    title: 'Futuristic Design',
    description: 'Premium, modern UI/UX crafted with a focus on immersive digital experiences.',
    icon: Layers,
    color: 'text-purple-400',
    glow: 'bg-purple-500/20'
  },
  {
    title: 'SEO Supremacy',
    description: 'Advanced metadata and structure optimization to dominate search results.',
    icon: BarChart,
    color: 'text-blue-400',
    glow: 'bg-blue-500/20'
  },
  {
    title: 'Adaptive Layouts',
    description: 'Perfect performance across all futuristic devices and screen formats.',
    icon: Smartphone,
    color: 'text-cyan-400',
    glow: 'bg-cyan-500/20'
  },
  {
    title: 'Fortified Security',
    description: 'Enterprise-grade security protocols to safeguard your digital presence.',
    icon: Shield,
    color: 'text-purple-400',
    glow: 'bg-purple-500/20'
  },
  {
    title: 'Global Scalability',
    description: 'Built for massive growth, handling millions of users with ease.',
    icon: Globe,
    color: 'text-blue-400',
    glow: 'bg-blue-500/20'
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#030014] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-cyan-400 font-black tracking-[0.3em] uppercase text-xs">
                The Edge
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1]">
                Revolutionizing <br /> <span className="text-gradient">Digital Brands</span>
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed">
                At Websozo, we don't just follow trends. We architect the future 
                of the web with high-tech solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col space-y-4"
                >
                  <div className={`w-12 h-12 ${reason.glow} rounded-2xl flex items-center justify-center ${reason.color} border border-white/5 group-hover:scale-110 transition-transform`}>
                    <reason.icon size={24} />
                  </div>
                  <h3 className="text-xl font-black text-white">{reason.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -inset-10 bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 opacity-30 blur-3xl rounded-[4rem] animate-pulse" />
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                alt="Tech visualization"
                className="w-full h-auto opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent" />
              
              {/* Overlay Glass Badge */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-1">Status</p>
                  <p className="text-white font-black">All Systems Functional</p>
                </div>
                <div className="w-3 h-3 bg-cyan-500 rounded-full animate-ping" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
