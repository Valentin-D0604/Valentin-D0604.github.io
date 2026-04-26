"use client";
import React, { useEffect, useState } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const NAV_LINKS = [
  { href: "#main", label: "Home" },
  { href: "#somaire", label: "Sommaire" },
  { href: "#About", label: "À propos" },
  { href: "#Skills", label: "Compétences" },
  { href: "#Projets", label: "Projets" },
  { href: "#Scolarité", label: "Scolarité" },
  { href: "#Experience", label: "Expériences" },
  { href: "#contact", label: "Contact" },
];

const Hero = () => {
  const [activeSection, setActiveSection] = useState("main");

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      id="main"
      className="relative h-screen w-full overflow-hidden bg-black text-white"
    >
      {/* Glow teal background */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-teal-500/10 blur-3xl z-0" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-teal-600/5 blur-3xl z-0" />

      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full px-8 py-4 flex justify-between items-center z-30 bg-black/70 backdrop-blur-md border-b border-white/5">
        <span className="text-teal-400 font-bold tracking-widest text-sm uppercase">
          VD
        </span>
        <nav className="flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm px-3 py-1.5 rounded-md transition-all duration-200 ${
                  isActive
                    ? "text-teal-400 bg-teal-400/10"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 gap-6">
        {/* Eyebrow */}
        <span className="text-xs tracking-[0.25em] uppercase text-teal-400/80 font-medium">
          Étudiant en informatique · Développeur jeu vidéo
        </span>

        {/* Title */}
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-none">
          Valentin{" "}
          <span className="text-teal-400">DAVID</span>
        </h1>

        {/* Divider */}
        <div className="w-16 h-px bg-teal-500/50" />

        {/* Animated intro */}
        <TextGenerateEffect
          className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed"
          words="Bonjour ! Je suis Valentin DAVID, étudiant en informatique. Voici mes projets et mes expériences professionnelles."
        />

        {/* CTA buttons */}
        <div className="flex gap-3 mt-2">
          <a
            href="mailto:valentin0604.david@gmail.com"
            className="bg-teal-500 hover:bg-teal-400 text-black font-semibold px-6 py-2.5 rounded-lg shadow-lg shadow-teal-500/20 transition-all duration-200 hover:shadow-teal-400/30 hover:-translate-y-0.5"
          >
            Envoyer un mail
          </a>
          <a
          href="/CV_Valentin_DAVID.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal-600 hover:bg-teal-500 text-white px-5 py-2 rounded-lg shadow-md transition">
          Voir mon CV
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 flex flex-col items-center gap-2 animate-bounce opacity-40">
          <span className="text-xs tracking-widest text-zinc-500 uppercase">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M8 13l-4-4M8 13l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;