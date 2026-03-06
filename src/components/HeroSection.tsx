import { motion } from "framer-motion";
import heroImage from "@/assets/hero-augmentation.jpg";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Data augmentation neural network visualization"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary font-mono-code text-xs px-3 py-1">
              Triton Robotics
            </Badge>
            <Badge variant="outline" className="border-accent/40 bg-accent/10 text-accent font-mono-code text-xs px-3 py-1">
              Computer Vision
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            <span className="text-foreground">Data</span>{" "}
            <span className="text-primary glow-text">Augmentation</span>
            <br />
            <span className="text-foreground">Script</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            A scalable image augmentation utility using Python, OpenCV, and Keras to generate
            thousands of pre-labeled training images for robotics-focused machine learning models.
          </p>

          <div className="flex flex-wrap gap-3">
            {["Python", "OpenCV", "Keras", "NumPy"].map((tech) => (
              <span
                key={tech}
                className="font-mono-code text-sm px-4 py-2 rounded-md bg-secondary text-secondary-foreground border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-primary/40 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
