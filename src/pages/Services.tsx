import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle2, Shield, HardHat, Compass, Layers, Building } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';

const services = [
  {
    title: "CIVIL & STRUCTURAL ENGINEERING",
    description: "Full structural engineering calculations, foundation soil response analysis, and reinforced concrete framework execution.",
    image: "/images/matrock/MP1.PNG",
    link: "/contact"
  },
  {
    title: "NEW BUILDING CONSTRUCTION",
    description: "Turnkey residential and institutional construction managed from site grading and setting-out to handover.",
    image: "/images/matrock/MP3.PNG",
    link: "/contact"
  },
  {
    title: "COMMERCIAL DEVELOPMENTS",
    description: "Robust multi-level commercial facilities, office buildings, and retail plazas built for high occupancy loads.",
    image: "/images/matrock/MP6.PNG",
    link: "/contact"
  },
  {
    title: "SUBSTRUCTURE & FOUNDATIONS",
    description: "Engineered strip, pad, and raft foundations designed specifically for Anambra soil types and water tables.",
    image: "/images/matrock/MP8.PNG",
    link: "/contact"
  },
  {
    title: "STRUCTURAL ROOFING SYSTEMS",
    description: "High-integrity structural timber and steel truss installation with weather-proof, wind-resistant roof coverings.",
    image: "/images/matrock/MP4.PNG",
    link: "/contact"
  },
  {
    title: "ARCHITECTURAL & STRUCTURAL DESIGN",
    description: "Comprehensive architectural plans, structural engineering drawings, and regulatory ANSPPB documentation.",
    image: "/images/matrock/MP12.PNG",
    link: "/contact"
  },
  {
    title: "BUILDING RENOVATION & RETROFITTING",
    description: "Structural reinforcement, load-bearing modifications, facade updates, and remodeling of existing properties.",
    image: "/images/matrock/MP11.PNG",
    link: "/contact"
  },
  {
    title: "GENERAL ENGINEERING CONTRACTING",
    description: "Comprehensive site supervision, material procurement, trade coordination, and turnkey project delivery.",
    image: "/images/matrock/MP7.PNG",
    link: "/contact"
  }
];

export function Services() {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative h-[48vh] min-h-[380px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-brand-charcoal">
          <img 
            src="/images/matrock/MP3.PNG" 
            alt="Civil & Structural Engineering Services in Anambra State" 
            className="w-full h-full object-cover object-center brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-brand-orange font-oswald font-semibold mb-2 inline-block">
              TECHNICAL SCOPE & SERVICES
            </span>
            <h1 className="font-oswald text-4xl sm:text-5xl md:text-6xl font-bold !text-white uppercase tracking-wide mb-3">
              OUR <span className="text-brand-orange">SERVICES</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
              Engineering solutions and building construction delivered with precision across Awka, Onitsha, Nnewi, and throughout Anambra State, Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-16 sm:py-20 bg-brand-light-gray/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="COMPREHENSIVE ENGINEERING CAPABILITIES" 
            subtitle="From foundation engineering to roof installation, MATROCK ENGINEERING COMPANY NIG LTD offers integrated services built to national standards." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
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

      {/* 3. QUALITY ASSURANCE PILLARS */}
      <section className="py-16 sm:py-20 bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="OUR QUALITY ASSURANCE FRAMEWORK" 
            subtitle="How we maintain structural integrity and client satisfaction on every project site." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="p-7 sm:p-8 bg-slate-50/70 border border-slate-200 rounded-xl shadow-xs">
              <Shield className="text-brand-orange mb-4" size={36} />
              <h3 className="font-oswald text-lg font-bold text-brand-charcoal mb-2 uppercase tracking-wide">
                Rigorous Material Testing
              </h3>
              <p className="text-brand-medium-gray text-xs sm:text-sm leading-relaxed font-light">
                We verify concrete compressive strength, tensile strength of steel rebar, and ensure all sharp sand and aggregates are clean and devoid of silt impurities before casting.
              </p>
            </div>
            
            <div className="p-7 sm:p-8 bg-slate-50/70 border border-slate-200 rounded-xl shadow-xs">
              <HardHat className="text-brand-orange mb-4" size={36} />
              <h3 className="font-oswald text-lg font-bold text-brand-charcoal mb-2 uppercase tracking-wide">
                Dedicated Site Oversight
              </h3>
              <p className="text-brand-medium-gray text-xs sm:text-sm leading-relaxed font-light">
                Continuous engineering supervision ensures formwork rigidity, proper concrete cover spacing, accurate beam depths, and optimal water-to-cement ratios on site.
              </p>
            </div>
            
            <div className="p-7 sm:p-8 bg-slate-50/70 border border-slate-200 rounded-xl shadow-xs">
              <Compass className="text-brand-orange mb-4" size={36} />
              <h3 className="font-oswald text-lg font-bold text-brand-charcoal mb-2 uppercase tracking-wide">
                Regulatory Compliance
              </h3>
              <p className="text-brand-medium-gray text-xs sm:text-sm leading-relaxed font-light">
                We adhere strictly to the Nigerian National Building Code and collaborate closely with the Anambra State Physical Planning Board (ANSPPB) for seamless site approvals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <section className="relative py-20 bg-brand-charcoal text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/matrock/MP1.PNG" 
            alt="MATROCK Construction Project" 
            className="w-full h-full object-cover object-center brightness-[0.2]"
          />
          <div className="absolute inset-0 bg-brand-charcoal/80"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-orange font-oswald font-semibold mb-2 inline-block">
            TAILORED SOLUTIONS
          </span>
          <h2 className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-bold !text-white mb-4 uppercase tracking-wide">
            NEED A SPECIALIZED <span className="text-brand-orange">ENGINEERING ESTIMATE?</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-xl mx-auto font-light leading-relaxed">
            Contact our engineering team in Awka today to discuss your building plans, site conditions, or bill of quantities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3.5">
            <Link 
              to="/contact" 
              className="bg-brand-orange text-white font-oswald font-semibold px-8 py-3.5 text-sm rounded-lg shadow-sm hover:bg-white hover:text-brand-charcoal transition-all tracking-wider uppercase inline-flex items-center justify-center gap-2"
            >
              REQUEST A QUOTE
            </Link>
            <a 
              href="tel:08061294537" 
              className="bg-white/10 border border-white/20 text-white font-oswald font-semibold px-8 py-3.5 text-sm rounded-lg shadow-sm hover:bg-white/20 transition-all tracking-wider uppercase inline-flex items-center justify-center gap-2"
            >
              <Phone size={16} />
              CALL 0806 129 4537
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
