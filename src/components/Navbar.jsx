import { useEffect, useState } from 'react'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { company, navLinks } from '../data/content'
import RippleButton from './RippleButton'
import logo from '../assets/ccpf-logo.png'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const targets = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0.1 },
    )

    targets.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="brand" onClick={closeMenu}>
          <img className="brand-logo" src={logo} alt="C.C. Pile Foundation logo" />
          <span>{company.name}</span>
        </a>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={closeMenu}
              className={activeSection === link.id ? 'active-link' : ''}
            >
              {link.label}
            </a>
          ))}
          <RippleButton as="a" href="#contact" className="btn-small" onClick={closeMenu}>
            Get a Quote
          </RippleButton>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <HiXMark size={22} /> : <HiBars3 size={22} />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
