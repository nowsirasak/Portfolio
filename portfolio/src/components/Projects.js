import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data";
import { fadeUp, inView, stagger } from "../motion";
import SectionHeading from "./SectionHeading";

function ProjectCard({ p, index }) {
  const [a, b] = p.tint || ["#d2d2d7", "#86868b"];
  return (
    <motion.article
      className="card"
      variants={fadeUp}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <div className="card__text">
        <p className="card__kicker">{p.kicker}</p>
        <h3 className="card__title">{p.title}</h3>
        <p className="card__desc">{p.desc}</p>
      </div>

      <div
        className="card__media"
        style={{ "--tint-a": a, "--tint-b": b }}
      >
        {p.image ? (
          <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
        ) : (
          <span className="card__glyph" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>

      <div className="card__footer">
        <ul className="card__tags">
          {p.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="card__links">
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn--small btn--primary">
              Live demo
            </a>
          )}
          {p.code && (
            <a href={p.code} target="_blank" rel="noreferrer" className="link-arrow">
              Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  const track = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft < 8,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8,
    });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scroll = (dir) => {
    const el = track.current;
    const card = el?.querySelector(".card");
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: "smooth" });
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading title="Projects." subtitle="Take a look at what I've built." />
      </div>

      <motion.div
        className="shelf"
        ref={track}
        onScroll={update}
        variants={stagger(0.1)}
        {...inView}
      >
        {projects.map((p, i) => (
          <ProjectCard p={p} index={i} key={p.title} />
        ))}
      </motion.div>

      <div className="container shelf__controls">
        <button
          className="round-btn"
          onClick={() => scroll(-1)}
          disabled={edges.start}
          aria-label="Previous projects"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
        </button>
        <button
          className="round-btn"
          onClick={() => scroll(1)}
          disabled={edges.end}
          aria-label="Next projects"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
}

export default Projects;
