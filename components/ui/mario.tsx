"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ScrollProgressMario() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent = scrollTop / docHeight;
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-screen h-16 bg-transparent border-0 z-50">

      <motion.div
        className="absolute top-2"
        animate={{ x: `${scrollPercent * 97}vw` }}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
      >
        <div className="relative bottom-[18px]">
        <Image
          src="/mariorun.gif"
          alt="Mario"
          width={40}
          height={40}
        />
        </div>
      </motion.div>
    </div>
  );
}