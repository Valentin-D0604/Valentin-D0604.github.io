import ProjectLayout from "@/components/ProjectLayout";

export default function GODS() {
  return (
    <ProjectLayout
      title="Gods over drinks"
      subtitle="Jeu de stratégie multijoueur sur unity"
      tags={["Unity", "multijoueur", "Stratégie"]}
      images={["/GODS.png"]}
      links={[
        { label: "Voir sur GitHub", url: "https://github.com/Valentin-D0604/Gods-Over-Drinks.git"},
        //{ label: "Voir sur Itch", url: "https://thib387.itch.io/gods-over-drinks"},
      ]}
      description={[
        
      "Gods over drinks est un projet fait sur Unity en groupe de six développeurs pendant quatre mois. Il s'agit d'un jeu de stratégie en multijoueur où les joueurs doivent créer des stratégies et utiliser leurs ressources à bon escient pour battre leurs adversaires",
      "L'objectif principal de ce projet était de retravailler mes connaissances tout en découvrant Unity sur un projet multijoueur de longue durée",
      "Durant le projet, j'ai pu travailler sur un mélange de gameplay et de réseau tout en travaillant un maximum le gamefeel du jeu",
      "Certaines mécaniques que j'ai pu réaliser, par exemple, sont :\n",
      "⸱ la création d'un système de state machine qui servira à gérer les différents états du jeu",
      "⸱ la création d'un système de défausse de cartes",
      "⸱ la création d'un système de tour par tour",
      "⸱ la création d'un système d'échange de cartes",
      "et tout cela en multijoueur et en travaillant le gamefeel",
      ]}
    />
  );
}