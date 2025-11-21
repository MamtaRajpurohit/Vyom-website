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
      if (e.ctrlKey) return;
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
                          
                          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 flex-1">
                            
                            <div className="flex-1 z-10 flex flex-col justify-center text-left">
                              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
                                <span className="block">Vyom Voyage</span>
                              </h1>
                              
                              <p className="text-lg lg:text-3xl text-primary font-semibold mb-8 max-w-2xl">
                                A Student SpaceTech Initiative at TCET
                              </p>
                              
                              <p className="text-base lg:text-xl text-white/90 mb-8 max-w-xl">
                                Developing CubeSats and exploring the cosmos through innovation and collaboration.
                              </p>

                              <div className="flex flex-wrap gap-4">
                                <button
                                  className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all hover:scale-105 active:scale-95"
                                  onClick={() => handlePageChange(3)}
                                >
                                  Our Projects <span>→</span>
                                </button>
                                <button
                                  className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all hover:scale-105 active:scale-95"
                                  onClick={() => handlePageChange(1)}
                                >
                                  Learn More <span>→</span>
                                </button>
                              </div>
                            </div>

                            <div className="flex-1 flex items-center justify-center z-10 w-full">
                            <div className="relative w-full max-w-md h-64 md:h-80 rounded-lg overflow-hidden">
                              <img
                                src="/vyom_inverted.png"
                                alt="Vyom Voyage Logo"
                                className="w-full h-full object-contain"
                              />
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
                    <section id="about" className="h-screen w-screen relative" aria-label="About Us">
                      
                      <div className="absolute inset-0 z-0">
                        <img
                          src="/star.gif"
                          alt="Stars Background"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                      </div>
                      <div className="relative z-10 h-full">
                        <PageContainer index={1} isActive={currentPage === 1}>
                          <div className="h-full flex flex-col items-center justify-center p-4 lg:p-8">
                            <div className="max-w-4xl space-y-6">
                              <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
                                ABOUT US
                              </h2>
                              <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                                Vyom Voyage is a space enthusiasts club from Thakur College of Engineering and Technology (TCET), Mumbai.
                                We are committed to pushing the boundaries of student-led space technology innovation.
                              </p>
                              <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                                Our goals include expanding our domain expertise,
                                completing ongoing CubeSat missions, and establishing Vyom Voyage as a leading student space organization
                                in India. We aim to inspire the next generation of space engineers and scientists through hands-on projects
                                and international competitions.
                              </p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <div className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-colors backdrop-blur-sm">
                                  <h3 className="text-xl font-semibold text-primary mb-2">Our Goals</h3>
                                  <ul className="text-white/80 space-y-1.5 list-disc list-inside text-lg">
                                    <li>Complete 1U CubeSat mission</li>
                                    <li>Participate in international competitions</li>
                                    <li>Expand domain expertise across 6 divisions</li>
                                    <li>Foster innovation and collaboration</li>
                                  </ul>
                                </div>
                                <div className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-colors backdrop-blur-sm">
                                  <h3 className="text-xl font-semibold text-primary mb-2">Our Structure</h3>
                                  <ul className="text-white/80 space-y-1.5 list-disc list-inside text-lg">
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
                      </div>
                    </section>
                  )}
                  {pageIndex === 2 && (
                    <section id="domains" className="h-screen w-screen relative" aria-label="Domains and Divisions">
                      
                      <div className="absolute inset-0 z-0">
                        <img src="/star.gif" alt="Stars Background" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40"></div>
                      </div>
                      <div className="relative z-10 h-full">
                        <PageContainer index={2} isActive={currentPage === 2}>
                          <div className="h-full flex flex-col items-center justify-center p-4 lg:p-8">
                            <div className="max-w-6xl w-full space-y-6">
                              <h2 className="text-xl lg:text-3xl font-bold text-primary mb-4 text-center">
                                DOMAINS & DIVISIONS
                              </h2>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                  {
                                    name: 'Embedded Systems',
                                    description: 'Design and development of onboard computer systems, microcontrollers, and flight controllers for CubeSats.',
                                    tools: 'STM32, Arduino, Raspberry Pi, C/C++',
                                    icon: '',
                                  },
                                  {
                                    name: 'Payload and Sensors',
                                    description: 'Integration of scientific instruments, sensors, and payload systems for space missions.',
                                    tools: 'Sensors, Actuators, Data Acquisition Systems',
                                    icon: '',
                                  },
                                  {
                                    name: 'Software & Simulations',
                                    description: 'Mission planning, orbital mechanics simulations, and software development for ground and flight systems.',
                                    tools: 'Python, MATLAB, STK, C++',
                                    icon: '',
                                  },
                                  {
                                    name: 'Communication Systems',
                                    description: 'RF communication systems, antenna design, and ground station development for satellite communication.',
                                    tools: 'RF Modules, SDR, Antenna Design',
                                    icon: '',
                                  },
                                  {
                                    name: 'Design & Media',
                                    description: 'Visual design, branding, documentation, and media content creation for projects and outreach.',
                                    tools: 'Figma, Adobe Suite, Blender',
                                    icon: '',
                                  },
                                  {
                                    name: 'Operations & Outreach',
                                    description: 'Event management, workshops, seminars, and building partnerships with industry and academia.',
                                    tools: 'Event Management, Networking',
                                    icon: '',
                                  },
                                ].map((domain, index) => (
                                  <div
                                    key={index}
                                    className="p-6 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-all hover:scale-105 flex flex-col h-full backdrop-blur-sm"
                                  >
                                    <div className="text-3xl mb-3">{domain.icon}</div>
                                    <h3 className="text-lg font-bold text-primary mb-2">{domain.name}</h3>
                                    <p className="text-white/100 text-sm mb-4 flex-grow">{domain.description}</p>
                                    
                                    <div className="pt-3 border-t border-white/10 mt-auto">
                                      <p className="text-xs text-white/60 mb-1 font-semibold uppercase tracking-wider">Tools</p>
                                      <p className="text-xs text-white/90">{domain.tools}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </PageContainer>
                      </div>
                    </section>
                  )}
                    {pageIndex === 3 && (
                      <section id="projects" className="h-screen w-screen relative" aria-label="Projects">
                        
                        <div className="absolute inset-0 z-0">
                          <img src="/star.gif" alt="Stars Background" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/40"></div>
                        </div>
                        <div className="relative z-10 h-full">
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
                                  <div className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-colors backdrop-blur-sm">
                                    <div className="flex items-start gap-4">
                                      <div className="flex-1">
                                        <h3 className="text-lg font-bold text-primary mb-2">1U CubeSat Prototype</h3>
                                        <p className="text-white/70 text-md">
                                          Built a 1U CubeSat prototype with an AI chatbot, real-time orientation data, and fault detection designed as a step toward autonomous CanSat missions.
                                        </p>
                                      </div>
                                      <div className="shrink-0">
                                        <img
                                          src="/cube.png"
                                          alt="CubeSat Prototype Image"
                                          className="w-40 h-40 object-cover rounded-md"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-colors backdrop-blur-sm">
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
                                  <div className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-colors backdrop-blur-sm">
                                    <h3 className="text-lg font-bold text-primary mb-2">1U CubeSat Mission</h3>
                                    <p className="text-white/70 text-md">Developing our first 1U CubeSat for orbital deployment and space research.</p>
                                  </div>
                                  <div className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-colors backdrop-blur-sm">
                                    <h3 className="text-lg font-bold text-primary mb-2">CanSat Competition</h3>
                                    <p className="text-white/70 text-md">Participating in international CanSat competitions to test our satellite systems.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </PageContainer>
                        </div>
                      </section>
                    )}
                      {pageIndex === 4 && (
                        <section id="team" className="h-screen w-screen relative" aria-label="Team">
                          
                          <div className="absolute inset-0 z-0">
                            <img src="/star.gif" alt="Stars Background" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/40"></div>
                          </div>
                          <div className="relative z-10 h-full">
                            <PageContainer index={4} isActive={currentPage === 4}>
                              <div className="h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
                                <div className="p-4 lg:p-8">
                                  <div className="max-w-6xl w-full mx-auto space-y-12">
                                    
                                    <div className="text-center mb-8">
                                      <h2 className="text-3xl lg:text-5xl font-bold text-primary">
                                        THE CREW
                                      </h2>
                                    </div>

                                    <div className="flex flex-col items-center">
                                      <h3 className="text-2xl font-semibold text-primary mb-2 uppercase tracking-wider">Founder</h3>
                                      <div className="p-6 bg-white/5 border border-primary/30 rounded-lg flex flex-col items-center text-center w-64 hover:scale-105 transition-all duration-300 backdrop-blur-sm hover:border-primary">
                                        <div className="w-44 h-44 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary shadow-[0_0_15px_rgba(0,225,255,0.3)]">
                                          <img 
                                            src="/upkar.png" 
                                            alt="Upkar Chaurasiya" 
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                              e.currentTarget.style.display = 'none';
                                              e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-primary flex items-center justify-center text-black font-bold text-2xl">UC</div>';
                                            }}
                                          />
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-1">Upkar Chaurasiya</h4>
                                        <p className="text-primary font-medium text-sm">Founder</p>
                                      </div>
                                    </div>
                                    <div>
                                      <h3 className="text-2xl font-semibold text-primary mb-6 text-center lg:text-left uppercase tracking-wider">Core Team</h3>
                                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {[
                                          { name: 'Chetas Khadse', role: 'Team Lead', image: '/chetas.jpg' },
                                          { name: 'Ahad Bhati', role: 'Head of Operations', image: '/ahad.png' },
                                          { name: 'Rohan Dol', role: 'Software Lead', image: '/rohan.jpg' },
                                          { name: 'Gagandeep Bhakuni', role: 'Finance Coordinator', image: '/gagandeep.jpg' },
                                          { name: 'Krishna Bitthariya', role: 'Embedded Systems Lead', image: '/krishna.jpg' },
                                          { name: 'Laxmi Mehta', role: 'Design Lead', image: '/laxmi.png' },
                                        ].map((member, index) => (
                                          <div
                                            key={index}
                                            className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-all hover:scale-105 text-center group backdrop-blur-sm"
                                          >
                                            <div className="w-36 h-36 mx-auto mb-3 rounded-full overflow-hidden border border-white/20 group-hover:border-primary transition-colors duration-300">
                                              <img 
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                  e.currentTarget.style.display = 'none';
                                                  e.currentTarget.parentElement!.classList.add('bg-white/10', 'flex', 'items-center', 'justify-center');
                                                  e.currentTarget.parentElement!.innerHTML = `<span class="text-xl font-bold text-primary">${member.name.charAt(0)}</span>`;
                                                }}
                                              />
                                            </div>
                                            <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                                            <p className="text-primary text-sm font-medium mb-1">{member.role}</p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                    <div>
                                      <h3 className="text-2xl font-semibold text-primary mb-6 text-center lg:text-left uppercase tracking-wider">Faculty Advisors</h3>
                                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {[
                                          { name: 'Dr. Payel Saha', role: 'Faculty Mentor', designation: 'HoD E&TC, TCET', image: '/payel.jpg' },
                                          { name: 'Dr. Vinitkumar Dongre', role: 'Faculty Mentor', designation: 'Dean R&D, TCET', image: '/vinit.jpg' },
                                          { name: 'Dr. Shailendra Shastri', role: 'Faculty Advisor', designation: 'Associate Professor E&TC', image: '/shailendra.jpg' },
                                          { name: 'Ms. Purnima Chandrasekar', role: 'Faculty Advisor', designation: 'Associate Professor E&TC', image: '/purnima.jpg' },
                                          { name: 'Mrs. Archana Deshpande', role: 'Faculty Advisor', designation: 'Associate Professor E&TC', image: '/archana.jpg' },
                                        ].map((member, index) => (
                                          <div
                                            key={index}
                                            className="p-5 bg-white/5 border border-white/10 rounded-lg text-center hover:border-primary/50 transition-colors group backdrop-blur-sm"
                                          >
                                            <div className="w-32 h-32 mx-auto mb-3 rounded-full overflow-hidden border border-white/20 group-hover:border-primary transition-colors duration-300">
                                              <img 
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                  e.currentTarget.style.display = 'none';
                                                  e.currentTarget.parentElement!.classList.add('bg-white/10', 'flex', 'items-center', 'justify-center');
                                                  e.currentTarget.parentElement!.innerHTML = `<span class="text-xl font-bold text-white/80">${member.name.charAt(0)}</span>`;
                                                }}
                                              />
                                            </div>
                                            
                                            <h4 className="text-base font-bold text-white mb-1">{member.name}</h4>
                                            <p className="text-primary/80 text-sm mb-1">{member.role}</p>
                                            <p className="text-xs text-white/50 max-w-[200px] mx-auto">{member.designation}</p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </PageContainer>
                          </div>
                        </section>
                      )}
              {pageIndex === 5 && (
                <section id="updates" className="h-screen w-screen relative" aria-label="Mission Logs and Updates">
                  
                  <div className="absolute inset-0 z-0">
                    <img src="/star.gif" alt="Stars Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>

                  <div className="relative z-10 h-full">
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
                                className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-all hover:scale-105 backdrop-blur-sm"
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
                  </div>
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

