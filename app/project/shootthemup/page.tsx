import Link from "next/link";

export default function Demineur() {
    return (
        <main className ="relative bg-black-100
        flex justify-center items-center flex-col overflow-hidden 
        mx-auto sm:px-10 px-5">
      <div>
      <section className="min-h-screen bg-black text-white p-8">

        <h2 className="text-4xl font-bold mb-6">Projet : Shoot them up</h2>

        <img 
          src="/shmup.png" 
          alt="Capture écran du démineur" 
          className="rounded-lg mb-6 max-w-2xl"
        />
  
        <p className="text-lg leading-relaxed mb-6">
         Ce projet est un shoot them up réalisé en c++ en groupe de deux</p>
         <p className="text-lg leading-relaxed mb-6">
         Dans ce shoot them up le joueur a la capacité de tirer sur des vaisseaux ennemis 
         et des météorites pour gagner des points ainsi que des power up 
         pouvant améliorer son vaisseau, se soigner, gagner une traînée de feu temporaire et 
         même un petit coéquipier pour l'aider. Ce jeu détient également un système de mini boss tous les 500 points.
        Les ennemis deviennent également plus forts avec l'augmentation des points.</p>
         <p className="text-lg leading-relaxed mb-6">
        Dans ce projet j'ai pu m'occuper de toutes ma partie gameplay avec les déplacement et tir du joueur, les power up et le fonctionnement des ennemis et météorites. 
        J'ai pu mettre en avant mes capacité de communication, ma curiosité pour me renseigne et m'inspirer de d'autre shoot them up ainsi que ma créativité pour crée les powerup
        </p>
  
        <a 
          href="https://github.com/Valentin-D0604/ShootThemUp" 
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