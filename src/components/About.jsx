const SKILLS = [
  'Python',
  'React',
  'TypeScript',
  'JavaScript',
  'Docker',
  'AWS',
  'Go',
  'Java / Spring',
  'Flask',
  'SQL / NoSQL',
  'MongoDB',
  'Datadog',
]

export default function About() {
  return (
    <section id="about">
      <div className="section">
        <p className="section-label" data-reveal>About Me</p>
        <h2 className="section-title" data-reveal>Building things that work.</h2>
        <div className="divider" data-reveal />

        <div className="about-grid">
          <div className="about-text" data-reveal>
            <p>
              I'm a software engineer with 7+ years of experience spanning
              full-stack development, data engineering, and security. Currently
              at Netflix, I build internal tooling and automation for GRC.
            </p>
            <p>
              At Liberty Mutual I led teams, shipped revenue-generating products,
              and built platforms that scaled company-wide. I care about clean
              systems, real impact, and raising the bar for the engineers around me.
            </p>
            <p>
              When I'm not writing code, I'm exploring new tools, working on side
              projects, or thinking about how to make complex systems simpler.
            </p>
          </div>

          <div className="skills-sidebar" data-reveal>
            <h3>Skills &amp; Technologies</h3>
            <div className="skills-grid">
              {SKILLS.map((skill) => (
                <div className="skill-chip" key={skill}>
                  <span className="skill-dot" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
