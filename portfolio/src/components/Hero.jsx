import { motion } from "framer-motion";
import { Link } from "react-scroll";
import profileImg from "../assets/ibrahimmunshiprofile.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-between relative px-6 md:px-24 overflow-hidden pt-20">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary rounded-full filter blur-[150px] opacity-20 pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl mx-auto items-center z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-2 rounded-full border border-white/10 glass-effect text-sm text-primary tracking-widest uppercase mb-4">
            Hi, I am Ibrahim Munshi S
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Full Stack<br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Developer <span className="text-primary">.</span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-muted max-w-lg">
            I craft seamless digital experiences, from responsive front-end interfaces to secure, scalable back-end systems.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <Link to="projects" smooth={true} duration={800}>
              <button className="bg-primary text-black font-semibold px-8 py-4 rounded-full shadow-[0_0_20px_rgba(163,255,18,0.3)] hover:shadow-[0_0_30px_rgba(163,255,18,0.5)] transition-all hover:scale-105 active:scale-95 duration-300">
                View Work
              </button>
            </Link>
            <Link to="contact" smooth={true} duration={800}>
              <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all duration-300 font-medium">
                Contact Me
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative h-[400px] md:h-[600px] flex justify-center items-center mt-10 md:mt-0"
        >
          <div className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-[40px] overflow-hidden glass-effect p-2 shadow-2xl relative z-10 border border-white/10 glow-on-hover transition-all duration-500 group">
             {/* Profile Image PlaceHolder */}
             <div className="w-full h-full bg-[#111] rounded-[32px] overflow-hidden relative">
               <img
                 src={profileImg}
                 alt="Portrait"
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
               />
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
