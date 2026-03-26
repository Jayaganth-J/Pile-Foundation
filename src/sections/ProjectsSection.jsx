import { useEffect, useState } from 'react'
import Reveal from '../components/Reveal'
import { projects } from '../data/content'

function ProjectsSection() {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY * 0.08)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="projects" className="section section-alt scrub-section">
      <div className="projects-parallax parallax-layer" data-speed="0.45" style={{ transform: `translateY(${offsetY}px)` }} />
      <div className="container">
        <Reveal className="scrub-text">
          <p className="section-kicker">Selected Projects</p>
          <h2>Execution Quality You Can See</h2>
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
