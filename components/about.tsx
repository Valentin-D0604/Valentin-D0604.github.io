import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

const PASSIONS = [" Jeux vidéo", " Lecture", " Échecs", " Legos"];

const About = () => {
  return (
    <section
      id="About"
      className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-20 overflow-hidden"
    >
      <BackgroundBeams className="fixed -top-96 -left-10 md:-left-32 md:-top-20 h-screen opacity-70 blur-sm z-0" />

      <div className="relative z-10 flex flex-col items-center text-center gap-10 max-w-3xl">
        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-12 h-12 text-2xl font-bold bg-teal-500 text-black rounded-lg shadow-lg shadow-teal-500/20">
              1
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight">À propos de moi</h2>
          </div>
          <div className="w-12 h-px bg-teal-500/50" />
        </div>

        {/* Bio card */}
        <div className="bg-zinc-900/60 border border-white/5 rounded-2xl p-10 text-left space-y-4">
          <p className="text-zinc-300 text-lg leading-relaxed">
            Je suis étudiant en informatique, principalement dans le milieu du{" "}
            <span className="text-teal-400 font-medium">jeu vidéo</span>.
            Persévérant, je fais en sorte de toujours atteindre mes objectifs.
          </p>
        <p className="text-zinc-300 text-lg leading-relaxed">
            Je suis également quelqu'un de passionné par beaucoup de sujets. Je rêve
            de développer des jeux vidéo depuis mon plus jeune âge et de pouvoir
            donner vie à toutes mes idées.
          </p>
        </div>

        {/* Passions */}
        <div className="w-full">
          <p className="text-xs tracking-widest uppercase text-zinc-500 mb-4">
            Mes passions
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {PASSIONS.map((p) => (
              <span
                key={p}
                className="bg-zinc-900 border border-white/10 hover:border-teal-500/40 text-zinc-300
                 hover:text-teal-400 text-sm px-4 py-2 rounded-lg transition-all duration-200"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;