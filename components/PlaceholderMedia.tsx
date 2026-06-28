import styles from './PlaceholderMedia.module.css'

/* Stand-in for real photos and video footage. Rendered at the exact
   final dimensions so swapping in real media causes zero layout shift.
   The dashed inner line is a nod to tailor's pattern paper. */

type Props = {
  label: string
  kind?: 'photo' | 'video'
  /** CSS aspect-ratio, e.g. "4 / 5". Ignored when fill is true. */
  aspect?: string
  /** Absolutely fills the nearest positioned parent (hero background). */
  fill?: boolean
  className?: string
}

export default function PlaceholderMedia({
  label,
  kind = 'photo',
  aspect = '4 / 5',
  fill = false,
  className,
}: Props) {
  return (
    <div
      className={`${styles.media} ${fill ? styles.fill : ''} ${className ?? ''}`}
      style={fill ? undefined : { aspectRatio: aspect }}
      aria-hidden="true"
    >
      <div className={styles.inner}>
        <span className={styles.stitch}>— — — —</span>
        <span className={styles.kind}>{kind === 'video' ? 'video' : 'photo'}</span>
        <span className={styles.caption}>{label}</span>
      </div>
    </div>
  )
}
