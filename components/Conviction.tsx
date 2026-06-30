import { reviewsSection, site, testimonials as fallbackTestimonials } from '@/lib/site'
import { supabase } from '@/lib/supabase'
import styles from './Conviction.module.css'

type DisplayTestimonial = { quote: string; name: string; rating: number }

async function getTestimonials(): Promise<DisplayTestimonial[]> {
  if (!supabase) return fallbackTestimonials.map((t) => ({ quote: t.quote, name: t.name, rating: 5 }))

  const { data, error } = await supabase
    .from('testimonials')
    .select('customer_name, review_text, rating')
    .eq('visible', true)
    .order('created_at', { ascending: false })

  if (error || !data || data.length === 0) {
    return fallbackTestimonials.map((t) => ({ quote: t.quote, name: t.name, rating: 5 }))
  }

  return data.map((t) => ({ quote: t.review_text, name: t.customer_name, rating: t.rating }))
}

export default async function Conviction() {
  const testimonials = await getTestimonials()

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
                {'★'.repeat(r.rating)}
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
