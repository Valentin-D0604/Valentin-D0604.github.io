import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Profesionel = () => {
  return (
    <section id="Experience"  className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center space-y-6">
      <div className="flex items-center gap-4 transition-colors">
      <span className="flex items-center justify-center w-12 h-12 text-2xl font-bold bg-teal-500 text-black rounded-lg shadow-lg">5</span>
      <h2 className="text-4xl font-bold">mes experience professionelles</h2>
      </div>
       <TextGenerateEffect
                            className="text-base sm:text-lg md:text-xl text-zinc-200 max-w-3xl leading-relaxed"
                          words="Août 2025 : stage de développement web au sein de la société 'FINDS' où j'ai découvert le fonctionnement d'une entreprise. J'ai également pu faire du développement web avec plusieurs missions, comme créer une page de FAQ avec différents droits montrant uniquement les questions utiles à chaque profil sur l'application, corriger certains problèmes de base de données ou réaliser des traductions et résoudre des problèmes de mode sombre. J'ai pu mettre en avant mes capacités de travail en équipe et de détermination pour apprendre un langage que je ne connaissais pas. J'ai réussi à accomplir toutes mes missions.     2021 : réalisation d'un stage de 3ème dans l'école EPITECH, me permettant de découvrir le milieu des écoles supérieures et de réaliser des missions de code en Python pour apprendre ce langage et son fonctionnement, en plus de confirmer mon envie de faire du développement."
/>
    </section>
    
  );
};

export default Profesionel;