import Link from "next/link";

export default function Demineur() {
    return (
        <main className ="relative bg-black-100
        flex justify-center items-center flex-col overflow-hidden 
        mx-auto sm:px-10 px-5">
      <div>
      <section className="min-h-screen bg-black text-white p-8">

        <h2 className="text-4xl font-bold mb-6">Projet : BrickBreaker</h2>

        <img 
          src="\brique.png" 
          alt="Capture écran du démineur" 
          className="rounded-lg mb-6 max-w-2xl"
        />
  
       <p className="text-lg leading-relaxed mb-6">
  Ce projet est un casse-brique fait avec C++ en groupe de deux en créant et utilisant un ECS (Entity Component System). Cela avait pour objectif d'apprendre 
  l'utilisation d'un ECS (communément utilisé dans les moteurs de jeux) ainsi que le fonctionnement de ce dernier.
</p>
<p className="text-lg leading-relaxed mb-6">
  Dans ce jeu, le joueur a un pad qu'il peut déplacer de gauche à droite et une balle qui rebondit sur le pad pour aller casser des briques. 
  Certaines briques peuvent donner des balles supplémentaires une fois cassées,
  et différentes briques pouvant se casser en un difféent nombres de coups.
</p>
<p className="text-lg leading-relaxed mb-6">
  J'ai pu travailler sur la partie gameplay de ce code avec le fonctionnement des power-ups ainsi que de la balle et de l'ECS.
  J'ai pu mettre en avant mes compétences de communication et surtout d'apprentissage pour apprendre et comprendre le fonctionnement d'un ECS.
</p>
  
        <a 
          href="https://github.com/Valentin-D0604/BrickBreaker.git" 
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