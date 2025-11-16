'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Timeline from '@/components/Timeline'
import PageContainer from '@/components/PageContainer'
import Logo from '@/components/Logo'
import BackgroundAnimation from '@/components/BackgroundAnimation'
import Stats from '@/components/Stats'
import Footer from '@/components/Footer'
import ContactCard from '@/components/ContactCard'
import ContactMapBackdrop from '@/components/ContactMapBackdrop'

const TOTAL_PAGES = 7

const pageLabels = ['Home', 'About', 'Domains', 'Projects', 'Team', 'Updates', 'Contact']

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  const handlePageChange = useCallback((page: number) => {
    if (page < 0 || page >= TOTAL_PAGES || isScrolling) return
    setIsScrolling(true)
    setCurrentPage(page)
    setTimeout(() => setIsScrolling(false), 600)
  }, [isScrolling])

  useEffect(() => {
    let lastScrollTime = 0

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      const now = Date.now()
      if (now - lastScrollTime < 600 || isScrolling) return
      lastScrollTime = now

      if (e.deltaY > 0 && currentPage < TOTAL_PAGES - 1) {
        handlePageChange(currentPage + 1)
      } else if (e.deltaY < 0 && currentPage > 0) {
        handlePageChange(currentPage - 1)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [currentPage, handlePageChange, isScrolling])

  return (
    <main className="fixed inset-0 bg-black overflow-hidden" role="main">
      <BackgroundAnimation />
      <Logo />
        <Navbar currentPage={currentPage} onPageChange={handlePageChange} totalPages={TOTAL_PAGES} />
        <Timeline currentPage={currentPage} totalPages={TOTAL_PAGES} onPageChange={handlePageChange} />

        {/* Pages Container */}
        <div className="fixed inset-0 flex overflow-hidden">
          {[0, 1, 2, 3, 4, 5, 6].map((pageIndex) => {
            const isBefore = pageIndex < currentPage
            const isActive = pageIndex === currentPage
            return (
              <motion.div
                key={pageIndex}
                className="absolute inset-0"
                style={{
                  transformOrigin: 'left center',
                  transformStyle: 'preserve-3d',
                  perspective: 2000,
                  pointerEvents: isActive ? 'auto' : 'none',
                  zIndex: isActive ? 10 : isBefore ? 5 : 1,
                }}
                animate={{
                  x: isBefore ? '-100%' : isActive ? '0%' : '100%',
                  rotateY: isBefore ? -15 : 0,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
              {pageIndex === 0 && (
          <section id="home" className="h-screen w-screen" aria-label="Home">
        <PageContainer index={0} isActive={currentPage === 0}>
          <div className="flex flex-col h-full p-4 lg:p-8 gap-6 lg:gap-8">
            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 flex-1">
              <div className="flex-1 space-y-4 z-10">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="block">Vyom</span>
                  <span className="block text-primary">Voyage</span>
                </h1>
                <p className="text-lg lg:text-xl text-primary font-semibold max-w-2xl">
                  Exploring Innovation Beyond the Horizon – Student SpaceTech Initiative at TCET.
                </p>
                <p className="text-base lg:text-lg text-white/70 max-w-2xl">
                  Developing CubeSats and exploring the cosmos through innovation and collaboration.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <button
                    className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/80 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                    onClick={() => handlePageChange(3)}
                  >
                    Our Projects
                    <span>→</span>
                  </button>
                  <button
                    className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all hover:scale-105 active:scale-95"
                    onClick={() => handlePageChange(1)}
                  >
                    Learn More
                  </button>
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center z-10">
                <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden border-2 border-primary/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-black flex items-center justify-center">
                    <div className="text-6xl">🚀</div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 text-sm">
                    Astronaut Image Placeholder
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="z-10">
              <Stats
                stats={[
                  { value: '6', label: 'Active Domains', icon: '🔬' },
                  { value: '5+', label: 'Ongoing Projects', icon: '🚀' },
                  { value: '50+', label: 'Achievements', icon: '🏆' },
                ]}
              />
            </div>
          </div>
        </PageContainer>
      </section>
              )}
              {pageIndex === 1 && (
          <section id="about" className="h-screen w-screen" aria-label="About Us">
        <PageContainer index={1} isActive={currentPage === 1}>
          <div className="h-full flex flex-col items-center justify-center p-4 lg:p-8">
            <div className="max-w-4xl space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
                ABOUT US
              </h2>
              <p className="text-base lg:text-lg text-white/80 leading-relaxed">
                Vyom Voyage is a space enthusiasts club from Thakur College of Engineering and Technology (TCET), Mumbai.
                Under our new tenure, we are committed to pushing the boundaries of student-led space technology innovation.
              </p>
              <p className="text-base lg:text-lg text-white/80 leading-relaxed">
                With new leadership and a refreshed structure, our goals include expanding our domain expertise,
                completing ongoing CubeSat missions, and establishing Vyom Voyage as a leading student space organization
                in India. We aim to inspire the next generation of space engineers and scientists through hands-on projects
                and international competitions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-semibold text-primary mb-2">Our Goals</h3>
                  <ul className="text-white/70 space-y-1.5 list-disc list-inside text-sm">
                    <li>Complete 1U CubeSat mission</li>
                    <li>Participate in international competitions</li>
                    <li>Expand domain expertise across 6 divisions</li>
                    <li>Foster innovation and collaboration</li>
                  </ul>
                </div>
                <div className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-semibold text-primary mb-2">Our Structure</h3>
                  <ul className="text-white/70 space-y-1.5 list-disc list-inside text-sm">
                    <li>Core Team Leadership</li>
                    <li>6 Specialized Domains</li>
                    <li>Faculty Advisors & Mentors</li>
                    <li>Active Project Teams</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>
              )}
              {pageIndex === 2 && (
          <section id="domains" className="h-screen w-screen" aria-label="Domains and Divisions">
        <PageContainer index={2} isActive={currentPage === 2}>
          <div className="h-full flex flex-col items-center justify-center p-4 lg:p-8">
            <div className="max-w-6xl w-full space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4 text-center">
                DOMAINS & DIVISIONS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    name: 'Embedded Systems',
                    description: 'Design and development of onboard computer systems, microcontrollers, and flight controllers for CubeSats.',
                    tools: 'STM32, Arduino, Raspberry Pi, C/C++',
                    lead: 'Domain Lead Name',
                    icon: '🔌',
                  },
                  {
                    name: 'Payload and Sensors',
                    description: 'Integration of scientific instruments, sensors, and payload systems for space missions.',
                    tools: 'Sensors, Actuators, Data Acquisition Systems',
                    lead: 'Domain Lead Name',
                    icon: '📡',
                  },
                  {
                    name: 'Software & Simulations',
                    description: 'Mission planning, orbital mechanics simulations, and software development for ground and flight systems.',
                    tools: 'Python, MATLAB, STK, C++',
                    lead: 'Domain Lead Name',
                    icon: '💻',
                  },
                  {
                    name: 'Communication Systems',
                    description: 'RF communication systems, antenna design, and ground station development for satellite communication.',
                    tools: 'RF Modules, SDR, Antenna Design',
                    lead: 'Domain Lead Name',
                    icon: '📶',
                  },
                  {
                    name: 'Design & Media',
                    description: 'Visual design, branding, documentation, and media content creation for projects and outreach.',
                    tools: 'Figma, Adobe Suite, Blender',
                    lead: 'Domain Lead Name',
                    icon: '🎨',
                  },
                  {
                    name: 'Operations & Outreach',
                    description: 'Event management, workshops, seminars, and building partnerships with industry and academia.',
                    tools: 'Event Management, Networking',
                    lead: 'Domain Lead Name',
                    icon: '🌐',
                  },
                ].map((domain, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-all hover:scale-105"
                  >
                    <div className="text-3xl mb-3">{domain.icon}</div>
                    <h3 className="text-lg font-bold text-primary mb-2">{domain.name}</h3>
                    <p className="text-white/70 text-xs mb-3 line-clamp-3">{domain.description}</p>
                    <div className="mb-3">
                      <p className="text-xs text-white/50 mb-1">Tools:</p>
                      <p className="text-xs text-white/60">{domain.tools}</p>
                    </div>
                    <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-xs font-bold">
                        {domain.lead.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs text-white/50">Lead</p>
                        <p className="text-xs text-white/80">{domain.lead}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>
              )}
              {pageIndex === 3 && (
          <section id="projects" className="h-screen w-screen" aria-label="Projects">
        <PageContainer index={3} isActive={currentPage === 3}>
          <div className="h-full flex flex-col items-center justify-center p-4 lg:p-8">
            <div className="max-w-6xl w-full space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4 text-center">
                OUR PROJECTS
              </h2>
              <p className="text-center text-white/70 mb-6">
                Our innovative space projects and research initiatives
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-bold text-primary mb-2">1U CubeSat Mission</h3>
                  <p className="text-white/70 text-sm">Developing our first 1U CubeSat for orbital deployment and space research.</p>
                </div>
                <div className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-bold text-primary mb-2">CanSat Competition</h3>
                  <p className="text-white/70 text-sm">Participating in international CanSat competitions to test our satellite systems.</p>
                </div>
                <div className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-bold text-primary mb-2">Ground Station</h3>
                  <p className="text-white/70 text-sm">Building a ground station for satellite communication and data reception.</p>
                </div>
                <div className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-bold text-primary mb-2">Research Papers</h3>
                  <p className="text-white/70 text-sm">Publishing research papers on space technology and satellite systems.</p>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>
              )}
              {pageIndex === 4 && (
          <section id="team" className="h-screen w-screen" aria-label="Team">
        <PageContainer index={4} isActive={currentPage === 4}>
          <div className="h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
            <div className="p-4 lg:p-8">
            <div className="max-w-6xl w-full mx-auto space-y-8">
              <div className="text-center mb-6">
                <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-2">
                  THE CREW
                </h2>
                <p className="text-white/60">Mission Command</p>
              </div>

              {/* Core Team */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Core Team</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: 'Chetas', role: 'Team Lead', designation: 'President' },
                    { name: 'Core Member 2', role: 'Technical Lead', designation: 'Vice President' },
                    { name: 'Core Member 3', role: 'Operations Lead', designation: 'Secretary' },
                  ].map((member, index) => (
                    <div
                      key={index}
                      className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-all hover:scale-105 text-center"
                    >
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-lg font-bold">
                        {member.name.charAt(0)}
                      </div>
                      <h4 className="text-base font-bold text-primary mb-1">{member.name}</h4>
                      <p className="text-sm text-white/80 mb-0.5">{member.role}</p>
                      <p className="text-xs text-white/60">{member.designation}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Domain Leads */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Domain Leads</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: 'Domain Lead 1', domain: 'Embedded Systems' },
                    { name: 'Domain Lead 2', domain: 'Payload and Sensors' },
                    { name: 'Domain Lead 3', domain: 'Software & Simulations' },
                    { name: 'Domain Lead 4', domain: 'Communication Systems' },
                    { name: 'Domain Lead 5', domain: 'Design & Media' },
                    { name: 'Domain Lead 6', domain: 'Operations & Outreach' },
                  ].map((member, index) => (
                    <div
                      key={index}
                      className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-all hover:scale-105 text-center"
                    >
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-lg font-bold">
                        {member.name.charAt(0)}
                      </div>
                      <h4 className="text-base font-bold text-primary mb-1">{member.name}</h4>
                      <p className="text-sm text-white/70">{member.domain}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Faculty Advisors */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Faculty Advisors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'Payel Ma\'am', role: 'Faculty Mentor', designation: 'Advisor' },
                    { name: 'Faculty Member 2', role: 'Technical Advisor', designation: 'Mentor' },
                  ].map((member, index) => (
                    <div
                      key={index}
                      className="p-5 bg-white/5 border border-white/10 rounded-lg text-center hover:border-primary/50 transition-colors"
                    >
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-lg font-bold">
                        {member.name.charAt(0)}
                      </div>
                      <h4 className="text-base font-bold text-primary mb-1">{member.name}</h4>
                      <p className="text-sm text-white/80 mb-0.5">{member.role}</p>
                      <p className="text-xs text-white/60">{member.designation}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </div>
        </PageContainer>
      </section>
              )}
              {pageIndex === 5 && (
          <section id="updates" className="h-screen w-screen" aria-label="Mission Logs and Updates">
        <PageContainer index={5} isActive={currentPage === 5}>
          <div className="h-full flex flex-col items-center justify-center p-4 lg:p-8">
            <div className="max-w-6xl w-full space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4 text-center">
                MISSION LOGS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    type: 'Event Recap',
                    title: 'Workshop on CubeSat Design',
                    date: '2024-01-15',
                    description: 'Successfully conducted a comprehensive workshop on CubeSat design principles and best practices.',
                  },
                  {
                    type: 'Achievement',
                    title: 'Member Achievement',
                    date: '2024-01-10',
                    description: 'Congratulations to our team member for winning the national space technology competition.',
                  },
                  {
                    type: 'Seminar',
                    title: 'Guest Lecture Series',
                    date: '2024-01-05',
                    description: 'Hosted an insightful seminar with industry experts on space communication systems.',
                  },
                  {
                    type: 'Announcement',
                    title: 'New Project Launch',
                    date: '2024-01-01',
                    description: 'Excited to announce the launch of our new 1U CubeSat development project.',
                  },
                ].map((update, index) => (
                  <div
                    key={index}
                    className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-all hover:scale-105"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                        {update.type}
                      </span>
                      <span className="text-xs text-white/50">{update.date}</span>
                    </div>
                    <h4 className="text-lg font-bold text-primary mb-2">{update.title}</h4>
                    <p className="text-white/70 text-sm">{update.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>
              )}
              {pageIndex === 6 && (
          <section id="contact" className="h-screen w-screen" aria-label="Contact Us">
        <PageContainer index={6} isActive={currentPage === 6}>
          <div className="relative w-full h-full">
            <ContactMapBackdrop />
            <div className="absolute inset-0 flex items-center justify-center p-4 lg:p-8">
              <ContactCard
                institute="Thakur College of Engineering and Technology (TCET)"
                location="Thakur Village, Kandivali East, Mumbai"
                email="contact@vyomvoyage.tcet.ac.in"
                instagramUrl="https://instagram.com/"
                linkedinUrl="https://linkedin.com/"
                contactUrl="#contact"
              />
            </div>
          </div>
        </PageContainer>
      </section>
              )}
              </motion.div>
            )
          })}
        </div>
        {/* End Pages Container */}
      </main>
  )
}

