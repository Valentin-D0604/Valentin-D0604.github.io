import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Experience = () => {
  return (
    <section id="Scolarité"  className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center space-y-6">
      <div className="flex items-center gap-4 transition-colors">
        <span className="flex items-center justify-center w-12 h-12 text-2xl font-bold bg-teal-500 text-black rounded-lg shadow-lg">4</span>
      <h2 className="text-4xl font-bold">Ma scolarité</h2>
      </div>
       <TextGenerateEffect
        className="text-base sm:text-lg md:text-xl text-zinc-200 max-w-3xl leading-relaxed"
          words= {`2021 : brevet des collège obtenu à Saint Nicolas (Toulouse), \n\n 2024 : BAC STI2D option SIN (sciences et technologies de l'informatique et du développement durable, option systèmes informatiques et numériques) lycée Aux Lazaristes La Salle Lyon.\n\n2025+ : Je réalise actuellement un bachelor d'une école de programmation.`}
         />
    </section>
    
  );
};

export default Experience;