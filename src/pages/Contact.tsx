import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, Facebook, Instagram, ShieldCheck, Building2, Clock } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

export function Contact() {
  return (
    <div className="w-full bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[44vh] min-h-[360px] flex items-center justify-center text-center bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/matrock/MP3.PNG" 
            alt="Contact MATROCK ENGINEERING COMPANY NIG LTD in Awka Anambra" 
            className="w-full h-full object-cover object-center brightness-[0.25]"
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
              COMMUNICATION & INQUIRIES
            </span>
            <h1 className="font-oswald text-4xl sm:text-5xl md:text-6xl font-bold !text-white uppercase tracking-wide mb-3">
              GET IN <span className="text-brand-orange">TOUCH</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
              Planning your next civil or building construction project in Anambra State? Reach out to MATROCK ENGINEERING COMPANY NIG LTD for technical guidance and estimates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTACT INFO & FORM */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading 
                title="CONTACT INFORMATION" 
                subtitle="Reach out to our Awka corporate office for project consultations, site visits, or quotation requests." 
                align="left"
              />
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200/90 bg-slate-50/60 hover:bg-white hover:shadow-xs transition-all">
                  <div className="bg-brand-orange/10 p-3 rounded-lg text-brand-orange shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-oswald text-base font-bold text-brand-charcoal tracking-wide mb-1 uppercase">
                      HEADQUARTERS
                    </h4>
                    <p className="text-brand-medium-gray text-xs sm:text-sm leading-relaxed font-light">
                      153 Ziks Avenue,<br />
                      Awka 420109,<br />
                      Anambra State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200/90 bg-slate-50/60 hover:bg-white hover:shadow-xs transition-all">
                  <div className="bg-brand-orange/10 p-3 rounded-lg text-brand-orange shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-oswald text-base font-bold text-brand-charcoal tracking-wide mb-1 uppercase">
                      TELEPHONE
                    </h4>
                    <p className="text-brand-medium-gray text-xs sm:text-sm leading-relaxed font-light">
                      <a href="tel:08061294537" className="hover:text-brand-orange transition-colors">0806 129 4537</a>
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-brand-medium-gray/80 mt-1 font-light">
                      <Clock size={12} className="text-brand-orange" />
                      <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200/90 bg-slate-50/60 hover:bg-white hover:shadow-xs transition-all">
                  <div className="bg-brand-orange/10 p-3 rounded-lg text-brand-orange shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="font-oswald text-base font-bold text-brand-charcoal tracking-wide mb-1 uppercase">
                      EMAIL ADDRESS
                    </h4>
                    <p className="text-brand-medium-gray text-xs sm:text-sm leading-relaxed font-light">
                      <a href="mailto:info@matrockengineering.com.ng" className="hover:text-brand-orange transition-colors">
                        info@matrockengineering.com.ng
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h4 className="font-oswald text-sm font-bold text-brand-charcoal tracking-wide mb-3 uppercase">
                  OFFICIAL CHANNELS
                </h4>
                <div className="flex gap-2.5">
                  <a href="#" aria-label="Facebook" className="bg-slate-100 hover:bg-brand-orange hover:text-white text-brand-charcoal p-2.5 rounded-lg transition-colors border border-slate-200">
                    <Facebook size={18} />
                  </a>
                  <a href="#" aria-label="Instagram" className="bg-slate-100 hover:bg-brand-orange hover:text-white text-brand-charcoal p-2.5 rounded-lg transition-colors border border-slate-200">
                    <Instagram size={18} />
                  </a>
                  <a href="mailto:info@matrockengineering.com.ng" aria-label="Email" className="bg-slate-100 hover:bg-brand-orange hover:text-white text-brand-charcoal p-2.5 rounded-lg transition-colors border border-slate-200">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-brand-light-gray/60 p-7 sm:p-9 rounded-2xl border border-brand-border shadow-xs"
            >
              <h3 className="font-oswald text-xl sm:text-2xl font-bold text-brand-charcoal tracking-wide mb-1.5 uppercase">
                SEND A PROJECT INQUIRY
              </h3>
              <p className="text-xs text-brand-medium-gray mb-6 font-light">
                Fill in the details below and our engineering team will get back to you promptly.
              </p>

              <form 
                className="space-y-4" 
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you. Your project request has been submitted to MATROCK ENGINEERING COMPANY NIG LTD.");
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-oswald text-brand-charcoal mb-1 text-xs font-semibold tracking-wider uppercase">FULL NAME</label>
                    <input type="text" className="w-full bg-white border border-brand-border p-3 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="Enter your full name" required />
                  </div>
                  <div>
                    <label className="block font-oswald text-brand-charcoal mb-1 text-xs font-semibold tracking-wider uppercase">PHONE NUMBER</label>
                    <input type="tel" className="w-full bg-white border border-brand-border p-3 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="0800 000 0000" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-oswald text-brand-charcoal mb-1 text-xs font-semibold tracking-wider uppercase">EMAIL ADDRESS</label>
                    <input type="email" className="w-full bg-white border border-brand-border p-3 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="yourname@example.com" required />
                  </div>
                  <div>
                    <label className="block font-oswald text-brand-charcoal mb-1 text-xs font-semibold tracking-wider uppercase">PROJECT TYPE</label>
                    <select className="w-full bg-white border border-brand-border p-3 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all">
                      <option>Civil & Structural Engineering</option>
                      <option>New Building Construction</option>
                      <option>Commercial Development</option>
                      <option>Building Renovation</option>
                      <option>Other / General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-oswald text-brand-charcoal mb-1 text-xs font-semibold tracking-wider uppercase">PROJECT LOCATION</label>
                  <input type="text" className="w-full bg-white border border-brand-border p-3 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="E.g., Awka, Anambra State" required />
                </div>

                <div>
                  <label className="block font-oswald text-brand-charcoal mb-1 text-xs font-semibold tracking-wider uppercase">MESSAGE & SCOPE</label>
                  <textarea rows={4} className="w-full bg-white border border-brand-border p-3 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all resize-none" placeholder="Provide details regarding building plans, land dimensions, or project timelines..." required></textarea>
                </div>

                <button type="submit" className="w-full bg-brand-orange text-white font-oswald font-semibold px-8 py-3.5 text-xs sm:text-sm rounded-lg shadow-sm hover:bg-brand-charcoal transition-colors tracking-wider flex items-center justify-center gap-2 group uppercase">
                  SUBMIT INQUIRY <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. MAP PLACEHOLDER */}
      <section className="w-full relative h-[440px] bg-slate-100 overflow-hidden border-t border-brand-border flex items-center justify-center">
        <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23252525\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <div className="absolute inset-0">
           <div className="absolute top-[35%] left-0 w-full h-6 bg-white/60 -rotate-2 shadow-xs"></div>
           <div className="absolute top-[55%] left-0 w-full h-8 bg-white/60 rotate-3 shadow-xs"></div>
           <div className="absolute top-0 left-[35%] w-8 h-full bg-white/60 rotate-12 shadow-xs"></div>
           <div className="absolute top-0 left-[65%] w-6 h-full bg-white/60 -rotate-6 shadow-xs"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.3, delay: 0.15 }}
          className="relative z-10 bg-white p-7 sm:p-8 rounded-2xl shadow-xl max-w-sm w-full mx-4 text-center border border-slate-200"
        >
          <div className="w-14 h-14 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-3.5 relative">
            <MapPin size={28} className="text-brand-orange relative z-10" />
            <div className="absolute inset-0 rounded-full border-2 border-brand-orange animate-ping opacity-25"></div>
          </div>
          <h3 className="font-oswald text-lg font-bold text-brand-charcoal mb-1 tracking-wide uppercase">
            MATROCK HEADQUARTERS
          </h3>
          <p className="text-brand-medium-gray text-xs mb-5 font-light leading-relaxed">
            153 Ziks Avenue, Awka 420109, Anambra State, Nigeria
          </p>
          <a 
            href="https://maps.google.com/?q=153+Ziks+Avenue,+Awka,+Anambra+State,+Nigeria" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full inline-block bg-brand-charcoal text-white font-oswald font-semibold text-xs px-5 py-3 rounded-lg hover:bg-brand-orange transition-colors tracking-wider uppercase shadow-xs"
          >
            GET DRIVING DIRECTIONS
          </a>
        </motion.div>
      </section>
    </div>
  );
}
