import { contactSection, footerPoints, site, whatsappLink } from '@/lib/site'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.ctaBar} data-reveal>
        <div className={styles.ctaText}>
          <p className={styles.ctaEyebrow}>{contactSection.eyebrow}</p>
          <h2 className={styles.ctaHeading}>{contactSection.heading}</h2>
        </div>

        <div className={styles.ctaActions}>
          <a
            className={`${styles.ctaBtn} ${styles.ctaBtnSolid} btn-primary`}
            href={whatsappLink(site.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contactSection.whatsappCta}
          </a>
          <a className={styles.ctaBtn} href={`tel:${site.whatsappNumber}`}>
            {contactSection.visitCta} · {site.area}
          </a>
        </div>
      </div>

      <footer className={styles.footer}>
        {footerPoints.map((p) => (
          <div className={styles.footPoint} key={p.label}>
            <div className={styles.footLabel}>{p.label}</div>
            <div className={styles.footSub}>{p.sub}</div>
          </div>
        ))}
      </footer>

      <a
        className={`${styles.float} btn-primary`}
        href={whatsappLink(site.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={contactSection.whatsappCta}
      >
        💬 {contactSection.floatCta}
      </a>
    </section>
  )
}
