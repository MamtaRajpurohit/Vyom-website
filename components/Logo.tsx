'use client'

import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <motion.div
      className="fixed top-4 left-4 z-40"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src="/logo.png"
          alt="Vyom Voyage Logo"
          className="h-12 w-auto object-contain"
        />
      </motion.div>
    </motion.div>
  )
}


