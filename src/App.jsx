import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Preloader from './components/Preloader'
import useScrollAnimations from './hooks/useScrollAnimations'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import FooterSection from './sections/FooterSection'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'
import ServicesSection from './sections/ServicesSection'
import VideoSection from './sections/VideoSection'
import WhyChooseUsSection from './sections/WhyChooseUsSection'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  useScrollAnimations(!isLoading)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1150)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>
      {!isLoading && (
        <motion.div
          className="motion-cinematic"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.92, ease: [0.16, 1, 0.3, 1] }}
        >
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ProjectsSection />
            <VideoSection />
            <WhyChooseUsSection />
            <ContactSection />
          </main>
          <FooterSection />
        </motion.div>
      )}
    </>
  )
}

export default App
