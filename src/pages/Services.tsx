import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Building2, Phone, MapPin, CheckCircle2, Ruler, HardHat, Wrench, Shield } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';

const services = [
  {
    title: "NEW HOME CONSTRUCTION",
    description: "Build a home designed around your lifestyle, requirements, and long-term goals.",
    image: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&q=80&w=800",
    link: "/services/new-home-construction"
  },
  {
    title: "GENERAL BUILDING CONSTRUCTION",
    description: "Professional construction services for residential and general building projects.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800",
    link: "/services/general-building-construction"
  },
  {
    title: "COMMERCIAL PROJECTS",
    description: "Reliable construction solutions for commercial properties and business developments.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
    link: "/services/commercial-projects"
  },
  {
    title: "BUILDING DESIGN",
    description: "Practical building design solutions that provide a clear foundation for your construction project.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    link: "/services/building-design"
  },
  {
    title: "HOME RENOVATIONS",
    description: "Upgrade, improve, modernize, and transform your existing property.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
    link: "/services/home-renovations"
  },
  {
    title: "ACCESSORY BUILDING",
    description: "Functional additional structures designed to complement your main property.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    link: "/services/accessory-building"
  },
  {
    title: "METAL BUILDING",
    description: "Practical and durable metal building solutions for suitable residential and commercial applications.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    link: "/services/metal-building"
  },
  {
    title: "GENERAL CONSTRUCTION",
    description: "Comprehensive construction support tailored to the requirements of your project.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800",
    link: "/services/general-construction"
  }
];

export function Services() {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1600" 
            alt="Construction Services in Awka, Anambra State" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-oswald text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-wide mb-6"
          >
            OUR <span className="text-brand-orange">SERVICES</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-brand-light-gray max-w-2xl mx-auto font-light leading-relaxed"
          >
            Delivering top-tier construction and building solutions across Awka, Onitsha, Nnewi, and throughout Anambra State, Nigeria.
          </motion.p>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-24 bg-brand-light-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="COMPREHENSIVE CONSTRUCTION SOLUTIONS" 
            subtitle="From conceptual design to final handover, ONYIITEX offers end-to-end services tailored to the Nigerian landscape." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  link={service.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LOCAL SEO / VALUE PROPOSITION */}
      <section className="py-24 bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light-gray text-brand-orange font-oswald font-medium tracking-wide text-sm mb-6 shadow-sm border border-brand-border/50">
                <MapPin size={16} />
                <span>BUILDING ANAMBRA STATE</span>
              </div>
              <h2 className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal leading-tight mb-6 uppercase tracking-wide">
                Your Trusted Local <br />
                <span className="text-brand-orange">Construction Partner</span>
              </h2>
              <p className="text-brand-medium-gray text-lg leading-relaxed mb-6">
                Headquartered at <strong>153 Ziks Avenue, Awka</strong>, ONYIITEX Construction Company Ltd is deeply rooted in Anambra State. We understand the local terrain, regulatory requirements, and climate considerations necessary to build structures that last in Nigeria.
              </p>
              <p className="text-brand-medium-gray text-lg leading-relaxed mb-8">
                Whether it's a commercial plaza in Onitsha, an industrial facility in Nnewi, or a residential estate in Awka, our team brings localized expertise and uncompromising quality to every site.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Local Terrain Expertise",
                  "Anambra Building Codes",
                  "Climate-Resilient Designs",
                  "Reliable Supply Chains"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-orange shrink-0" size={24} />
                    <span className="text-brand-charcoal font-medium font-oswald tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 w-full"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4 translate-y-8">
                  <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600" alt="Construction Site Awka" className="rounded-xl shadow-md object-cover h-64 w-full" />
                  <div className="bg-brand-charcoal text-white p-6 rounded-xl shadow-md text-center">
                    <Ruler size={32} className="text-brand-orange mx-auto mb-3" />
                    <div className="font-oswald text-2xl font-bold mb-1">PRECISION</div>
                    <div className="text-sm text-brand-light-gray">Accurate Execution</div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="bg-brand-orange text-white p-6 rounded-xl shadow-md text-center">
                    <Shield size={32} className="mx-auto mb-3" />
                    <div className="font-oswald text-2xl font-bold mb-1">DURABILITY</div>
                    <div className="text-sm text-white/80">Built to Last</div>
                  </div>
                  <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600" alt="Nigerian Construction Workers" className="rounded-xl shadow-md object-cover h-64 w-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="relative py-24 bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <img 
             src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&q=80&w=1600" 
             className="w-full h-full object-cover" 
             alt="Building Construction in Nigeria" 
           />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <Building2 size={64} className="text-brand-orange mx-auto mb-8" />
          <h2 className="font-oswald text-3xl sm:text-5xl font-bold text-white uppercase tracking-wide mb-6">
            START YOUR PROJECT IN ANAMBRA TODAY
          </h2>
          <p className="text-brand-light-gray text-lg sm:text-xl leading-relaxed mb-10 max-w-3xl mx-auto font-light">
            Contact ONYIITEX Construction Company Ltd to discuss your vision. Visit us at <strong>153 Ziks Avenue, Awka 420109</strong>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link 
                to="/contact" 
                className="bg-brand-orange text-white font-oswald font-semibold px-8 py-4 text-lg rounded-lg shadow-sm hover:bg-white hover:text-brand-charcoal transition-colors tracking-tight inline-flex items-center justify-center gap-2"
              >
                REQUEST A QUOTE
              </Link>
              <a 
                href="tel:08061294537" 
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-oswald font-semibold px-8 py-4 text-lg rounded-lg shadow-sm hover:bg-white/20 transition-colors tracking-tight inline-flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                0806 129 4537
              </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
