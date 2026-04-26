import ProjectLayout from "@/components/ProjectLayout";
export default function TurnBasedGame() {
  return (
    <ProjectLayout
      title="Donjon tour par tour"
      subtitle="Jeu de donjon en C++ avec combat au tour par tour"
      tags={["C++", "Tour par tour", "Autonomie"]}
      images={["/dunjon.png"]}
      links={[
        { label: "Voir sur GitHub", url: "https://github.com/Valentin-D0604/DonjonGame"},
      ]}
      description={[
        "Ce projet est un jeu en tour par tour réalisé en autonomie avec C++, utilisant les bases du C++ et étant l'un de mes premiers projets.",
        "Dans ce jeu, le joueur (M) a la capacité de se déplacer dans un donjon rempli d'ennemis, de les attaquer et de les tuer pour obtenir différentes améliorations. Par exemple améliorer son épée, son armure ou gagner des potions pouvant le soigner. Le but du jeu est de réussir à sortir du donjon quand tous les ennemis sont éliminés. Le jeu se joue en tour par tour entre le joueur et l'ennemi. Le joueur peut réaliser plusieurs actions comme attaquer ou se soigner. Chaque type d'ennemi détient ses propres capacités qu'il peut utiliser, comme le spectre qui peut s'enfuir du combat. Les ennemis peuvent également attaquer, chacun avec leurs propres statistiques de vie, d'attaque, de défense, etc.",
        "Dans ce projet, j'ai pu coder le fonctionnement de chaque ennemi ainsi que les différentes capacités du joueur.",
      ]}
    />
  );
}