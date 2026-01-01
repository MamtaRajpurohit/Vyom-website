'use client'

import { motion } from 'framer-motion'

interface TimelineProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const pageLabels = ['Home', 'About', 'Domains', 'Projects', 'Team', 'Updates', 'Contact']

export default function Timeline({ currentPage, totalPages, onPageChange }: TimelineProps) {
  return (
    <>
      {/* Desktop Timeline - Left side */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-20 hidden lg:block" aria-label="Page navigation">
        <div className="flex flex-col items-center gap-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <motion.button
              key={index}
              className="flex items-center gap-3 group"
              onClick={() => onPageChange(index)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              aria-label={`Go to ${pageLabels[index]} section`}
              aria-current={currentPage === index ? 'page' : undefined}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className={`w-3 h-3 rounded-full border-2 transition-colors ${
                    currentPage === index
                      ? 'bg-primary border-primary'
                      : 'bg-transparent border-white/30 group-hover:border-primary/50'
                  }`}
                  animate={{
                    scale: currentPage === index ? 1.2 : 1,
                  }}
                />
                {currentPage === index && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </motion.div>
              <motion.span
                className={`text-sm font-medium transition-colors ${
                  currentPage === index
                    ? 'text-primary'
                    : 'text-white/40 group-hover:text-white/70'
                }`}
                animate={{
                  opacity: currentPage === index ? 1 : 0.4,
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </motion.span>
              {currentPage === index && (
                <motion.span
                  className="text-sm font-medium text-primary"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  {pageLabels[index]}
                </motion.span>
              )}
            </motion.button>
          ))}
          <motion.div
            className="w-px h-32 bg-gradient-to-b from-primary via-white/20 to-transparent mt-4"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
      </nav>

      {/* Mobile Timeline - Bottom dots */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-20 lg:hidden" aria-label="Page navigation">
        <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-full border border-white/10">
          {Array.from({ length: totalPages }).map((_, index) => (
            <motion.button
              key={index}
              className="p-1"
              onClick={() => onPageChange(index)}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to ${pageLabels[index]} section`}
              aria-current={currentPage === index ? 'page' : undefined}
            >
              <motion.div
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentPage === index
                    ? 'bg-primary'
                    : 'bg-white/30'
                }`}
                animate={{
                  scale: currentPage === index ? 1.3 : 1,
                }}
              />
            </motion.button>
          ))}
        </div>
      </nav>
    </>
  )
}

