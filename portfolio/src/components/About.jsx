import { motion } from "framer-motion";
import CountUpPkg from "react-countup";
import { useInView } from "react-intersection-observer";

const CountUp = CountUpPkg.default || CountUpPkg;

const stats = [
  { id: 1, value: 1, label: "Years Experience", suffix: "+" },
  { id: 2, value: 5, label: "Projects Completed", suffix: "+" },
  { id: 3, value: 2, label: "Companies Worked", suffix: "" },
  { id: 4, value: 3, label: "Certifications", suffix: "" },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 px-6 md:px-24 bg-[#0a0a0a] relative">  
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Behind the <span className="text-primary italic">Codes</span>   
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              MERN Stack Developer with hands-on experience in building full-stack web applications. Skilled in developing responsive front-end interfaces, designing secure and scalable back-end systems, and integrating RESTful APIs.     
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              Experienced in delivering clean, maintainable code through real-world projects, including e-commerce and business websites. Focused on optimizing performance, enhancing user experience, and deploying production-ready applications. Continuously learning modern technologies to build high-quality, scalable solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl glass-effect border border-white/5 hover:border-primary/50 transition-colors duration-300 flex flex-col items-center justify-center text-center space-y-2 glow-on-hover"
              >
                <div className="text-4xl md:text-5xl font-black text-white">  
                  {inView ? <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} /> : "0"}
                </div>
                <div className="text-sm font-medium text-text-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;