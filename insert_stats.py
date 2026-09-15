with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

import_statement = "import { AnimatedCounter } from '../components/AnimatedCounter';\n"
content = content.replace("import { ProjectCard } from '../components/ProjectCard';", "import { ProjectCard } from '../components/ProjectCard';\n" + import_statement)

stats_section = """      </section>

      {/* 2.5 STATS SECTION */}
      <section className="py-20 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { label: "YEARS OF EXCELLENCE", value: 15, suffix: "+" },
              { label: "PROJECTS COMPLETED", value: 350, suffix: "+" },
              { label: "AWARDS WON", value: 24, suffix: "" },
              { label: "SATISFIED CLIENTS", value: 100, suffix: "%" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center"
              >
                <div className="font-oswald text-5xl md:text-6xl font-bold text-brand-orange mb-3">
                  <AnimatedCounter end={stat.value} duration={2500} suffix={stat.suffix} />
                </div>
                <div className="text-brand-charcoal font-medium tracking-widest text-sm uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}"""

content = content.replace("      </section>\n\n      {/* 3. ABOUT SECTION */}", stats_section)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)
