const EXPERIENCE = [
  {
    date: '2023 – Present',
    title: 'Security Engineer II',
    org: 'Netflix · Remote',
    desc: 'Architected a greenfield GRC engineering ecosystem with version control, CI/CD, and standardized workflows. Built Python/SQL data pipelines automating SOX compliance auditing. Designed custom ETL integrations unifying 10 data streams into a single Enterprise Continuity source of truth. Deployed a Python-based LLM app via Docker leveraging the LLM API for internal GRC documentation retrieval.',
  },
  {
    date: '2018 – 2023',
    title: 'Software Engineer',
    org: 'Liberty Mutual Insurance · Multiple Locations',
    desc: 'Engineered a scalable platform for deploying predictive analytics as APIs (Python, Spring, Datadog, Docker, AWS) — scaled company-wide as the preferred method for managing and deploying predictive algorithms. Received the Excellence Award in Technology. Led a team of three to build an automated predictive pricing product (Python, React, TypeScript, MongoDB, AWS) enabling $15M in revenue. Built a client evaluation platform using Python, NLP models, React/TypeScript, and AWS. Delivered 5 full-stack submission triage apps across 3 cross-functional data science teams.',
  },
  {
    date: '2016 – 2018',
    title: 'Support Center Consultant',
    org: 'Indiana University · Bloomington, IN',
    desc: 'Provided technical support to IU students, faculty, and staff, resolving hardware, software, and networking issues across MacOS, Windows, and Linux devices. Administered user accounts, permissions, and system access under strict security protocols. Maintained documentation of troubleshooting steps and knowledge base articles to improve support efficiency.',
  },
]

const EDUCATION = [
  {
    date: '2018',
    title: 'B.S. Informatics',
    org: 'Indiana University · Bloomington, IN',
    desc: 'Focus: Security · Minors: Security, Business, History. Activities: Kappa Delta Rho (President, Risk Manager, Head of Outreach Committee), MARS, Student Conduct Board, Summer Union Board.',
  },
]

export default function Resume() {
  return (
    <section id="experience">
      <div className="section">
        <p className="section-label" data-reveal>Experience</p>
        <h2 className="section-title" data-reveal>Experience &amp; Education</h2>
        <p className="section-subtitle" data-reveal>
          A summary of my professional background. Download the full resume below.
        </p>

        <div className="resume-layout">
          <div className="resume-col" data-reveal>
            <h3>// Experience</h3>
            <div className="timeline">
              {EXPERIENCE.map((item) => (
                <div className="timeline-item" key={item.title}>
                  <p className="timeline-date">{item.date}</p>
                  <p className="timeline-title">{item.title}</p>
                  <p className="timeline-org">{item.org}</p>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-col" data-reveal>
            <h3>// Education</h3>
            <div className="timeline">
              {EDUCATION.map((item) => (
                <div className="timeline-item" key={item.title}>
                  <p className="timeline-date">{item.date}</p>
                  <p className="timeline-title">{item.title}</p>
                  <p className="timeline-org">{item.org}</p>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
