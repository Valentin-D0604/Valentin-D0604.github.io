import Link from "next/link";

export default function Demineur() {
    return (
        <main className ="relative bg-black-100
        flex justify-center items-center flex-col overflow-hidden 
        mx-auto sm:px-10 px-5">
      <div>
      <section className="min-h-screen bg-black text-white p-8">

        <h2 className="text-4xl font-bold mb-6">Projet : donjon en tour par tour</h2>

        <img 
          src="/dunjon.png" 
          alt="Capture écran du démineur" 
          className="rounded-lg mb-6 max-w-2xl"
        />
  
        <p className="text-lg leading-relaxed mb-6">
          Ce projet est un jeu en tour par tour réalisé seul avec c++. utilisant les base du c++ et étant l'un de mes premiers projet.</p>
          <p className="text-lg leading-relaxed mb-6">
          Dans ce jeu le joueur (M) a la capacité de se déplacer dans un donjon rempli d'ennemis
          et de les attaquer et les tuer pour obtenir differentes amélioration pour par exemple
           améliorer son épée, son armure ou bien gagner des potions pouvant le soigner. Le but du jeu est de  réussir à sortir du donjon une fois tous les ennemis éliminés.
           Le jeu se joue en tour par tour entre le joueur et l'ennemi. Où le joueur peut réaliser plusieur action comme attaquer ou se soigner. 
           Chaque type d'ennemi detiennent leur propres capacité qu'ils peuvent utiliser comme le spectre qui peut s'enfuire du combats. Les ennemies peuvent également
           attaquer et avec chacun leur propres statistiques de vie d'attaques, defense etc.
        </p>
         <p className="text-lg leading-relaxed mb-6">
          dans ce projet j'ai pu coder le fonctionnement de chaque ennemi ainsi que les differentes capacité du joueur.
         </p>
  
        <a 
          href="https://github.com/Valentin-D0604/DonjonGame"
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