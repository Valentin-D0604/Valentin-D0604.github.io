import Link from "next/link";

export default function Demineur() {
    return (
        <main className ="relative bg-black-100
        flex justify-center items-center flex-col overflow-hidden 
        mx-auto sm:px-10 px-5">
      <div>
      <section className="min-h-screen bg-black text-white p-8">

        <h2 className="text-4xl font-bold mb-6">Projet : Démineur</h2>

        <img 
          src="\demineur.png" 
          alt="Capture écran du démineur" 
          className="rounded-lg mb-6 max-w-2xl"
        />
  
     <p className="text-lg leading-relaxed mb-6">
  Ce projet est un démineur réalisé seul en C++ et étant mon premier projet en C++.
</p>
<p className="text-lg leading-relaxed mb-6">
  Dans ce démineur, le joueur a la capacité de choisir entre trois difficultés différentes gérant la taille de la grille, puis 
  de montrer une première case, qui ne sera jamais une mine et qui révélera des cases autour d'elle. Le joueur pourra ensuite jouer au démineur classique où
  les mines seront générées aléatoirement, et le joueur aura la capacité de poser un drapeau, révéler une case, perdre, gagner et relancer une partie à la fin.
</p>
  
        <a 
          href="https://github.com/Valentin-D0604/Minesweeper.git" 
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