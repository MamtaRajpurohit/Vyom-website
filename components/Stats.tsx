'use client'

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
    <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="p-2 sm:p-4 md:p-5 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:scale-105 hover:border-primary/50 transition-all text-center"
        >
          <div className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2">{stat.icon}</div>
          <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-primary mb-0.5 sm:mb-1">
            {stat.value}
          </div>
          <div className="text-white/90 text-xs sm:text-sm md:text-base">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}