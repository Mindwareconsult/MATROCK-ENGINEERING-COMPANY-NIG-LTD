import re

with open('src/pages/About.tsx', 'r') as f:
    content = f.read()

team_section = """
      {/* 4.5 OUR TEAM */}
      <section className="py-24 bg-brand-light-gray/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="MEET OUR LEADERSHIP" subtitle="The dedicated professionals driving ONYIITEX forward." />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                name: "Engr. Onyeka N.",
                role: "MD / CEO",
                image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=600"
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

      {/* 5. LOCAL SEO / CTA BANNER */}"""

content = content.replace("{/* 5. LOCAL SEO / CTA BANNER */}", team_section)

with open('src/pages/About.tsx', 'w') as f:
    f.write(content)
