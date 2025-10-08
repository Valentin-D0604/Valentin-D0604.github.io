import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { cn } from "@/lib/utils";

const Skills = () => {
  return (
    <section id="Skills"  className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center space-y-6">
      <div className="flex items-center gap-4 transition-colors">
      <span className="flex items-center justify-center w-12 h-12 text-2xl font-bold bg-teal-500 text-black rounded-lg shadow-lg">2</span>
      <h2 className="text-4xl font-bold">mes Skills</h2>
      </div>
             <TextGenerateEffect
                            className="text-base sm:text-lg md:text-xl text-zinc-200 max-w-3xl leading-relaxed"
                            words="hardskills : Je maîtrise le C++ le C et j'ai des notions du Java. softskills : Sérieux et curieux je met tout en oeuvre pour atteindre ses objectifs et apprendre. Je peux travailler en équipe ou en autonomie et m'adapter à toutes situations."
                          />
    </section>

  );
};

export default Skills;