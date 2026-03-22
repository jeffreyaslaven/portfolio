export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="footer">
        <p>© {year} Jeffrey Slaven. Built with React + Vite. <a href="https://github.com/jeffreyaslaven/portfolio" target="_blank" rel="noopener noreferrer">View source</a>.</p>
        <div className="footer-links">
          <a href="mailto:jeffalslavenjr@gmail.com">Email</a>
          <a
            href="https://linkedin.com/in/jeffrey-a-slaven-jr"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jeffreyaslaven"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
