import { HiBuildingOffice2, HiCubeTransparent, HiWrenchScrewdriver } from 'react-icons/hi2'
import Reveal from '../components/Reveal'
import { services } from '../data/content'

const icons = [HiBuildingOffice2, HiCubeTransparent, HiWrenchScrewdriver]

function ServicesSection() {
  return (
    <section id="services" className="section scrub-section">
      <div className="container">
        <Reveal className="section-head scrub-text">
          <p className="section-kicker">Core Services</p>
          <h2>Precision Work Backed by Site-Proven Expertise</h2>
          <p className="section-lead">
            Every solution is tailored to soil condition, load requirement, and project constraints with strict quality and safety controls.
          </p>
        </Reveal>

        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={service.title} className="service-card scrub-card">
                <div className="icon-wrap">
                  <Icon size={20} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
