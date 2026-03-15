import ProjectLayout from "@/components/ProjectLayout";

export default function ImageProject() {
  return (
    <ProjectLayout
      title="Chiffrement d'image"
      subtitle="Application d'encryptage de messages dans des images via l'API Win32"
      tags={["C++", "Win32", "Algorithme", "Autonomie"]}
      images={["/encryptage.png"]}
      githubUrl="https://github.com/Valentin-D0604/-image-encryption.git"
      description={[
        "Ce projet est une application d'analyse d'image réalisée avec C++ en autonomie à l'aide de l'API Windows (Win32).",
        "Dans cette application, l'utilisateur a la capacité d'ouvrir une image de ses fichiers, d'encrypter un message dedans et de la sauvegarder. Il peut également décrypter les messages présents dans une autre image si cette dernière utilise la même clé pour encrypter le message. L'encryptage fonctionne à l'aide d'un code particulier (la clé) qui va modifier le bit de poids faible (le bit le plus à droite) de chaque pixel de l'image. Cela permet de modifier l'image pour cacher des messages dedans sans la dénaturer.",
        "Pour le réaliser, j'ai dû comprendre le fonctionnement des bits de poids faible, de l'API Windows ainsi que de l'encryptage de messages dans une image. J'ai pu mettre en avant ma curiosité et ma capacité d'adaptation en faisant un maximum de recherches pour apprendre le fonctionnement de chaque point cité précédemment.",
      ]}
    />
  );
}