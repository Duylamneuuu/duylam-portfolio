import { ProjectBlock } from "@/components/ProjectBlock";
import { about, process, projects, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to selected work
      </a>
      <header className="site-header">
        <div className="wrap header-inner">
          <a className="wordmark" href="#top">
            {site.name}
          </a>
          <nav className="nav" aria-label="Page">
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap">
            <p className="eyebrow">{site.eyebrow}</p>
            <h1>{site.headline}</h1>
            <p className="hero-copy">{site.summary}</p>
            <ul className="hero-links">
              <li>
                <a href={site.linkedin} rel="noreferrer" target="_blank">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={site.github} rel="noreferrer" target="_blank">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#work">Selected work</a>
              </li>
            </ul>
            <p className="hero-meta">
              {site.location} · {site.availability}
            </p>
          </div>
        </section>

        <section className="section" id="work">
          <div className="wrap">
            <div className="section-head">
              <h2>Selected work</h2>
              <p className="section-kicker">Three product prototypes</p>
            </div>
            {projects.map((project) => (
              <ProjectBlock key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="section" id="process">
          <div className="wrap">
            <div className="section-head">
              <h2>How I work</h2>
            </div>
            <ol className="process-list">
              {process.steps.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="process-support">{process.support}</p>
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap">
            <div className="section-head">
              <h2>About</h2>
            </div>
            <div className="about-grid">
              <p>{about.body}</p>
              <div>
                <dl className="meta-block">
                  <dt>Education</dt>
                  <dd>
                    {about.education.school}
                    <br />
                    {about.education.program}
                    <br />
                    {about.education.dates}
                  </dd>
                </dl>
                <dl className="meta-block">
                  <dt>{about.ielts.label}</dt>
                  <dd>
                    {about.ielts.score}
                    <br />
                    {about.ielts.issuer}
                    <br />
                    {about.ielts.date}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="wrap">
            <h2>Let’s connect.</h2>
            <p>
              I’m open to student programs, internships, part-time opportunities,
              and conversations around digital product, business analysis, and
              practical AI.
            </p>
            <ul className="contact-links">
              <li>
                <a href={site.linkedin} rel="noreferrer" target="_blank">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={site.github} rel="noreferrer" target="_blank">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <span>{site.name}</span>
          <span>
            {site.location} · {site.eyebrow}
          </span>
        </div>
      </footer>
    </>
  );
}
