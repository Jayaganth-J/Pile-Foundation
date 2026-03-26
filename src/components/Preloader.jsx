import { motion } from 'framer-motion'

function Preloader() {
  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45 } }}
      aria-label="Loading website"
    >
      <div className="preloader-core">
        <div className="loader-tower" />
        <div className="loader-beam" />
        <div className="loader-ground" />
      </div>
      <p>Building Premium Foundations...</p>
    </motion.div>
  )
}

export default Preloader
