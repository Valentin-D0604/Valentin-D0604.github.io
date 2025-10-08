import Link from "next/link";

export default function Demineur() {
    return (
        <main className ="relative bg-black-100
        flex justify-center items-center flex-col overflow-hidden 
        mx-auto sm:px-10 px-5">
      <div>
      <section className="min-h-screen bg-black text-white p-8">

        <h2 className="text-4xl font-bold mb-6">Projet : Encryptage d'image</h2>

        <img 
          src="/encryptage.png" 
          alt="Capture écran du démineur" 
          className="rounded-lg mb-6 max-w-2xl"
        />
  
        <p className="text-lg leading-relaxed mb-6">
          Ce projet est une application d'analyse d'image réalisée avec c++ seul a l'aide de l'API windows (win32).
          </p>
           <p className="text-lg leading-relaxed mb-6">
           Dans cette application l'utilisateur a la capacité d'ouvrir une image de ses fichiers,
          d'encrypter un message dedans et de la sauvegarder. Il peut également décrypter les messages présents dans une autre image 
          si ce dernier utilise la même clé pour encrypté le message. Cela fonctionne a l'aide d'un code particulier (la clé) qui va modifier le bit
          de poids faible (le bit le plus a droite) de chaque pixel de l'image. Permettant de modifier l'image pour cacher des choses dedans sans pour autant modifier l'image</p>
          <p className="text-lg leading-relaxed mb-6">
            Pour réaliser cela j'ai due comprendre le fonctionnement des bit de poids faible, de window API ainsi que de l'encryptage de message dans une image et j'ai surtout
            due mettre ma curiosité et ma capacité d'adaptation en avant pour faire un maximum de recherche et apprendre le fonctionnement de chaque point cité précédement
        </p>
  
        <a 
          href="https://github.com/Valentin-D0604/-image-encryption.git" 
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