'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Timeline from '@/components/Timeline'
import PageContainer from '@/components/PageContainer'
import Logo from '@/components/Logo'
import satellite from "@/assets/satellite.gif";
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

        <div className="fixed inset-0 flex overflow-hidden perspective-container">
          {[0, 1, 2, 3, 4, 5, 6].map((pageIndex) => {
            const isBefore = pageIndex < currentPage
            const isActive = pageIndex === currentPage
            return (
                <motion.div
                key={pageIndex}
                className="absolute inset-0 bg-black" 
                style={{
                  transformOrigin: 'center center',
                  transformStyle: 'preserve-3d',
                  perspective: 1000,
                  pointerEvents: isActive ? 'auto' : 'none',
                  zIndex: isActive ? 50 : isBefore ? 0 : 25, 
                }}
                initial={false}
                animate={{
                  y: isBefore ? '-50%' : isActive ? '0%' : '120%',

                  scale: isBefore ? 1.5 : isActive ? 1 : 0.5,

                  rotateX: isBefore ? -20 : isActive ? 0 : 20,

                  opacity: isBefore ? 0 : isActive ? 1 : 0,
                  
                  filter: isBefore 
                    ? 'blur(20px) brightness(2)' 
                    : isActive 
                      ? 'blur(0px) brightness(1)' 
                      : 'blur(10px) brightness(0)'
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 100, 
                  damping: 12, 
                  mass: 0.5,
                  velocity: 2
                }}
              >
              {pageIndex === 0 && (
                <section id="home" className="h-screen w-screen relative" aria-label="Home">
                 
                  <div className="absolute inset-0 z-0">
                    <img
                      src="/goes.gif" 
                      alt="Space Background"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>  
                  </div>

                  <div className="relative z-10 h-full">
                    <PageContainer index={0} isActive={currentPage === 0}>
                      <div className="flex flex-col h-full p-4 lg:p-8 gap-6 lg:gap-8">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 flex-1">
                          <div className="flex-1 z-10">
                            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
                              <span className="block">Vyom Voyage</span>
                            </h1>
                            <p className="text-lg lg:text-3xl text-primary font-semibold mb-16 max-w-2xl">
                              A Student SpaceTech Initiative at TCET 
                            </p>
                            <p className="text-base lg:text-xl text-white/90 max-w-2xl">
                              Developing CubeSats and exploring the cosmos through innovation and collaboration.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-6">
                              <button
                                className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all hover:scale-105 active:scale-95"
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
                                <span>→</span>
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="z-10">
                          <Stats
                            stats={[
                              { value: '6', label: 'Active Domains', icon: '' },
                              { value: '5+', label: 'Ongoing Projects', icon: '' },
                              { value: '50+', label: 'Achievements', icon: '' },
                            ]}
                          />
                        </div>
                      </div>
                    </PageContainer>
                  </div>
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
                We are committed to pushing the boundaries of student-led space technology innovation.
              </p>
              <p className="text-base lg:text-lg text-white/80 leading-relaxed">
                Our goals include expanding our domain expertise,
                completing ongoing CubeSat missions, and establishing Vyom Voyage as a leading student space organization
                in India. We aim to inspire the next generation of space engineers and scientists through hands-on projects
                and international competitions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-semibold text-primary mb-2">Our Goals</h3>
                  <ul className="text-white/70 space-y-1.5 list-disc list-inside text-lg">
                    <li>Complete 1U CubeSat mission</li>
                    <li>Participate in international competitions</li>
                    <li>Expand domain expertise across 6 divisions</li>
                    <li>Foster innovation and collaboration</li>
                  </ul>
                </div>
                <div className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-semibold text-primary mb-2">Our Structure</h3>
                  <ul className="text-white/70 space-y-1.5 list-disc list-inside text-lg">
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
                    icon: '',
                  },
                  {
                    name: 'Payload and Sensors',
                    description: 'Integration of scientific instruments, sensors, and payload systems for space missions.',
                    tools: 'Sensors, Actuators, Data Acquisition Systems',
                    lead: 'Domain Lead Name',
                    icon: '',
                  },
                  {
                    name: 'Software & Simulations',
                    description: 'Mission planning, orbital mechanics simulations, and software development for ground and flight systems.',
                    tools: 'Python, MATLAB, STK, C++',
                    lead: 'Domain Lead Name',
                    icon: '',
                  },
                  {
                    name: 'Communication Systems',
                    description: 'RF communication systems, antenna design, and ground station development for satellite communication.',
                    tools: 'RF Modules, SDR, Antenna Design',
                    lead: 'Domain Lead Name',
                    icon: '',
                  },
                  {
                    name: 'Design & Media',
                    description: 'Visual design, branding, documentation, and media content creation for projects and outreach.',
                    tools: 'Figma, Adobe Suite, Blender',
                    lead: 'Domain Lead Name',
                    icon: '',
                  },
                  {
                    name: 'Operations & Outreach',
                    description: 'Event management, workshops, seminars, and building partnerships with industry and academia.',
                    tools: 'Event Management, Networking',
                    lead: 'Domain Lead Name',
                    icon: '',
                  },
                ].map((domain, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-all hover:scale-105"
                  >
                    <div className="text-3xl mb-3">{domain.icon}</div>
                    <h3 className="text-lg font-bold text-primary mb-2">{domain.name}</h3>
                    <p className="text-white/100 text-xs mb-3 line-clamp-3">{domain.description}</p>
                    <div className="mb-3">
                      <p className="text-xs text-white/90 mb-1">Tools:</p>
                      <p className="text-xs text-white/90">{domain.tools}</p>
                    </div>
                    <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-xs font-bold">
                        {domain.lead.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs text-white/80">Lead</p> 
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
              <p className="text-center text-lg text-white/90 mb-6">
                Our innovative space projects and research initiatives
              </p>
              <p className="text-center text-2xl text-primary mb-6">
                Past Missions
              </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-bold text-primary mb-2">1U CubeSat Prototype</h3>
                  <p className="text-white/70 text-md">Built a 1U CubeSat prototype with an AI chatbot, real-time orientation data, and fault detection designed as a step toward autonomous CanSat missions.</p>
                </div>
                <div className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-primary mb-2">Balloon-Sat</h3>
                      <p className="text-white/70 text-md">
                        Launched a BalloonSat to measure temperature, pressure, and altitude for basic weather analysis, and tested our in-house Lo-Ra modules and patch antennas.
                      </p>
                    </div>

                    <div className="shrink-0">
                      <img
                        src="/balloon-sat.png"
                        alt="Balloon-Sat Image"
                        className="w-40 h-40 object-cover rounded-md"
                      />
                    </div>

                  </div>
                </div>
              </div>

              <p className="text-center text-2xl text-primary mb-6">
                Ongoing Projects...
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-bold text-primary mb-2">1U CubeSat Mission</h3>
                  <p className="text-white/70 text-md">Developing our first 1U CubeSat for orbital deployment and space research.</p>
                </div>
                <div className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-bold text-primary mb-2">CanSat Competition</h3>
                  <p className="text-white/70 text-md">Participating in international CanSat competitions to test our satellite systems.</p>
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

              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Core Team</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: 'Chetas', role: 'Team Lead', designation: 'President' },
                    { name: 'Core Member 2', role: 'Technical Lead', designation: 'Vice President' },
                    { name: 'Core Member 3', role: 'Head of Operations', designation: 'Secretary' },
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

              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Faculty Advisors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'Payel Ma\'am', role: 'Faculty Mentor', designation: 'Mentor' },
                    { name: 'Faculty Member 2', role: 'Technical Advisor', designation: 'Advisor' },
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
                    type: 'Achievement',
                    title: 'IIIT DELHI Space Hackathon – Winners',
                    date: 'August 2023',
                    description: 'Vyom Voyage won the IIIT Delhi Space Hackathon with an innovative solution, highlighting our technical skill and teamwork.',
                    image: '/iiit-hackathon.png', 
                  },
                  {
                    type: 'Achievement',
                    title: 'Anveshna 2024 – Winners',
                    date: 'January 2025',
                    description: 'The team won Anveshna for delivering clear, impactful, research-driven solutions in space engineering',
                    image: '/anveshna.png', 
                  },
                  {
                    type: 'Seminar',
                    title: 'Space Aura Seminar',
                    date: 'September 2023',
                    description: 'Hosted Space Aura’s Co-founder, Mr. Akash Porwal, for a seminar on space tourism, exploring opportunities in commercial space travel.',
                    image: '/space-aura.png', 
                  },
                  {
                    type: 'Workshop',
                    title: 'Zephyr - PCB Workshop & VR Demonstrations',
                    date: 'November 2023',
                    description: 'Zephyr 2023 included a PCB workshop, VR space simulations, and a space model display, offering practical learning.',
                    image: '/workshop.png', 
                  },
                ].map((update, index) => (
                  <div
                    key={index}
                    className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-all hover:scale-105"
                  >
                    <div className="flex items-start gap-4">
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                            {update.type}
                          </span>
                          <span className="text-xs text-white/50">{update.date}</span>
                        </div>
                        <h4 className="text-lg font-bold text-primary mb-2">{update.title}</h4>
                        <p className="text-white/70 text-sm">{update.description}</p>
                      </div>

                      <div className="shrink-0">
                        <img
                          src={update.image}
                          alt={update.title}
                          className="w-40 h-40 object-cover rounded-md bg-black/20"
                        />
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
                instagramUrl="https://www.instagram.com/vyomvoyage/?hl=en"
                linkedinUrl="https://www.linkedin.com/company/vyom-voyage/"
                contactUrl="https://www.youtube.com/@vyomvoyage"
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
      </main>
  )
}

