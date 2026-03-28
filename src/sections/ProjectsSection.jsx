import Reveal from '../components/Reveal'
import { projects } from '../data/content'

function ProjectsSection() {
  return (
    <section id="projects" className="section section-alt scrub-section">
      <div className="projects-parallax parallax-layer" data-speed="0.45" />
      <div className="container">
        <Reveal className="section-head scrub-text">
          <p className="section-kicker">Projects / Work Gallery</p>
          <h2>Execution Quality You Can See</h2>
          <p className="section-lead">
            A curated portfolio of foundation and piling projects delivered across industrial, urban, and public infrastructure sectors.
          </p>
        </Reveal>

        <div className="project-grid">
          {projects.map((project) => (
            <Reveal key={project.title} className="project-card scrub-image scrub-card">
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-overlay">
                <p>{project.category}</p>
                <h3>{project.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
