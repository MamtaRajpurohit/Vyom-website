'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'

export default function BackgroundAnimation() {
  // Generate random stars - memoized to prevent regeneration on every render
  const stars = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
    }))
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Orbiting Satellite */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-16 h-16"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="relative w-full h-full">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="w-8 h-8 bg-primary/30 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-primary rounded-sm" />
            </div>
          </motion.div>
          {/* Orbit path (visual guide) */}
          <motion.div
            className="absolute inset-0 border border-primary/10 rounded-full"
            style={{
              width: '200%',
              height: '200%',
              left: '-50%',
              top: '-50%',
            }}
          />
        </div>
      </motion.div>

      {/* Floating particles - memoized */}
      {useMemo(() => {
        return Array.from({ length: 5 }).map((_, i) => ({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          duration: 5 + Math.random() * 5,
          delay: Math.random() * 5,
        }))
      }, []).map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute w-1 h-1 bg-primary/20 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}


