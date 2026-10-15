import { motion } from "framer-motion";
import { about, profile } from "../data";
import { fadeUp, inView, stagger } from "../motion";
import SectionHeading from "./SectionHeading";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading title="About." subtitle="A little about who I am." />

        <motion.div className="bento" variants={stagger(0.1)} {...inView}>
          <motion.article className="tile tile--bio" variants={fadeUp}>
            <p className="tile__kicker">Hello</p>
            {about.bio.map((p) => (
              <p className="tile__lead" key={p}>
                {p}
              </p>
            ))}
            {profile.resume && (
              <a className="link-arrow" href={profile.resume} target="_blank" rel="noreferrer">
                Download résumé
              </a>
            )}
          </motion.article>

          {about.facts.map((f) => (
            <motion.article
              className="tile tile--fact"
              key={f.label}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <p className="tile__kicker">{f.label}</p>
              <p className="tile__value">{f.value}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
