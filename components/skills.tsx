import React from "react";

const SKILL_GROUPS = [
  {
    title: "Langages",
    skills: [
      {
        name: "C++",
        context: "Langage principal, utilisé dans la majorité de mes projets",
        projects: ["Moteur ECS", "Tata Miam", "Jeu multijoueur", "Brick Breaker"],
      },
      {
        name: "C#",
        context: "Utilisé avec Unity pour un jeu multijoueur",
        projects: ["Gods over drinks"],
      },
      {
        name: "Python",
        context: "Notions",
        projects: [],
      },
      {
        name: "Java",
        context: "Notions",
        projects: [],
      },
    ],
  },
  {
    title: "Moteurs & graphisme",
    skills: [
      {
        name: "Unity",
        context: "plusieur projet personel (procédural par exemple) et Jeu multijoueur en réseau (Netcode for GameObjects)",
        projects: ["Gods over drinks"],
      },
      {
        name: "DirectX 12",
        context: "Premiers pas dans un moteur de jeu maison",
        projects: ["Moteur ECS"],
      },
    ],
  },
  {
    title: "Outils",
    skills: [
      {
        name: "Git",
        context: "Travail collaboratif en équipe",
        projects: ["Tata Miam", "Gods over drinks"],
      },
    ],
  },
];

const SOFTSKILLS = [
  { icon: "", label: "Sérieux & déterminé" },
  { icon: "", label: "Curieux & autonome" },
  { icon: "", label: "Travail en équipe" },
  { icon: "", label: "Adaptabilité" },
];

const Skills = () => {
  return (
    <section
      id="Skills"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-20"
    >
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-12 h-12 text-2xl font-bold bg-teal-500 text-black rounded-lg shadow-lg shadow-teal-500/20">
              2
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight">Mes compétences</h2>
          </div>
          <div className="w-12 h-px bg-teal-500/50" />
        </div>

        {/* Hardskills */}
        <div className="w-full flex flex-col gap-8">
          <h3 className="text-xs tracking-widest uppercase text-zinc-500 text-center">
            HardSkills
          </h3>

          {SKILL_GROUPS.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-teal-400">{group.title}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-zinc-900/60 border border-white/5 hover:border-teal-500/30 rounded-xl p-5 transition-all duration-200 flex flex-col gap-3"
                  >
                    <span className="font-semibold text-white">{skill.name}</span>
                    <p className="text-zinc-400 text-sm leading-relaxed">{skill.context}</p>
                    {skill.projects.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {skill.projects.map((p) => (
                          <span
                            key={p}
                            className="text-xs bg-teal-500/10 text-teal-400 border border-teal-500/20 px-2.5 py-0.5 rounded-full"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Softskills */}
        <div className="w-full">
          <h3 className="text-xs tracking-widest uppercase text-zinc-500 mb-5 text-center">
            Softskills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-center">
            {SOFTSKILLS.map((s) => (
              <div
                key={s.label}
                className="bg-zinc-900/60 border border-white/5 hover:border-teal-500/30 rounded-xl p-2 text-center transition-all duration-200 hover:-translate-y-1"
              >
                <div className="text-2xl mb-2">{s.icon}</div>
                <div className="text-md text-zinc-300 font-medium leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;