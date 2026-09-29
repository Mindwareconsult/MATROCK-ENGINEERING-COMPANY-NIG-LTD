import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, CheckCircle2, ChevronRight, X, ShieldCheck, HardHat, Compass, Maximize2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

// Authentic MATROCK Project Photographs (MP1 - MP17)
const projects = [
  { 
    id: 1, 
    title: "Reinforced Concrete Framing & Structural Columns", 
    category: "Structural Engineering", 
    scope: "Structural Engineering Works",
    image: "/images/matrock/MP1.PNG" 
  },
  { 
    id: 2, 
    title: "Foundation Trenching & Substructure Earthworks", 
    category: "Substructure & Civil", 
    scope: "Foundation & Earthworks",
    image: "/images/matrock/MP2.PNG" 
  },
  { 
    id: 3, 
    title: "Multi-Storey Civil & Building Construction Site", 
    category: "Building Construction", 
    scope: "Multi-Floor Construction",
    image: "/images/matrock/MP3.PNG" 
  },
  { 
    id: 4, 
    title: "Roof Framing & High-Elevation Structural Works", 
    category: "Roofing & Envelope", 
    scope: "Roofing & Truss Systems",
    image: "/images/matrock/MP4.PNG" 
  },
  { 
    id: 5, 
    title: "Superstructure Wall Masonry & Blockwork", 
    category: "Building Construction", 
    scope: "Masonry & Structural Walls",
    image: "/images/matrock/MP5.PNG" 
  },
  { 
    id: 6, 
    title: "Commercial & Residential Multi-Level Development", 
    category: "Building Construction", 
    scope: "Multi-Storey Building Construction",
    image: "/images/matrock/MP6.PNG" 
  },
  { 
    id: 7, 
    title: "Concrete Deck & Heavy Beam Casting", 
    category: "Structural Engineering", 
    scope: "Reinforced Concrete Slab Casting",
    image: "/images/matrock/MP7.PNG" 
  },
  { 
    id: 8, 
    title: "Foundation Slab Preparation & Site Groundworks", 
    category: "Substructure & Civil", 
    scope: "Ground Engineering & Slab Prep",
    image: "/images/matrock/MP8.PNG" 
  },
  { 
    id: 9, 
    title: "Concrete Casting Inspection & Quality Assurance", 
    category: "Structural Engineering", 
    scope: "Quality Control & Slab Inspection",
    image: "/images/matrock/MP9.PNG" 
  },
  { 
    id: 10, 
    title: "Residential Building Project", 
    category: "Building Construction", 
    scope: "Oko, Orumba North, Anambra State",
    image: "/images/matrock/MP10.PNG" 
  },
  { 
    id: 11, 
    title: "Exterior Architectural Facade & Plastering", 
    category: "Roofing & Envelope", 
    scope: "Facade Engineering & Finishing",
    image: "/images/matrock/MP11.PNG" 
  },
  { 
    id: 12, 
    title: "Site Setting-Out & Column Rebar Assembly", 
    category: "Structural Engineering", 
    scope: "Reinforcement & Setting-Out",
    image: "/images/matrock/MP12.PNG" 
  },
  { 
    id: 13, 
    title: "Civil Earthmoving, Trenching & Compaction", 
    category: "Substructure & Civil", 
    scope: "Site Grading & Excavation",
    image: "/images/matrock/MP13.PNG" 
  },
  { 
    id: 14, 
    title: "Upper Deck Formwork & Structural Scaffolding", 
    category: "Structural Engineering", 
    scope: "Formwork & Support Systems",
    image: "/images/matrock/MP14.PNG" 
  },
  { 
    id: 15, 
    title: "Perimeter Boundary Wall & Retaining Structures", 
    category: "Substructure & Civil", 
    scope: "Civil Perimeter Works",
    image: "/images/matrock/MP15.PNG" 
  },
  { 
    id: 16, 
    title: "Upper Storey Structural Casting & Masonry Progress", 
    category: "Building Construction", 
    scope: "Upper Storey Structural Works",
    image: "/images/matrock/MP16.PNG" 
  },
  { 
    id: 17, 
    title: "Modern Building Envelope & Elevation Progress", 
    category: "Roofing & Envelope", 
    scope: "Building Envelope Progress",
    image: "/images/matrock/MP17.PNG" 
  }
];

export function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    'All',
    'Building Construction',
    'Structural Engineering',
    'Substructure & Civil',
    'Roofing & Envelope'
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative h-[48vh] min-h-[380px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-brand-charcoal">
          <img 
            src="/images/matrock/MP3.PNG" 
            alt="MATROCK Engineering Project Site" 
            className="w-full h-full object-cover object-center brightness-[0.32]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand-orange font-oswald font-semibold mb-2">
              AUTHENTIC SITE PORTFOLIO
            </span>
            <h1 className="font-oswald text-4xl sm:text-5xl md:text-6xl font-bold !text-white uppercase tracking-wide mb-3">
              OUR <span className="text-brand-orange">PROJECTS</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
              Explore authentic company photographs from MATROCK ENGINEERING COMPANY NIG LTD site operations, showcasing civil works, structural engineering, and building construction across Anambra State and Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. FILTER & GALLERY */}
      <section className="py-16 sm:py-20 bg-brand-light-gray/40 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="AUTHENTIC PROJECT DOCUMENTATION" 
            subtitle="Genuine photographs documenting our structural execution, civil engineering standards, and construction progress on real project sites." 
          />

          {/* Filter Segmented Controls */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 mb-12 p-1.5 bg-slate-200/60 rounded-xl w-fit mx-auto border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-oswald text-xs uppercase tracking-wider px-4 py-2 rounded-lg transition-all duration-200 ${
                  filter === cat 
                  ? 'bg-brand-orange text-white shadow-xs font-semibold' 
                  : 'text-brand-charcoal hover:text-brand-orange hover:bg-white/60 font-medium'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200 flex flex-col justify-between"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-charcoal">
                    <img 
                      src={project.image} 
                      alt={`${project.title} - MATROCK ENGINEERING COMPANY NIG LTD`} 
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/95 via-brand-charcoal/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-5">
                      <span className="text-brand-orange font-oswald text-xs tracking-wider uppercase mb-1 font-semibold">
                        {project.category}
                      </span>
                      <h3 className="text-white font-oswald text-base sm:text-lg font-bold tracking-wide leading-snug">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-2 text-slate-300 text-xs font-light">
                        <Compass size={13} className="text-brand-orange shrink-0" />
                        <span className="truncate">{project.scope}</span>
                      </div>
                    </div>
                    
                    {/* Zoom Icon Button */}
                    <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-xs text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                  
                  <div className="p-3.5 bg-white flex items-center justify-between text-xs text-brand-medium-gray border-t border-slate-100">
                    <span className="font-oswald uppercase tracking-wider text-brand-charcoal font-semibold text-[11px]">
                      MATROCK SITE PHOTOGRAPH #{project.id}
                    </span>
                    <span className="text-brand-orange font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1 text-[11px] uppercase">
                      Inspect Photo <ChevronRight size={13} />
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-brand-medium-gray font-oswald text-base">
              No project records found in this category.
            </div>
          )}
        </div>
      </section>

      {/* 3. TRUST SIGNALS */}
      <section className="py-16 sm:py-20 bg-white border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-slate-50/70 border border-slate-200 hover:shadow-md transition-shadow"
            >
              <ShieldCheck size={38} className="mx-auto text-brand-orange mb-4" />
              <h3 className="font-oswald text-lg font-bold text-brand-charcoal mb-2 uppercase tracking-wide">
                Rigorous Engineering Standards
              </h3>
              <p className="text-brand-medium-gray text-xs sm:text-sm leading-relaxed font-light">
                Every foundation, reinforced concrete deck, and structural column is constructed with strict adherence to structural engineering specifications and safety codes.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-xl bg-slate-50/70 border border-slate-200 hover:shadow-md transition-shadow"
            >
              <HardHat size={38} className="mx-auto text-brand-orange mb-4" />
              <h3 className="font-oswald text-lg font-bold text-brand-charcoal mb-2 uppercase tracking-wide">
                Authentic Site Execution
              </h3>
              <p className="text-brand-medium-gray text-xs sm:text-sm leading-relaxed font-light">
                Our portfolio features verified photography from actual construction sites, documenting hands-on execution from substructure earthworks to superstructure completion.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-xl bg-slate-50/70 border border-slate-200 hover:shadow-md transition-shadow"
            >
              <MapPin size={38} className="mx-auto text-brand-orange mb-4" />
              <h3 className="font-oswald text-lg font-bold text-brand-charcoal mb-2 uppercase tracking-wide">
                Regional Grounding
              </h3>
              <p className="text-brand-medium-gray text-xs sm:text-sm leading-relaxed font-light">
                Headquartered in Awka, Anambra State, we possess deep familiarity with local soil profiles, material sourcing networks, and environmental building requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CONVERSION CTA */}
      <section className="relative py-20 bg-brand-charcoal overflow-hidden text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto px-4"
        >
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand-orange font-oswald font-semibold mb-2.5">
            COMMENCE YOUR BUILD
          </span>
          <h2 className="font-oswald text-3xl sm:text-4xl md:text-5xl font-bold !text-white uppercase tracking-wide mb-4">
            PARTNER WITH <span className="text-brand-orange">MATROCK</span> FOR YOUR PROJECT
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto font-light">
            Bring your architectural blueprints or project requirements to MATROCK ENGINEERING COMPANY NIG LTD for dependable civil and structural engineering execution.
          </p>
          <Link 
            to="/contact" 
            className="bg-brand-orange text-white font-oswald font-semibold px-8 py-3.5 text-sm rounded-lg shadow-lg hover:bg-white hover:text-brand-charcoal transition-all tracking-wider inline-flex items-center justify-center gap-2 uppercase"
          >
            REQUEST A PROJECT QUOTE
            <ChevronRight size={18} />
          </Link>
        </motion.div>
      </section>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-5 right-5 text-white hover:text-brand-orange transition-colors bg-white/10 hover:bg-white/20 p-2.5 rounded-full"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <motion.img 
              initial={{ scale: 0.92, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 15 }}
              src={selectedImage} 
              alt="MATROCK Project Authentic Photograph" 
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/15"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
