import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

# We want to replace the first <div ...> inside each <section ...> that is NOT the first section (Hero).
# Sections start with {/* 2. ... */}, {/* 3. ... */}, etc.

sections = range(2, 13)

for sec in sections:
    # Find the section start
    pattern = re.compile(r'(\{\/\* ' + str(sec) + r'\..*?\*\/\}\s*<section[^>]*>\s*)<div([^>]*)>', re.DOTALL)
    
    def repl(m):
        return m.group(1) + '<motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}' + m.group(2) + '>'
        
    content = pattern.sub(repl, content, count=1)

    # To replace the corresponding closing </div>, we need to find the </div> immediately preceding the next </section>
    # Find </section> that corresponds to this section. Since we know sections don't nest, we can just replace
    # the </div>\s*</section> with </motion.div>\n      </section> for each section after the Hero.
    
# Replace the closing tags.
# We'll just look for:
#         </div>
#       </section>
# And replace with:
#         </motion.div>
#       </section>
# But only for the sections we modified.
# Since the first section (Hero) has:
#         </div>
#       </section>
# We need to make sure we don't accidentally modify it if it matches.
# Actually, Hero section ends with:
#           </div>
#         </div>
#       </section>
# Let's just do a blanket replace for all `</div>\n      </section>` except the hero.

with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)

