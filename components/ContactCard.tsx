"use client";

import React from "react";

type Props = {
  institute?: string;
  location?: string;
  email?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  contactUrl?: string;
};

export default function ContactCard({
  institute = "Veermata Jijabai Technological Institute,",
  location = "Matunga(E), Mumbai",
  email = "vishwa@vjti.ac.in",
  instagramUrl = "https://instagram.com/",
  linkedinUrl = "https://linkedin.com/",
  contactUrl = "#contact",
}: Props) {
  return (
    <div className="w-full flex items-center justify-center px-4 sm:px-0">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-xl bg-transparent border-2 sm:border-4 border-[#7C2AE8] rounded-lg p-4 sm:p-6 md:p-8 shadow-2xl text-center">
        <div className="space-y-4 sm:space-y-6">
          <div className="space-y-1 sm:space-y-2">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white/100">
              {institute}
            </h3>
            <p className="text-white/80 text-sm sm:text-base md:text-lg">{location}</p>
          </div>

          <a
            href={`mailto:${email}`}
            className="inline-block text-white font-semibold text-sm sm:text-base md:text-lg hover:text-primary transition-colors"
            aria-label={`Send email to ${email}`}
          >
            {email}
          </a>

          <div className="space-y-2 sm:space-y-3">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 sm:py-3 rounded-md font-semibold text-white text-sm sm:text-base bg-gradient-to-r from-[#f58529c1] via-[#dd2a7bc9] to-[#8234afbf] hover:opacity-90 transition"
              aria-label="Follow Vyom Voyage on Instagram"
            >
              Instagram
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 sm:py-3 rounded-md font-semibold text-white text-sm sm:text-base bg-gradient-to-r from-[#0a66c2b8] to-[#1d80dcc0] hover:opacity-90 transition"
              aria-label="Connect with Vyom Voyage on LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href={contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 sm:py-3 rounded-md font-semibold text-white text-sm sm:text-base bg-[#e83535c3] hover:bg-[#d82525b9] transition"
              aria-label="Subscribe to Vyom Voyage YouTube channel"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
