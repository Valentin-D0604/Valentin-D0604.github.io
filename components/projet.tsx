"use client";
import React, { useState } from "react";
import Link from "next/link";

const PROJECTS = [
  {
    href: "/project/TataMiam",
    title: "Tata Miam",
    desc: "Un jeux de cuisine en co-op crée avec un moteur custom",
    tags: ["C++", "Co-op", "Moteur custom"],
    image: "/TataMiam.png",
  },
  {
    href: "/project/Moteur",
    title: "Moteur de jeu",
    desc: "Moteur ECS avec 3 librairies statiques (Core, Render, Engine) utilisant DirectX 12.",
    tags: ["C++", "DX12", "ECS"],
    image: "/Black.png",
  },
  {
    href: "/project/Multi",
    title: "Jeu multijoueur",
    desc: "Jeu en réseau avec gestion de sessions et synchronisation des joueurs.",
    tags: ["C++", "Réseau"],
    image: "/multi.png",
  },
  {
    href: "/project/Projetstudio",
    title: "Platformer 2D",
    desc: "Projet studio — jeu de plateforme 2D complet avec niveaux et ennemis.",
    tags: ["C++", "2D"],
    image: "/platform.png",
  },
  {
    href: "/project/shootthemup",
    title: "Shoot Them Up",
    desc: "Jeu de tir vertical avec vagues d'ennemis et système de score.",
    tags: ["C++"],
    image: "/shmup.png",
  },
  {
    href: "/project/brickbreaker",
    title: "Brick Breaker",
    desc: "Implémentation du classique casse-briques avec power-ups.",
    tags: ["C++"],
    image: "/brique.png",
  },
  {
    href: "/project/imageproject",
    title: "Chiffrement d'image",
    desc: "Outil de chiffrement et déchiffrement d'images via algorithme personnalisé.",
    tags: ["C++", "Algorithme"],
    image: "/encryptage.png",
  },
  {
    href: "/project/AIproject",
    title: "State Machine",
    desc: "Implémentation d'une machine à états finis pour l'IA de jeux.",
    tags: ["C++", "IA"],
    image: "/Rugby.png",
  },
  {
    href: "/project/turnbasedgame",
    title: "Donjon tour par tour",
    desc: "Jeu de donjon en tour par tour avec génération de niveaux.",
    tags: ["C++", "Tour par tour"],
    image: "/dunjon.png",
  },
  {
    href: "/project/demineur",
    title: "Démineur",
    desc: "Implémentation du Démineur classique avec différents niveaux de difficulté.",
    tags: ["C++", "Console", "First project"],
    image: "/demineur.png",
  },
];

const PER_PAGE = 3;

const Projets = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(PROJECTS.length / PER_PAGE);
  const start = page * PER_PAGE;
  const visible = PROJECTS.slice(start, start + PER_PAGE);

  return (
    <section
      id="Projets"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-20"
    >
      <div className="w-full max-w-7xl flex flex-col items-center gap-12">

        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-12 h-12 text-2xl font-bold bg-teal-500 text-black rounded-lg shadow-lg shadow-teal-500/20">
              3
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight">Mes projets</h2>
          </div>
          <div className="w-12 h-px bg-teal-500/50" />
          <p className="text-zinc-400 text-sm mt-1">{PROJECTS.length} de mes projets réalisés</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {visible.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="group relative overflow-hidden bg-zinc-900/60 hover:bg-zinc-800/80 border border-white/5 hover:border-teal-500/40 rounded-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image bannière — masquée si indisponible */}
              <div className="relative w-full h-48 overflow-hidden image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const wrapper = (e.target as HTMLImageElement).closest(".image-wrapper") as HTMLElement;
                    if (wrapper) wrapper.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
              </div>

              {/* Contenu */}
              <div className="flex flex-col gap-3 p-5 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-lg text-white group-hover:text-teal-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <svg className="w-4 h-4 text-zinc-600 group-hover:text-teal-400 transition-colors shrink-0 mt-1" fill="none" viewBox="0 0 16 16">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed flex-1">{project.desc}</p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-teal-500/10 text-teal-400 border border-teal-500/20 px-2.5 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="relative z-10 flex items-center gap-4">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-sm text-zinc-400 hover:text-white hover:border-teal-500/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Précédent
          </button>

          {/* Points de pagination */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === page ? "bg-teal-400 w-4" : "bg-zinc-600 hover:bg-zinc-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-sm text-zinc-400 hover:text-white hover:border-teal-500/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
          >
            Suivant
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Projets;