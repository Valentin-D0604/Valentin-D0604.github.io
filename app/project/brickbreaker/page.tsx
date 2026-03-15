import ProjectLayout from "@/components/ProjectLayout";

export default function BrickBreaker() {
  return (
    <ProjectLayout
      title="Brick Breaker"
      subtitle="Casse-briques en C++ avec architecture ECS"
      tags={["C++", "ECS", "Gameplay"]}
      images={["/brique.png"]}
      githubUrl="https://github.com/Valentin-D0604/BrickBreaker.git"
      description={[
        "Ce projet est un casse-brique fait avec C++ en groupe de deux en créant et utilisant un ECS (Entity Component System). Cela avait pour objectif d'apprendre l'utilisation d'un ECS (communément utilisé dans les moteurs de jeux) ainsi que le fonctionnement de ce dernier.",
        "Dans ce jeu, le joueur a un pad qu'il peut déplacer de gauche à droite et une balle qui rebondit sur le pad pour aller casser des briques. Certaines briques peuvent donner des balles supplémentaires une fois cassées, et différentes briques pouvant se casser en un différent nombre de coups.",
        "J'ai pu travailler sur la partie gameplay de ce code avec le fonctionnement des power-ups ainsi que de la balle et de l'ECS. J'ai pu mettre en avant mes compétences de communication et surtout d'apprentissage pour apprendre et comprendre le fonctionnement d'un ECS.",
      ]}
    />
  );
}