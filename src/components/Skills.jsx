import { config } from '../config.js';
import styles from './Skills.module.css';

export default function Skills() {
  const doubled = [...config.skills, ...config.skills];

  return (
    <section className={styles.section} id="skills">
      <div className={styles.labelRow}>
        <span className={styles.line}></span>
        <span className={styles.label}>✦ Tech Stack</span>
        <span className={styles.line}></span>
      </div>

      <div className={styles.track}>
        <div className={styles.marquee}>
          {doubled.map((skill, i) => (
            <span key={i} className={styles.chip}>
              {skill}
              <span className={styles.sep}>·</span>
            </span>
          ))}
        </div>
      </div>

      <div className={styles.trackReverse}>
        <div className={`${styles.marquee} ${styles.reverse}`}>
          {doubled.reverse().map((skill, i) => (
            <span key={i} className={styles.chip}>
              {skill}
              <span className={styles.sep}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
