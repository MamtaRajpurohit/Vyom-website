'use client'

import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <motion.div
      className="fixed top-3 sm:top-4 left-3 sm:left-4 z-40"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.a
        href="#home"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        aria-label="Vyom Voyage - Go to home"
      >
        <img
          src="/logo.png"
          alt="Vyom Voyage - TCET Space Club Logo"
          className="h-10 sm:h-12 w-auto object-contain"
          loading="eager"
        />
      </motion.a>
    </motion.div>
  )
}


