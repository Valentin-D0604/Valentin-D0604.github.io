import ProjectLayout from "@/components/ProjectLayout";

export default function AIProject() {
  return (
    <ProjectLayout
      title="State Machine"
      subtitle="Simulation de rugby avec des IA pilotées par des machines à états"
      tags={["C++", "Intelligence Artificielle", "State Machine"]}
      images={["/Rugby.png"]}
      githubUrl="https://github.com/Valentin-D0604/StateMachine-rugby"
      description={[
        "Ce projet est fait en C++ par groupe de deux dans le but de comprendre le fonctionnement des state machines des IA, souvent utilisées dans les jeux vidéo pour les ennemis par exemple.",
        "Il s'agit d'un jeu de rugby utilisant des intelligences artificielles basées sur des state machines, ayant la capacité d'aller marquer, de récupérer la balle et même de faire des passes aux joueurs arrières. Ce jeu détient uniquement des joueurs en IA avec des state machines. Comme vous pouvez le voir sur l'image, au-dessus de chaque cercle (qui représente les joueurs) est écrit leur état. Le joueur ayant la balle peut faire des passes aux joueurs derrière lui (mis en évidence par les lignes violettes).",
        "Pour ce projet, j'ai dû travailler sur les state machines pour créer des états et des phases de transition permettant de passer d'un état à un autre. Chaque état fonctionne différemment, avec par exemple : si la balle est au sol, j'essaye de l'obtenir. Ce projet m'a permis de mettre en avant mes capacités de réflexion pour optimiser au maximum chaque état, en faire le plus possible et permettre le plus de possibilités pour chaque joueur.",
      ]}
    />
  );
}