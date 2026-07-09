import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What technologies do you specialize in?",
    a: "I specialize in the MERN stack, including React, Node.js, Express.js, and MongoDB. I also work with Django, PostgreSQL, JavaScript, Python, REST APIs, and modern frontend technologies like Tailwind CSS and Bootstrap."
  },
  {
    q: "What types of projects do you build?",
    a: "I develop responsive business websites, full-stack web applications, AI-powered platforms, ERP systems, admin dashboards, and custom web solutions tailored to client requirements."
  },
  {
    q: "Can you build both the frontend and backend?",
    a: "Yes. I build complete full-stack applications, from responsive user interfaces to secure backend APIs, database integration, authentication, and deployment."
  },
  {
    q: "Are you available for internships or full-time opportunities?",
    a: "Yes. I'm open to internships, full-time roles, and freelance projects where I can contribute, learn new technologies, and build scalable web applications."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="faq" className="py-24 px-6 md:px-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
  Frequently <span className="text-primary">Asked Questions</span>
</h2>

<p className="text-text-muted">
  Learn more about my skills, experience, and the services I provide.
</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-white/10 rounded-2xl glass-effect overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-6 md:p-8 flex justify-between items-center focus:outline-none hover:bg-white/5 transition-colors group"
              >
                <span className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">{faq.q}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-text-muted transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 md:px-8 pb-6 md:pb-8 text-text-muted leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
