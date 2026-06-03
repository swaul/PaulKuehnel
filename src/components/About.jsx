import { config } from '../config.js';
import { useScrollAnimation } from '../hooks.js';
import styles from './About.module.css';
import { User } from 'lucide-react';

export default function About() {
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
              <span className={styles.statNum}>3+</span>
              <span className={styles.statLabel}>Jahre Erfahrung</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>{config.projects.length}</span>
              <span className={styles.statLabel}>Projekte</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>{config.education.length}</span>
              <span className={styles.statLabel}>Abschlüsse</span>
            </div>
          </div>
        </div>

        <div className={styles.textCol}>
          <span className={styles.label}>✦ Über mich</span>
          <h2 className={styles.heading}>Wer steckt hinter<br/> den Projekten?</h2>
          <p className={styles.bio}>{config.bio}</p>

          <div className={styles.edu}>
            <h3 className={styles.subheading}>Ausbildung</h3>
            <div className={styles.eduList}>
              {config.education.map((e, i) => (
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
