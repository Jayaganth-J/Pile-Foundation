import Reveal from '../components/Reveal'
import RippleButton from '../components/RippleButton'
import { company } from '../data/content'

function ContactSection() {
  return (
    <section id="contact" className="section section-alt scrub-section">
      <div className="container">
        <Reveal className="scrub-text">
          <p className="section-kicker">Contact Us</p>
          <h2>Plan Your Foundation Work with Confidence</h2>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-card scrub-card" >
            <h3>Contact Details</h3>
            <p>{company.address}</p>
            <p>
              Mobile: {company.phones[0]} / {company.phones[1]}
            </p>
            <p>Landline: {company.landline}</p>
            <p>Email: {company.email}</p>
            <iframe
              title="C.C. Pile Foundation Location"
              src="https://maps.google.com/maps?q=Thiruverkadu%20Ayapakkam%20Chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>

          <Reveal className="contact-card scrub-card" >
            <h3>Get a Quote</h3>
            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
              <label>
                Name
                <input type="text" name="name" placeholder="Your full name" required />
              </label>
              <label>
                Phone
                <input type="tel" name="phone" placeholder="Your phone number" required />
              </label>
              <label>
                Project Type
                <input type="text" name="project" placeholder="Piling / Drilling / Support" required />
              </label>
              <label>
                Message
                <textarea name="message" rows="4" placeholder="Tell us about your project" required />
              </label>
              <RippleButton type="submit" className="btn-primary">
                Submit Request
              </RippleButton>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
