import { useEffect } from 'react'
import './App.css'
import jateshPhoto from './assets/images/jatesh.jpg'
import resumePdf from './assets/resume/Jatesh_Joshi_Software_Engineer.pdf'

function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    reveals.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <main
  className="portfolio"
  onMouseMove={(e) => {
    const root = document.documentElement

    root.style.setProperty('--mouse-x', `${e.clientX}px`)
    root.style.setProperty('--mouse-y', `${e.clientY}px`)
  }}
>

      <nav className="navbar">
        <a href="#" className="logo">
          JJ
        </a>

        <div className="nav-links">
  <a href="#about">About</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
  <span className="nav-indicator"></span>
</div>
      </nav>

      <section className="hero-section">
        <div className="hero-left">
          <p className="eyebrow">JATESH JOSHI • SAN JOSE, CA</p>

          <h1 className="hero-name">Jatesh Joshi</h1>
          
          <h2 className="hero-subtitle hero-animate delay-1">
            Software Engineer
            <br />
            Backend Systems • APIs • Production Software
          </h2>

          <p className="hero-copy hero-animate delay-2">
            Recent Data Science graduate focused on backend engineering, API
            development, and building reliable software systems. I enjoy
            transforming complex problems into practical solutions through
            thoughtful design and continuous improvement.
          </p>

          <div className="hero-actions hero-animate delay-3">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>

            <a
              href="https://github.com/Coder-tech24"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jatesh-joshi-software-engineer"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:jateshjoshi02@gmail.com">Email Me</a>
          </div>
        </div>

        <div className="hero-right">
        <div className="floating-tech">
  <span>Python</span>
  <span>FastAPI</span>
  <span>REST</span>
  <span>Docker</span>
  <span>SQL</span>
</div>
        <div
  className="photo-card photo-entrance"
  onMouseMove={(e) => {
    const card = e.currentTarget

    const rect = card.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotateY = ((x / rect.width) - 0.5) * 12
    const rotateX = ((y / rect.height) - 0.5) * -12

    card.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg)'
  }}
>
            <img
              src={jateshPhoto}
              alt="Jatesh Joshi"
              className="profile-photo"
            />
          </div>

          <div className="status-card status-entrance">
            <span className="status-dot"></span>

            <div>
              <p>Currently building</p>
              <strong>OpsFlow Ticketing System</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-stack-section reveal" id="tech">
        <h2>Tech Stack</h2>

        <div className="tech-grid">
          <div className="tech-card">
            <div className="tech-card-inner">
              <div className="tech-card-front">
                <h3>Python</h3>
                <p>Backend Logic</p>
              </div>

              <div className="tech-card-back">
                <p>
                  Used to build API logic, automation scripts, data workflows,
                  and backend services across my projects.
                </p>
              </div>
            </div>
          </div>

          <div className="tech-card">
            <div className="tech-card-inner">
              <div className="tech-card-front">
                <h3>FastAPI / Flask</h3>
                <p>API Development</p>
              </div>

              <div className="tech-card-back">
                <p>
                  Build REST APIs, validate requests, organize routes, and
                  structure backend services using modern Python frameworks.
                </p>
              </div>
            </div>
          </div>

          <div className="tech-card">
            <div className="tech-card-inner">
              <div className="tech-card-front">
                <h3>React</h3>
                <p>User Interfaces</p>
              </div>

              <div className="tech-card-back">
                <p>
                  Create responsive web interfaces, dashboards, and portfolio
                  experiences that connect to backend systems.
                </p>
              </div>
            </div>
          </div>

          <div className="tech-card">
            <div className="tech-card-inner">
              <div className="tech-card-front">
                <h3>Docker</h3>
                <p>Containerization</p>
              </div>

              <div className="tech-card-back">
                <p>
                  Package applications into consistent environments to simplify
                  deployment and development workflows.
                </p>
              </div>
            </div>
          </div>

          <div className="tech-card">
            <div className="tech-card-inner">
              <div className="tech-card-front">
                <h3>SQL</h3>
                <p>Data Modeling</p>
              </div>

              <div className="tech-card-back">
                <p>
                  Design schemas, write queries, and structure relational data
                  for scalable backend applications.
                </p>
              </div>
            </div>
          </div>

          <div className="tech-card">
            <div className="tech-card-inner">
              <div className="tech-card-front">
                <h3>Git / Linux</h3>
                <p>Developer Workflow</p>
              </div>

              <div className="tech-card-back">
                <p>
                  Manage version control, collaborate on codebases, and work
                  efficiently through command-line tooling.
                </p>
              </div>
            </div>
          </div>

          <div className="tech-card">
            <div className="tech-card-inner">
              <div className="tech-card-front">
                <h3>API Design</h3>
                <p>Architecture</p>
              </div>

              <div className="tech-card-back">
                <p>
                  Design maintainable service layers, organize
                  responsibilities, and create APIs that are easy to extend and
                  support.
                </p>
              </div>
            </div>
          </div>

          <div className="tech-card">
            <div className="tech-card-inner">
              <div className="tech-card-front">
                <h3>Dijkstra / A*</h3>
                <p>Algorithms</p>
              </div>

              <div className="tech-card-back">
                <p>
                  Applied graph-search algorithms in RightPath to evaluate
                  routes and optimize navigation decisions using multiple
                  factors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section reveal" id="projects">
        <h2>Featured Projects</h2>

        <div className="projects-grid">
          <div className="project-card featured-project featured-large">
            <span className="project-tag">CURRENTLY BUILDING</span>

            <h3>OpsFlow</h3>

            <p>
              Building a production-style ticketing platform to learn how
              engineering teams design, manage, and scale internal workflows.
              Currently focused on backend APIs, service architecture, and
              system design.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>FastAPI</span>
              <span>REST API</span>
              <span>Docker</span>
            </div>
          </div>

          <div className="project-card">
            <h3>RightPath</h3>

            <p>
              Navigation system that combines modified Dijkstra and A*
              algorithms to evaluate routes using both efficiency and safety
              considerations.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>Dijkstra</span>
              <span>A*</span>
              <span>Algorithms</span>
            </div>
          </div>

          <div className="project-card">
            <h3>Log Analysis System</h3>

            <p>
              Backend log analysis tool that processes event data, identifies
              suspicious activity, and summarizes system behavior for faster
              troubleshooting.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>Log Parsing</span>
              <span>Analytics</span>
            </div>
          </div>

          <div className="project-card">
            <h3>Pneumonia Detection</h3>

            <p>
              Machine learning project that analyzes chest X-ray images to
              classify pneumonia cases using predictive modeling techniques.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>Machine Learning</span>
              <span>Data Science</span>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section reveal" id="about">
        <h2>Experience</h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2026 - Present</div>

            <div className="timeline-content">
              <h3>Microsoft Security Specialist</h3>

              <p>
                Support daily site operations in a structured corporate campus
                security environment, monitoring access control workflows,
                coordinating incident response, and communicating updates with
                cross-functional team members and vendors.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2023</div>

            <div className="timeline-content">
              <h3>Software Developer — VetsJoy</h3>

              <p>
                Supported backend development for a live web application by
                working on REST API endpoints, request validation, debugging,
                and data handling across development workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="education-section reveal">
        <h2>Education</h2>

        <div className="education-card">
          <p className="education-year">2023 - 2025</p>

          <h3>San Jose State University</h3>

          <p>
            Bachelor of Science in Data Science with a focus on software
            engineering, machine learning, algorithms, and data systems.
          </p>
        </div>

        <div className="education-card">
          <p className="education-year">2020 - 2023</p>

          <h3>Evergreen Valley College</h3>

          <p>
            Associate Degree in Mathematics, developing a strong foundation in
            analytical thinking, problem solving, and quantitative reasoning.
          </p>
        </div>
      </section>

      <section className="contact-section reveal" id="contact">
        <h2>Let's Connect</h2>

        <p className="contact-copy">
          I'm actively seeking Software Engineering opportunities where I can
          contribute to backend systems, API development, and production
          software while continuing to grow alongside experienced engineering
          teams.
        </p>

        <div className="contact-actions">
          <a
            href="https://www.linkedin.com/in/jatesh-joshi-software-engineer"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Coder-tech24"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a href="mailto:jateshjoshi02@gmail.com">Email Me</a>
        </div>
      </section>
    </main>
  )
}

export default App