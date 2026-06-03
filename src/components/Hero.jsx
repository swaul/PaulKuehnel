import { useEffect, useRef } from 'react';
import { config } from '../config.js';
import { useLang } from '../LangContext.jsx';
import styles from './Hero.module.css';
import { MapPin, ArrowDown } from 'lucide-react';

export default function Hero() {
  const { lang } = useLang();
  const t = config[lang];
  const bgRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (bgRef.current) bgRef.current.style.transform = `translateY(${y * 0.4}px)`;
      if (orb1Ref.current) orb1Ref.current.style.transform = `translateY(${y * 0.2}px)`;
      if (orb2Ref.current) orb2Ref.current.style.transform = `translateY(${y * 0.35}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bgLayer} ref={bgRef}>
        <div className={styles.grid}></div>
        <div className={`${styles.orb} ${styles.orb1}`} ref={orb1Ref}></div>
        <div className={`${styles.orb} ${styles.orb2}`} ref={orb2Ref}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.badge}>
          {config.available && (
            <span className={styles.available}>
              <span className={styles.dot}></span>
              {t.available}
            </span>
          )}
          <span className={styles.location}>
            <MapPin size={13} />
            {config.location[lang]}
          </span>
        </div>

        <h1 className={styles.headline}>
          <span className={styles.hi}>{lang === 'de' ? 'Hallo, ich bin' : 'Hi, I\'m'}</span>
          <span className={styles.name}>{config.name}</span>
          <span className={styles.role}>{t.role}</span>
        </h1>

        <p className={styles.tagline}>{t.tagline}</p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>
            {lang === 'de' ? 'Projekte ansehen' : 'View Projects'}
          </a>
          <a href={`mailto:${config.email}`} className={styles.btnSecondary}>
            {lang === 'de' ? 'Kontakt aufnehmen' : 'Get in Touch'}
          </a>
        </div>
      </div>

      <a href="#about" className={styles.scroll} aria-label="Scroll down">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
