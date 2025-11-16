'use client'

import { motion } from 'framer-motion'

interface FooterProps {
  onPageChange?: (page: number) => void
}

export default function Footer({ onPageChange }: FooterProps) {
  const quickLinks = [
    { label: 'Projects', page: 3 },
    { label: 'Updates', page: 5 },
    { label: 'Team', page: 4 },
  ]

  const socialLinks = [
    { label: 'Instagram', href: '#', icon: '📷' },
    { label: 'LinkedIn', href: '#', icon: '💼' },
    { label: 'YouTube', href: '#', icon: '▶️' },
  ]

  return (
    <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-primary mb-3">Quick Links</h3>
            <ul className="space-y-1.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onPageChange?.(link.page)}
                    className="text-white/70 hover:text-primary transition-all hover:translate-x-1 text-left text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-base font-semibold text-primary mb-3">Follow Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-2xl hover:scale-110 transition-transform"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold text-primary mb-3">Contact</h3>
            <p className="text-white/70 text-sm mb-1">
              Thakur College of Engineering and Technology
            </p>
            <p className="text-white/70 text-sm">
              Mumbai, Maharashtra, India
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Vyom Voyage - TCET. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

