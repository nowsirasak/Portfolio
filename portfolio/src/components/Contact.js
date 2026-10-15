import { motion } from "framer-motion";
import { profile, socials } from "../data";
import { fadeUp, inView, stagger } from "../motion";

function Contact() {
  const links = socials.filter((s) => s.url);

  return (
    <section id="contact" className="section contact">
      <motion.div className="container contact__inner" variants={stagger(0.12)} {...inView}>
        <motion.p className="contact__eyebrow" variants={fadeUp}>
          Contact
        </motion.p>
        <motion.h2 className="contact__title" variants={fadeUp}>
          Let's build something great.
        </motion.h2>
        <motion.p className="contact__desc" variants={fadeUp}>
          Looking for an intern or have a project in mind? My inbox is always open.
        </motion.p>
        <motion.div className="contact__actions" variants={fadeUp}>
          <motion.a
            href={`mailto:${profile.email}`}
            className="btn btn--primary btn--large"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Say hello
          </motion.a>
          {links.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="link-arrow">
              {s.label}
            </a>
          ))}
        </motion.div>
        <motion.p className="contact__email" variants={fadeUp}>
          {profile.email}
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Contact;
