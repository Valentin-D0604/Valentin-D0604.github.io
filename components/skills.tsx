import React from "react";

const HARDSKILLS = [
  { name: "C++", level: 85, detail: "Maîtrisé" },
  { name: "Git", level: 70, detail: "Intermédiaire" },
  { name: "DirectX 12", level: 40, detail: "Notions" },
  { name: "Python", level: 40, detail: "Notions" },
  { name: "Java", level: 35, detail: "Notions" },
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
      <div className="w-full max-w-3xl flex flex-col items-center gap-12">
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
        <div className="w-full">
          <h3 className="text-xs tracking-widest uppercase text-zinc-500 mb-5 text-center">
            HardSkills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HARDSKILLS.map((skill) => (
              <div
                key={skill.name}
                className="bg-zinc-900/60 border border-white/5 hover:border-teal-500/30 rounded-xl p-5 transition-all duration-200"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-white">{skill.name}</span>
                  <span className="text-xs text-zinc-500">{skill.detail}</span>
                </div>
                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-teal-600 to-teal-400 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
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