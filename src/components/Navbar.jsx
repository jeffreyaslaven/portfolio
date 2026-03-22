import { useEffect, useState } from 'react'

export default function Navbar() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e) => {
      if (!localStorage.getItem('theme')) setDark(e.matches)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        js<span>.</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact" className="navbar-cta">Contact</a></li>
        <li>
          <button
            className={`theme-toggle${dark ? ' is-dark' : ''}`}
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
          />
        </li>
      </ul>
    </nav>
  )
}
