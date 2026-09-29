import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, HardHat, ThumbsUp, ArrowRight, CheckCircle2, MapPin, Phone, Mail, Building2, Compass, Layers, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { ProjectCard } from '../components/ProjectCard';
import { AnimatedCounter } from '../components/AnimatedCounter';

export function Home() {
  const services = [
    {
      title: "CIVIL & STRUCTURAL ENGINEERING",
      description: "Rigorous structural calculations, foundation design, and reinforced concrete engineering.",
      image: "/images/matrock/MP1.PNG",
      link: "/services"
    },
    {
      title: "NEW BUILDING CONSTRUCTION",
      description: "Complete building construction from foundation earthworks to superstructure handover.",
      image: "/images/matrock/MP3.PNG",
      link: "/services"
    },
    {
      title: "COMMERCIAL DEVELOPMENTS",
      description: "Reliable engineering solutions for multi-level commercial complexes and business plazas.",
      image: "/images/matrock/MP6.PNG",
      link: "/services"
    },
    {
      title: "SUBSTRUCTURE & FOUNDATIONS",
      description: "Specialized raft, strip, and pad foundation engineering suited to Anambra soil conditions.",
      image: "/images/matrock/MP8.PNG",
      link: "/services"
    },
    {
      title: "STRUCTURAL ROOFING SYSTEMS",
      description: "Engineered timber, steel trusses, and premium weather-resistant roofing systems.",
      image: "/images/matrock/MP4.PNG",
      link: "/services"
    },
    {
      title: "ARCHITECTURAL & STRUCTURAL DESIGN",
      description: "Precise architectural drawings, structural layouts, and ANSPPB compliant engineering blueprints.",
      image: "/images/matrock/MP12.PNG",
      link: "/services"
    },
    {
      title: "BUILDING RENOVATION & RETROFITTING",
      description: "Structural reinforcement, space expansion, and modernizing existing properties.",
      image: "/images/matrock/MP11.PNG",
      link: "/services"
    },
    {
      title: "GENERAL ENGINEERING CONTRACTING",
      description: "End-to-end procurement, site supervision, and turnkey construction management.",
      image: "/images/matrock/MP7.PNG",
      link: "/services"
    }
  ];

  const featuredProjects = [
    {
      title: "Reinforced Concrete Framing & Structural Columns",
      category: "Structural Engineering",
      location: "Anambra State",
      image: "/images/matrock/MP1.PNG",
      link: "/projects"
    },
    {
      title: "Multi-Storey Civil & Building Construction",
      category: "Building Construction",
      location: "Anambra State",
      image: "/images/matrock/MP3.PNG",
      link: "/projects"
    },
    {
      title: "Commercial & Residential Multi-Level Development",
      category: "Building Construction",
      location: "Anambra State",
      image: "/images/matrock/MP6.PNG",
      link: "/projects"
    },
    {
      title: "Concrete Deck & Heavy Beam Casting",
      category: "Structural Engineering",
      location: "Anambra State",
      image: "/images/matrock/MP7.PNG",
      link: "/projects"
    },
    {
      title: "Residential Building Project",
      category: "Building Construction",
      location: "Oko, Orumba North, Anambra State",
      image: "/images/matrock/MP10.PNG",
      link: "/projects"
    },
    {
      title: "Upper Deck Formwork & Structural Scaffolding",
      category: "Structural Engineering",
      location: "Anambra State",
      image: "/images/matrock/MP14.PNG",
      link: "/projects"
    }
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section id="home" className="relative min-h-[640px] lg:h-[84vh] flex items-center overflow-hidden">
        {/* Background Image with Deep Teal Scrim */}
        <div className="absolute inset-0 z-0 bg-brand-charcoal">
          <img 
            src="/images/matrock/MP3.PNG" 
            alt="MATROCK Engineering Construction Site" 
            className="w-full h-full object-cover object-center brightness-[0.32]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/95 via-brand-charcoal/70 to-black/35"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 flex justify-start">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl bg-brand-charcoal/80 backdrop-blur-md p-6 sm:p-10 rounded-2xl border-l-4 border-brand-orange border-y border-r border-white/10 shadow-2xl"
          >
            <div className="flex items-center gap-2 mb-3.5">
              <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse"></span>
              <span className="font-oswald text-xs sm:text-sm font-semibold tracking-[0.2em] text-brand-orange uppercase">
                CIVIL & STRUCTURAL ENGINEERING CONTRACTORS
              </span>
            </div>
            
            <h1 className="font-oswald text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.12] mb-4 tracking-wide uppercase">
              ENGINEERING INTEGRITY. <br />
              <span className="text-brand-orange">ENDURING STRUCTURES.</span>
            </h1>
            
            <p className="text-slate-300 text-sm sm:text-base mb-8 leading-relaxed font-light">
              MATROCK ENGINEERING COMPANY NIG LTD delivers professional civil engineering, reinforced concrete structures, commercial complexes, and residential developments built to the highest technical specifications in Awka, Anambra State, and across Nigeria.
            </p>
            
            <div className="flex flex-wrap gap-3.5">
              <Link 
                to="/contact" 
                className="bg-brand-orange text-white font-oswald font-semibold px-7 py-3.5 text-sm rounded-lg shadow-sm hover:bg-white hover:text-brand-charcoal transition-all tracking-wider inline-flex items-center gap-2 uppercase"
              >
                REQUEST A CONSULTATION <ArrowRight size={16} />
              </Link>
              <Link 
                to="/projects" 
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-oswald font-semibold px-7 py-3.5 text-sm rounded-lg shadow-sm hover:bg-white/20 transition-all tracking-wider uppercase"
              >
                AUTHENTIC SITE PORTFOLIO
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST / CAPABILITIES STRIP (Deep Architectural Petrol Teal) */}
      <section className="bg-brand-petrol py-10 text-white border-y border-white/10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-40px" }} 
          transition={{ duration: 0.5 }} 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2">
              <span className="text-xs font-oswald tracking-[0.2em] uppercase text-brand-orange font-semibold block">
                PRECISION & WORKMANSHIP
              </span>
              <h2 className="font-oswald text-2xl sm:text-3xl font-bold !text-white uppercase tracking-wide mt-1">
                CIVIL PRECISION. PROVEN EXECUTION.
              </h2>
              <p className="text-slate-200 text-sm leading-relaxed mt-2 font-light">
                At MATROCK ENGINEERING COMPANY NIG LTD, we apply disciplined engineering methodologies to guarantee structural safety, longevity, and optimal material performance.
              </p>
            </div>
            
            <div className="lg:w-1/2 flex flex-col sm:flex-row justify-between gap-4 w-full">
              <div className="flex items-center gap-3.5 bg-white/10 border border-white/10 p-4 rounded-xl flex-1 backdrop-blur-xs">
                <ShieldCheck size={32} className="text-brand-orange shrink-0" />
                <span className="font-oswald font-semibold text-sm leading-tight uppercase text-white">Structural<br/>Integrity</span>
              </div>
              <div className="flex items-center gap-3.5 bg-white/10 border border-white/10 p-4 rounded-xl flex-1 backdrop-blur-xs">
                <HardHat size={32} className="text-brand-orange shrink-0" />
                <span className="font-oswald font-semibold text-sm leading-tight uppercase text-white">Engineering<br/>Supervision</span>
              </div>
              <div className="flex items-center gap-3.5 bg-white/10 border border-white/10 p-4 rounded-xl flex-1 backdrop-blur-xs">
                <Compass size={32} className="text-brand-orange shrink-0" />
                <span className="font-oswald font-semibold text-sm leading-tight uppercase text-white">Technical<br/>Standards</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2.5 STATS SECTION WITH ENTRANCE ANIMATION */}
      <section className="py-14 sm:py-16 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { label: "DOCUMENTED SITE DELIVERABLES", value: 17, suffix: "+" },
              { label: "STRUCTURAL QUALITY STANDARD", value: 100, suffix: "%" },
              { label: "CORE ENGINEERING DISCIPLINES", value: 4, suffix: "" },
              { label: "SAFETY & COMPLIANCE FOCUS", value: 100, suffix: "%" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="flex flex-col items-center justify-center p-5 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="font-oswald text-3xl sm:text-5xl font-bold text-brand-orange mb-1.5 tabular-nums">
                  <AnimatedCounter end={stat.value} duration={2000} suffix={stat.suffix} />
                </div>
                <div className="text-brand-charcoal font-semibold tracking-wider text-xs uppercase font-oswald">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="py-20 bg-brand-light-gray/60">
        <motion.div 
          initial={{ opacity: 0, y: 35 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.6 }} 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Authentic Site Image */}
            <div className="lg:w-1/2 relative w-full">
              <div className="absolute inset-0 bg-brand-orange rounded-2xl -translate-x-3 translate-y-3 opacity-60"></div>
              <img 
                src="/images/matrock/MP6.PNG" 
                alt="MATROCK Multi-Storey Building Construction Progress" 
                className="relative z-10 w-full h-[400px] sm:h-[460px] object-cover object-center rounded-2xl shadow-xl"
              />
              <div className="absolute bottom-5 right-5 z-20 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-200">
                <span className="font-oswald font-bold text-brand-charcoal text-base block">
                  MATROCK SITE RECORD
                </span>
                <span className="text-[11px] text-brand-medium-gray uppercase tracking-wider">
                  Civil & Structural Progression
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="lg:w-1/2">
              <span className="inline-block bg-brand-orange/10 text-brand-orange font-oswald px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-sm mb-3">
                ABOUT MATROCK ENGINEERING
              </span>
              <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-brand-charcoal mb-4 leading-tight uppercase">
                ENGINEERED WITH RIGOR. <br />DELIVERED WITH INTEGRITY.
              </h2>
              <div className="w-14 h-1 bg-brand-orange mb-6"></div>
              
              <div className="space-y-4 text-brand-medium-gray text-sm sm:text-base leading-relaxed mb-7 font-light">
                <p>
                  <strong>MATROCK ENGINEERING COMPANY NIG LTD</strong> is an indigenous civil and structural engineering contracting firm headquartered at <strong>Commissioner's Quarters, Esther Obuakor Rd, Awka 420112, Anambra</strong>.
                </p>
                <p>
                  From structural substructure engineering and reinforced concrete decks to full-scale commercial facilities, residential properties, and roof framing, our work is defined by strict adherence to technical standards, safety, and sound engineering principles.
                </p>
                <p>
                  We coordinate every phase of construction with thorough site supervision, authentic quality control, and direct communication to protect your physical and financial investment.
                </p>
              </div>
              
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 text-brand-charcoal font-oswald text-sm font-semibold hover:text-brand-orange transition-colors tracking-wider border-b-2 border-brand-orange pb-1 uppercase"
              >
                LEARN MORE ABOUT MATROCK <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section id="services" className="py-20 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 35 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.6 }} 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <SectionHeading 
            title="OUR ENGINEERING CAPABILITIES" 
            subtitle="Comprehensive civil, structural, and building construction solutions engineered to deliver lasting infrastructure."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
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
        </motion.div>
      </section>

      {/* 5. WHY CHOOSE MATROCK (Teal-Charcoal Background) */}
      <section className="py-20 bg-brand-charcoal text-white border-y border-white/10">
        <motion.div 
          initial={{ opacity: 0, y: 35 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.6 }} 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <SectionHeading 
            title="WHY PARTNER WITH MATROCK?" 
            subtitle="Engineering precision, authentic site management, and uncompromising commitment to safety and structural performance."
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "STRUCTURAL RIGOR & QUALITY",
                desc: "Thorough calculations, quality-verified concrete mix ratios, and rebar reinforcement testing for safety.",
                icon: <ShieldCheck size={26} />
              },
              {
                title: "TECHNICAL TRANSPARENCY",
                desc: "Clear bill of quantities (BOQ), verified material schedules, and objective progress tracking on site.",
                icon: <CheckCircle2 size={26} />
              },
              {
                title: "AUTHENTIC SITE SUPERVISION",
                desc: "Daily on-site engineering supervision to ensure formwork, curing, and blockwork match technical blueprints.",
                icon: <HardHat size={26} />
              },
              {
                title: "REGIONAL GROUNDING",
                desc: "Rooted in Awka, Anambra State with detailed knowledge of regional soils, climate loads, and material supply.",
                icon: <MapPin size={26} />
              },
              {
                title: "SAFETY & COMPLIANCE",
                desc: "Zero tolerance for substandard building practices; full adherence to national building and engineering regulations.",
                icon: <Building2 size={26} />
              },
              {
                title: "DURABLE VALUE DELIVERY",
                desc: "Structures engineered to withstand tropical rainfall and thermal cycles while preserving long-term asset value.",
                icon: <ThumbsUp size={26} />
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="flex flex-col sm:flex-row gap-4 bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-brand-orange/40 transition-all duration-300"
              >
                <div className="text-brand-orange shrink-0 bg-white/10 p-3 rounded-lg h-fit w-fit">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-oswald text-base font-bold tracking-wide mb-1.5 uppercase text-brand-orange">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 6. PROJECTS SECTION */}
      <section id="projects" className="py-20 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 35 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.6 }} 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <SectionHeading 
            title="FEATURED SITE PROJECTS" 
            subtitle="Genuine photographs showcasing our structural framing, civil operations, and multi-storey builds."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {featuredProjects.map((project, idx) => (
              <ProjectCard 
                key={idx}
                title={project.title}
                category={project.category}
                location={project.location}
                image={project.image}
                link={project.link}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <Link 
                to="/projects" 
                className="inline-flex items-center gap-2 bg-brand-charcoal text-white font-oswald text-sm font-semibold hover:bg-brand-orange transition-colors tracking-wider px-8 py-3.5 rounded-lg shadow-sm uppercase"
              >
                EXPLORE ALL 17 SITE PHOTOGRAPHS <ChevronRight size={16} />
              </Link>
          </div>
        </motion.div>
      </section>

      {/* 7. PROCESS SECTION */}
      <section className="py-20 bg-brand-light-gray/40 border-y border-brand-border">
        <motion.div 
          initial={{ opacity: 0, y: 35 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.6 }} 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <SectionHeading 
            title="STRUCTURED PROJECT LIFECYCLE" 
            subtitle="From technical consultation to engineering handover, our step-by-step methodology ensures zero guesswork."
          />
          
          <div className="relative mt-12">
            <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-brand-orange/30"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative">
              {[
                {
                  step: "01",
                  title: "CONSULTATION",
                  desc: "Site inspection, client brief, structural requirements, and feasibility analysis."
                },
                {
                  step: "02",
                  title: "DESIGN & BLUEPRINTS",
                  desc: "Architectural drawings, structural calculations, and regulatory ANSPPB planning."
                },
                {
                  step: "03",
                  title: "SUBSTRUCTURE",
                  desc: "Soil preparation, excavation, foundation reinforcement, and base slab casting."
                },
                {
                  step: "04",
                  title: "SUPERSTRUCTURE",
                  desc: "Column casting, decking formwork, blockwork, and rigorous curing inspections."
                },
                {
                  step: "05",
                  title: "HANDOVER",
                  desc: "Comprehensive quality audit, finishing integration, and client handover."
                }
              ].map((item, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center p-3">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-brand-orange flex items-center justify-center font-oswald text-lg font-bold text-brand-charcoal z-10 mb-4 shadow-sm">
                    {item.step}
                  </div>
                  <h3 className="font-oswald text-sm font-bold tracking-wide mb-1.5 uppercase text-brand-charcoal">{item.title}</h3>
                  <p className="text-brand-medium-gray text-xs leading-relaxed max-w-[200px] font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 8. CLIENT COMMITMENT PILLARS */}
      <section className="py-20 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 35 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.6 }} 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <SectionHeading 
            title="OUR COMMITMENT TO CLIENTS" 
            subtitle="The operational pillars that define our partnership with every client."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "CLEAR COMMUNICATION",
                desc: "We provide structured weekly site reports, photographic updates, and transparent milestone tracking so you are always informed."
              },
              {
                title: "MATERIAL INTEGRITY",
                desc: "We source certified Portland cement, tested high-yield steel reinforcement, and clean aggregates to prevent structural degradation."
              },
              {
                title: "ACCURATE TIMELINES",
                desc: "Systematic resource scheduling and experienced project managers ensure construction proceeds efficiently according to agreed timelines."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-7 border border-brand-border rounded-xl shadow-xs hover:border-brand-orange/40 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center text-brand-orange mb-4 font-oswald text-base font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-oswald text-base font-bold text-brand-charcoal mb-2 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-brand-medium-gray text-xs sm:text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 9. BLOG (Preview) */}
      <section id="blog" className="py-20 bg-brand-light-gray/40">
        <motion.div 
          initial={{ opacity: 0, y: 35 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.6 }} 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <SectionHeading 
            title="INSIGHTS & GUIDES" 
            subtitle="Practical construction knowledge and cost guidance tailored to building in Anambra State."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "The True Cost of Building a 4-Bedroom Duplex in Awka in 2026",
                category: "RESIDENTIAL",
                date: "OCT 15, 2026",
                image: "/images/matrock/MP10.PNG",
                slug: "cost-building-duplex-awka"
              },
              {
                title: "Why Nnewi is the Ultimate Hub for Industrial & Commercial Construction",
                category: "COMMERCIAL",
                date: "SEP 22, 2026",
                image: "/images/matrock/MP6.PNG",
                slug: "nnewi-industrial-construction-hub"
              },
              {
                title: "Choosing the Right Roofing Materials for the Nigerian Climate",
                category: "BUILDING ADVICE",
                date: "AUG 10, 2026",
                image: "/images/matrock/MP4.PNG",
                slug: "roofing-materials-nigerian-climate"
              }
            ].map((post, idx) => (
              <div key={idx} className="bg-white border border-brand-border rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col">
                <div className="h-44 sm:h-48 overflow-hidden bg-slate-900 border-b border-brand-border">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-brand-medium-gray mb-2">
                      <span className="font-oswald text-brand-orange uppercase font-semibold">{post.category}</span>
                      <span>·</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-oswald text-base sm:text-lg font-bold leading-snug mb-3 text-brand-charcoal hover:text-brand-orange transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                  </div>
                  <Link to={`/blog/${post.slug}`} className="text-brand-orange text-xs font-oswald font-semibold inline-flex items-center gap-1 hover:text-brand-charcoal transition-colors uppercase tracking-wider mt-3">
                    READ ARTICLE <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 10. CTA BANNER */}
      <section className="relative py-20 bg-brand-charcoal overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/matrock/MP1.PNG" 
            alt="MATROCK Structural Engineering" 
            className="w-full h-full object-cover object-center brightness-[0.22]"
          />
          <div className="absolute inset-0 bg-brand-charcoal/85"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 25 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.6 }} 
          className="relative z-10 max-w-3xl mx-auto px-4 text-center"
        >
          <span className="text-xs font-oswald text-brand-orange uppercase tracking-[0.25em] font-semibold mb-2.5 inline-block">
            READY TO COMMENCE?
          </span>
          <h2 className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-bold !text-white uppercase tracking-wide mb-4">
            LET'S CONSTRUCT YOUR PROJECT TOGETHER
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-7 max-w-xl mx-auto font-light">
            Discuss your upcoming construction project with MATROCK ENGINEERING COMPANY NIG LTD. Our engineering team is ready to evaluate your plans and provide professional estimates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3.5">
             <Link 
                to="/contact" 
                className="bg-brand-orange text-white font-oswald font-semibold px-8 py-3.5 text-sm rounded-lg shadow-sm hover:bg-white hover:text-brand-charcoal transition-colors tracking-wider uppercase inline-flex items-center justify-center gap-2"
              >
                REQUEST A PROJECT ESTIMATE
              </Link>
              <a 
                href="tel:07037823288" 
                className="bg-white/10 border border-white/20 text-white font-oswald font-semibold px-8 py-3.5 text-sm rounded-lg shadow-sm hover:bg-white/20 transition-colors tracking-wider uppercase inline-flex items-center justify-center gap-2"
              >
                CALL 0703 782 3288
              </a>
          </div>
        </motion.div>
      </section>

      {/* 11. CONTACT SECTION */}
      <section id="contact" className="py-20 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 35 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.6 }} 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <SectionHeading 
            title="GET IN TOUCH" 
            subtitle="Connect with our Awka head office for inquiries, blueprint reviews, and construction consultations."
          />
           
          <div className="flex flex-col lg:flex-row gap-10 mt-10">
            {/* Info */}
            <div className="lg:w-1/3 space-y-6">
              <p className="text-brand-medium-gray text-sm leading-relaxed font-light">
                Planning a residential duplex, commercial plaza, or civil structural development? Reach out to MATROCK ENGINEERING COMPANY NIG LTD today.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                  <div className="bg-brand-orange/10 p-2.5 rounded-lg text-brand-orange shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-oswald text-sm font-semibold text-brand-charcoal tracking-wide mb-0.5 uppercase">TELEPHONE</h4>
                    <p className="text-brand-medium-gray text-xs">0703 782 3288</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                  <div className="bg-brand-orange/10 p-2.5 rounded-lg text-brand-orange shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-oswald text-sm font-semibold text-brand-charcoal tracking-wide mb-0.5 uppercase">EMAIL</h4>
                    <p className="text-brand-medium-gray text-xs">info@matrockengineering.com.ng</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                  <div className="bg-brand-orange/10 p-2.5 rounded-lg text-brand-orange shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-oswald text-sm font-semibold text-brand-charcoal tracking-wide mb-0.5 uppercase">HEAD OFFICE</h4>
                    <p className="text-brand-medium-gray text-xs leading-relaxed">
                      Commissioner's Quarters, Esther Obuakor Rd, Awka 420112, Anambra
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="lg:w-2/3">
              <form 
                className="bg-brand-light-gray/60 p-6 sm:p-8 border border-brand-border rounded-xl shadow-xs"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you. Your message has been received. Our engineering team will contact you shortly.");
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block font-oswald text-brand-charcoal mb-1 text-xs font-semibold tracking-wider uppercase">FULL NAME</label>
                    <input type="text" className="w-full bg-white border border-brand-border p-3 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-brand-orange" placeholder="Enter your full name" required />
                  </div>
                  <div>
                    <label className="block font-oswald text-brand-charcoal mb-1 text-xs font-semibold tracking-wider uppercase">PHONE NUMBER</label>
                    <input type="tel" className="w-full bg-white border border-brand-border p-3 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-brand-orange" placeholder="Enter your phone number" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block font-oswald text-brand-charcoal mb-1 text-xs font-semibold tracking-wider uppercase">EMAIL ADDRESS</label>
                    <input type="email" className="w-full bg-white border border-brand-border p-3 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-brand-orange" placeholder="Enter your email" required />
                  </div>
                  <div>
                    <label className="block font-oswald text-brand-charcoal mb-1 text-xs font-semibold tracking-wider uppercase">PROJECT CATEGORY</label>
                    <select className="w-full bg-white border border-brand-border p-3 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-brand-orange">
                      <option>Civil & Structural Engineering</option>
                      <option>New Building Construction</option>
                      <option>Commercial Development</option>
                      <option>Building Renovation</option>
                      <option>Other / General Contracting</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block font-oswald text-brand-charcoal mb-1 text-xs font-semibold tracking-wider uppercase">PROJECT LOCATION</label>
                  <input type="text" className="w-full bg-white border border-brand-border p-3 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-brand-orange" placeholder="E.g., Awka, Anambra State" required />
                </div>
                
                <div className="mb-5">
                  <label className="block font-oswald text-brand-charcoal mb-1 text-xs font-semibold tracking-wider uppercase">PROJECT DETAILS</label>
                  <textarea rows={4} className="w-full bg-white border border-brand-border p-3 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-brand-orange resize-none" placeholder="Provide details on project scope, timeline, and requirements..." required></textarea>
                </div>
                
                <button type="submit" className="bg-brand-orange text-white font-oswald font-semibold px-8 py-3.5 w-full rounded-lg shadow-sm hover:bg-brand-charcoal transition-colors tracking-wider uppercase text-xs sm:text-sm">
                  SUBMIT INQUIRY
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* 12. MAP PLACEHOLDER */}
      <section className="h-[360px] w-full bg-slate-100 relative flex items-center justify-center border-t border-brand-border">
         <motion.div 
           initial={{ opacity: 0, y: 25 }} 
           whileInView={{ opacity: 1, y: 0 }} 
           viewport={{ once: true, margin: "-40px" }} 
           transition={{ duration: 0.5 }} 
           className="text-center z-10 bg-white p-7 border border-brand-border rounded-xl shadow-md max-w-md w-full mx-4"
         >
            <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <MapPin size={24} className="text-brand-orange" />
            </div>
            <h3 className="font-oswald text-lg font-bold text-brand-charcoal mb-1 tracking-wide uppercase">
              MATROCK ENGINEERING HEADQUARTERS
            </h3>
            <p className="text-brand-medium-gray text-xs mb-5 font-light">
              Commissioner's Quarters, Esther Obuakor Rd, Awka 420112, Anambra
            </p>
            <a 
              href="https://maps.google.com/?q=Commissioner%27s+Quarters%2C+Esther+Obuakor+Rd%2C+Awka+420112%2C+Anambra" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-brand-charcoal text-white font-oswald font-semibold text-xs px-5 py-2.5 rounded-lg shadow-xs hover:bg-brand-orange transition-colors tracking-wider uppercase"
            >
              OPEN IN GOOGLE MAPS
            </a>
         </motion.div>
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23252525\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      </section>

    </div>
  );
}
