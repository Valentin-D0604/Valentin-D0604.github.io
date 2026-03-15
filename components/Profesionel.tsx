import React from "react";

const EXPERIENCES = [
  {
    year: "Août 2025",
    title: "Stage — Développement web",
    company: "FINDS",
    desc: "Découverte du fonctionnement d'une entreprise et réalisation de missions variées. Mise en avant de mes capacités de travail en équipe et de ma détermination à apprendre un langage que je ne maîtrisais pas.",
    skills: ["Développement web", "Travail en équipe", "Adaptabilité"],
  },
  {
    year: "2021",
    title: "Stage de 3ème",
    company: "EPITECH",
    desc: "Découverte du milieu des écoles supérieures, initiation au Python et apprentissage du fonctionnement de ce langage. Ce stage a confirmé mon envie de faire du développement.",
    skills: ["Python", "Découverte du travail en entreprise"],
  },
];

const Profesionel = () => {
  return (
    <section
      id="Experience"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-20"
    >
      <div className="w-full max-w-2xl flex flex-col items-center gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-3">

          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-12 h-12 text-2xl font-bold bg-teal-500 text-black rounded-lg shadow-lg shadow-teal-500/20">
              5
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight">
              Expériences professionnelles
            </h2>
          </div>
          <div className="w-12 h-px bg-teal-500/50" />
        </div>

        {/* Experience cards */}
        <div className="w-full flex flex-col gap-0">
          {EXPERIENCES.map((exp, i) => (
            <div key={exp.year} className="flex gap-6">
              {/* Dot + line */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full mt-1.5 shrink-0 bg-teal-500 shadow-lg shadow-teal-500/30" />
                {i < EXPERIENCES.length - 1 && (
                  <div className="w-px flex-1 bg-zinc-800 mt-2 min-h-[40px]" />
                )}
              </div>

              {/* Content */}
              <div className={`pb-10 w-full ${i === EXPERIENCES.length - 1 ? "pb-0" : ""}`}>
                <span className="text-sm font-bold text-teal-400">{exp.year}</span>
                <div className="bg-zinc-900/60 border border-white/5 hover:border-teal-500/20 rounded-xl p-5 mt-2 transition-all duration-200">
                  <h3 className="font-semibold text-white text-lg">{exp.title}</h3>
                  <p className="text-teal-400/70 text-sm mb-3">{exp.company}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{exp.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-teal-500/10 text-teal-400 border border-teal-500/20 px-2.5 py-0.5 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profesionel;