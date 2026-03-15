import ProjectLayout from "@/components/ProjectLayout";

export default function ProjetStudio() {
  return (
    <ProjectLayout
      title="Platformer 2D — Solarpunk"
      subtitle="Projet studio réalisé en équipe de 10 sur 2 semaines"
      tags={["C++", "2D", "Travail en équipe", "Projet studio"]}
      images={["/platform.png"]}
      githubUrl="https://github.com/Valentin-D0604/platformer-2d-solarpunk"
      description={[
        "Ce projet est un projet important car il fut réalisé en groupe de 10 personnes, composé de développeurs, d'artistes et de commerciaux, sur une durée de deux semaines. L'objectif visé était de simuler au maximum le monde du travail lors de la réalisation du projet en C++.",
        "Durant les deux semaines que nous avions à disposition, nous avons pu réaliser un platformer 2D basé sur le style Solarpunk. Le personnage principal peut utiliser le vent pour faire des doubles sauts, des dashs, attaquer avec des boules d'air et également parer les attaques ennemies pour renvoyer les projectiles. Le jeu détient quatre ennemis entièrement différents, dont un pouvant se transformer en plusieurs formes et un boss final ayant plusieurs attaques. Nous pouvons créer nous-mêmes nos propres cartes sur un bloc-notes et les utiliser dans le jeu.",
        "Durant ce projet, j'ai travaillé sur la partie gameplay du jeu, avec les ennemis, les mécaniques du personnage et la création de cartes principalement. J'ai pu, lors de ce projet, mettre en avant mes capacités de travail en équipe et de communication avec les autres personnes de mon groupe, ainsi que consolider toutes mes connaissances.",
      ]}
    />
  );
}