import { motion } from "framer-motion";

const stats = [
  { value: "10K+", label: "Images Generated", sub: "Per augmentation run" },
  { value: "4", label: "Transform Types", sub: "Rotation, scale, noise, brightness" },
  { value: "100%", label: "Labels Preserved", sub: "Bounding box auto-adjustment" },
  { value: "50×", label: "Dataset Expansion", sub: "From source to output" },
];

const StatsSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-lg glass-surface gradient-border"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary glow-text mb-2">
                {stat.value}
              </div>
              <div className="text-foreground font-medium mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
