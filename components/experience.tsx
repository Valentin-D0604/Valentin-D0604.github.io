import React from "react";

const TIMELINE = [
  {
    year: "2025+",
    title: "Bachelor en programmation",
    school: "GTech Lyon",
    desc: "Actuellement en deuxième année d'un bachelor dans une école de programmation.",
    current: true,
  },
  {
    year: "2024",
    title: "BAC STI2D SIN",
    school: "Lycée Aux Lazaristes La Salle — Lyon",
    desc: "Sciences et Technologies de l'Industrie et du Développement Durable, option Systèmes d'Information et Numérique.",
    current: false,
  },
  {
    year: "2021",
    title: "Brevet des collèges",
    school: "Saint Nicolas — Toulouse",
    desc: "Obtenu avec succès au collège Saint Nicolas.",
    current: false,
  },
];

const Experience = () => {
  return (
    <section
      id="Scolarité"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-20"
    >
      <div className="w-full max-w-2xl flex flex-col items-center gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-3">

          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-12 h-12 text-2xl font-bold bg-teal-500 text-black rounded-lg shadow-lg shadow-teal-500/20">
              4
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight">Ma scolarité</h2>
          </div>
          <div className="w-12 h-px bg-teal-500/50" />
        </div>

        {/* Timeline */}
        <div className="w-full flex flex-col gap-0">
          {TIMELINE.map((item, i) => (
            <div key={item.year} className="flex gap-6">
              {/* Line + dot */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${
                    item.current ? "bg-teal-400 shadow-lg shadow-teal-400/50" : "bg-zinc-600"
                  }`}
                />
                {i < TIMELINE.length - 1 && (
                  <div className="w-px flex-1 bg-zinc-800 mt-2 mb-0 min-h-[40px]" />
                )}
              </div>

              {/* Content */}
              <div className={`pb-10 ${i === TIMELINE.length - 1 ? "pb-0" : ""}`}>
                <div className="flex items-center gap-3 mb-1.5">
                  <span
                    className={`text-sm font-bold ${
                      item.current ? "text-teal-400" : "text-zinc-500"
                    }`}
                  >
                    {item.year}
                  </span>
                  {item.current && (
                    <span className="text-xs bg-teal-500/10 text-teal-400 border border-teal-500/20 px-2 py-0.5 rounded-full">
                      En cours
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-teal-400/70 mb-2">{item.school}</p>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;