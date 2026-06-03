import { config } from '../config.js';
import { useLang } from '../LangContext.jsx';
import styles from './Footer.module.css';

export default function Footer() {
  const { lang } = useLang();
  const t = config[lang];
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.dot}>✦</span>
          {config.name}
        </div>
        <p className={styles.copy}>
          © {year} {config.name} · {t.footer.rights}
        </p>
        <p className={styles.built}>{t.footer.built}</p>
      </div>
    </footer>
  );
}
