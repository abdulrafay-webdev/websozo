'use client';

import PageHero from "@/components/common/PageHero";
import { motion } from "framer-motion";
import { CheckCircle2, Cpu, Rocket, ShieldCheck, User2 } from "lucide-react";
import CTA from "@/components/home/CTA";

const teamMembers = [
  {
    name: "Abdul Rafay",
    role: "Founder & Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop",
    color: "from-cyan-500 to-blue-600"
  },
  {
    name: "Sheikh Ahmed Shah",
    role: "Co-Founder",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&fit=crop",
    color: "from-purple-500 to-pink-600"
  },
  {
    name: "Muhammad Taha",
    role: "Brand Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&fit=crop",
    color: "from-blue-500 to-indigo-600"
  }
];

const About = () => {
  return (
    <div className="bg-[#030014]">
      <PageHero 
        title="Our Story"
        subtitle="Three young visionaries on a mission to digitize the future of every business."
      />
      
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Empowering Businesses <br /> <span className="text-gradient">Through Digital Evolution</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-medium">
                Websozo is the brainchild of three young entrepreneurs—Abdul Rafay, Sheikh Ahmed Shah, and Muhammad Taha. 
                Aged between 20 to 22, we started with a shared vision: no business, no matter how small or large, 
                should be left behind in the digital era.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                From local shops to expanding enterprises, our motive is to bridge the technology gap. 
                We believe that every shop owner and business deserves a powerful digital presence 
                that works for them 24/7.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[
                  "Digital Inclusion for All",
                  "Affordable Pro Tech",
                  "24/7 Business Growth",
                  "Youth-Driven Innovation"
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3 text-gray-300 font-bold">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <CheckCircle2 size={16} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="relative rounded-[3rem] overflow-hidden border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Team Collaboration"
                  className="w-full opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 space-y-4"
          >
            <span className="text-cyan-400 font-black tracking-[0.3em] uppercase text-xs">The Visionaries</span>
            <h2 className="text-4xl md:text-6xl font-black text-white">Meet Our <span className="text-gradient">Team</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A powerhouse of three partners aged 20-22, working together to redefine the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative"
              >
                <div className="relative p-1 rounded-3xl overflow-hidden bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 transition-all duration-500">
                  <div className="relative bg-[#030014] rounded-[1.4rem] p-8 overflow-hidden">
                    {/* Background Glow */}
                    <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r ${member.color} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity`} />
                    
                    <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 mb-8 mx-auto group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-500">
                      <User2 size={40} />
                    </div>
                    
                    <h3 className="text-2xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className={`text-sm font-bold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r ${member.color}`}>
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <h2 className="text-3xl font-black text-white uppercase tracking-[0.2em]">Our Operating Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { title: 'Inclusion', icon: Cpu, color: 'text-cyan-400', desc: 'Making tech accessible for every small shop and local business.' },
                { title: 'Velocity', icon: Rocket, color: 'text-purple-400', desc: 'Moving at the speed of the digital age to keep you ahead.' },
                { title: 'Support', icon: ShieldCheck, color: 'text-blue-400', desc: 'Continuous guidance for businesses entering the digital world.' }
              ].map((value, idx) => (
                <div key={idx} className="p-10 rounded-3xl bg-white/5 border border-white/10 group hover:border-cyan-500/50 transition-all">
                  <value.icon className={`${value.color} w-12 h-12 mx-auto mb-6 group-hover:scale-110 transition-transform`} />
                  <h3 className="text-xl font-black text-white mb-4 tracking-widest uppercase">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default About;
