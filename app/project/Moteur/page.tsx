import Link from "next/link";

export default function Moteur() {
    return (
        <main className ="relative bg-black-100
        flex justify-center items-center flex-col overflow-hidden 
        mx-auto sm:px-10 px-5">
      <div>
      <section className="min-h-screen bg-black text-white p-8">

        <h2 className="text-4xl font-bold mb-6">Projet : Création d'un moteur de jeu</h2>

<p className="text-lg leading-relaxed mb-6">
 Ce projet est un moteur de jeu réalisé par moi-même avec des amis dans le but de créer un moteur composé de 3 librairies statiques en utilisant DX12 pour le rendu. Il s'agit d'un moteur avec un fonctionnement d'ECS.
</p>
<p className="text-lg leading-relaxed mb-6">
 Ce projet est donc un moteur de jeu, réalisé en deux librairies statiques (donc réutilisables individuellement dans d'autres projets) et d'une librairie "engine". Voici les différentes librairies :
 <br /> - Core : une librairie statique remplie de données et d'outils utilisables dans plusieurs projets (chrono, fonctions maths, stateMachine, parseur obj...).
 <br /> - Render : une librairie statique servant à afficher différentes choses dans le projet en utilisant DX12 après l'avoir encapsulée. Avec également une gestion des caméras, etc.
 <br /> - Engine : la partie ECS du projet, il s'agit d'une librairie dépendante d'un render et d'un core, même s'ils sont différents de ceux actuels. L'engine permet de gérer tout ce qui est de l'ECS (entity, component, system)
 du projet ainsi que la majorité du code, comme les scripts par exemple.
 <br /> Un jeu de rail shooter est également fourni dans le projet, montrant certaines des capacités du projet.
</p>

        <a 
          href="https://github.com/Valentin-D0604/EntreCote-Sytem.git" 
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