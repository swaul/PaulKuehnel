import { config } from '../config.js';
import { useLang } from '../LangContext.jsx';
import { useScrollAnimation } from '../hooks.js';
import styles from './About.module.css';
import { User } from 'lucide-react';

export default function About() {
  const { lang } = useLang();
  const t = config[lang];
  const [ref, visible] = useScrollAnimation();

  return (
    <section className={styles.section} id="about" ref={ref}>
      <div className={`${styles.inner} ${visible ? styles.visible : ''}`}>

        <div className={styles.imageCol}>
          <div className={styles.imageWrap}>
            {config.profileImage ? (
              <img src={config.profileImage} alt={config.name} className={styles.photo} />
            ) : (
              <div className={styles.placeholder}>
                <User size={60} strokeWidth={1} />
                <span>profile.jpg<br/>in /public ablegen</span>
              </div>
            )}
            <div className={styles.imageAccent}></div>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <span className={styles.statNum}>5+</span>
              <span className={styles.statLabel}>{t.about.yearsExp}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>{t.projects.length}</span>
              <span className={styles.statLabel}>{t.about.projectsLabel}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>{t.education.length}</span>
              <span className={styles.statLabel}>{t.about.degreesLabel}</span>
            </div>
          </div>
        </div>

        <div className={styles.textCol}>
          <span className={styles.label}>✦ {t.about.sectionLabel}</span>
          <h2 className={styles.heading}>
            {t.about.heading.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br/>}</span>
            ))}
          </h2>
          <p className={styles.bio}>{t.bio}</p>

          <div className={styles.edu}>
            <h3 className={styles.subheading}>{t.about.educationHeading}</h3>
            <div className={styles.eduList}>
              {t.education.map((e, i) => (
                <div key={i} className={styles.eduItem}>
                  <div className={styles.eduDot}></div>
                  <div>
                    <div className={styles.eduDegree}>{e.degree}</div>
                    <div className={styles.eduMeta}>
                      <span>{e.institution}</span>
                      <span className={styles.eduPeriod}>{e.period}</span>
                    </div>
                    {e.description && (
                      <p className={styles.eduDesc}>{e.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
