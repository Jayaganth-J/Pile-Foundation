import { useEffect, useRef, useState } from 'react'

function AnimatedCounter({ value, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return

    const duration = 1400
    const startTime = performance.now()
    let rafId

    const updateCount = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))

      if (progress < 1) {
        rafId = requestAnimationFrame(updateCount)
      }
    }

    rafId = requestAnimationFrame(updateCount)
    return () => cancelAnimationFrame(rafId)
  }, [started, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default AnimatedCounter
