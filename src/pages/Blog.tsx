import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { blogPosts } from '../data/blogData';

export function Blog() {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative h-[44vh] min-h-[360px] flex items-center justify-center text-center bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/matrock/MP3.PNG" 
            alt="MATROCK Engineering Construction Insights Anambra" 
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
            <BookOpen size={38} className="mx-auto text-brand-orange mb-3" />
            <h1 className="font-oswald text-4xl sm:text-5xl md:text-6xl font-bold !text-white uppercase tracking-wide mb-3">
              ENGINEERING <span className="text-brand-orange">INSIGHTS</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
              Technical guidance, local construction costs, and regulatory advice tailored to building in Anambra State and Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-brand-light-gray/40 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading 
            title="LATEST TECHNICAL ARTICLES" 
            subtitle="Authoritative construction advice and cost analysis from MATROCK ENGINEERING COMPANY NIG LTD." 
          />

          {/* Featured Post */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 mb-12"
          >
            <Link to={`/blog/${featuredPost.slug}`} className="group flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all border border-slate-200">
              <div className="lg:w-3/5 h-64 sm:h-72 lg:h-auto relative overflow-hidden bg-brand-charcoal">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-brand-orange text-white text-xs font-oswald font-semibold uppercase tracking-wider px-3 py-1.5 rounded-md">
                  {featuredPost.category}
                </div>
              </div>
              <div className="lg:w-2/5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2.5 text-brand-medium-gray text-xs mb-3 font-light">
                  <div className="flex items-center gap-1"><Calendar size={13} className="text-brand-orange" />{featuredPost.date}</div>
                  <span>·</span>
                  <div className="flex items-center gap-1"><User size={13} className="text-brand-orange" />{featuredPost.author}</div>
                </div>
                <h3 className="font-oswald text-xl sm:text-2xl font-bold text-brand-charcoal mb-3 group-hover:text-brand-orange transition-colors leading-snug">
                  {featuredPost.title}
                </h3>
                <p className="text-brand-medium-gray text-xs sm:text-sm leading-relaxed mb-6 font-light">
                  {featuredPost.excerpt}
                </p>
                <div className="text-brand-orange font-oswald text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  READ COMPLETE ARTICLE <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, idx) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
              >
                <Link to={`/blog/${post.slug}`} className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all border border-slate-200">
                  <div className="h-48 sm:h-52 relative overflow-hidden bg-brand-charcoal">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3.5 left-3.5 bg-brand-charcoal text-white text-[11px] font-oswald font-medium uppercase tracking-wider px-2.5 py-1 rounded-md">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-brand-medium-gray text-xs mb-2.5 font-light">
                        <div className="flex items-center gap-1"><Calendar size={12} className="text-brand-orange" />{post.date}</div>
                        <span>·</span>
                        <div className="flex items-center gap-1"><User size={12} className="text-brand-orange" />{post.author}</div>
                      </div>
                      <h3 className="font-oswald text-base sm:text-lg font-bold text-brand-charcoal mb-2 group-hover:text-brand-orange transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-brand-medium-gray text-xs sm:text-sm leading-relaxed mb-4 font-light">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="text-brand-orange text-xs font-oswald font-semibold tracking-wider uppercase flex items-center gap-1 group-hover:gap-2 transition-all mt-auto pt-2 border-t border-slate-100">
                      READ ARTICLE <ArrowRight size={13} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
