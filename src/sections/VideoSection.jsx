import { useEffect, useRef, useState } from 'react'
import { HiPlay } from 'react-icons/hi2'
import Reveal from '../components/Reveal'

function VideoSection() {
  const sectionRef = useRef(null)
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowVideo(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="video" className="section section-alt video-section scrub-section" ref={sectionRef}>
      <div className="container">
        <Reveal className="section-head scrub-text">
          <p className="section-kicker">Video Showcase</p>
          <h2>Our Work in Action</h2>
          <p className="section-lead">
            A direct field view of our equipment, workflow discipline, and execution standards during real site operations.
          </p>
        </Reveal>

        <Reveal className="video-shell scrub-image">
          <div className="video-overlay">
            <div className="pulse-play" aria-hidden="true">
              <HiPlay size={20} />
            </div>
            <p>Live Site Execution Footage</p>
          </div>
          {showVideo ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1300&q=80"
            >
              <source src="https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4" type="video/mp4" />
            </video>
          ) : (
            <img
              src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1300&q=80"
              alt="Construction site preview"
              loading="lazy"
            />
          )}
        </Reveal>
      </div>
    </section>
  )
}

export default VideoSection
