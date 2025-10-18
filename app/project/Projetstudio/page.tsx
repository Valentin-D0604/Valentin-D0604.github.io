import Link from "next/link";

export default function Demineur() {
    return (
        <main className ="relative bg-black-100
        flex justify-center items-center flex-col overflow-hidden 
        mx-auto sm:px-10 px-5">
      <div>
      <section className="min-h-screen bg-black text-white p-8">

        <h2 className="text-4xl font-bold mb-6">Projet : Platformer/studio</h2>

        <img 
          src="/platform.png" 
          alt="Capture écran du platformer" 
          className="rounded-lg mb-6 max-w-2xl"
        />
  
        <p className="text-lg leading-relaxed mb-6">
  Ce projet est un projet important car il fut réalisé en groupe de 10 personnes, composé de développeurs, d'artistes et de commerciaux, sur une durée de deux semaines.
  L'objectif visé était de simuler au maximum le monde du travail lors de la réalisation du projet en C++.
</p>
<p className="text-lg leading-relaxed mb-6">
  Durant les deux semaines que nous avions à disposition, nous avons pu réaliser un platformer 2D basé sur le style Solarpunk.
  Le personnage principal peut utiliser le vent pour faire des doubles sauts, des dashs, attaquer avec des boules d'air et également parer les attaques ennemies 
  pour renvoyer les projectiles. Le jeu détient quatres ennemis entièrement différents, dont un pouvant se transformer en plusieurs formes
  et un boss final ayant plusieurs attaques. Nous pouvons créer nous-mêmes nos propres cartes sur un bloc-notes et les utiliser dans le jeu.
</p>
<p className="text-lg leading-relaxed mb-6">
  Durant ce projet, j'ai travaillé sur la partie gameplay du jeu, avec les ennemis, les mécaniques du personnage et la création de cartes principalement. 
  J'ai pu, lors de ce projet, mettre en avant mes capacités de travail en équipe et de communication avec les autres personnes de mon groupe, ainsi que de consolider
  toutes mes connaissances.
</p>
  
        <a 
          href="https://github.com/Valentin-D0604/platformer-2d-solarpunk" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Voir sur GitHub
        </a>

         <Link href="/././#Projets" className="relative text-blue-500 hover:underline ml-[1300px] text-lg z-50">
       page d'accueil
        </Link>
      </section>
      </div>
      </main>
    );
  }