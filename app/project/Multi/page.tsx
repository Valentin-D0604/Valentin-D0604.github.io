import ProjectLayout from "@/components/ProjectLayout";

export default function Multi() {
  return (
    <ProjectLayout
      title="Jeu multijoueur"
      subtitle="Arène multijoueur en réseau via UDP"
      tags={["C++", "Réseau", "UDP", "Travail en équipe"]}
      images={["/Valentin.png", "/multi.png"]}
      githubUrl="https://github.com/Valentin-D0604/Projet-Multijoueur"
      description={[
        "Ce projet est un jeu multijoueur réalisé avec un serveur et des clients permettant à plusieurs personnes de jouer ensemble dans une arène.",
        "Ce projet fonctionne à l'aide d'un système de paquets partagés en UDP (User Datagram Protocol) entre un serveur et des clients, leur permettant de jouer ensemble dans une arène générée aléatoirement au début de chaque partie, dans le but de se tirer dessus pour gagner un maximum de points et remporter la partie.",
        "Le multijoueur fonctionne de manière simple avec des paquets ayant chacun leur format, permettant d'assurer le bon passage de tous les paquets et évitant la perte de données.",
      ]}
    />
  );
}