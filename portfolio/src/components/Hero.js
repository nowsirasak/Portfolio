import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "../data";
import { ease } from "../motion";

const initials = profile.name
  .split(" ")
  .map((w) => w[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease } },
};

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Text drifts up and fades; the "product shot" scales down gently — like apple.com.
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section id="top" className="hero" ref={ref}>
      <motion.div
        className="hero__text"
        style={{ y: textY, opacity: textOpacity }}
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
      >
        <motion.p className="hero__eyebrow" variants={item}>
          {profile.role}
        </motion.p>
        <motion.h1 className="hero__title" variants={item}>
          {profile.headline}
        </motion.h1>
        <motion.p className="hero__tagline" variants={item}>
          {profile.tagline}
        </motion.p>
        <motion.div className="hero__actions" variants={item}>
          <a href="#projects" className="btn btn--primary">
            View projects
          </a>
          <a href="#contact" className="link-arrow">
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__visual"
        style={{ scale: visualScale, y: visualY }}
        initial={{ opacity: 0, y: 80, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.3, ease, delay: 0.35 }}
      >
        <div className="hero__stage">
          <div className="hero__portrait">
            {profile.photo ? (
              <img src={profile.photo} alt={profile.name} />
            ) : (
              <span aria-hidden="true">{initials}</span>
            )}
          </div>
          <div className="hero__meta">
            <span className="hero__dot" />
            {profile.availability}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
