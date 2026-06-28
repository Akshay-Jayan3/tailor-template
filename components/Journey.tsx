import styles from './Journey.module.css'

/* THE JOURNEY — between The Work and the Conviction moment.
   Answers the visitor's third silent question: will she deliver?
   Five stages every order moves through, connected by the thread.
   Motion pass: the thread draws across and each knot ties in turn. */

const STEPS = [
  {
    n: '01',
    name: 'Fabric received',
    desc: 'Your fabric, your measurements, your date — noted.',
  },
  {
    n: '02',
    name: 'Cutting',
    desc: 'Chalked and cut to your measurements.',
  },
  {
    n: '03',
    name: 'Stitching',
    desc: 'At the machine, piece by piece.',
  },
  {
    n: '04',
    name: 'Finishing',
    desc: 'Hooks, hems, falls — the slow last details.',
  },
  {
    n: '05',
    name: 'Ready',
    desc: 'Try it on. Fitting is part of the work.',
  },
]

export default function Journey() {
  return (
    <section className={styles.journey} id="journey">
      <div className={styles.container}>
        <header className={styles.intro} data-reveal>
          <span className={styles.label}>The journey</span>
          <h2 className={styles.heading}>
            You always know where your outfit is.
          </h2>
          <p className={styles.sub}>
            Every order moves through five stages. Ask anytime — I&rsquo;ll
            tell you exactly where yours is.
          </p>
        </header>

        <ol className={styles.track} data-journey-track>
          {STEPS.map((step, i) => (
            <li key={step.n} className={styles.step} data-step={i}>
              <span className={styles.knot} data-knot aria-hidden="true" />
              <span className={styles.stepN}>{step.n}</span>
              <h3 className={styles.stepName}>{step.name}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </li>
          ))}
        </ol>

        <p className={styles.footnote} data-reveal>
          Updates on WhatsApp, if you want them.
        </p>
      </div>
    </section>
  )
}
