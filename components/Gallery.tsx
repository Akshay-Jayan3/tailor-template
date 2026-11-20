import Image from 'next/image'
import { gallerySection } from '@/lib/site'
import styles from './Gallery.module.css'

export type GalleryPiece = {
  name: string
  desc: string
  src: string
}

export default function Gallery({ items }: { items: GalleryPiece[] }) {
  return (
    <section className={styles.work} id="work">
      <div className={styles.container}>
        <header className={styles.intro} data-reveal>
          <div>
            <span className={styles.label}>{gallerySection.label}</span>
            <h2 className={styles.heading}>{gallerySection.heading}</h2>
          </div>
        </header>

        <div className={styles.grid}>
          {items.map((piece, i) => (
            <article key={`${piece.name}-${i}`} className={styles.piece}>
              <div className={styles.frame}>
                <Image
                  src={piece.src}
                  alt={`${piece.name} — finished piece`}
                  fill
                  sizes="(max-width: 720px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}