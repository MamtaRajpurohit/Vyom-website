"use client";

import React from "react";

export default function ContactMapBackdrop() {
  // Google Maps embed for TCET, Thakur Village, Kandivali East, Mumbai
  const src =
    "https://www.google.com/maps?q=Thakur%20College%20of%20Engineering%20and%20Technology%2C%20Thakur%20Village%2C%20Kandivali%20East%2C%20Mumbai&output=embed";
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0">
        <iframe
          title="TCET Map"
          src={src}
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ filter: "grayscale(100%) brightness(0.35) contrast(1.1)" }}
        />
      </div>
      {/* subtle overlay for tint */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
