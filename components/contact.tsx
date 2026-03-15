import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-20"
    >
      <div className="w-full max-w-xl flex flex-col items-center gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-3">

          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-12 h-12 text-2xl font-bold bg-teal-500 text-black rounded-lg shadow-lg shadow-teal-500/20">
              6
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight">Me contacter</h2>
          </div>
          <div className="w-12 h-px bg-teal-500/50" />
          <p className="text-zinc-400 text-sm mt-1 text-center max-w-sm">
            N'hésitez pas à me contacter pour toute opportunité ou question.
          </p>
        </div>

        {/* Contact cards */}
        <div className="w-full flex flex-col gap-4">
          {/* Email */}
          <a
            href="mailto:valentin0604.david@gmail.com"
            className="group flex items-center gap-5 bg-zinc-900/60 hover:bg-zinc-800/80 border border-white/5 hover:border-teal-500/40 rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5 text-teal-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-0.5">Email</p>
              <p className="text-teal-400 font-medium group-hover:text-teal-300 transition-colors truncate">
                Valentin0604.david@gmail.com
              </p>
            </div>
            <svg
              className="w-4 h-4 text-zinc-600 group-hover:text-teal-400 transition-colors shrink-0"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Phone */}
          <a
            href="tel:+33646408056"
            className="group flex items-center gap-5 bg-zinc-900/60 hover:bg-zinc-800/80 border border-white/5 hover:border-teal-500/40 rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5 text-teal-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-0.5">Téléphone</p>
              <p className="text-white font-medium group-hover:text-teal-300 transition-colors">
                +33 6 46 40 80 56
              </p>
            </div>
            <svg
              className="w-4 h-4 text-zinc-600 group-hover:text-teal-400 transition-colors shrink-0"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Footer note */}
        <p className="text-zinc-600 text-xs text-center">
          Disponible pour des stages, alternances.
        </p>
      </div>
    </section>
  );
};

export default Contact;