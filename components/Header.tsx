'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav as LINKS, site, whatsappLink } from '@/lib/site'
import styles from './Header.module.css'

export default function Header() {
  const [active, setActive] = useState('#home')
  const [menuOpen, setMenuOpen] = useState(false)

  function go(href: string) {
    setActive(href)
    setMenuOpen(false)
  }

  return (
    <header className={styles.header} id="home">
      <a className={styles.brand} href="#home" onClick={() => go('#home')}>
        <span className={styles.brandName}>{site.name}</span>
      </a>

      <nav className={styles.nav} aria-label="Primary">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.navLink}
            data-active={active === link.href ? 'true' : undefined}
            onClick={() => go(link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className={styles.actions}>
        <a className={styles.phone} href={`tel:${site.whatsappNumber}`}>
          {site.phoneDisplay}
        </a>
        <a
          className={`${styles.whatsapp} btn-primary`}
          href={whatsappLink(site.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp
        </a>
        <button
          type="button"
          className={styles.menuBtn}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <nav className={styles.mobileNav} aria-label="Mobile">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileNavLink}
              data-active={active === link.href ? 'true' : undefined}
              onClick={() => go(link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            className={`${styles.mobileWhatsapp} btn-primary`}
            href={whatsappLink(site.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Chat on WhatsApp
          </a>
        </nav>
      )}
    </header>
  )
}
