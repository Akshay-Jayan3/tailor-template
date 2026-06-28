import Image from 'next/image'
import { about, site } from '@/lib/site'
import styles from './Craft.module.css'

export default function Craft() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.mediaCol} data-reveal>
          <div className={styles.videoFrame}>
            <Image
              src="/images/process/stitch.png"
              alt={about.workshopImageAlt}
              fill
              sizes="(max-width: 900px) 60vw, 30vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.storeFrame}>
            <Image
              src="/images/process/fabric.png"
              alt={`${site.name} ${about.storefrontImageAlt}`}
              fill
              sizes="(max-width: 900px) 40vw, 20vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <div data-reveal>
          <span className={styles.label}>{about.label}</span>
          <h2 className={styles.heading}>{about.heading}</h2>
          <p className={styles.copy}>{about.copy}</p>

          <ul className={styles.points}>
            {about.points.map((p) => (
              <li key={p} className={styles.point}>
                {p}
              </li>
            ))}
          </ul>

          <a className={styles.cta} href="#about">
            {about.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
