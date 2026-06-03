import { config } from '../config.js';
import { useScrollAnimation } from '../hooks.js';
import styles from './Contact.module.css';
import { Mail, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export default function Contact() {
  const [ref, visible] = useScrollAnimation();

  const socialLinks = Object.entries(config.social).filter(([, url]) => url);

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner} ref={ref}>
        <div className={`${styles.content} ${visible ? styles.visible : ''}`}>

          <div className={styles.textBlock}>
            <span className={styles.label}>✦ Kontakt</span>
            <h2 className={styles.heading}>
              Lass uns etwas<br />
              <span className={styles.accent}>zusammen bauen.</span>
            </h2>
            <p className={styles.sub}>
              Du hast ein Projekt, eine Idee oder eine offene Stelle?
              Ich freue mich über jede Nachricht.
            </p>
          </div>

          <div className={styles.actions}>
            <a href={`mailto:${config.email}`} className={styles.emailBtn}>
              <Mail size={20} />
              <span>{config.email}</span>
              <ArrowRight size={18} className={styles.arrow} />
            </a>

            {socialLinks.length > 0 && (
              <div className={styles.socials}>
                {socialLinks.map(([key, url]) => {
                  const Icon = socialIcons[key];
                  if (!Icon) return null;
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialBtn}
                      aria-label={key}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

        </div>

        {/* Big decorative text */}
        <div className={styles.bigText} aria-hidden>Let's Talk</div>
      </div>
    </section>
  );
}
