import { motion } from "framer-motion";
import { fadeUp, inView } from "../motion";

// Apple Store style heading: "Title. Grey subtitle."
function SectionHeading({ title, subtitle }) {
  return (
    <motion.h2 className="section-heading" variants={fadeUp} {...inView}>
      <span>{title}</span> <span className="section-heading__sub">{subtitle}</span>
    </motion.h2>
  );
}

export default SectionHeading;
