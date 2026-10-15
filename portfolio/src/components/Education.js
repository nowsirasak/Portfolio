import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { education } from "../data";
import { fadeUp, inView, stagger } from "../motion";
import SectionHeading from "./SectionHeading";

function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  // The timeline line "draws" itself as you scroll.
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="education" className="section section--alt">
      <div className="container">
        <SectionHeading title="Education." subtitle="The journey so far." />

        <div className="timeline" ref={ref}>
          <div className="timeline__rail" aria-hidden="true">
            <motion.div className="timeline__fill" style={{ scaleY: lineScale }} />
          </div>

          <motion.ol variants={stagger(0.15)} {...inView}>
            {education.map((e) => (
              <motion.li className="timeline__item" key={e.title} variants={fadeUp}>
                <span className="timeline__dot" aria-hidden="true" />
                <p className="timeline__period">{e.period}</p>
                <h3 className="timeline__title">{e.title}</h3>
                <p className="timeline__detail">{e.detail}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}

export default Education;
