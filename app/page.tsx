
import Hero from "@/components/Hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projet";
import Contact from "@/components/contact";
import Experience from "@/components/experience"
import Profesionel from "@/components/Profesionel"
import Somaire from "@/components/somaire";
import Mario from "@/components/ui/mario";
import Image from "next/image";


export default function Home() {
  return (
    <main className ="relative bg-black-100
    flex justify-center items-center flex-col overflow-hidden 
    mx-auto sm:px-10 px-5">
  <div className="max-w-7xl w-full">
        <Mario />
       <Hero />
        <Somaire />
       <About />
       <Skills />
       <Projects />
       <Experience />
       <Profesionel/>
       <Contact />
      </div>
    </main>
  );
}
