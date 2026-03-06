import { motion } from "framer-motion";

const techs = [
  { name: "Python", role: "Core Language", detail: "Scripting and pipeline orchestration" },
  { name: "OpenCV", role: "Image Processing", detail: "Geometric & photometric transforms" },
  { name: "Keras", role: "Deep Learning", detail: "Model-aware augmentation pipeline" },
  { name: "NumPy", role: "Numerical Computing", detail: "Array ops and noise generation" },
];

const TechStackSection = () => {
  return (
    <section className="py-24 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tech <span className="text-primary">Stack</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-surface rounded-lg p-6 text-center hover:glow-cyan transition-shadow duration-500"
            >
              <div className="font-mono-code text-primary text-lg font-bold mb-2">{tech.name}</div>
              <div className="text-foreground font-medium text-sm mb-1">{tech.role}</div>
              <div className="text-xs text-muted-foreground">{tech.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
