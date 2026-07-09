import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Monitor, Database, Code, Briefcase } from 'lucide-react';

const services = [
  { id: 1, title: 'Frontend Development', description: 'HTML, CSS, Bootstrap, JavaScript, React', icon: <Monitor className="text-primary w-8 h-8" /> },
  { id: 2, title: 'Backend Development', description: 'Node.js, Express.js, Django', icon: <Code className="text-primary w-8 h-8" /> },
  { id: 3, title: 'Databases & Languages', description: 'MongoDB, PostgreSQL, JavaScript, Python', icon: <Database className="text-primary w-8 h-8" /> },
  { id: 4, title: 'Work Experience', description: 'Web Dev Intern at Supreme Surgicals & Junior Dev Intern at Magfrai (ERP Project). Building responsive sites & scalable backend systems.', icon: <Briefcase className="text-primary w-8 h-8" /> },
];

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-24 px-6 md:px-24 min-h-screen relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.h2 initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="text-5xl font-extrabold">
            My <span className="text-primary">Skills & Experience</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="text-text-muted max-w-sm text-right hidden md:block">
            Delivering robust and scalable applications from frontend to backend.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div key={service.id} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -5 }} className="p-10 rounded-3xl glass-effect border border-white/10 group hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-text-muted leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;