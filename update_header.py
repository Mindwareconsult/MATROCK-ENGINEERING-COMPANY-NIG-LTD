import re

with open('src/components/Header.tsx', 'r') as f:
    content = f.read()

# Replace the state definitions
new_state = """  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();"""
content = re.sub(r'  const \[isScrolled, setIsScrolled\] = useState\(false\);\n  const \[isMobileMenuOpen, setIsMobileMenuOpen\] = useState\(false\);\n  const location = useLocation\(\);', new_state, content)

# Replace useEffect for scroll
new_use_effect = """  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'services', 'projects', 'blog', 'contact'];
        let current = '';
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const rect = section.getBoundingClientRect();
            // Using a top offset to detect when a section is sufficiently in view
            if (rect.top <= window.innerHeight / 2.5) {
              current = sections[i];
              break;
            }
          }
        }
        
        if (current) {
          setActiveSection(current);
        } else if (window.scrollY === 0) {
          setActiveSection('home');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);"""

content = re.sub(r'  useEffect\(\(\) => \{\n    const handleScroll = \(\) => \{\n      setIsScrolled\(window.scrollY > 20\);\n    \};\n    window.addEventListener\(\'scroll\', handleScroll\);\n    return \(\) => window.removeEventListener\(\'scroll\', handleScroll\);\n  \}, \[\]\);', new_use_effect, content)

# Add helper function before navLinks
helper = """  const getIsActive = (path: string) => {
    if (location.pathname === '/') {
      const sectionId = path === '/' ? 'home' : path.replace('/', '');
      return activeSection === sectionId;
    }
    return location.pathname === path;
  };

  const navLinks = ["""
content = content.replace("  const navLinks = [", helper)

# Update Link usages to use getIsActive instead of location.pathname === link.path
content = content.replace("location.pathname === link.path ? 'text-brand-orange' : 'text-brand-charcoal'", "getIsActive(link.path) ? 'text-brand-orange' : 'text-brand-charcoal'")
content = content.replace('location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"', 'getIsActive(link.path) ? "w-full" : "w-0 group-hover:w-full"')

with open('src/components/Header.tsx', 'w') as f:
    f.write(content)
