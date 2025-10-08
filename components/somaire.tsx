import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

const Somaire = () => {
  return (
    <section
      id="somaire"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center space-y-8"
    >
 
      <h2 className="text-5xl font-bold">Sommaire</h2>
      <nav className="grid grid-cols-2 gap-x-24 gap-y-8 text-xl font-medium z-50">
        <a href="#About" className="flex items-center gap-4 hover:text-teal-400 transition-colors">
          <span className="flex items-center justify-center w-12 h-12 text-2xl font-bold bg-teal-500 text-black rounded-lg shadow-lg">1</span>
            À propos
          </a>

        <a href="#Skills" className="flex items-center gap-4 hover:text-teal-400 transition-colors">
          <span className="flex items-center justify-center w-12 h-12 text-2xl font-bold bg-teal-500 text-black rounded-lg shadow-lg">2</span>
          Compétences
        </a>

        <a href="#Projets" className="flex items-center gap-4 hover:text-teal-400 transition-colors">
          <span className="flex items-center justify-center w-12 h-12 text-2xl font-bold bg-teal-500 text-black rounded-lg shadow-lg"> 3 </span>
          Projets
        </a>

        <a href="#Scolarité" className="flex items-center gap-4 hover:text-teal-400 transition-colors">
          <span className="flex items-center justify-center w-12 h-12 text-2xl font-bold bg-teal-500 text-black rounded-lg shadow-lg"> 4 </span>
          Scolarité
        </a>

        <a href="#Experience" className="flex items-center gap-4 hover:text-teal-400 transition-colors">
          <span className="flex items-center justify-center w-12 h-12 text-2xl font-bold bg-teal-500 text-black rounded-lg shadow-lg"> 5 </span>
          Experience professionelles
        </a>

        <a href="#contact" className="flex items-center gap-4 hover:text-teal-400 transition-colors">
          <span className="flex items-center justify-center w-12 h-12 text-2xl font-bold bg-teal-500 text-black rounded-lg shadow-lg"> 6 </span>
          Contact
        </a>

      </nav>
    </section>
  );
};

export default Somaire;