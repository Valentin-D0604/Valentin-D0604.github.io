import ProjectLayout from "@/components/ProjectLayout";

export default function ShootThemUp() {
  return (
    <ProjectLayout
      title="Shoot Them Up"
      subtitle="Jeu de tir vertical avec vagues d'ennemis et power-ups"
      tags={["C++", "Gameplay", "Travail en équipe"]}
      images={["/shmup.png"]}
      links={[
        { label: "Voir sur GitHub", url: "https://github.com/Valentin-D0604/ShootThemUp"},
      ]}
      description={[
        "Ce projet est un shoot them up réalisé en C++ en groupe de deux.",
        "Dans ce shoot them up, le joueur a la capacité de tirer sur des vaisseaux ennemis et des météorites pour gagner des points et des power-ups. Ces derniers peuvent améliorer son vaisseau, le soigner, gagner une traînée de feu temporaire et même obtenir un petit coéquipier pour l'aider. Ce jeu contient également un système de mini-boss tous les 500 points. En parallèle, les ennemis deviennent plus forts avec l'augmentation des points.",
        "Dans ce projet, j'ai pu m'occuper de toute la partie gameplay avec les déplacements, les tirs du joueur, les power-ups, le fonctionnement des ennemis et des météorites. J'ai pu mettre en avant mes capacités de communication, ma curiosité pour me renseigner et m'inspirer d'autres shoot them up, ainsi que ma créativité pour créer les power-ups.",
      ]}
    />
  );
}