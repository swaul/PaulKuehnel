import { config } from '../config.js';
import { useLang } from '../LangContext.jsx';
import { useScrollAnimation } from '../hooks.js';
import styles from './Projects.module.css';
import { ExternalLink, Github, ImageOff } from 'lucide-react';

function ProjectCard({ project, strings, index }) {
  const [ref, visible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`${styles.card} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={styles.imageWrap}>
        {project.image ? (
          <img src={project.image} alt={project.name} className={styles.img} />
        ) : (
          <div className={styles.imgPlaceholder}>
            <ImageOff size={32} strokeWidth={1} />
            <span>{strings.placeholder}</span>
          </div>
        )}
        <div className={styles.overlay}>
          <div className={styles.overlayLinks}>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.overlayBtn}>
                <ExternalLink size={16} />
                {strings.liveDemo}
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={`${styles.overlayBtn} ${styles.overlayBtnGhost}`}>
                <Github size={16} />
                {strings.code}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.tags}>
          {project.tags?.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.desc}>{project.description}</p>
        <div className={styles.footer}>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <Github size={14} /> {strings.repository}
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <ExternalLink size={14} /> {strings.liveLink}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { lang } = useLang();
  const t = config[lang];
  const [ref, visible] = useScrollAnimation();

  return (
    <section className={styles.section} id="projects">
      <div className={styles.sectionHeader} ref={ref}>
        <div className={`${styles.headerInner} ${visible ? styles.visible : ''}`}>
          <span className={styles.label}>✦ {t.projectLabels.sectionLabel}</span>
          <h2 className={styles.heading}>{t.projectLabels.heading}</h2>
          <p className={styles.sub}>{t.projectLabels.sub}</p>
        </div>
      </div>

      <div className={styles.grid}>
        {t.projects.map((project, i) => (
          <ProjectCard key={i} project={project} strings={t.projectLabels} index={i} />
        ))}
      </div>
    </section>
  );
}
