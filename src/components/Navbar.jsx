import { useState, useEffect } from 'react';
import { config } from '../config.js';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Über mich', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Erfahrung', href: '#experience' },
  { label: 'Projekte', href: '#projects' },
  { label: 'Kontakt', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

        <a href={`mailto:${config.email}`} className={styles.cta}>
          Kontakt
        </a>

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
