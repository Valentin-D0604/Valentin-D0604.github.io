import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <section id="main" className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      

      <div className="fixed top-0 left-0 w-full px-8 py-4 flex justify-end z-30 bg-black/60 backdrop-blur-md shadow-md">
      <nav className="space-x-4">
  <a href="#main" className="text-sm hover:text-teal-400 transition-colors">Home</a>
  <a href="#somaire" className="text-sm hover:text-teal-400 transition-colors">Sommaire</a>
  <a href="#About" className="text-sm hover:text-teal-400 transition-colors">À propos</a>
  <a href="#Skills" className="text-sm hover:text-teal-400 transition-colors">Compétences</a>
  <a href="#Projets" className="text-sm hover:text-teal-400 transition-colors">Projets</a>
  <a href="#Scolarité" className="text-sm hover:text-teal-400 transition-colors">Scolarité</a>
  <a href="#Experience" className="text-sm hover:text-teal-400 transition-colors">experience</a>
  <a href="#contact" className="text-sm hover:text-teal-400 transition-colors">Contact</a>
</nav>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="absolute top-20 text-5xl sm:text-6xl font-bold bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent drop-shadow-lg mb-4">
          Portfolio de Valentin DAVID
        </h1>
        <p className=" absolute top-44 text-zinc-400 text-lg mb-8 italic max-w-2xl">
          Étudiant en informatique passionné par le développement de jeux vidéo.
        </p>

        <TextGenerateEffect
          className="text-base sm:text-lg md:text-xl text-zinc-200 max-w-3xl leading-relaxed"
          words="Bonjour ! Je suis Valentin DAVID étudiant en informatique. Voici mes projets et mes experiences professionelles"
        />

        <div className="mt-10 flex space-x-4">
          <button className="bg-teal-600 hover:bg-teal-500 text-white px-5 py-2 rounded-lg shadow-md transition">
          <a href="mailto:valentin0604.david@gmail.com" className="text-white">Envoyer un mail</a>
          </button>

          <button >
          <a
          href="/CV_2025-10-19_valentin_david (2).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal-600 hover:bg-teal-500 text-white px-5 py-2 rounded-lg shadow-md transition">
          Voir mon CV
          </a>
          </button>

        </div>
      </div>
    </section>
    
  );
};

export default Hero;