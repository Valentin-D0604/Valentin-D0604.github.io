import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const About = () => {
  return (
    <section id="About" className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center space-y-6">
        <BackgroundBeams className="fixed -top-96 -left-10 md:-left-32 md:-top-20 h-screen opacity-70 blur-sm z-0" />
        <div className="flex items-center gap-4 transition-colors">
        <span className="flex items-center justify-center w-12 h-12 text-2xl font-bold bg-teal-500 text-black rounded-lg shadow-lg">1</span>
         <h2 className="text-4xl font-bold">À propos de moi</h2>
         </div>
       <TextGenerateEffect
                className="text-base sm:text-lg md:text-xl text-zinc-200 max-w-3xl leading-relaxed"
                words="Je suis étudiant en informatique principalement dans le milieu du jeu vidéo. Je suis quelqu'un qui cherchera toujours à persévérer pour atteindre mes objectifs. Je suis également quelqu'un de pationnée par beaucoup de choses comme les jeuxvidéo, principalement solo avec une longue histoire et des personnages interessant ou même la lecture et les légos. Je rève de developper des jeux vidéo depuis monplus jeune âge et de pouvoir donner vie a plein d'idée que j'obtient "
              />
    </section>
  );
};

export default About;