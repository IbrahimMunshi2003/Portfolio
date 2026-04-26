import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "emailjs-com";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_26e9p0c",
        "template_4lq37jf",
        form.current,
        "EejKe36vBOnZKmMSZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Success! Message sent.");
          e.target.reset();
          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
          setTimeout(() => setStatus(""), 3000);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full filter blur-[200px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-2 rounded-full border border-white/10 glass-effect text-sm text-primary uppercase tracking-widest">
            Let's Talk
          </div>

          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Have an Idea?<br />
            Let's <span className="text-primary italic font-serif">Build It</span>
          </h2>

          <p className="text-lg text-text-muted">
            Whether you have a project in mind or just want to say hi, feel free to drop a message. Let's create something extraordinary together.
          </p>

          <div className="space-y-4 text-text-muted mt-8">
            <a href="mailto:ibrahimmunshi2003@gmail.com" className="block text-xl hover:text-primary transition-colors">ibrahimmunshi2003@gmail.com</a>
            <a href="tel:+916380963759" className="block text-xl hover:text-primary transition-colors">+91 63809 63759</a>
          </div>

          <div className="flex gap-4 pt-8">
            {[
              { name: "LinkedIn", url: "https://www.linkedin.com/in/ibrahimmunshi/" },
              { name: "GitHub", url: "https://github.com/IbrahimMunshi2003" }
            ].map((link, idx) => (
              <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors uppercase text-sm font-semibold tracking-wider">
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-10 rounded-[2rem] glass-effect border border-white/10 shadow-2xl relative"
        >
          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-text-muted">Full Name</label>
              <input
                id="name"
                name="from_name"
                type="text"
                placeholder="Enter your name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 text-white placeholder-text-muted/50 transition-colors"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-text-muted">Email Address</label>
              <input
                id="email"
                name="from_email"
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 text-white placeholder-text-muted/50 transition-colors"
                required
              />
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-semibold text-text-muted">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Enter subject"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 text-white placeholder-text-muted/50 transition-colors"
                required
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-text-muted">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message..."
                rows="5"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 text-white placeholder-text-muted/50 resize-none transition-colors"
                required
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "Sending..."}
              className="w-full py-4 bg-primary text-black font-bold rounded-xl shadow-[0_0_20px_rgba(163,255,18,0.2)] hover:shadow-[0_0_30px_rgba(163,255,18,0.4)] transition-all hover:-translate-y-1 active:translate-y-0 duration-300 disabled:opacity-75 disabled:cursor-not-allowed flex justify-center"
            >
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </button>

            {/* Status Message */}
            {status && status !== "Sending..." && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center text-sm font-semibold mt-4 ${status.includes("Success") ? "text-primary" : "text-red-500"}`}
              >
                {status}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-text-muted text-sm space-y-4 md:space-y-0">
        <p>© {new Date().getFullYear()} Ibrahim Munshi S. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;