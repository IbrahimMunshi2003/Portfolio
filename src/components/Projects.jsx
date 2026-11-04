import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Limra Clothing",
    category: "Next.js • React • TypeScript • Supabase",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    link: "https://www.limraclothing.in/",
  },
  {
    id: 2,
    title: "AI Pharma CRM",
    category: "React • AI-Powered Application",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    link: "https://medico-nine-smoky.vercel.app/assistant",
  },
  {
    id: 3,
    title: "Supreme Surgicals Website",
    category: "Full-Stack Web App",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    link: "https://supremesurgicals.co.in/",
  },
  {
    id: 4,
    title: "AI E-Library",
    category: "React • Django • AI",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    link: "https://ai-elibrary.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-5xl font-extrabold">
            Selected{" "}
            <span className="text-primary font-serif italic font-normal">
              Works
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative block rounded-[2rem] overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-100"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-end">
                  <div>
                    <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>

                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-primary group-hover:text-black transition-colors">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            type="button"
            className="px-10 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300 text-lg font-medium inline-flex items-center gap-2"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
