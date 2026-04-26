import ProjectLayout from "@/components/ProjectLayout";
export default function Moteur() {
  return (
    <ProjectLayout
      title="Moteur de jeu"
      subtitle="Moteur ECS complet avec rendu DirectX 12"
      tags={["C++", "DirectX 12", "ECS", "Travail en équipe"]}
      links={[
        { label: "Voir sur GitHub", url: "https://github.com/Valentin-D0604/EntreCote-Sytem.git"},
      ]}
      description={[
        "Ce projet est un moteur de jeu réalisé par moi-même avec des amis dans le but de créer un moteur composé de 3 librairies statiques en utilisant DX12 pour le rendu. Il s'agit d'un moteur avec un fonctionnement d'ECS.",
        "Core : une librairie statique remplie de données et d'outils utilisables dans plusieurs projets (chrono, fonctions maths, stateMachine, parseur obj...).",
        "Render : une librairie statique servant à afficher différentes choses dans le projet en utilisant DX12 après l'avoir encapsulée. Avec également une gestion des caméras, etc.",
        "Engine : la partie ECS du projet, il s'agit d'une librairie dépendante d'un render et d'un core, même s'ils sont différents de ceux actuels. L'engine permet de gérer tout ce qui est de l'ECS (entity, component, system) du projet ainsi que la majorité du code, comme les scripts par exemple.",
        "Un jeu de rail shooter est également fourni dans le projet, montrant certaines des capacités du projet.",
      ]}
    />
  );
}