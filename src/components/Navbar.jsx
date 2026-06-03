import { useState, useEffect } from 'react';
import { config } from '../config.js';
import { useLang } from '../LangContext.jsx';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { lang, toggle } = useLang();
  const t = config[lang];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoDot}>✦</span>
          {config.name.split(' ')[0]}
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button
            className={styles.langToggle}
            onClick={toggle}
            aria-label="Switch language"
          >
            <span className={lang === 'de' ? styles.langActive : styles.langInactive}>DE</span>
            <span className={styles.langDivider}>/</span>
            <span className={lang === 'en' ? styles.langActive : styles.langInactive}>EN</span>
          </button>

          <a href={`mailto:${config.email}`} className={styles.cta}>
            {t.nav.contact}
          </a>
        </div>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          <span className={menuOpen ? styles.active : ''}></span>
          <span className={menuOpen ? styles.active : ''}></span>
          <span className={menuOpen ? styles.active : ''}></span>
        </button>
      </div>
    </nav>
  );
}
