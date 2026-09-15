import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, HardHat, ThumbsUp, ArrowRight, CheckCircle2, MapPin, Phone, Mail, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { ProjectCard } from '../components/ProjectCard';
import { AnimatedCounter } from '../components/AnimatedCounter';


// Using the generated image for the hero, and high-quality unsplash for others
import heroBg from '../assets/images/nigerian_construction_hero_1788180312409.jpg';

export function Home() {
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

  const projects = [
    {
      title: "MODERN FAMILY RESIDENCE",
      category: "RESIDENTIAL",
      location: "Awka, Anambra State",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
      link: "/projects/modern-family-residence"
    },
    {
      title: "COMMERCIAL BUILDING PROJECT",
      category: "COMMERCIAL",
      location: "Awka, Anambra State",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      link: "/projects/commercial-building"
    },
    {
      title: "CONTEMPORARY DEVELOPMENT",
      category: "NEW CONSTRUCTION",
      location: "Anambra State",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      link: "/projects/contemporary-development"
    },
    {
      title: "HOME RENOVATION PROJECT",
      category: "RENOVATION",
      location: "Anambra State",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
      link: "/projects/home-renovation"
    },
    {
      title: "ARCHITECTURAL DESIGN",
      category: "BUILDING DESIGN",
      location: "Awka, Anambra State",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
      link: "/projects/architectural-design"
    },
    {
      title: "OFFICE COMPLEX",
      category: "COMMERCIAL",
      location: "Anambra State",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      link: "/projects/office-complex"
    }
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section id="home" className="relative h-[75vh] min-h-[600px] flex items-center">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Nigerian Construction Site" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-charcoal/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-end">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl bg-black/40 sm:bg-white/5 sm:backdrop-blur-sm p-6 sm:p-10 rounded border-l-4 border-brand-orange"
          >
            <h1 className="font-oswald text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-wide">
              WE BUILD YOUR <br />
              <span className="text-brand-orange">DREAM HOME</span>
            </h1>
            <p className="text-white/90 text-lg sm:text-xl mb-8 leading-relaxed max-w-xl font-light">
              From new home construction and commercial projects to renovations and general building construction, ONYIITEX CONSTRUCTION COMPANY LTD delivers practical, quality-focused construction solutions designed around your needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="bg-brand-orange text-white font-oswald font-semibold px-8 py-4 text-lg rounded-lg shadow-sm hover:bg-brand-charcoal transition-colors tracking-tight inline-flex items-center gap-2"
              >
                GET A QUOTE <ArrowRight size={20} />
              </Link>
              <Link 
                to="/services" 
                className="bg-white text-[#0F172A] font-oswald font-semibold px-8 py-4 text-lg rounded-lg shadow-sm hover:bg-[#F1F5F9] transition-colors tracking-tight"
              >
                EXPLORE OUR SERVICES
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST / INTRODUCTION STRIP */}
      <section className="bg-brand-orange py-12">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2">
              <h2 className="font-oswald text-3xl font-bold text-white uppercase tracking-wide mb-3">
                YOUR VISION. OUR EXPERTISE. BUILT TO LAST.
              </h2>
              <p className="text-brand-charcoal font-medium text-lg leading-relaxed">
                At ONYIITEX CONSTRUCTION COMPANY LTD, we provide professional general contracting and construction services for residential, commercial, renovation, and specialized building projects.
              </p>
            </div>
            <div className="lg:w-1/2 flex flex-col sm:flex-row justify-between gap-6 w-full">
              <div className="flex items-center gap-4 text-brand-charcoal">
                <ShieldCheck size={40} strokeWidth={1.5} />
                <span className="font-oswald font-medium text-lg leading-tight uppercase">Quality<br/>Construction</span>
              </div>
              <div className="flex items-center gap-4 text-brand-charcoal">
                <HardHat size={40} strokeWidth={1.5} />
                <span className="font-oswald font-medium text-lg leading-tight uppercase">Professional<br/>Service</span>
              </div>
              <div className="flex items-center gap-4 text-brand-charcoal">
                <ThumbsUp size={40} strokeWidth={1.5} />
                <span className="font-oswald font-medium text-lg leading-tight uppercase">Client-Focused<br/>Delivery</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2.5 STATS SECTION */}
      <section className="py-20 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { label: "YEARS OF EXCELLENCE", value: 15, suffix: "+" },
              { label: "PROJECTS COMPLETED", value: 350, suffix: "+" },
              { label: "AWARDS WON", value: 24, suffix: "" },
              { label: "SATISFIED CLIENTS", value: 100, suffix: "%" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center"
              >
                <div className="font-oswald text-5xl md:text-6xl font-bold text-brand-orange mb-3">
                  <AnimatedCounter end={stat.value} duration={2500} suffix={stat.suffix} />
                </div>
                <div className="text-brand-charcoal font-medium tracking-widest text-sm uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="py-20 bg-brand-light-gray/50">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Image */}
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-brand-orange -translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800" 
                alt="Construction Professionals" 
                className="relative z-10 w-full h-[500px] object-cover shadow-xl"
              />
            </div>
            
            {/* Content */}
            <div className="lg:w-1/2">
              <span className="inline-block bg-brand-orange/10 text-brand-orange font-oswald px-3 py-1 text-sm font-medium tracking-widest mb-4">
                ABOUT ONYIITEX
              </span>
              <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-brand-charcoal mb-6 leading-tight uppercase">
                BUILDING WITH PURPOSE. <br />DELIVERING WITH CONFIDENCE.
              </h2>
              <div className="w-16 h-1 bg-brand-orange mb-8"></div>
              
              <div className="space-y-4 text-brand-medium-gray text-lg leading-relaxed mb-8">
                <p>
                  ONYIITEX CONSTRUCTION COMPANY LTD is a professional general contractor based in Awka, Anambra State, providing dependable construction solutions for residential and commercial clients.
                </p>
                <p>
                  From building design and new home construction to commercial projects, home renovations, accessory buildings, metal building construction, and general building construction, we approach every project with attention to quality, functionality, workmanship, and client requirements.
                </p>
                <p>
                  We understand that a construction project is a significant investment. Our goal is to provide professional service and practical construction solutions that help clients turn their building plans into valuable, functional spaces.
                </p>
              </div>
              
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 text-brand-charcoal font-oswald text-lg font-medium hover:text-brand-orange transition-colors tracking-wide border-b-2 border-brand-orange pb-1"
              >
                LEARN MORE ABOUT US <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section id="services" className="py-24 bg-white">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="OUR SERVICES" 
            subtitle="Professional construction solutions designed to take your project from concept to completion."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </motion.div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-24 bg-brand-charcoal text-white">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="WHY CHOOSE ONYIITEX?" 
            subtitle="Construction is a major investment. We focus on doing the job with professionalism, care, and attention to detail."
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-16">
            {[
              {
                title: "QUALITY-FOCUSED WORKMANSHIP",
                desc: "Professional attention to construction quality and finishing.",
                icon: <ShieldCheck size={32} />
              },
              {
                title: "CLIENT-CENTRIC APPROACH",
                desc: "We listen to your requirements and build around your project objectives.",
                icon: <CheckCircle2 size={32} />
              },
              {
                title: "PROFESSIONAL PROJECT EXECUTION",
                desc: "A structured approach to coordinating construction activities.",
                icon: <HardHat size={32} />
              },
              {
                title: "PRACTICAL CONSTRUCTION SOLUTIONS",
                desc: "Solutions designed around functionality, usability, and project requirements.",
                icon: <Building2 size={32} />
              },
              {
                title: "ATTENTION TO DETAIL",
                desc: "Careful consideration of important construction and finishing details.",
                icon: <MapPin size={32} />
              },
              {
                title: "DEPENDABLE SERVICE",
                desc: "A construction partner you can communicate and work with throughout the project.",
                icon: <ThumbsUp size={32} />
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col sm:flex-row gap-5 bg-white/5 border border-white/10 p-6 rounded-2xl shadow-sm hover:bg-white/10 transition-colors"
              >
                <div className="text-brand-orange shrink-0 mt-1 bg-white/5 p-3 rounded-xl h-fit w-fit border border-white/5">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-oswald text-lg font-bold tracking-tight mb-2 uppercase text-brand-orange">{feature.title}</h3>
                  <p className="text-white/80 font-medium leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 6. PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-white">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="OUR PROJECTS" 
            subtitle="Explore the type of construction work we deliver."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12">
            {projects.map((project, idx) => (
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
          
          <div className="mt-16 text-center">
             <Link 
                to="/projects" 
                className="inline-flex items-center gap-2 bg-brand-charcoal text-white font-oswald text-lg font-semibold hover:bg-brand-orange transition-colors tracking-tight px-8 py-4 rounded-lg shadow-sm"
              >
                VIEW ALL PROJECTS
              </Link>
          </div>
        </motion.div>
      </section>

      {/* 7. PROCESS SECTION */}
      <section className="py-24 bg-brand-light-gray/30 border-y border-brand-light-gray">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="FROM IDEA TO COMPLETION" />
          
          <div className="relative mt-16">
            {/* Horizontal Line for Desktop */}
            <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-brand-orange/30"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative">
              {[
                {
                  step: "01",
                  title: "CONSULTATION",
                  desc: "We understand your requirements, ideas, budget considerations, and project objectives."
                },
                {
                  step: "02",
                  title: "PLANNING & DESIGN",
                  desc: "We establish the appropriate direction for the project and clarify the construction requirements."
                },
                {
                  step: "03",
                  title: "CONSTRUCTION",
                  desc: "Our team coordinates the required construction activities with attention to workmanship and quality."
                },
                {
                  step: "04",
                  title: "QUALITY REVIEW",
                  desc: "We review the completed work and address relevant finishing and project requirements."
                },
                {
                  step: "05",
                  title: "PROJECT HANDOVER",
                  desc: "We work toward delivering a completed project ready for the client's intended use."
                }
              ].map((item, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-brand-orange flex items-center justify-center font-oswald text-2xl font-bold text-brand-charcoal z-10 mb-6 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="font-oswald text-xl tracking-wide mb-3 uppercase">{item.title}</h3>
                  <p className="text-brand-medium-gray text-sm leading-relaxed max-w-[250px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-24 bg-white">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="WHAT OUR CLIENTS SAY" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="bg-white p-8 pt-12 relative border border-brand-border rounded-2xl shadow-sm mt-8">
                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center text-white text-4xl font-serif shadow-sm">
                   "
                 </div>
                 <p className="text-brand-medium-gray italic leading-relaxed text-center mb-6">
                   "ONYIITEX provided a professional approach to our construction project and maintained good communication throughout the work."
                 </p>
                 <div className="text-center">
                   <p className="font-oswald text-brand-charcoal font-medium uppercase tracking-wide">
                     CLIENT REVIEW PLACEHOLDER
                   </p>
                 </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 9. BLOG (Preview) */}
      <section id="blog" className="py-24 bg-brand-light-gray/30">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <SectionHeading title="FROM OUR BLOG" />
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "How Much Does It Cost to Build a House in Anambra State?",
                  category: "CONSTRUCTION TIPS",
                  date: "OCT 15, 2026",
                  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600"
                },
                {
                  title: "7 Important Things to Consider Before Building a House in Awka",
                  category: "PLANNING",
                  date: "SEP 22, 2026",
                  image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600"
                },
                {
                  title: "New Home Construction: A Practical Guide for Nigerian Homeowners",
                  category: "GUIDES",
                  date: "AUG 10, 2026",
                  image: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&q=80&w=600"
                }
              ].map((post, idx) => (
                <div key={idx} className="bg-white border border-brand-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden border-b border-brand-border">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 relative">
                    <div className="absolute -top-4 left-6 bg-brand-orange text-white text-xs font-oswald font-medium px-3 py-1 uppercase tracking-wider">
                      {post.category}
                    </div>
                    <p className="text-xs text-brand-medium-gray mt-2 mb-3">{post.date}</p>
                    <h3 className="font-oswald text-xl font-medium leading-tight mb-4 text-brand-charcoal hover:text-brand-orange transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <Link to="/blog" className="text-brand-orange text-sm font-oswald font-medium inline-flex items-center gap-1 hover:text-brand-charcoal transition-colors">
                      READ MORE <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
           </div>
        </motion.div>
      </section>

      {/* 10. CTA BANNER */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600" 
            alt="Construction Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-charcoal/80"></div>
        </div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-white uppercase tracking-wide mb-6">
            READY TO BUILD?
          </h2>
          <p className="text-brand-light-gray/90 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Let's discuss your next construction project and explore how ONYIITEX CONSTRUCTION COMPANY LTD can help turn your plans into reality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link 
                to="/contact" 
                className="bg-brand-orange text-white font-oswald font-semibold px-8 py-4 text-lg rounded-lg shadow-sm hover:bg-brand-charcoal transition-colors tracking-tight inline-flex items-center justify-center gap-2"
              >
                REQUEST A QUOTE
              </Link>
              <a 
                href="tel:08061294537" 
                className="bg-white text-[#0F172A] font-oswald font-semibold px-8 py-4 text-lg rounded-lg shadow-sm hover:bg-[#F1F5F9] transition-colors tracking-tight inline-flex items-center justify-center gap-2"
              >
                CALL 0806 129 4537
              </a>
          </div>
        </motion.div>
      </section>

      {/* 11. CONTACT SECTION */}
      <section id="contact" className="py-24 bg-white">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <SectionHeading title="LET'S BUILD TOGETHER" />
           
           <div className="flex flex-col lg:flex-row gap-16 mt-12">
             {/* Info */}
             <div className="lg:w-1/3">
               <p className="text-brand-medium-gray text-lg leading-relaxed mb-10">
                 Have a building, renovation, or construction project in mind? Get in touch with ONYIITEX CONSTRUCTION COMPANY LTD.
               </p>
               
               <div className="space-y-8">
                 <div className="flex items-start gap-4">
                   <div className="bg-brand-orange/10 p-3 rounded text-brand-orange">
                     <Phone size={24} />
                   </div>
                   <div>
                     <h4 className="font-oswald text-lg font-medium text-brand-charcoal tracking-wide mb-1">PHONE</h4>
                     <p className="text-brand-medium-gray">0806 129 4537</p>
                   </div>
                 </div>
                 
                 <div className="flex items-start gap-4">
                   <div className="bg-brand-orange/10 p-3 rounded text-brand-orange">
                     <MapPin size={24} />
                   </div>
                   <div>
                     <h4 className="font-oswald text-lg font-medium text-brand-charcoal tracking-wide mb-1">ADDRESS</h4>
                     <p className="text-brand-medium-gray leading-relaxed">
                       153 Ziks Avenue,<br />
                       Awka 420109,<br />
                       Anambra State, Nigeria
                     </p>
                   </div>
                 </div>
               </div>
             </div>
             
             {/* Form */}
             <div className="lg:w-2/3">
               <form className="bg-white p-8 sm:p-10 border border-brand-border rounded-2xl shadow-sm">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                   <div>
                     <label className="block font-oswald text-brand-charcoal mb-2 text-sm tracking-wide">FULL NAME</label>
                     <input type="text" className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-brand-orange transition-colors" placeholder="Enter your full name" required />
                   </div>
                   <div>
                     <label className="block font-oswald text-brand-charcoal mb-2 text-sm tracking-wide">PHONE NUMBER</label>
                     <input type="tel" className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-brand-orange transition-colors" placeholder="Enter your phone number" required />
                   </div>
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                   <div>
                     <label className="block font-oswald text-brand-charcoal mb-2 text-sm tracking-wide">EMAIL ADDRESS</label>
                     <input type="email" className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-brand-orange transition-colors" placeholder="Enter your email" required />
                   </div>
                   <div>
                     <label className="block font-oswald text-brand-charcoal mb-2 text-sm tracking-wide">PROJECT TYPE</label>
                     <select className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-brand-orange transition-colors">
                       <option>New Home Construction</option>
                       <option>Commercial Project</option>
                       <option>Renovation</option>
                       <option>Other</option>
                     </select>
                   </div>
                 </div>
                 
                 <div className="mb-6">
                   <label className="block font-oswald text-brand-charcoal mb-2 text-sm tracking-wide">PROJECT LOCATION</label>
                   <input type="text" className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-brand-orange transition-colors" placeholder="E.g., Awka, Anambra State" required />
                 </div>
                 
                 <div className="mb-8">
                   <label className="block font-oswald text-brand-charcoal mb-2 text-sm tracking-wide">MESSAGE</label>
                   <textarea rows={4} className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-brand-orange transition-colors" placeholder="Tell us about your project..." required></textarea>
                 </div>
                 
                 <button type="submit" className="bg-brand-charcoal text-white font-oswald font-semibold px-8 py-4 w-full rounded-lg shadow-sm hover:bg-brand-orange transition-colors tracking-tight uppercase">
                   SEND PROJECT REQUEST
                 </button>
               </form>
             </div>
           </div>
        </motion.div>
      </section>
      
      {/* 12. MAP PLACEHOLDER removed to avoid duplication */}
      <section className="h-[400px] w-full bg-brand-light-gray relative flex items-center justify-center">
         {/* Since we don't have an API key, use a clean placeholder */}
         <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="text-center z-10 bg-white p-8 border border-brand-border rounded-2xl shadow-sm max-w-md w-full mx-4">
            <MapPin size={48} className="text-brand-orange mx-auto mb-4" />
            <h3 className="font-oswald text-2xl font-bold text-brand-charcoal mb-2 tracking-tight">ONYIITEX HEADQUARTERS</h3>
            <p className="text-brand-medium-gray mb-6">153 Ziks Avenue, Awka 420109, Anambra State, Nigeria</p>
            <a href="https://maps.google.com/?q=153+Ziks+Avenue,+Awka,+Anambra+State,+Nigeria" target="_blank" rel="noopener noreferrer" className="inline-block bg-white border border-brand-border text-brand-charcoal font-oswald font-semibold text-sm px-6 py-2 rounded-lg shadow-sm hover:bg-[#F1F5F9] transition-colors tracking-tight">
              GET DIRECTIONS
            </a>
         </motion.div>
         {/* Abstract map background pattern */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23252525\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      </section>

    </div>
  );
}
