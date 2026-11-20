import Image from 'next/image'
import { hero, site, whatsappLink } from '@/lib/site'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.media}>
        <Image
          src="/images/hero.png"
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.veil} />
      </div>

      <div className={styles.inner}>
        <div className={styles.textCol} data-reveal>
          <span className={styles.badge}>{hero.badge}</span>

          <h1 className={styles.headline}>
            {hero.headlineLine1}
            <br />
            <span className={styles.accent}>{hero.headlineAccent}</span>
            {hero.headlineEnd}
          </h1>

          <p className={styles.subline}>{hero.subline}</p>

          <div className={styles.actions}>
            <a
              className={`${styles.primaryBtn} btn-primary`}
              href={whatsappLink(hero.primaryCtaMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {hero.primaryCta}
            </a>
            <a className={styles.secondaryBtn} href="#services">{hero.secondaryCta}</a>
          </div>
          <p className={styles.proofline}>Made to measure in Kochi <span>·</span> 15 years’ experience <span>·</span> Your fabric welcome</p>
        </div>
      </div>

    </section>
  )
}
