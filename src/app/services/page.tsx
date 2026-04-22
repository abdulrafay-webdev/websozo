'use client';

import PageHero from "@/components/common/PageHero";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTA from "@/components/home/CTA";

const ServicesPage = () => {
  return (
    <div className="bg-[#030014]">
      <PageHero 
        title="Tactical Services"
        subtitle="A comprehensive array of futuristic digital solutions engineered for modern growth and scale."
      />
      
      <Services />
      <WhyChooseUs />
      
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 rounded-[3rem] p-12 md:p-20 text-center space-y-8 border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Tailored <span className="text-gradient">Engineered Systems</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed">
              Every project is unique. We specialize in building custom digital 
              infrastructures that align perfectly with your strategic objectives.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default ServicesPage;
