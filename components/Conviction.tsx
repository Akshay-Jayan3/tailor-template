import {
  reviewsSection,
  site,
  testimonials as fallbackTestimonials,
} from "@/lib/site";
import { supabase } from "@/lib/supabase";
import styles from "./Conviction.module.css";

type DisplayTestimonial = {
  quote: string;
  name: string;
  rating: number;
  source?: string;
};

async function getTestimonials(): Promise<DisplayTestimonial[]> {
  /*
   * Supabase remains the preferred source when the testimonials
   * table is configured and contains visible reviews.
   */
  if (supabase) {
    const { data, error } = await supabase
      .from("testimonials")
      .select("customer_name, review_text, rating")
      .eq("visible", true)
      .order("created_at", { ascending: false });

    if (!error && data && data.length > 0) {
      return data.slice(0, 3).map((testimonial) => ({
        quote: testimonial.review_text,
        name: testimonial.customer_name,
        rating: testimonial.rating,
        source: "Google",
      }));
    }
  }

  /*
   * Fallback to the verified Google reviews stored in site.ts.
   */
  return fallbackTestimonials.slice(0, 3).map((testimonial) => ({
    quote: testimonial.quote,
    name: testimonial.name,
    rating: testimonial.rating ?? 5,
    source: testimonial.source ?? "Google",
  }));
}

export default async function Conviction() {
  const testimonials = await getTestimonials();

  return (
    <section className={styles.reviews} id="reviews">
      <div className={styles.container}>
        {/* Section heading */}
        <header className={styles.intro} data-reveal>
          <span className={styles.label}>
            {reviewsSection.label}
          </span>

          <h2 className={styles.heading}>
            {reviewsSection.heading}
          </h2>
        </header>

        {/* Reviews */}
        <div className={styles.grid}>
          {testimonials.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className={styles.card}
              data-reveal
            >
              <div
                className={styles.cardStars}
                aria-label={`${review.rating} out of 5 stars`}
              >
                {"★".repeat(review.rating)}
              </div>

              <p className={styles.quote}>
                &ldquo;{review.quote}&rdquo;
              </p>

              <div className={styles.attribution}>
                <cite className={styles.cite}>
                  {review.name}
                </cite>

                {review.source && (
                  <span className={styles.source}>
                    {review.source} Review
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Google CTA */}
        {site.googleMapsUrl && (
          <div className={styles.reviewsCta} data-reveal>
            <a
              href={site.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.googleLink}
            >
              Read all reviews on Google
              <span aria-hidden>→</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}