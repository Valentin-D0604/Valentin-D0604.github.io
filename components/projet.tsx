import React from "react";
import Link from "next/link";

const PROJECTS = [
  {
    href: "/project/Moteur",
    title: "Moteur de jeu",
    desc: "Moteur ECS avec 3 librairies statiques (Core, Render, Engine) utilisant DirectX 12.",
    tags: ["C++", "DX12", "ECS"],
    image: "/moteur.png",
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
    tags: ["C++"],
    image: "/demineur.png",
  },
];

const Projets = () => {
  return (
    <section
      id="Projets"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-20"
    >
      <div className="w-full max-w-4xl flex flex-col items-center gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-12 h-12 text-2xl font-bold bg-teal-500 text-black rounded-lg shadow-lg shadow-teal-500/20">
              3
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight">Mes projets</h2>
          </div>
          <div className="w-12 h-px bg-teal-500/50" />
          <p className="text-zinc-400 text-sm mt-1">
            {PROJECTS.length} projets réalisés
          </p>
        </div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {PROJECTS.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="group relative overflow-hidden bg-zinc-900/60 hover:bg-zinc-800/80 border border-white/5 hover:border-teal-500/40 rounded-xl p-5 transition-all duration-200 hover:-translate-y-1 flex flex-col gap-3 z-50"
            >
              {/* Image de fond — invisible par défaut, apparaît en léger au hover */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              {/* Contenu au-dessus de l'image */}
              <div className="relative z-10 flex items-start justify-between gap-2">
                <h3 className="font-semibold text-white group-hover:text-teal-400 transition-colors leading-snug">
                  {project.title}
                </h3>
                <svg
                  className="w-4 h-4 text-zinc-600 group-hover:text-teal-400 transition-colors shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p className="relative z-10 text-zinc-500 text-sm leading-relaxed flex-1">
                {project.desc}
              </p>

              <div className="relative z-10 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-teal-500/10 text-teal-400 border border-teal-500/20 px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projets;