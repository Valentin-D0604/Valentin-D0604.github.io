import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center space-y-6">
      <div className="flex items-center gap-4 transition-colors">
      <span className="flex items-center justify-center w-12 h-12 text-2xl font-bold bg-teal-500 text-black rounded-lg shadow-lg">6</span>
      <h2 className="text-4xl font-bold">Me contacter</h2>
      </div>
       <TextGenerateEffect
                      className="text-base sm:text-lg md:text-xl text-zinc-200 max-w-3xl leading-relaxed"
                      words="vous pouvez me contacter au :
                      téléphone :+336 46 40 80 56
                      l'email : Valentin0604.david@gmail.com"
                    />
    </section>
  );
};

export default Contact;