import {
  contactSection,
  footerPoints,
  site,
  whatsappLink,
} from "@/lib/site";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      {/* Contact + Location */}
      <div className={styles.contactGrid} data-reveal>
        {/* Left — Contact information */}
        <div className={styles.contactPanel}>
          <div className={styles.contactIntro}>
            <p className={styles.ctaEyebrow}>
              {contactSection.eyebrow}
            </p>

            <h2 className={styles.ctaHeading}>
              {contactSection.heading}
            </h2>

            {contactSection.description && (
              <p className={styles.ctaDescription}>
                {contactSection.description}
              </p>
            )}

            <a
              className={`${styles.ctaBtn} ${styles.ctaBtnSolid} btn-primary`}
              href={whatsappLink(site.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{contactSection.whatsappCta}</span>
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className={styles.locationDetails}>
            <p className={styles.locationEyebrow}>Visit Us</p>

            <h3 className={styles.locationTitle}>
              {site.name}
            </h3>

            <div className={styles.detailsList}>
              <div className={styles.detail}>
                <span className={styles.detailIcon} aria-hidden>
                  ◇
                </span>

                <div>
                  <span className={styles.detailLabel}>
                    Location
                  </span>

                  <span className={styles.detailValue}>
                    {site.area}
                  </span>
                </div>
              </div>

              <div className={styles.detail}>
                <span className={styles.detailIcon} aria-hidden>
                  ◷
                </span>

                <div>
                  <span className={styles.detailLabel}>
                    Hours
                  </span>

                  <span className={styles.detailValue}>
                    {site.hours}
                  </span>
                </div>
              </div>

              <div className={styles.detail}>
                <span className={styles.detailIcon} aria-hidden>
                  ♡
                </span>

                <div>
                  <span className={styles.detailLabel}>
                    Visits
                  </span>

                  <span className={styles.detailValue}>
                    {site.walkIns}
                  </span>
                </div>
              </div>
            </div>

            <a
              className={styles.mapLink}
              href={site.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{contactSection.visitCta}</span>
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* Right — Google Maps */}
        <div className={styles.mapPanel}>
          <iframe
            src={site.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title={`${site.name} location`}
          />
        </div>
      </div>

      {/* Trust points */}
      <footer className={styles.footer}>
        {footerPoints.map((point) => (
          <div
            className={styles.footPoint}
            key={point.label}
          >
            <div className={styles.footLabel}>
              {point.label}
            </div>

            <div className={styles.footSub}>
              {point.sub}
            </div>
          </div>
        ))}
      </footer>

      {/* Floating WhatsApp */}
      <a
        className={`${styles.float} btn-primary`}
        href={whatsappLink(site.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={contactSection.floatCta}
      >
        💬 {contactSection.floatCta}
      </a>
    </section>
  );
}