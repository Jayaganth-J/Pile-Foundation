import { useEffect, useState } from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'
import RippleButton from '../components/RippleButton'

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
        <p className="eyebrow fade-up delay-1">
          Trusted Foundation Engineering Since Decades
        </p>
        <h1 className="fade-up delay-2">
          Strong Foundations.<br />Strong Future.
        </h1>
        <p className="hero-copy fade-up delay-3">
          C.C. Pile Foundation delivers high-performance piling and drilling solutions for modern infrastructure, commercial, and industrial projects.
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
