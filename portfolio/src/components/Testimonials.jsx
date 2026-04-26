import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    id: 1,
    client: "Supreme Surgicals",
    role: "CEO,Supreme Surgicals",
    text: " “Professional work with excellent attention to detail. The website is fast, responsive, and easy for our customers to use.”",
    rating: 5,
  },
  {
    id: 2,
    client: "Mohammed Yaseen",
    role: "Founder, JS GARMENTS",
    text: "“As discussed, we’re very happy with the outcome. Looking forward to working together again on future projects.”",
    rating: 5,
  },
  {
    id: 3,
    client: "Gowtham",
    role: "CEO, Magfrai",
    text: "“Solid contribution to our ERP development. As discussed, we’ll definitely collaborate again for upcoming features.”",
    rating: 5,
  },
];

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="testimonials" className="py-24 px-6 md:px-24 bg-background">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold"><span className="text-primary italic font-serif">Stories</span></h2>
          <p className="text-text-muted">Don't just take my word for it.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2rem] glass-effect border border-white/10 group hover:border-primary/50 transition-all duration-300 relative"
            >
              <div className="text-primary text-5xl font-serif italic mb-6">"</div>
              <p className="text-lg text-text-main mb-8 leading-relaxed h-32">
                {test.text}
              </p>
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <div>
                  <h4 className="font-bold text-white">{test.client}</h4>
                  <p className="text-sm text-text-muted">{test.role}</p>
                </div>
                <div className="flex gap-1 text-primary">
                  {[...Array(test.rating)].map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
