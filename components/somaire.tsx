import React from "react";

const SECTIONS = [
  { num: "1", label: "À propos", href: "#About", desc: "Qui je suis" },
  { num: "2", label: "Compétences", href: "#Skills", desc: "Hardskills & Softskills" },
  { num: "3", label: "Projets", href: "#Projets", desc: "Mes réalisations" },
  { num: "4", label: "Scolarité", href: "#Scolarité", desc: "Mon parcours scolaire" },
  { num: "5", label: "Expériences", href: "#Experience", desc: "Mes stages professionnels" },
  { num: "6", label: "Contact", href: "#contact", desc: "Me joindre" },
];

const Somaire = () => {
  return (
    <section
      id="somaire"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-20"
    >
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-5xl font-extrabold mt-3 tracking-tight">Sommaire</h2>
        <div className="w-12 h-px bg-teal-500/50 mx-auto mt-4" />
      </div>

      {/* Grid */}
      <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-4xl z-50">
        {SECTIONS.map((s) => (
          <a
            key={s.href}
            href={s.href}
            className="group flex items-center gap-4 bg-zinc-900/60 hover:bg-zinc-800/80 border border-white/5 hover:border-teal-500/40 rounded-xl p-5 transition-all duration-200 hover:-translate-y-1"
          >
            <span className="flex items-center justify-center w-12 h-12 text-xl font-bold bg-teal-500 text-black rounded-lg shadow-lg shadow-teal-500/20 shrink-0 group-hover:bg-teal-400 transition-colors">
              {s.num}
            </span>
            <div className="text-left">
              <div className="font-semibold text-white group-hover:text-teal-400 transition-colors">
                {s.label}
              </div>
              <div className="text-xs text-zinc-500 mt-0.5">{s.desc}</div>
            </div>
          </a>
        ))}
      </nav>
    </section>
  );
};

export default Somaire;