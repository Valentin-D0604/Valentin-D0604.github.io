import ProjectLayout from "@/components/ProjectLayout";

export default function Demineur() {
  return (
    <ProjectLayout
      title="Démineur"
      subtitle="Mon premier projet — démineur classique en C++"
      tags={["C++", "Autonomie"]}
      images={["/demineur.png"]}
      links={[
        { label: "Voir sur GitHub", url: "https://github.com/Valentin-D0604/Minesweeper.git"},
      ]}
      description={[
        "Ce projet est mon premier et il s'agit d'un démineur réalisé en autonomie en C++.",
        "Dans ce démineur, le joueur a la capacité de choisir entre trois difficultés différentes gérant la taille de la grille. Une première case est dévoilée, qui ne sera jamais une mine et qui révélera des cases autour d'elle. Dans chaque case un nombre est indiqué dévoilant le nombre de bombes adjacentes. Le joueur pourra ensuite jouer au démineur classique où les mines seront générées aléatoirement. Le joueur aura la capacité de poser un drapeau, révéler une case, perdre, gagner et relancer une partie à la fin.",
      ]}
    />
  );
}