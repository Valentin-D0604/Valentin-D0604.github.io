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
                            words="Aout 2025: stage de développement WEB au sein de la société 'FINDS' où j'ai découvert le fonctionnement d'une entreprise. J'ai également pu faire développement web avec plusieur mission, comme crée une page de FAQ avec differents droits montrant uniquement les questions utiles a chaque profil sur l'application, corriger certaines problème de database ou réaliser des traduction et problème de mode sombre. J'ai pu mettre en avant mes capacité de travail en équipe et de determination pour apprendre un language que je ne connaisais pas en deux mois. J'ai réussi a accomplir toutes mes missions     2021: réalisation d'un stage de 3ème dans l'école EPITECH. me permettant de découvrir le millieu des écoles superieur et de réaliser des missions de codes en python pour apprendre ce language et son fonctionnement en plus de confirmer mon envie de faire de developpement"
                          />
    </section>
    
  );
};

export default Profesionel;