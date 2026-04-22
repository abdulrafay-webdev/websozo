'use client';

import PageHero from "@/components/common/PageHero";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-[#030014]">
      <PageHero 
        title="Establish Connection"
        subtitle="Initiate a secure communication channel with our engineering team for your next digital deployment."
      />
      
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                  High-Priority <br /> <span className="text-gradient">Communications</span>
                </h2>
                <p className="text-gray-400 text-xl leading-relaxed">
                  Our specialists are ready to analyze your requirements and 
                  provide a tactical roadmap for your brand's future.
                </p>
              </div>
              
              <div className="space-y-12">
                {[
                  { title: 'Data Stream', value: 'webbssozo@gmail.com', icon: Mail, color: 'text-cyan-400', href: 'mailto:webbssozo@gmail.com' },
                  { title: 'Direct Line', value: '03239518506', icon: Phone, color: 'text-purple-400', href: 'https://wa.me/923239518506' },
                  { title: 'Base Coordinates', value: 'North Nazimabad, Karachi, Pakistan', icon: MapPin, color: 'text-blue-400', href: '#' }
                ].map((item, idx) => (
                  <a key={idx} href={item.href} target={item.href.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer" className="flex items-start space-x-8 group">
                    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-[1.25rem] flex items-center justify-center shrink-0 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.1)] transition-all">
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-gray-500 uppercase tracking-[0.3em] mb-2">{item.title}</h3>
                      <p className="text-white text-xl font-bold group-hover:text-cyan-300 transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-1 rounded-[3rem] bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-cyan-500/20 border border-white/10"
            >
              <div className="bg-[#0a0a0f] rounded-[2.75rem] p-8 md:p-12 h-full shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] -z-10" />
                
                <form className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">Operator Name</label>
                      <input 
                        type="text" 
                        placeholder="IDENTIFY YOURSELF"
                        className="w-full bg-white/5 border border-white/10 px-6 py-5 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all placeholder:text-gray-700 font-bold"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="COMMUNICATION POINT"
                        className="w-full bg-white/5 border border-white/10 px-6 py-5 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all placeholder:text-gray-700 font-bold"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">Mission Objective</label>
                    <select className="w-full bg-white/5 border border-white/10 px-6 py-5 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all font-bold appearance-none">
                      <option className="bg-[#0a0a0f]">Web System Deployment</option>
                      <option className="bg-[#0a0a0f]">Infrastructure Overhaul</option>
                      <option className="bg-[#0a0a0f]">Tactical Portfolio Site</option>
                      <option className="bg-[#0a0a0f]">E-commerce Engine Build</option>
                    </select>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Detailed Intelligence</label>
                    <textarea 
                      rows={5}
                      placeholder="DESCRIBE THE SCOPE OF OPERATIONS..."
                      className="w-full bg-white/5 border border-white/10 px-6 py-5 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all placeholder:text-gray-700 font-bold"
                    ></textarea>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-black py-6 rounded-2xl shadow-[0_0_30px_rgba(0,229,255,0.2)] hover:shadow-[0_0_50px_rgba(0,229,255,0.4)] transition-all flex items-center justify-center space-x-4 group uppercase tracking-[0.2em] text-sm"
                  >
                    <span>Transmit Signal</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
