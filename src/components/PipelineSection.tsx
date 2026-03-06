import { motion } from "framer-motion";
import augGrid from "@/assets/augmentation-grid.jpg";

const steps = [
  { num: "01", label: "Load Source Images", desc: "Import labeled training data" },
  { num: "02", label: "Apply Transformations", desc: "Rotation, scaling, noise, brightness" },
  { num: "03", label: "Preserve Labels", desc: "Bounding boxes auto-adjusted" },
  { num: "04", label: "Export Dataset", desc: "Thousands of new training samples" },
];

const PipelineSection = () => {
  return (
    <section className="py-24 relative grid-bg">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Augmentation <span className="text-primary">Pipeline</span>
            </h2>
            <p className="text-muted-foreground mb-10 text-lg">
              A streamlined process that takes a small set of labeled images and generates thousands of diverse, pre-labeled training samples.
            </p>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-center gap-5"
                >
                  <span className="font-mono-code text-primary text-2xl font-bold opacity-60">
                    {step.num}
                  </span>
                  <div className="flex-1 border-l border-primary/20 pl-5">
                    <h3 className="font-semibold text-foreground">{step.label}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden glow-cyan">
              <img
                src={augGrid}
                alt="Augmented training images grid showing transformations"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 glass-surface rounded-md px-4 py-3 font-mono-code text-xs text-primary">
              output: 10,000+ images
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PipelineSection;
