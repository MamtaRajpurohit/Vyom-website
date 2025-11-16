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
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-xl bg-black/80 border-4 border-[#7C2AE8] rounded-lg p-8 shadow-2xl text-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white/90">
              {institute}
            </h3>
            <p className="text-white/80 text-sm">{location}</p>
          </div>

          <a
            href={`mailto:${email}`}
            className="inline-block text-white font-semibold text-sm"
          >
            {email}
          </a>

          <div className="space-y-3">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="block w-full py-3 rounded-md font-semibold text-white bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:opacity-90 transition"
            >
              Instagram
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="block w-full py-3 rounded-md font-semibold text-white bg-gradient-to-r from-[#0a66c2] to-[#1d7fdc] hover:opacity-90 transition"
            >
              LinkedIn
            </a>
            <a
              href={contactUrl}
              className="block w-full py-3 rounded-md font-semibold text-white bg-[#7C2AE8] hover:bg-[#6b22d1] transition"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
