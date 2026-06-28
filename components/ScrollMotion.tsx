'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* MOTION PASS — all section-level scroll animation, in one place.
   Initial states are set from JS, so users without JavaScript
   (and reduced-motion users) always see the complete static page. */

export default function ScrollMotion() {
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      /* ---- GENERIC INTRO REVEALS ---------------------------- */
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.set(el, { autoAlpha: 0, y: 28 })
        gsap.to(el, {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        })
      })

      /* ---- PORTFOLIO — pieces drift up in stagger --------------- */
      gsap.set('[data-piece]', { autoAlpha: 0, y: 24 })
      ScrollTrigger.batch('[data-piece]', {
        start: 'top 90%',
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: 'expo.out',
            stagger: 0.06,
          }),
      })

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill())
      }
    })

    return () => mm.revert()
  }, [])

  return null
}
