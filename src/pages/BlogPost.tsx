import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, ChevronRight, ShieldCheck, Phone } from 'lucide-react';
import { blogPosts } from '../data/blogData';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-oswald text-4xl font-bold text-brand-charcoal mb-4">ARTICLE NOT FOUND</h1>
        <p className="text-brand-medium-gray mb-8">The engineering article you are looking for does not exist or has been relocated.</p>
        <button onClick={() => navigate('/blog')} className="bg-brand-orange text-white px-6 py-3 font-oswald rounded-lg shadow-sm">
          RETURN TO INSIGHTS
        </button>
      </div>
    );
  }

  const recentPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="w-full bg-brand-light-gray/20">
      {/* 1. ARTICLE HERO */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end pb-14 bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover brightness-[0.25]"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-brand-orange text-white text-xs font-oswald font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-md mb-4">
              {post.category}
            </div>
            <h1 className="font-oswald text-3xl sm:text-4xl md:text-5xl font-bold !text-white leading-tight mb-5">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-brand-light-gray text-xs sm:text-sm font-light">
              <div className="flex items-center gap-1.5"><Calendar size={15} className="text-brand-orange" />{post.date}</div>
              <span>·</span>
              <div className="flex items-center gap-1.5"><User size={15} className="text-brand-orange" />{post.author}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTENT CONTAINER */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
          
          {/* Main Article Content */}
          <div className="lg:w-2/3">
            <Link to="/blog" className="inline-flex items-center gap-2 text-brand-medium-gray hover:text-brand-orange transition-colors font-oswald uppercase tracking-wide text-xs font-semibold mb-8">
              <ArrowLeft size={16} /> Back to all insights
            </Link>
            
            <motion.article 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-brand-border prose prose-lg prose-headings:font-oswald prose-headings:text-brand-charcoal prose-h2:text-2xl sm:prose-h2:text-3xl prose-a:text-brand-orange hover:prose-a:text-brand-charcoal prose-p:text-brand-medium-gray prose-li:text-brand-medium-gray max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* In-Article Conversion Banner */}
            <div className="mt-12 p-8 bg-brand-charcoal text-white rounded-2xl text-center border-l-4 border-brand-orange">
              <h3 className="font-oswald text-2xl font-bold mb-3 uppercase tracking-wide !text-white">
                PLANNING A PROJECT IN ANAMBRA STATE?
              </h3>
              <p className="text-brand-light-gray/85 text-sm sm:text-base mb-6 max-w-xl mx-auto font-light leading-relaxed">
                Connect directly with MATROCK ENGINEERING COMPANY NIG LTD. Our licensed civil engineers provide blueprint assessments, bill of quantities (BOQ), and turnkey execution.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="inline-block bg-brand-orange text-white font-oswald font-semibold px-7 py-3 rounded-lg hover:bg-white hover:text-brand-charcoal transition-colors tracking-wide text-sm">
                  REQUEST A CONSULTATION
                </Link>
                <a href="tel:07037823288" className="inline-flex items-center gap-2 bg-white/10 text-white font-oswald font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors tracking-wide text-sm border border-white/20">
                  <Phone size={16} />
                  0703 782 3288
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white p-7 rounded-2xl shadow-sm border border-brand-border sticky top-24">
              <h3 className="font-oswald text-lg font-bold text-brand-charcoal mb-6 flex items-center gap-2 tracking-wide uppercase">
                <span className="w-1.5 h-4 bg-brand-orange inline-block rounded-xs"></span> RECENT ARTICLES
              </h3>
              <div className="space-y-6">
                {recentPosts.map(rp => (
                  <Link key={rp.id} to={`/blog/${rp.slug}`} className="group flex gap-4 items-start">
                    <div className="w-20 h-16 rounded-lg overflow-hidden shrink-0 bg-slate-900">
                      <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div>
                      <span className="text-[11px] text-brand-orange font-oswald uppercase tracking-wider block font-semibold mb-1">
                        {rp.category}
                      </span>
                      <h4 className="font-oswald text-sm font-semibold text-brand-charcoal group-hover:text-brand-orange transition-colors leading-snug line-clamp-2">
                        {rp.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Quick Contact Box */}
              <div className="mt-8 pt-8 border-t border-slate-100">
                <h4 className="font-oswald text-base font-bold text-brand-charcoal uppercase tracking-wide mb-2">
                  HEAD OFFICE
                </h4>
                <p className="text-brand-medium-gray text-xs leading-relaxed mb-4">
                  Commissioner's Quarters, Esther Obuakor Rd, Awka 420112, Anambra
                </p>
                <Link to="/contact" className="w-full text-center block bg-slate-100 text-brand-charcoal hover:bg-brand-orange hover:text-white font-oswald font-semibold text-xs py-2.5 rounded-lg transition-colors tracking-wide uppercase">
                  GET IN TOUCH
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
