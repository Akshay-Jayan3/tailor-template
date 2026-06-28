'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { gallerySection, portfolioPieces as PIECES } from '@/lib/site'
import styles from './Gallery.module.css'

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null)

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <section className={styles.work} id="work">
      <div className={styles.container}>
        <header className={styles.intro} data-reveal>
          <div>
            <span className={styles.label}>{gallerySection.label}</span>
            <h2 className={styles.heading}>{gallerySection.heading}</h2>
          </div>
          <a className={styles.viewAll} href="#contact">
            {gallerySection.viewAllCta}
          </a>
        </header>

        <div className={styles.grid}>
          {PIECES.map((piece, i) => (
            <button
              key={piece.n}
              type="button"
              data-piece
              className={styles.piece}
              onClick={() => setOpen(i)}
              aria-label={`View ${piece.name}`}
            >
              <span className={styles.frame}>
                <Image
                  src={`/images/works/${piece.image}`}
                  alt={`${piece.name} — finished piece`}
                  fill
                  sizes="(max-width: 720px) 50vw, 16vw"
                  style={{ objectFit: 'cover' }}
                />
              </span>
              <span className={styles.caption}>
                <span className={styles.captionName}>{piece.name}</span>
                <span className={styles.captionDesc}>{piece.desc}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={PIECES[open].name}
          onClick={() => setOpen(null)}
        >
          <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
            <div className={styles.frame}>
              <Image
                src={`/images/works/${PIECES[open].image}`}
                alt={`${PIECES[open].name} — full view`}
                fill
                sizes="(max-width: 720px) 100vw, 440px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p className={styles.lightboxCaption}>
              {PIECES[open].name} · {PIECES[open].desc}
            </p>
          </div>
          <button type="button" className={styles.close} onClick={() => setOpen(null)} aria-label="Close">
            Close ×
          </button>
        </div>
      )}
    </section>
  )
}
