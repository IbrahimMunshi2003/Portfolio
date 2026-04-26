import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is your design process?",
    a: "I follow a human-centered approach: Discover, Define, Design, and Deliver. I start by understanding your goals, wireframing solutions, designing high-fidelity UI, and finally developing or handing over the assets."
  },
  {
    q: "Do you offer both design and development?",
    a: "Yes! I specialize in bridging the gap between design and engineering. I design in Figma and build the front-end using React, Next.js, and Tailwind CSS."
  },
  {
    q: "How long does a typical project take?",
    a: "A typical landing page takes 1-2 weeks, while a full web application or complex portfolio might take 4-8 weeks depending on the scope and features required."
  },
  {
    q: "What are your starting rates?",
    a: "Pricing varies based on project scope. However, my minimum engagement starts at $1,500. Let's talk about your budget and see how we can work together."
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
          <h2 className="text-4xl md:text-5xl font-extrabold">Got <span className="text-primary">Questions?</span></h2>
          <p className="text-text-muted">Frequently asked questions about my services & process.</p>
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
