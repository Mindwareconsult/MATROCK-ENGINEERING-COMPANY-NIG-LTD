import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, Facebook, Instagram } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

export function Contact() {
  return (
    <div className="w-full bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center text-center bg-brand-charcoal">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888081622-1b156b9213bc?auto=format&fit=crop&q=80&w=1600" 
            alt="Contact ONYIITEX Construction" 
            className="w-full h-full object-cover brightness-[0.25]"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-oswald text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-wide mb-6"
          >
            GET IN <span className="text-brand-orange">TOUCH</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-brand-light-gray max-w-2xl mx-auto font-light leading-relaxed"
          >
            Ready to start your next construction project? Our team is here to answer your questions and provide expert guidance.
          </motion.p>
        </div>
      </section>

      {/* 2. CONTACT INFO & FORM */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading 
                title="CONTACT INFORMATION" 
                subtitle="Reach out to us for consultations, quotes, or general inquiries. We are always ready to build." 
                alignment="left"
              />
              
              <div className="mt-12 space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="bg-brand-orange/10 p-4 rounded-xl text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-oswald text-xl font-bold text-brand-charcoal tracking-wide mb-2">HEAD OFFICE</h4>
                    <p className="text-brand-medium-gray leading-relaxed">
                      153 Ziks Avenue,<br />
                      Awka 420109,<br />
                      Anambra State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="bg-brand-orange/10 p-4 rounded-xl text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-oswald text-xl font-bold text-brand-charcoal tracking-wide mb-2">PHONE</h4>
                    <p className="text-brand-medium-gray leading-relaxed">
                      0806 129 4537<br />
                      Available Mon - Sat, 8am - 6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="bg-brand-orange/10 p-4 rounded-xl text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-oswald text-xl font-bold text-brand-charcoal tracking-wide mb-2">EMAIL ADDRESS</h4>
                    <p className="text-brand-medium-gray leading-relaxed">
                      info@onyiitex.com<br />
                      support@onyiitex.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-12 border-t border-brand-border">
                <h4 className="font-oswald text-lg font-bold text-brand-charcoal tracking-wide mb-6">FOLLOW US</h4>
                <div className="flex gap-4">
                  <a href="https://web.facebook.com/onyiitexconstructioncompanyltd/" target="_blank" rel="noopener noreferrer" className="bg-brand-light-gray text-brand-charcoal hover:bg-brand-orange hover:text-white p-3 rounded-full transition-colors">
                    <Facebook size={24} />
                  </a>
                  <a href="https://www.instagram.com/onyiitexconstruction/" target="_blank" rel="noopener noreferrer" className="bg-brand-light-gray text-brand-charcoal hover:bg-brand-orange hover:text-white p-3 rounded-full transition-colors">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-light-gray/30 p-8 sm:p-12 rounded-2xl border border-brand-border"
            >
              <h3 className="font-oswald text-2xl font-bold text-brand-charcoal tracking-wide mb-8">SEND US A MESSAGE</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-oswald text-brand-charcoal mb-2 text-sm tracking-wide">FULL NAME</label>
                    <input type="text" className="w-full bg-white border border-brand-border p-4 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label className="block font-oswald text-brand-charcoal mb-2 text-sm tracking-wide">PHONE NUMBER</label>
                    <input type="tel" className="w-full bg-white border border-brand-border p-4 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="0800 000 0000" required />
                  </div>
                </div>
                <div>
                  <label className="block font-oswald text-brand-charcoal mb-2 text-sm tracking-wide">EMAIL ADDRESS</label>
                  <input type="email" className="w-full bg-white border border-brand-border p-4 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="john@example.com" required />
                </div>
                <div>
                  <label className="block font-oswald text-brand-charcoal mb-2 text-sm tracking-wide">PROJECT TYPE</label>
                  <select className="w-full bg-white border border-brand-border p-4 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all">
                    <option>New Home Construction</option>
                    <option>Commercial Development</option>
                    <option>Building Renovation</option>
                    <option>Architectural Design</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block font-oswald text-brand-charcoal mb-2 text-sm tracking-wide">MESSAGE</label>
                  <textarea rows={5} className="w-full bg-white border border-brand-border p-4 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all resize-none" placeholder="Tell us about your project or inquiry..." required></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-orange text-white font-oswald font-semibold px-8 py-5 text-lg rounded-lg shadow-md hover:bg-brand-charcoal transition-colors tracking-wide flex items-center justify-center gap-2 group">
                  SEND MESSAGE <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. MAP PLACEHOLDER */}
      <section className="w-full relative h-[500px] bg-brand-light-gray overflow-hidden border-t border-brand-border flex items-center justify-center">
        {/* Map background abstract pattern */}
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23252525\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        {/* Decorative lines representing streets (Tailwind CSS styled) */}
        <div className="absolute inset-0">
           <div className="absolute top-[35%] left-0 w-full h-8 bg-white/60 -rotate-2 shadow-sm"></div>
           <div className="absolute top-[55%] left-0 w-full h-12 bg-white/60 rotate-3 shadow-sm"></div>
           <div className="absolute top-0 left-[35%] w-10 h-full bg-white/60 rotate-12 shadow-sm"></div>
           <div className="absolute top-0 left-[65%] w-8 h-full bg-white/60 -rotate-6 shadow-sm"></div>
        </div>

        {/* Location Pin & Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
          className="relative z-10 bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full mx-4 text-center border border-brand-border"
        >
          <div className="w-20 h-20 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6 relative">
            <MapPin size={36} className="text-brand-orange relative z-10" />
            <div className="absolute inset-0 rounded-full border-2 border-brand-orange animate-ping opacity-30"></div>
          </div>
          <h3 className="font-oswald text-2xl font-bold text-brand-charcoal mb-2 tracking-wide uppercase">Onyiitex Headquarters</h3>
          <p className="text-brand-medium-gray mb-8">153 Ziks Avenue, Awka 420109, Anambra State, Nigeria</p>
          <a 
            href="https://maps.google.com/?q=153+Ziks+Avenue,+Awka,+Anambra+State,+Nigeria" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full inline-block bg-brand-charcoal text-white font-oswald font-semibold text-sm px-6 py-4 rounded-lg hover:bg-brand-orange transition-colors tracking-widest uppercase shadow-md"
          >
            GET DIRECTIONS
          </a>
        </motion.div>
      </section>
    </div>
  );
}
