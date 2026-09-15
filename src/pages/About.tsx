import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Target, Eye, ShieldCheck, Users, Trophy, Building2, Phone } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import onyiiImg from '../assets/images/onyii.jpg';

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const updateCounter = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        
        if (progress < duration) {
          setCount(Math.min(end, Math.floor((progress / duration) * end)));
          animationFrame = requestAnimationFrame(updateCounter);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(updateCounter);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function About() {
  return (
    <div className="w-full">
      {/* 1. PAGE BANNER */}
      <section className="relative py-24 bg-brand-charcoal">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
             src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1600" 
             className="w-full h-full object-cover" 
             alt="Construction site in Awka, Anambra State" 
           />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-oswald text-4xl sm:text-5xl font-bold text-white uppercase tracking-wide">
              ABOUT US
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-brand-light-gray font-oswald text-sm tracking-widest uppercase">
              <Link to="/" className="hover:text-brand-orange transition-colors">HOME</Link>
              <span>/</span>
              <span className="text-brand-orange">ABOUT US</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. COMPANY OVERVIEW - LOCAL SEO FOCUS */}
      <section className="py-24 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" 
                  alt="ONYIITEX Construction Company Ltd - Awka, Anambra State" 
                  className="rounded-lg shadow-xl w-full object-cover h-[500px]"
                />
                <div className="absolute -bottom-8 -right-8 bg-brand-orange text-white p-8 rounded-lg shadow-xl hidden md:block">
                  <p className="font-oswald text-4xl font-bold mb-1">10+</p>
                  <p className="font-medium uppercase tracking-wider text-sm">Years in Anambra</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-brand-charcoal uppercase tracking-wide mb-6">
                PREMIER CONSTRUCTION COMPANY IN AWKA, ANAMBRA STATE
              </h2>
              <div className="w-20 h-1 bg-brand-orange mb-8"></div>
              
              <div className="space-y-6 text-brand-medium-gray text-lg leading-relaxed">
                <p>
                  <strong>ONYIITEX CONSTRUCTION COMPANY LTD</strong> is a leading indigenous building and civil engineering construction firm headquartered at <strong>153 Ziks Avenue, Awka 420109, Anambra State, Nigeria</strong>. 
                </p>
                <p>
                  We specialize in delivering high-quality residential, commercial, and industrial construction projects across Nigeria. As local experts in the Anambra State construction landscape, we understand the unique environmental, logistical, and structural requirements needed to build enduring properties in our region.
                </p>
                <p>
                  From concept and architectural design to full-scale general building construction and renovations, our dedicated team of engineers, architects, and builders are committed to turning your vision into a concrete reality.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="bg-brand-charcoal p-4 rounded-full text-brand-orange">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-oswald text-xl font-bold text-brand-charcoal tracking-wide mb-1">PROUDLY LOCAL</h4>
                  <p className="text-brand-medium-gray">Serving Awka, Onitsha, Nnewi, and all of Nigeria.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2.5 OUR MILESTONES */}
      <section className="py-20 bg-brand-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="font-oswald text-5xl sm:text-6xl font-bold text-brand-orange mb-2">
                <AnimatedCounter end={150} suffix="+" />
              </div>
              <p className="font-oswald uppercase tracking-wider text-brand-light-gray font-medium">Projects Completed</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="font-oswald text-5xl sm:text-6xl font-bold text-brand-orange mb-2">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <p className="font-oswald uppercase tracking-wider text-brand-light-gray font-medium">Years in Business</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="font-oswald text-5xl sm:text-6xl font-bold text-brand-orange mb-2">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <p className="font-oswald uppercase tracking-wider text-brand-light-gray font-medium">Satisfied Clients</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-24 bg-brand-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-brand-border/50 hover:border-brand-orange/30 transition-colors"
            >
              <Target size={48} className="text-brand-orange mb-6" />
              <h3 className="font-oswald text-2xl font-bold text-brand-charcoal uppercase tracking-wide mb-4">Our Mission</h3>
              <p className="text-brand-medium-gray text-lg leading-relaxed">
                To provide top-tier, reliable, and cost-effective construction services in Nigeria. We aim to build sustainable infrastructures that exceed our clients' expectations by leveraging innovative building technologies, local expertise, and an unwavering commitment to quality and safety.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-brand-charcoal p-10 rounded-2xl shadow-xl border border-white/10"
            >
              <Eye size={48} className="text-brand-orange mb-6" />
              <h3 className="font-oswald text-2xl font-bold text-white uppercase tracking-wide mb-4">Our Vision</h3>
              <p className="text-brand-light-gray/90 text-lg leading-relaxed font-light">
                To be the most trusted and sought-after construction company in Anambra State and across Nigeria, recognized for our integrity, architectural excellence, and dedication to shaping the modern Nigerian skyline.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="OUR CORE VALUES" subtitle="The principles that guide every brick we lay." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <ShieldCheck size={36} />,
                title: "INTEGRITY & TRUST",
                desc: "We believe in honest, transparent communication. Our reputation in Awka is built on delivering exactly what we promise, on time and within budget."
              },
              {
                icon: <Trophy size={36} />,
                title: "UNYIELDING QUALITY",
                desc: "From sourcing the best local materials in Nigeria to employing skilled artisans, we never compromise on the structural integrity of our buildings."
              },
              {
                icon: <Users size={36} />,
                title: "CLIENT-CENTRIC APPROACH",
                desc: "Your vision is our blueprint. We work closely with our clients throughout the entire construction lifecycle to ensure complete satisfaction."
              }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }} 
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center p-8 bg-brand-light-gray rounded-xl"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white text-brand-orange mb-6 shadow-sm">
                  {value.icon}
                </div>
                <h4 className="font-oswald text-xl font-bold text-brand-charcoal uppercase tracking-wide mb-4">{value.title}</h4>
                <p className="text-brand-medium-gray leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      {/* 4.5 OUR TEAM */}
      <section className="py-24 bg-brand-light-gray/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="MEET OUR LEADERSHIP" subtitle="The dedicated professionals driving ONYIITEX forward." />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                name: "Engr. Onyeka N.",
                role: "MD / CEO",
                image: onyiiImg
              },
              {
                name: "Arch. Chidi O.",
                role: "Project Manager",
                image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=600"
              },
              {
                name: "Mr. Tunde A.",
                role: "Safety Officer",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600"
              },
              {
                name: "Mrs. Ngozi E.",
                role: "HR Manager",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
              }
            ].map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }} 
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-brand-border rounded-xl shadow-sm overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <div className="h-64 sm:h-72 overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-charcoal/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="p-6 text-center border-t-4 border-brand-orange relative">
                  <h4 className="font-oswald text-xl font-bold text-brand-charcoal uppercase tracking-wide">{member.name}</h4>
                  <p className="text-brand-medium-gray font-medium mt-1 uppercase tracking-wider text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LOCAL SEO / CTA BANNER */}
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
            READY TO START YOUR PROJECT IN ANAMBRA?
          </h2>
          <p className="text-brand-light-gray text-lg sm:text-xl leading-relaxed mb-10 max-w-3xl mx-auto font-light">
            Visit our head office at <strong>153 Ziks Avenue, Awka 420109</strong>, or give us a call to schedule a consultation with our construction experts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link 
                to="/contact" 
                className="bg-brand-orange text-white font-oswald font-semibold px-8 py-4 text-lg rounded-lg shadow-sm hover:bg-white hover:text-brand-charcoal transition-colors tracking-tight inline-flex items-center justify-center gap-2"
              >
                CONTACT US TODAY
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
