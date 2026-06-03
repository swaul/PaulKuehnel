import { config } from '../config.js';
import { useLang } from '../LangContext.jsx';
import { useScrollAnimation } from '../hooks.js';
import styles from './Experience.module.css';

export default function Experience() {
  const { lang } = useLang();
  const t = config[lang];
  const [ref, visible] = useScrollAnimation();

  return (
    <section className={styles.section} id="experience" ref={ref}>
      <div className={`${styles.inner} ${visible ? styles.visible : ''}`}>
        <div className={styles.header}>
          <span className={styles.label}>✦ {t.expLabels.sectionLabel}</span>
          <h2 className={styles.heading}>{t.expLabels.heading}</h2>
        </div>

        <div className={styles.timeline}>
          {t.experience.map((job, i) => (
            <div key={i} className={styles.item} style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className={styles.left}>
                <span className={styles.period}>{job.period}</span>
              </div>
              <div className={styles.connector}>
                <div className={styles.dot}></div>
                <div className={styles.line}></div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.role}>{job.role}</h3>
                  <span className={styles.company}>{job.company}</span>
                </div>
                <p className={styles.desc}>{job.description}</p>
                {job.tags && (
                  <div className={styles.tags}>
                    {job.tags.map(tag => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
