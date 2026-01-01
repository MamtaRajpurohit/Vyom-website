'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavbarProps {
  currentPage: number
  onPageChange: (page: number) => void
  totalPages: number
}

export default function Navbar({ currentPage, onPageChange, totalPages }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'Home', page: 0 },
    { label: 'About', page: 1 },
    { label: 'Domains', page: 2 },
    { label: 'Projects', page: 3 },
    { label: 'Team', page: 4 },
    { label: 'Updates', page: 5 },
    { label: 'Contact', page: 6 },
  ]

  return (
    <>
      {/* Hamburger Icon */}
      <motion.button
        className="fixed top-4 sm:top-6 right-4 sm:right-6 z-50 flex flex-col gap-1.5 p-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
      >
        <motion.span
          className="block h-0.5 w-6 sm:w-8 bg-white"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 8 : 0,
            x: isOpen ? 0 : -2,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="block h-0.5 w-5 sm:w-7 bg-white"
          animate={{
            opacity: isOpen ? 0 : 1,
            x: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="block h-0.5 w-4 sm:w-6 bg-white"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -8 : 0,
            x: isOpen ? 0 : 2,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              className="fixed top-0 right-0 h-full w-64 sm:w-80 bg-black/95 backdrop-blur-md z-40 border-l border-primary/20 p-6 sm:p-8"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              role="navigation"
              aria-label="Main navigation"
            >
              <div className="flex flex-col gap-4 sm:gap-6 mt-16 sm:mt-20 pl-2">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.page}
                    className={`text-left text-lg sm:text-xl font-medium transition-colors w-full ${
                      currentPage === item.page
                        ? 'text-primary'
                        : 'text-white/70 hover:text-white'
                    }`}
                    onClick={() => {
                      onPageChange(item.page)
                      setIsOpen(false)
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 8 }}
                    aria-current={currentPage === item.page ? 'page' : undefined}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

