import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

// Images
import img1 from '../assets/images/onyitex1.jpg';
import img2 from '../assets/images/onyitex2.jpg';
import img3 from '../assets/images/onyitex3.jpg';
import img4 from '../assets/images/onyitex4.jpg';
import img5 from '../assets/images/onyitex5.jpg';
import img6 from '../assets/images/onyitex6.jpg';
import img7 from '../assets/images/onyitex7.jpg';
import img8 from '../assets/images/onyitex8.jpg';
import img9 from '../assets/images/onyitex9.jpg';
import img10 from '../assets/images/onyitex10.jpg';
import img11 from '../assets/images/onyitex11.jpg';

const projects = [
  { id: 1, title: "Modern Residential Duplex", category: "Residential", location: "Awka, Anambra", image: img1 },
  { id: 2, title: "Commercial Plaza Project", category: "Commercial", location: "Onitsha, Anambra", image: img2 },
  { id: 3, title: "Luxury Villa Construction", category: "Residential", location: "Nnewi, Anambra", image: img3 },
  { id: 4, title: "Industrial Warehouse Facility", category: "Commercial", location: "Awka, Anambra", image: img4 },
  { id: 5, title: "Estate Development Phase 1", category: "Residential", location: "Asaba, Delta", image: img5 },
  { id: 6, title: "Structural Renovation", category: "Renovation", location: "Enugu", image: img6 },
  { id: 7, title: "Contemporary Family Home", category: "Residential", location: "Awka, Anambra", image: img7 },
  { id: 8, title: "Corporate Office Block", category: "Commercial", location: "Onitsha, Anambra", image: img8 },
  { id: 9, title: "Multi-Unit Apartment", category: "Residential", location: "Awka, Anambra", image: img9 },
  { id: 10, title: "Modern Accessory Building", category: "Other", location: "Nnewi, Anambra", image: img10 },
  { id: 11, title: "Steel Frame Structure", category: "Commercial", location: "Awka, Anambra", image: img11 },
];

export function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ['All', 'Residential', 'Commercial', 'Renovation', 'Other'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0 bg-brand-charcoal">
          <img 
            src={img1} 
            alt="ONYIITEX Construction Projects Portfolio in Anambra" 
            className="w-full h-full object-cover brightness-[0.35]"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-oswald text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-wide mb-6"
          >
            OUR <span className="text-brand-orange">PORTFOLIO</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-brand-light-gray max-w-2xl mx-auto font-light leading-relaxed"
          >
            Explore our track record of excellence. From luxury residential homes to expansive commercial plazas across Nigeria.
          </motion.p>
        </div>
      </section>

      {/* 2. FILTER & GALLERY */}
      <section className="py-24 bg-brand-light-gray/30 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="FEATURED PROJECTS" 
            subtitle="Take a look at some of the structures we've built, showcasing our commitment to quality, durability, and aesthetics." 
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-oswald uppercase tracking-wider text-sm px-6 py-2 rounded-full border-2 transition-all duration-300 ${
                  filter === cat 
                  ? 'border-brand-orange bg-brand-orange text-white' 
                  : 'border-brand-border text-brand-medium-gray hover:border-brand-orange hover:text-brand-orange bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer border border-brand-border"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <div className="relative h-80 overflow-hidden bg-brand-light-gray">
                    <img 
                      src={project.image} 
                      alt={`Construction of ${project.title} by ONYIITEX in ${project.location}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <p className="text-brand-orange font-oswald text-sm tracking-widest uppercase mb-2">{project.category}</p>
                      <h3 className="text-white font-oswald text-xl font-bold tracking-wide">{project.title}</h3>
                      <div className="flex items-center gap-2 mt-2 text-brand-light-gray text-sm">
                        <MapPin size={16} />
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-brand-medium-gray font-oswald text-xl">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      {/* 3. TRUST SIGNALS */}
      <section className="py-24 bg-white border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-brand-light-gray/50 border border-brand-border hover:shadow-lg transition-shadow"
            >
              <CheckCircle2 size={48} className="mx-auto text-brand-orange mb-6" />
              <h3 className="font-oswald text-2xl font-bold text-brand-charcoal mb-4">Uncompromising Quality</h3>
              <p className="text-brand-medium-gray leading-relaxed">Every block laid and every beam fixed is thoroughly inspected to meet international construction standards.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-brand-light-gray/50 border border-brand-border hover:shadow-lg transition-shadow"
            >
              <Building2 size={48} className="mx-auto text-brand-orange mb-6" />
              <h3 className="font-oswald text-2xl font-bold text-brand-charcoal mb-4">Timely Delivery</h3>
              <p className="text-brand-medium-gray leading-relaxed">We respect timelines. Our robust project management ensures your building is completed on schedule.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl bg-brand-light-gray/50 border border-brand-border hover:shadow-lg transition-shadow"
            >
              <MapPin size={48} className="mx-auto text-brand-orange mb-6" />
              <h3 className="font-oswald text-2xl font-bold text-brand-charcoal mb-4">Local Expertise</h3>
              <p className="text-brand-medium-gray leading-relaxed">Rooted deeply in Anambra State, we navigate the local supply chains and environmental factors perfectly.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CONVERSION CTA */}
      <section className="relative py-24 bg-brand-charcoal overflow-hidden text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto px-4"
        >
          <h2 className="font-oswald text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wide mb-6">
            IMPRESSED BY OUR <span className="text-brand-orange">WORK?</span>
          </h2>
          <p className="text-brand-light-gray text-lg sm:text-xl leading-relaxed mb-10 font-light">
            Let's add your dream project to our growing portfolio. Contact ONYIITEX today for a detailed consultation and estimate.
          </p>
          <Link 
            to="/contact" 
            className="bg-brand-orange text-white font-oswald font-semibold px-10 py-5 text-lg rounded-lg shadow-lg hover:bg-white hover:text-brand-charcoal transition-all duration-300 tracking-wide inline-flex items-center justify-center gap-3 group"
          >
            START YOUR PROJECT
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-brand-orange transition-colors bg-white/10 p-3 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X size={28} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              src={selectedImage} 
              alt="Project Full View" 
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
