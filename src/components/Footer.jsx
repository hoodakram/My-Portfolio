export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-inner">
        <span>© 2026 Hood Akram.</span>
        <div className="foot-social">
          <a href="mailto:hoodakram016@gmail.com" aria-label="Email Hood Akram">
            <span className="foot-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 5.5h18v13H3z" />
                <path d="M3 5.5l9 7 9-7" />
              </svg>
            </span>
            Email
          </a>
          <a href="https://github.com/hoodakram" target="_blank" rel="noopener noreferrer" aria-label="Hood Akram on GitHub">
            <span className="foot-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77A5.44 5.44 0 0 0 3.5 8.09c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </span>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/hoodakram-8877832b4/" target="_blank" rel="noopener noreferrer" aria-label="Hood Akram on LinkedIn">
            <span className="foot-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-14h4v2" />
                <rect x="2" y="9" width="4" height="12" rx="1" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </span>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
