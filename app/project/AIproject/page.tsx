import Link from "next/link";

export default function Demineur() {
    return (
        <main className ="relative bg-black-100
        flex justify-center items-center flex-col overflow-hidden 
        mx-auto sm:px-10 px-5">
      <div>
      <section className="min-h-screen bg-black text-white p-8">

        <h2 className="text-4xl font-bold mb-6">Projet : StateMachine</h2>

        <img 
          src="\Rugby.png" 
          alt="Capture écran du démineur" 
          className="rounded-lg mb-6 max-w-2xl"
        />
  
        <p className="text-lg leading-relaxed mb-6">
         Ce projet est un projet fait en c++ par groupe de deux dans le but de comprendre le fonctionnement des state machines des IA qui est souvent utiliser dans les jeux vidéo
         pour les ennemies par exemple </p>
         <p className="text-lg leading-relaxed mb-6">
          Il s'agit un jeu de rugby utilisant des intelligences artificielles sur du StateMachine, 
         ayant la capacité d'aller marquer, récupérer la balle et même faire des passes au joueur derrière eux uniquement. En effet ce jeux ne détient pas de joueur
         mais uniquement des IA avec du statemachine. Comme vous pouvez le voir sur l'image chaque cercle, les joueur, detiennent un état écris au dessus de leur tête 
         et le joueur ayant la balle peut faire des passes au joueur derrière lui (mis en évidance par les ligne violette) </p>
         <p className="text-lg leading-relaxed mb-6">
         Pour ce projet j'ai du travailler sur le states machine pour crée des états et des phase de transition permettant de passer d'un état a un autre. 
         Par exemple, si la balle est au sol il y a un changement d'état pour chaque joueur.Et chaque états fonctionne différement, avec par exemple 
         : si la balle est au sol, j'essaye de l'obtenir. Ce projet m'a permis de mettre en avant mes capacité de reflexion pour réussir a optimiser au maximun chaque états,
          en faire le plus possible et permettre le plus de possibilité pour chaque joueur
        </p>
  
        <a 
          href="https://github.com/Valentin-D0604/StateMachine-rugby" 
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