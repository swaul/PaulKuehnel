import { config } from '../config.js';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.dot}>✦</span>
          {config.name}
        </div>
        <p className={styles.copy}>
          © {year} {config.name} · Alle Rechte vorbehalten.
        </p>
        <p className={styles.built}>
          Built with React + Vite
        </p>
      </div>
    </footer>
  );
}
