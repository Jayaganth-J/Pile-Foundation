import Reveal from '../components/Reveal'
import AnimatedCounter from '../components/AnimatedCounter'
import { company, stats } from '../data/content'

function AboutSection() {
  return (
    <section id="about" className="section section-alt scrub-section">
      <div className="container">
        <Reveal className="scrub-text">
          <p className="section-kicker">About C.C. Pile Foundation</p>
          <h2>Engineered Reliability for Every Ground Condition</h2>
          <p className="section-lead">
            Founded by {company.founder} and led by Proprietor {company.proprietor}, we combine practical field expertise with modern engineering discipline to execute foundation systems that perform for decades.
          </p>
        </Reveal>

        <div className="stats-grid">
          {stats.map((item) => (
            <Reveal key={item.label} className="stat-card scrub-card">
              <h3>
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </h3>
              <p>{item.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
