import { company } from '../data/content'

function FooterSection() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>{company.name}</h3>
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
