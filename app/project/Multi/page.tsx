import Link from "next/link";

export default function Multi() {
    return (
        <main className ="relative bg-black-100
        flex justify-center items-center flex-col overflow-hidden 
        mx-auto sm:px-10 px-5">
      <div>
      <section className="min-h-screen bg-black text-white p-8">
        <h2 className="text-4xl font-bold mb-6">Projet : Multijoueur</h2>

        <img 
          src="\Valentin.png" 
          alt="Capture écran du démineur" 
          className="rounded-lg mb-6 max-w-2xl"
        />
            <img 
          src="\multi.png" 
          alt="Capture écran du démineur" 
          className="rounded-lg mb-6 max-w-2xl"
        />

<p className="text-lg leading-relaxed mb-6">
 Ce projet est un jeu multijoueur réalisé avec un serveur et des clients permettant à plusieurs personnes de jouer ensemble dans une arène.
</p>
<p className="text-lg leading-relaxed mb-6">
 Ce projet fonctionne à l'aide d'un système de paquets partagés en UDP (User Datagram Protocol) entre un serveur et des clients, leur permettant de jouer ensemble dans une arène, générée aléatoirement au début de chaque partie,
 dans le but de se tirer dessus pour gagner un maximum de points et remporter la partie.

 Le multijoueur fonctionne de manière simple avec des paquets ayant chacun leur format, permettant d'assurer le bon passage de tous les paquets et évitant la perte de données.

</p>

        <a 
          href="https://github.com/Valentin-D0604/Projet-Multijoueur" 
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