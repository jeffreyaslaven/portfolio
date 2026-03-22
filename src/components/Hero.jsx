import { useState } from 'react'

const COVER_PHOTO = '/profile.jpeg'

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="home">
      <div className="hero">
        <div className="hero-content">
          <p className="hero-greeting">// Hello, world</p>
          <h1 className="hero-name">Jeffrey Slaven</h1>
          <p className="hero-role">Security Engineer II @ Netflix</p>
          <p className="hero-bio">
            Full-stack engineer with 7+ years of experience building reliable,
            scalable software. I specialize in data pipelines, cloud-native
            systems, and turning complex requirements into clean, impactful
            products.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
          </div>
          <div className="hero-scroll-hint">
            <span className="scroll-line" />
            scroll to explore
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-photo-ring">
            <div className="hero-photo-inner">
              {!imgError ? (
                <img
                  src={COVER_PHOTO}
                  alt="Jeffrey Slaven"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="hero-photo-placeholder">👤</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
