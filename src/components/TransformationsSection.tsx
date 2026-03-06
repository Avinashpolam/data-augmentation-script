import { motion } from "framer-motion";
import { RotateCw, Maximize2, Zap, Sun } from "lucide-react";

const transformations = [
  {
    icon: RotateCw,
    title: "Rotation",
    description: "Randomized angular transformations to simulate varying camera perspectives and object orientations.",
    code: "cv2.getRotationMatrix2D(center, angle, 1.0)",
  },
  {
    icon: Maximize2,
    title: "Scaling",
    description: "Dynamic resizing with interpolation to represent objects at different distances from the camera.",
    code: "cv2.resize(img, None, fx=scale, fy=scale)",
  },
  {
    icon: Zap,
    title: "Noise Injection",
    description: "Gaussian and salt-and-pepper noise to improve model robustness against sensor imperfections.",
    code: "img + np.random.normal(0, sigma, img.shape)",
  },
  {
    icon: Sun,
    title: "Brightness Adjustment",
    description: "Randomized exposure variations to handle different lighting conditions in real-world environments.",
    code: "cv2.convertScaleAbs(img, alpha=beta, beta=0)",
  },
];

const TransformationsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Randomized</span> Transformations
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Each augmentation is applied with randomized parameters, maximizing dataset diversity for downstream CV models.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {transformations.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-surface rounded-lg p-6 group hover:glow-cyan transition-shadow duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10 text-primary shrink-0">
                  <t.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{t.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{t.description}</p>
                  <code className="font-mono-code text-xs text-primary/80 bg-background/50 px-3 py-1.5 rounded block">
                    {t.code}
                  </code>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
