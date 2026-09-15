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
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center text-center bg-brand-charcoal">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1600" 
            alt="Construction Blog Anambra" 
            className="w-full h-full object-cover brightness-[0.25]"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <BookOpen size={48} className="mx-auto text-brand-orange mb-6" />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-oswald text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-wide mb-6"
          >
            OUR <span className="text-brand-orange">INSIGHTS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-brand-light-gray max-w-2xl mx-auto font-light leading-relaxed"
          >
            Expert advice, local construction costs, and industry news tailored for the Nigerian building landscape.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-brand-light-gray/30 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading 
            title="LATEST ARTICLES" 
            subtitle="Stay informed with our comprehensive guides on building in Anambra State and across Nigeria." 
          />

          {/* Featured Post */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 mb-16"
          >
            <Link to={`/blog/${featuredPost.slug}`} className="group flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-brand-border">
              <div className="lg:w-3/5 h-64 lg:h-auto relative overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 bg-brand-orange text-white text-xs font-oswald font-semibold uppercase tracking-wider px-4 py-2 rounded-full">
                  {featuredPost.category}
                </div>
              </div>
              <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-brand-medium-gray text-sm mb-4">
                  <div className="flex items-center gap-1.5"><Calendar size={16} />{featuredPost.date}</div>
                  <div className="flex items-center gap-1.5"><User size={16} />{featuredPost.author}</div>
                </div>
                <h3 className="font-oswald text-2xl lg:text-3xl font-bold text-brand-charcoal mb-4 group-hover:text-brand-orange transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-brand-medium-gray leading-relaxed mb-8">
                  {featuredPost.excerpt}
                </p>
                <div className="text-brand-orange font-oswald font-semibold tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all">
                  READ FULL ARTICLE <ArrowRight size={20} />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, idx) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-brand-border">
                  <div className="h-56 relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-brand-charcoal text-white text-xs font-oswald font-medium uppercase tracking-wider px-3 py-1.5 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-brand-medium-gray text-sm mb-4">
                      <div className="flex items-center gap-1.5"><Calendar size={14} />{post.date}</div>
                    </div>
                    <h3 className="font-oswald text-xl font-bold text-brand-charcoal mb-3 group-hover:text-brand-orange transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-brand-medium-gray text-sm leading-relaxed mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="text-brand-orange text-sm font-oswald font-semibold tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                      READ MORE <ArrowRight size={16} />
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
