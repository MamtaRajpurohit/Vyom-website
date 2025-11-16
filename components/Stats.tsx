'use client'

import { motion } from 'framer-motion'

interface Stat {
  value: string
  label: string
  icon: string
}

interface StatsProps {
  stats: Stat[]
}

export default function Stats({ stats }: StatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="p-5 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:scale-105 hover:border-primary/50 transition-all"
        >
          <div className="text-3xl mb-2">{stat.icon}</div>
          <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
            {stat.value}
          </div>
          <div className="text-white/70 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}


