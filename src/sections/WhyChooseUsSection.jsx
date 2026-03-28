import { FaCircleCheck } from 'react-icons/fa6'
import Reveal from '../components/Reveal'
import { strengths } from '../data/content'

function WhyChooseUsSection() {
  return (
    <section id="why-us" className="section scrub-section story-pin-section">
      <div className="container split">
        <Reveal className="section-head story-pin-title scrub-text">
          <p className="section-kicker">Why Choose Us</p>
          <h2>Built on Trust, Delivered with Engineering Discipline</h2>
          <p className="section-lead">
            We focus on long-term structural performance, transparent execution, and practical solutions tailored to each project site.
          </p>
        </Reveal>

        <div className="strength-list">
          {strengths.map((item) => (
            <Reveal key={item} className="strength-item story-step scrub-card">
              <FaCircleCheck size={20} />
              <span>{item}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
