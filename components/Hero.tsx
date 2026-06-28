import Image from 'next/image'
import { Gem, Ruler, Clock, Heart, Users, Star, Shirt } from 'lucide-react'
import { hero, site, stats, trustPoints, whatsappLink } from '@/lib/site'
import styles from './Hero.module.css'

const ICONS: Record<string, React.ReactNode> = {
  fit: <Ruler size={18} strokeWidth={1.6} />,
  quality: <Gem size={18} strokeWidth={1.6} />,
  time: <Clock size={18} strokeWidth={1.6} />,
  heart: <Heart size={18} strokeWidth={1.6} />,
  people: <Users size={18} strokeWidth={1.6} />,
  star: <Star size={18} strokeWidth={1.6} fill="currentColor" />,
  dress: <Shirt size={18} strokeWidth={1.6} />,
}

export default function Hero() {
  return (
    <section className={styles.hero}>
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

          <div className={styles.trustRow}>
            {trustPoints.map((t) => (
              <div className={styles.trustItem} key={t.label}>
                <span className={styles.trustIcon} aria-hidden="true">
                  {ICONS[t.icon]}
                </span>
                <div>
                  <div className={styles.trustLabel}>{t.label}</div>
                  <div className={styles.trustSub}>{t.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <a
              className={`${styles.primaryBtn} btn-primary`}
              href={whatsappLink(hero.primaryCtaMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {hero.primaryCta}
            </a>
            <a className={styles.secondaryBtn} href="#work">
              <Shirt size={16} strokeWidth={1.8} /> {hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>

      <div className={styles.statsBand} data-reveal>
        <div className={styles.statItem}>
          <span className={styles.statIcon}>{ICONS.people}</span>
          <div>
            <div className={styles.statValue}>{stats[0].value}</div>
            <div className={styles.statLabel}>{stats[0].label}</div>
          </div>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statIcon}>{ICONS.star}</span>
          <div>
            <div className={styles.statValue}>{stats[1].value}</div>
            <div className={styles.statLabel}>{stats[1].label}</div>
          </div>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statIcon}>{ICONS.dress}</span>
          <div>
            <div className={styles.statValue}>{stats[2].value}</div>
            <div className={styles.statLabel}>{stats[2].label}</div>
          </div>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statIcon}>{ICONS.heart}</span>
          <div>
            <div className={styles.statValue}>{stats[3].value}</div>
            <div className={styles.statLabel}>{stats[3].label}</div>
          </div>
        </div>
      </div>

      <div className={styles.ratingChip}>
        <Star size={13} strokeWidth={1.6} fill="currentColor" /> {site.rating} · {site.reviewCount}+
        Google Reviews
      </div>
    </section>
  )
}
