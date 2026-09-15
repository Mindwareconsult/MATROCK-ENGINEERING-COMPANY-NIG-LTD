import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

# We need to replace the last </div> before </section> with </motion.div> for sections 2-12.
# Let's split by </section>
parts = content.split('</section>')

# parts[0] is everything up to the end of section 1.
# parts[1] is everything up to the end of section 2, etc.
# There are 12 sections, so 12 </section> tags, splitting into 13 parts.

for i in range(1, 12): # Indices 1 through 11 correspond to ends of sections 2 through 12
    # Find the last </div> in parts[i]
    last_div_idx = parts[i].rfind('</div>')
    if last_div_idx != -1:
        parts[i] = parts[i][:last_div_idx] + '</motion.div>' + parts[i][last_div_idx+6:]

# Join back
content = '</section>'.join(parts)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)
