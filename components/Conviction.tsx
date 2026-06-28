import { reviewsSection, site, testimonials } from '@/lib/site'
import styles from './Conviction.module.css'

export default function Conviction() {
  return (
    <section className={styles.reviews} id="reviews">
      <div className={styles.container}>
        <header className={styles.intro} data-reveal>
          <span className={styles.label}>{reviewsSection.label}</span>
          <h2 className={styles.heading}>{reviewsSection.heading}</h2>
          <div className={styles.ratingRow}>
            <span className={styles.ratingScore}>{site.rating}</span>
            <span className={styles.stars} aria-hidden="true">
              ★★★★★
            </span>
            <span className={styles.ratingCount}>{site.reviewCount}+ Google Reviews</span>
          </div>
        </header>

        <div className={styles.grid}>
          {testimonials.map((r) => (
            <article key={r.name} className={styles.card} data-reveal>
              <div className={styles.cardStars} aria-hidden="true">
                ★★★★★
              </div>
              <p className={styles.quote}>&ldquo;{r.quote}&rdquo;</p>
              <cite className={styles.cite}>{r.name}</cite>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
