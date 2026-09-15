import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, ChevronRight } from 'lucide-react';
import { blogPosts } from '../data/blogData';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-oswald text-4xl font-bold text-brand-charcoal mb-4">ARTICLE NOT FOUND</h1>
        <p className="text-brand-medium-gray mb-8">The blog post you are looking for does not exist or has been removed.</p>
        <button onClick={() => navigate('/blog')} className="bg-brand-orange text-white px-6 py-3 font-oswald rounded shadow-sm">
          RETURN TO BLOG
        </button>
      </div>
    );
  }

  // Get recent posts for the sidebar/bottom
  const recentPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="w-full bg-brand-light-gray/20">
      {/* 1. ARTICLE HERO */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-brand-orange text-white text-sm font-oswald font-medium uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              {post.category}
            </div>
            <h1 className="font-oswald text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-brand-light-gray text-sm sm:text-base font-light">
              <div className="flex items-center gap-2"><Calendar size={18} className="text-brand-orange" />{post.date}</div>
              <div className="flex items-center gap-2"><User size={18} className="text-brand-orange" />By {post.author}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTENT CONTAINER */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
          
          {/* Main Article Content */}
          <div className="lg:w-2/3">
            <Link to="/blog" className="inline-flex items-center gap-2 text-brand-medium-gray hover:text-brand-orange transition-colors font-oswald uppercase tracking-wide text-sm mb-8">
              <ArrowLeft size={16} /> Back to all articles
            </Link>
            
            <motion.article 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-brand-border prose prose-lg prose-headings:font-oswald prose-headings:text-brand-charcoal prose-h2:text-3xl prose-a:text-brand-orange hover:prose-a:text-brand-charcoal prose-p:text-brand-medium-gray prose-li:text-brand-medium-gray max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share / Tags section could go here */}
            <div className="mt-12 p-8 bg-brand-charcoal text-white rounded-2xl text-center">
              <h3 className="font-oswald text-2xl font-bold mb-4">READY TO START YOUR PROJECT?</h3>
              <p className="text-brand-light-gray mb-6">Need expert advice for your construction project in Anambra State? Our team is ready to help.</p>
              <Link to="/contact" className="inline-block bg-brand-orange text-white font-oswald font-semibold px-8 py-3 rounded hover:bg-white hover:text-brand-charcoal transition-colors">
                CONTACT US TODAY
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-border sticky top-24">
              <h3 className="font-oswald text-xl font-bold text-brand-charcoal mb-6 flex items-center gap-2">
                <span className="w-1 h-5 bg-brand-orange inline-block"></span> RECENT ARTICLES
              </h3>
              <div className="space-y-6">
                {recentPosts.map(rp => (
                  <Link key={rp.id} to={`/blog/${rp.slug}`} className="group flex gap-4 items-start">
                    <img src={rp.image} alt={rp.title} className="w-20 h-20 object-cover rounded shadow-sm shrink-0" />
                    <div>
                      <h4 className="font-oswald font-semibold text-brand-charcoal group-hover:text-brand-orange transition-colors leading-tight mb-1 text-sm sm:text-base">
                        {rp.title}
                      </h4>
                      <p className="text-xs text-brand-medium-gray flex items-center gap-1"><Calendar size={12}/> {rp.date}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <h3 className="font-oswald text-xl font-bold text-brand-charcoal mb-6 mt-12 flex items-center gap-2">
                <span className="w-1 h-5 bg-brand-orange inline-block"></span> CATEGORIES
              </h3>
              <ul className="space-y-3">
                {['Residential Construction', 'Commercial Projects', 'Building Advice', 'Regulations', 'Cost Guides'].map(cat => (
                  <li key={cat}>
                    <Link to="/blog" className="flex items-center justify-between text-brand-medium-gray hover:text-brand-orange transition-colors group">
                      <span className="text-sm font-medium">{cat}</span>
                      <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
