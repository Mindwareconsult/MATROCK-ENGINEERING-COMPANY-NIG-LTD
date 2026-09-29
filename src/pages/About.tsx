import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Target, Eye, ShieldCheck, Users, HardHat, Building2, Phone, Compass, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { AnimatedCounter } from '../components/AnimatedCounter';

export function About() {
  return (
    <div className="w-full">
      {/* 1. PAGE BANNER */}
      <section className="relative py-20 bg-brand-charcoal overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
           <img 
             src="/images/matrock/MP3.PNG" 
             className="w-full h-full object-cover object-center brightness-[0.28]" 
             alt="MATROCK Engineering Construction Site in Anambra State" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-brand-orange font-oswald font-semibold mb-2 inline-block">
              CORPORATE PROFILE
            </span>
            <h1 className="font-oswald text-4xl sm:text-5xl md:text-6xl font-bold !text-white uppercase tracking-wide mb-2">
              ABOUT MATROCK ENGINEERING
            </h1>
            <div className="flex items-center justify-center gap-2 text-slate-300 font-oswald text-xs tracking-widest uppercase">
              <Link to="/" className="hover:text-brand-orange transition-colors">HOME</Link>
              <span>/</span>
              <span className="text-brand-orange">ABOUT US</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. COMPANY OVERVIEW */}
      <section className="py-20 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 35 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="lg:w-1/2 w-full">
              <div className="relative">
                <img 
                  src="/images/matrock/MP6.PNG" 
                  alt="MATROCK Engineering Company Nig Ltd - Awka, Anambra State" 
                  className="rounded-2xl shadow-xl w-full object-cover object-center h-[420px] sm:h-[460px]"
                />
                <div className="absolute -bottom-5 -right-5 bg-brand-charcoal text-white p-5 rounded-2xl shadow-xl hidden sm:block border-2 border-brand-orange">
                  <span className="font-oswald text-2xl font-bold text-brand-orange block">AWKA</span>
                  <span className="text-[11px] uppercase tracking-wider text-slate-300 font-medium">Headquarters</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <span className="text-xs uppercase tracking-[0.2em] font-oswald text-brand-orange font-semibold block mb-2">
                INDIGENOUS ENGINEERING EXCELLENCE
              </span>
              <h2 className="font-oswald text-2xl sm:text-4xl font-bold text-brand-charcoal uppercase tracking-wide mb-3 leading-tight">
                CIVIL & STRUCTURAL ENGINEERING IN AWKA, ANAMBRA STATE
              </h2>
              <div className="w-14 h-1 bg-brand-orange mb-6"></div>
              
              <div className="space-y-4 text-brand-medium-gray text-sm sm:text-base leading-relaxed font-light">
                <p>
                  <strong>MATROCK ENGINEERING COMPANY NIG LTD</strong> is an indigenous civil and structural engineering construction contractor headquartered at <strong>153 Ziks Avenue, Awka 420109, Anambra State, Nigeria</strong>.
                </p>
                <p>
                  We execute building construction, reinforced concrete frame engineering, commercial plazas, residential developments, and substructure civil works. Grounded in Anambra State, we bring technical precision and environmental awareness to every site, accounting for regional soil characteristics, hydrological conditions, and structural load calculations.
                </p>
                <p>
                  Every phase—from initial site setting-out and foundation earthworks to decking reinforcement and roof truss erection—is directed with strict engineering oversight, safety protocols, and certified building materials.
                </p>
              </div>

              <div className="mt-7 flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="bg-brand-charcoal p-3 rounded-lg text-brand-orange shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-oswald text-sm font-bold text-brand-charcoal tracking-wide uppercase">STATE-WIDE OPERATIONAL REACH</h4>
                  <p className="text-brand-medium-gray text-xs font-light">Active project operations across Awka, Onitsha, Nnewi, and throughout Nigeria.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2.5 OPERATIONAL BENCHMARKS */}
      <section className="py-16 bg-brand-petrol text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }}>
              <div className="font-oswald text-4xl sm:text-5xl font-bold text-brand-orange mb-1 tabular-nums">
                <AnimatedCounter end={17} suffix="+" />
              </div>
              <p className="font-oswald uppercase tracking-wider text-xs sm:text-sm text-slate-200 font-semibold">Documented Site Milestones</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.16 }}>
              <div className="font-oswald text-4xl sm:text-5xl font-bold text-brand-orange mb-1 tabular-nums">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <p className="font-oswald uppercase tracking-wider text-xs sm:text-sm text-slate-200 font-semibold">Structural Quality Commitment</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.24 }}>
              <div className="font-oswald text-4xl sm:text-5xl font-bold text-brand-orange mb-1 tabular-nums">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <p className="font-oswald uppercase tracking-wider text-xs sm:text-sm text-slate-200 font-semibold">Regulatory Building Code Adherence</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-20 bg-brand-light-gray/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 25 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 sm:p-10 rounded-2xl shadow-xs border border-brand-border hover:border-brand-orange/40 transition-colors"
            >
              <Target size={36} className="text-brand-orange mb-3" />
              <h3 className="font-oswald text-xl sm:text-2xl font-bold text-brand-charcoal uppercase tracking-wide mb-2.5">Our Mission</h3>
              <p className="text-brand-medium-gray text-sm sm:text-base leading-relaxed font-light">
                To deliver dependable, structurally sound, and cost-efficient civil engineering and building construction services across Nigeria. We construct sustainable structures that meet exact client specifications through disciplined technical oversight, certified construction inputs, and an uncompromising commitment to structural safety.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 25 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-brand-charcoal p-8 sm:p-10 rounded-2xl shadow-xl border border-white/10"
            >
              <Eye size={36} className="text-brand-orange mb-3" />
              <h3 className="font-oswald text-xl sm:text-2xl font-bold !text-white uppercase tracking-wide mb-2.5">Our Vision</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                To stand as a foremost benchmark of civil engineering excellence and construction integrity in Anambra State and across Nigeria, renowned for structural reliability, technical precision, and enduring architectural craftsmanship.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="OUR GUIDING PRINCIPLES" subtitle="The engineering and ethical standards that underpin every structure we build." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                icon: <ShieldCheck size={30} />,
                title: "TECHNICAL INTEGRITY",
                desc: "We enforce accurate concrete mix ratios, correct reinforcement diameters, and strict curing cycles to ensure structures perform safely throughout their lifespan."
              },
              {
                icon: <Compass size={30} />,
                title: "ENGINEERING DISCIPLINE",
                desc: "No cutting corners. From soil foundation analysis to roof truss anchoring, every step follows verified engineering standards and building codes."
              },
              {
                icon: <Users size={30} />,
                title: "CLIENT TRANSPARENCY",
                desc: "We prioritize honest milestone updates, detailed bills of quantities, and direct communication to foster mutual trust on every project."
              }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }} 
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="text-center p-8 bg-slate-50/70 rounded-xl border border-slate-200"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white text-brand-orange mb-4 shadow-xs border border-slate-200">
                  {value.icon}
                </div>
                <h4 className="font-oswald text-base font-bold text-brand-charcoal uppercase tracking-wide mb-2">{value.title}</h4>
                <p className="text-brand-medium-gray text-xs sm:text-sm leading-relaxed font-light">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5 MULTIDISCIPLINARY ENGINEERING DIVISIONS */}
      <section className="py-20 bg-brand-light-gray/40 border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="OUR MULTIDISCIPLINARY DIVISIONS" 
            subtitle="Organized operational units delivering comprehensive civil and structural engineering execution." 
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              {
                title: "CIVIL & STRUCTURAL ENGINEERING",
                role: "Core Design & Calculations",
                desc: "Specialized in structural design, foundation analysis, and reinforced concrete detailing."
              },
              {
                title: "SITE SUPERVISION & INSPECTION",
                role: "Quality Control On-Site",
                desc: "Ensures all formwork, rebar spacing, and masonry alignment conform to engineering drawings."
              },
              {
                title: "QUANTITY SURVEYING & ESTIMATION",
                role: "Cost Management & BOQ",
                desc: "Delivers transparent bills of quantities, material schedules, and prudent cost control."
              },
              {
                title: "PROJECT MANAGEMENT & SAFETY",
                role: "Resource Scheduling & HSE",
                desc: "Coordinates trade contractors, delivery schedules, and enforces site health and safety standards."
              }
            ].map((unit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }} 
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 bg-brand-orange/10 rounded-lg flex items-center justify-center text-brand-orange mb-3 font-oswald font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="font-oswald text-sm sm:text-base font-bold text-brand-charcoal uppercase tracking-wide mb-1">
                    {unit.title}
                  </h4>
                  <p className="text-brand-orange font-oswald text-[11px] font-semibold uppercase tracking-wider mb-2.5">
                    {unit.role}
                  </p>
                  <p className="text-brand-medium-gray text-xs leading-relaxed font-light">
                    {unit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LOCAL SEO / CTA BANNER */}
      <section className="relative py-20 bg-brand-charcoal overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
           <img 
             src="/images/matrock/MP1.PNG" 
             className="w-full h-full object-cover object-center brightness-[0.2]" 
             alt="Building Construction in Anambra Nigeria" 
           />
           <div className="absolute inset-0 bg-brand-charcoal/80"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 25 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <Building2 size={46} className="text-brand-orange mx-auto mb-4" />
          <h2 className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-bold !text-white uppercase tracking-wide mb-4">
            DISCUSS YOUR BUILDING PLANS IN ANAMBRA
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto font-light">
            Visit our corporate office at <strong>153 Ziks Avenue, Awka 420109</strong>, or speak directly with our engineering team for advice and estimates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3.5">
             <Link 
                to="/contact" 
                className="bg-brand-orange text-white font-oswald font-semibold px-8 py-3.5 text-sm rounded-lg shadow-sm hover:bg-white hover:text-brand-charcoal transition-all tracking-wider uppercase inline-flex items-center justify-center gap-2"
              >
                SCHEDULE A CONSULTATION
              </Link>
              <a 
                href="tel:08061294537" 
                className="bg-white/10 border border-white/20 text-white font-oswald font-semibold px-8 py-3.5 text-sm rounded-lg shadow-sm hover:bg-white/20 transition-all tracking-wider uppercase inline-flex items-center justify-center gap-2"
              >
                <Phone size={16} />
                0806 129 4537
              </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
