import { Scissors, Shirt, Sparkles, Baby, Ruler, Moon } from 'lucide-react'
import { services, servicesSection } from '@/lib/site'
import styles from './Services.module.css'

const ICONS: Record<string, React.ReactNode> = {
  scissors: <Scissors size={20} strokeWidth={1.6} />,
  shirt: <Shirt size={20} strokeWidth={1.6} />,
  sparkle: <Sparkles size={20} strokeWidth={1.6} />,
  star: <Baby size={20} strokeWidth={1.6} />,
  ruler: <Ruler size={20} strokeWidth={1.6} />,
  moon: <Moon size={20} strokeWidth={1.6} />,
}

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <header className={styles.intro} data-reveal>
          <span className={styles.label}>{servicesSection.label}</span>
          <h2 className={styles.heading}>{servicesSection.heading}</h2>
        </header>

        <div className={styles.grid}>
          {services.map((s) => (
            <div className={styles.card} key={s.name} data-reveal>
              <span className={styles.icon} aria-hidden="true">
                {ICONS[s.icon]}
              </span>
              <h3 className={styles.name}>{s.name}</h3>
              <p className={styles.desc}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <a className={styles.cta} href="#contact">
            {servicesSection.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
