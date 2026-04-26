import ProjectLayout from "@/components/ProjectLayout";

export default function TataMiam() {
  return (
    <ProjectLayout
      title="Tata Miam"
      subtitle="Jeu de cuisine co-op en C++ avec un moteur custom"
      tags={["C++", "Co-op multijoueur", "moteur custom"]}
      images={["/TataMiam.png"]}
      links={[
        { label: "Voir sur GitHub", url: "https://github.com/Valentin-D0604/Tata-Miam"},
        { label: "Voir sur Itch", url: "https://thib387.itch.io/tata-miam"},
      ]}
      description={[
        {
          text: "Tata Miam est un projet fait sur un {Moteur custom} en C++ en groupe de quatre sur une durée d'un mois. Il s'agit d'un jeu de cuisine en co-op où les joueurs doivent s'organiser pour diriger une cuisine",
          links: [
            { label: "Moteur custom", href: "./Moteur" },
          ],
        },
        "En effet, les objectifs principaux de ce projet étaient deux axes : des mécaniques multijoueur et un gameplay fun",
        "1: le jeu détient actuellement la capacité de faire du co-op entre un joueur qui hébergera la partie et qui pourra, à partir d'un code permettre à d'autres joueurs de le rejoindre avec l'ensemble du jeu complètement synchronisé entre les joueurs",
        {
          text: "2: ce jeu se base sur des mécaniques simples mais fun avec la volonté de pousser le game design et le gamefeel au maximum. Les mécaniques principales sont :\n⸱ la découpe d'aliments\n⸱ la cuisson des aliments\n⸱ l'assemblage\n⸱ du gamefeel lors des actions",
          links: [],
        },
        "le jeu détient également des clients, qui auront chacun leur nom, prénom, description et traits de caractère (comme l'impatience ou la curiosité) qui devront être servis dans un temps précis en fonction de la commande qu'ils font"
      ]}
    />
  );
}