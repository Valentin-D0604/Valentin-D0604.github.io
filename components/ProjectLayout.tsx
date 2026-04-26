"use client";
import Link from "next/link";
import { BackgroundBeams } from "./ui/background-beams";

interface CustomLink {
  label: string;
  url: string;
}

type DescriptionBlock =
  | string
  | { text: string; links: { label: string; href: string }[] };

interface ProjectLayoutProps {
  title: string;
  subtitle?: string;
  tags?: string[];
  images?: string[];
  videos?: string[];
  links?: CustomLink[];
  githubUrl?: string;
  description: DescriptionBlock[];
}

export default function ProjectLayout({
  title,
  subtitle,
  tags = [],
  images = [],
  videos = [],
  links = [],
  githubUrl,
  description,
}: ProjectLayoutProps) {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto min-h-screen text-white">
      <BackgroundBeams className="fixed -top-96 -left-10 md:-left-32 md:-top-20 h-screen opacity-70 blur-sm z-0" />
      <div className="pointer-events-none fixed -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-teal-500/10 blur-3xl z-0" />
      <div className="pointer-events-none fixed bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-teal-600/5 blur-3xl z-0" />

      <div className="fixed top-0 left-0 w-full px-8 py-4 flex justify-between items-center z-30 bg-black/70 backdrop-blur-md border-b border-white/5">
        <span className="text-teal-400 font-bold tracking-widest text-sm uppercase">VD</span>
        <Link
          href="/#Projets"
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 px-3 py-1.5 rounded-md transition-all duration-200"
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
            <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Retour aux projets
        </Link>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-8 pt-28 pb-20">

        <span className="text-xs tracking-[0.25em] uppercase text-teal-400/80 font-medium">
          Projet · C++
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mt-3 mb-4">
          {title}
        </h1>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span key={tag} className="text-xs bg-teal-500/10 text-teal-400 border border-teal-500/20 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        {subtitle && (
          <p className="text-zinc-400 text-base mb-4">{subtitle}</p>
        )}

        <div className="w-16 h-px bg-teal-500/50 mb-10" />

        {/* Images */}
        {images.length > 0 && (
          <div className="flex flex-col gap-4 mb-6">
            {images.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-white/5">
                <img src={src} alt={`${title} — capture ${i + 1}`} className="w-full object-cover max-h-96" />
              </div>
            ))}
          </div>
        )}

        {/* Vidéos */}
        {videos.length > 0 && (
          <div className="flex flex-col gap-4 mb-10">
            {videos.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-white/5 bg-black/40">
                <video src={src} controls className="w-full max-h-96" preload="metadata" />
              </div>
            ))}
          </div>
        )}

        {/* Description */}
        <div className="space-y-5">
          {description.map((block, i) => {
            if (typeof block === "string") {
              return (
                <p key={i} className="text-zinc-400 text-base leading-relaxed">
                  {block}
                </p>
              );
            }

            const parts = block.text.split(/(\{[^}]+\})/g);
            return (
              <p key={i} className="text-zinc-400 text-base leading-relaxed whitespace-pre-line">
                {parts.map((part, j) => {
                  const match = part.match(/^\{(.+)\}$/);
                  if (match) {
                    const link = block.links.find((l) => l.label === match[1]);
                    if (link) {
                      const isExternal = link.href.startsWith("http");
                      return (
                        <a
                          key={j}
                          href={link.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          className="text-teal-400 underline underline-offset-2 hover:text-teal-300 transition-colors"
                        >
                          {link.label}
                        </a>
                      );
                    }
                  }
                  return <span key={j}>{part}</span>;
                })}
              </p>
            );
          })}
        </div>

        {/* Boutons */}
        <div className="flex flex-wrap items-center gap-3 mt-12 pt-8 border-t border-white/5">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-black font-semibold px-6 py-2.5 rounded-lg shadow-lg shadow-teal-500/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              Voir sur GitHub
            </a>
          )}

          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-black font-semibold px-6 py-2.5 rounded-lg shadow-lg shadow-teal-500/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path d="M7 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V9M9 1h6m0 0v6m0-6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {link.label}
            </a>
          ))}

          {/* Retour — dans le même div, poussé à droite */}
          <Link
            href="/#Projets"
            className="ml-auto flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-5 py-2.5 rounded-lg shadow-md transition-all duration-200 hover:-translate-y-0.5 font-medium text-sm"
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Retour aux projets
          </Link>
        </div>

      </div>
    </main>
  );
}