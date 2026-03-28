import { useEffect, useState } from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'
import RippleButton from '../components/RippleButton'
import { company } from '../data/content'

function HeroSection() {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.22)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-bg" style={{ transform: `translateY(${offsetY}px)` }} />
      <div className="hero-grid" />
      <div className="container hero-content">
        <p className="eyebrow fade-up delay-1">Engineering Excellence in Pile Foundations</p>
        <h1 className="fade-up delay-2">
          {company.name}
        </h1>
        <p className="hero-subtitle fade-up delay-3">Strong Foundations. Strong Future.</p>
        <p className="hero-copy fade-up delay-3">
          We deliver precision piling, drilling, and structural ground solutions for high-value infrastructure, commercial towers, and industrial facilities.
        </p>
        <RippleButton
          as="a"
          href="#contact"
          className="btn-primary fade-up delay-4"
        >
          Get a Quote <HiArrowLongRight size={18} />
        </RippleButton>
      </div>
    </section>
  )
}

export default HeroSection
