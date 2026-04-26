import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Services", to: "services" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-4 glass-effect shadow-md border-b border-white/5" : "py-6 bg-transparent"}`}
    >
      <div className="px-6 md:px-24 max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="home" smooth={true} duration={800} className="text-2xl font-black cursor-pointer text-white">
          IBRAHIM <span className="text-primary italic font-serif">MUNSHI</span>
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.to} 
                smooth={true} 
                duration={800} 
                activeClass="text-primary font-semibold"
                className="text-text-muted hover:text-white transition-colors cursor-pointer text-sm tracking-wide font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Link to="contact" smooth={true} duration={800}>
            <button className="px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition-all font-semibold text-sm">
              Let's Talk
            </button>
          </Link>
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "100vh" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            className="absolute top-full left-0 w-full bg-[#0f0f0f]/95 glass-effect flex flex-col items-center pt-24 space-y-8 md:hidden shadow-2xl overflow-hidden"
          >
            {links.map((link) => (
              <Link 
                key={link.name}
                to={link.to} 
                smooth={true} 
                duration={800} 
                onClick={() => setMobileMenu(false)}
                className="text-4xl font-extrabold text-white hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
