import { Scissors, Shirt, Sparkles, Baby, Ruler, Moon, Pencil } from 'lucide-react'
import { services as fallbackServices, servicesSection } from '@/lib/site'
import { supabase } from '@/lib/supabase'
import styles from './Services.module.css'

const ICONS: Record<string, React.ReactNode> = {
  scissors: <Scissors size={20} strokeWidth={1.6} />,
  shirt: <Shirt size={20} strokeWidth={1.6} />,
  sparkle: <Sparkles size={20} strokeWidth={1.6} />,
  star: <Baby size={20} strokeWidth={1.6} />,
  ruler: <Ruler size={20} strokeWidth={1.6} />,
  moon: <Moon size={20} strokeWidth={1.6} />,
  pencil: <Pencil size={20} strokeWidth={1.6} />,
}

const NAME_TO_ICON: { match: RegExp; icon: string }[] = [
  { match: /blouse/i, icon: 'scissors' },
  { match: /churidar|suit/i, icon: 'shirt' },
  { match: /saree/i, icon: 'sparkle' },
  { match: /night|frock/i, icon: 'moon' },
  { match: /kid/i, icon: 'star' },
  { match: /alter/i, icon: 'ruler' },
]

function iconFor(name: string) {
  return NAME_TO_ICON.find((n) => n.match.test(name))?.icon ?? 'pencil'
}

type DisplayService = { name: string; desc: string; icon: string }

async function getServices(): Promise<DisplayService[]> {
  if (!supabase) return fallbackServices

  const { data, error } = await supabase
    .from('services')
    .select('name, description, price_range')
    .eq('visible', true)
    .order('display_order')

  if (error || !data || data.length === 0) return fallbackServices

  return data.map((s) => ({
    name: s.name,
    desc: s.description ?? s.price_range ?? '',
    icon: iconFor(s.name),
  }))
}

export default async function Services() {
  const services = await getServices()

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
