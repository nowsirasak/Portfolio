import { motion } from "framer-motion";
import { skills } from "../data";
import { fadeUp, inView, stagger } from "../motion";
import SectionHeading from "./SectionHeading";

function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <SectionHeading title="Skills." subtitle="The toolkit I bring to every project." />

        <motion.div className="skills" variants={stagger(0.12)} {...inView}>
          {skills.map((group) => (
            <motion.article className="tile skills__card" key={group.title} variants={fadeUp}>
              <h3 className="skills__title">{group.title}</h3>
              <p className="skills__caption">{group.caption}</p>
              <motion.ul className="chips" variants={stagger(0.04)}>
                {group.items.map((s) => (
                  <motion.li
                    className="chip"
                    key={s}
                    variants={{
                      hidden: { opacity: 0, scale: 0.85 },
                      show: { opacity: 1, scale: 1 },
                    }}
                  >
                    {s}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
