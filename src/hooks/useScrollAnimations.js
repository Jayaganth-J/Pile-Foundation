import { useEffect } from 'react'

function useScrollAnimations(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined

    const elements = document.querySelectorAll('.scrub-text, .scrub-card, .scrub-image')
    const layers = document.querySelectorAll('.parallax-layer')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          } else {
            entry.target.classList.remove('in-view')
          }
        })
      },
      { threshold: 0.22, rootMargin: '0px 0px -6% 0px' },
    )

    elements.forEach((el) => observer.observe(el))

    let ticking = false
    const onScroll = () => {
      if (ticking || !layers.length) return
      ticking = true

      window.requestAnimationFrame(() => {
        const y = window.scrollY
        layers.forEach((layer) => {
          const speed = Number(layer.getAttribute('data-speed') || '0.15')
          layer.style.transform = `translate3d(0, ${Math.round(y * speed * 0.45)}px, 0)`
        })
        ticking = false
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [enabled])
}

export default useScrollAnimations
