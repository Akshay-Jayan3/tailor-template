'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './StitchThread.module.css'

gsap.registerPlugin(ScrollTrigger)

/* THE SIGNATURE — a gold running stitch that sews the page together.
   The path is computed from the real positions of the sections after
   layout, then drawn on scroll via a mask (dashed strokes can't be
   dash-offset-revealed directly). Desktop only; reduced-motion users
   never see it move. */

type Pt = [number, number]

/* Catmull-Rom through the waypoints → smooth cubic path */
function toPath(pts: Pt[]): string {
  if (pts.length < 2) return ''
  let d = `M ${pts[0][0]},${pts[0][1]}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[Math.min(pts.length - 1, i + 2)]
    const c1x = p1[0] + (p2[0] - p0[0]) / 6
    const c1y = p1[1] + (p2[1] - p0[1]) / 6
    const c2x = p2[0] - (p3[0] - p1[0]) / 6
    const c2y = p2[1] - (p3[1] - p1[1]) / 6
    d += ` C ${c1x},${c1y} ${c2x},${c2y} ${p2[0]},${p2[1]}`
  }
  return d
}

export default function StitchThread() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const dashRef = useRef<SVGPathElement>(null)
  const maskRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add(
      '(prefers-reduced-motion: no-preference) and (min-width: 861px)',
      () => {
        const wrap = wrapRef.current
        const svg = svgRef.current
        const dash = dashRef.current
        const maskPath = maskRef.current
        if (!wrap || !svg || !dash || !maskPath) return

        let tween: gsap.core.Tween | null = null

        const build = () => {
          const W = document.documentElement.clientWidth
          const H = document.documentElement.scrollHeight
          const yOf = (el: Element) =>
            el.getBoundingClientRect().top + window.scrollY

          const hero = document.querySelector('main section')
          const craft = document.getElementById('craft')
          const work = document.getElementById('work')
          const services = document.getElementById('services')
          const journey = document.getElementById('journey')
          const conviction = document.getElementById('conviction')
          const mark = conviction?.querySelector('span')
          const waBtn = document.querySelector('#contact a[href*="wa.me"]')
          if (!hero || !craft || !work || !journey || !conviction || !waBtn)
            return

          const heroB = yOf(hero) + (hero as HTMLElement).offsetHeight
          const craftT = yOf(craft)
          const craftH = (craft as HTMLElement).offsetHeight
          const workT = yOf(work)
          const workH = (work as HTMLElement).offsetHeight
          const journeyT = yOf(journey)
          const journeyH = (journey as HTMLElement).offsetHeight
          const convT = yOf(conviction)
          const convH = (conviction as HTMLElement).offsetHeight
          const btnRect = waBtn.getBoundingClientRect()
          const btnX = btnRect.left + btnRect.width / 2
          const btnY = btnRect.top + window.scrollY
          const markY = mark ? yOf(mark) + 24 : convT + 160

          const cx = W / 2
          const edge = Math.max(64, W * 0.05)

          const pts: Pt[] = [
            /* leaves the hero's scroll cue */
            [cx, heroB - 96],
            [cx, heroB + 40],
            /* runs down the craft section's measuring-tape edge */
            [edge, craftT + craftH * 0.3],
            [edge, craftT + craftH * 0.72],
            /* weaves through the gallery's stagger */
            [W * 0.53, workT + workH * 0.12],
            [W * 0.88, workT + workH * 0.42],
            [W * 0.42, workT + workH * 0.78],
            /* runs the gutter between the stitching list's two pages —
               three pinned points keep the spline from bulging into
               the columns' text */
            ...(services
              ? ([
                  [W / 2, yOf(services) + 30],
                  [
                    W / 2,
                    yOf(services) +
                      (services as HTMLElement).offsetHeight * 0.45,
                  ],
                  [
                    W / 2,
                    yOf(services) +
                      (services as HTMLElement).offsetHeight * 0.85,
                  ],
                ] as Pt[])
              : []),
            /* slips down the journey section's right margin —
               the track's own thread owns the centre there */
            [W * 0.9, journeyT + journeyH * 0.3],
            [W * 0.86, journeyT + journeyH * 0.75],
            /* into the dark — and ties a loop at the stitch mark */
            [cx, convT + 30],
            [cx + 52, markY + 30],
            [cx, markY + 62],
            [cx - 52, markY + 30],
            [cx + 4, markY + 2],
            /* down past the quote, then home to the button */
            [W * 0.38, convT + convH * 0.86],
            [btnX, btnY - 22],
          ]

          svg.setAttribute('viewBox', `0 0 ${W} ${H}`)
          svg.setAttribute('width', String(W))
          svg.setAttribute('height', String(H))
          wrap.style.height = `${H}px`

          const d = toPath(pts)
          dash.setAttribute('d', d)
          maskPath.setAttribute('d', d)

          const len = maskPath.getTotalLength()
          maskPath.style.strokeDasharray = `${len}`
          maskPath.style.strokeDashoffset = `${len}`

          tween?.scrollTrigger?.kill()
          tween?.kill()
          tween = gsap.to(maskPath, {
            strokeDashoffset: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: document.body,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1,
            },
          })
        }

        /* let fonts and layout settle before measuring */
        const timer = setTimeout(build, 400)
        let resizeTimer: ReturnType<typeof setTimeout>
        const onResize = () => {
          clearTimeout(resizeTimer)
          resizeTimer = setTimeout(build, 300)
        }
        window.addEventListener('resize', onResize)

        return () => {
          clearTimeout(timer)
          clearTimeout(resizeTimer)
          window.removeEventListener('resize', onResize)
          tween?.scrollTrigger?.kill()
          tween?.kill()
        }
      }
    )

    return () => mm.revert()
  }, [])

  return (
    <div ref={wrapRef} className={styles.wrap} aria-hidden="true">
      <svg ref={svgRef} className={styles.svg} fill="none">
        <defs>
          <mask id="stitch-mask" maskUnits="userSpaceOnUse">
            <path ref={maskRef} stroke="#fff" strokeWidth="6" fill="none" />
          </mask>
        </defs>
        <path ref={dashRef} className={styles.dash} mask="url(#stitch-mask)" />
      </svg>
    </div>
  )
}
