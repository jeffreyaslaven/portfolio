const PROJECTS = [
  {
    icon: '🔍',
    name: 'Vulnerability Scanner',
    description:
      'A FastAPI-based REST service that scans container images for security vulnerabilities using Trivy. Integrates EPSS scoring to predict exploit likelihood and exposes results through a clean API with auto-generated Swagger docs.',
    tags: ['Python', 'FastAPI', 'Docker', 'Security', 'API'],
    github: 'https://github.com/jeffreyaslaven/vulnerability_scanner',
  },
  {
    icon: '🛸',
    name: 'UFO Sighting API',
    description:
      'A FastAPI-based REST service that pulls and serves UFO sighting reports from the National UFO Reporting Center. Supports filtering by date, location, and auto-refreshes data every 24 hours.',
    tags: ['Python', 'FastAPI', 'BeautifulSoup', 'TinyDB', 'API'],
    github: 'https://github.com/jeffreyaslaven/ufo-sighting-api',
  },
  {
    icon: '⚡',
    name: 'LRU Cache',
    description:
      'A Python implementation of a Least Recently Used (LRU) cache data structure. Supports O(1) get and put operations, automatic eviction of the least recently used item, and a full pytest test suite.',
    tags: ['Python', 'Data Structures', 'pytest'],
    github: 'https://github.com/jeffreyaslaven/lru_cache',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="section">
        <p className="section-label" data-reveal>Projects</p>
        <h2 className="section-title" data-reveal>Things I've built.</h2>
        <p className="section-subtitle" data-reveal>
          A selection of personal projects — mostly games and tools I built to
          explore new languages and concepts.{' '}
          <a
            href="https://github.com/jeffreyaslaven"
            target="_blank"
            rel="noopener noreferrer"
            className="github-all-link"
          >
            See everything on GitHub →
          </a>
        </p>

        <div className="projects-grid" data-reveal>
          {PROJECTS.map((project) => (
            <a
              className="project-card"
              key={project.name}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-icon">{project.icon}</div>
              <div className="project-name">{project.name}</div>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
