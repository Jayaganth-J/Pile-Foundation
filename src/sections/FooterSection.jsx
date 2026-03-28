import { company } from '../data/content'
import logo from '../assets/ccpf-logo.png'

function FooterSection() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <img className="footer-logo" src={logo} alt="C.C. Pile Foundation logo" />
            <h3>{company.name}</h3>
          </div>
          <p>Engineering-grade foundation solutions for long-term structural performance.</p>
        </div>
        <div>
          <p>{company.address}</p>
          <p>{company.email}</p>
          <p>
            {company.phones[0]} | {company.phones[1]}
          </p>
        </div>
      </div>
      <p className="copyright">Copyright {new Date().getFullYear()} {company.name}. All rights reserved.</p>
    </footer>
  )
}

export default FooterSection
