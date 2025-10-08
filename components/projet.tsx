import React from "react";
import Link from "next/link";
import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { cn } from "@/lib/utils";

const Projets = () => {
  return (
    <section id="Projets"  className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center space-y-6">
      <div className="flex items-center gap-4 transition-colors">
      <span className="flex items-center justify-center w-12 h-12 text-2xl font-bold bg-teal-500 text-black rounded-lg shadow-lg">3</span>
      <h2 className="text-4xl font-bold">mes Projets</h2>
      </div>
             <TextGenerateEffect
                            className="text-base sm:text-lg md:text-xl text-zinc-200 max-w-3xl leading-relaxed"
                            words="voici mes differents projets :"
                          />
   <Link href="/project/Projetstudio" className="text-blue-500 hover:underline text-lg z-50">
  mon projet de platformer 2d
</Link>
 <Link href="/project/shootthemup" className="text-blue-500 hover:underline text-lg z-50">
  mon projet de Shoot Them Up
</Link>
 <Link href="/project/brickbreaker" className="text-blue-500 hover:underline text-lg z-50">
  mon projet de brick breaker
</Link>
 <Link href="/project/imageproject" className="text-blue-500 hover:underline text-lg z-50">
  mon projet d'encryptage d'image
</Link>
 <Link href="/project/AIproject" className="text-blue-500 hover:underline text-lg z-50">
  mon projet de StateMachine
</Link>
 <Link href="/project/turnbasedgame" className="text-blue-500 hover:underline text-lg z-50">
  mon projet de donjour en tour par tour
</Link>
   <Link href="/project/demineur" className="text-blue-500 hover:underline text-lg z-50">
  mon projet de démineur
</Link>
    </section>
      );
};

export default Projets; 