"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface FullScreenImageProps {
  src: string;
  alt: string;
  logoSrc?: string;
  logoAlt?: string;
}

const FullScreenImage: React.FC<FullScreenImageProps> = ({ src, alt, logoSrc, logoAlt }) => {
  const [blurAmount, setBlurAmount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const blurValue = scrollY > 0 ? Math.min(scrollY / 100 + 2, 8) : 0;
      setBlurAmount(blurValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          filter: `blur(${blurAmount}px)`,
          transition: 'filter 0.2s ease-in',
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maskImage: 'linear-gradient(to bottom, black 50%, transparent %)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
        }}
      />

      {logoSrc && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <img
            src={logoSrc}
            alt={logoAlt || "Logo"}
            className="w-2/3 h-auto max-w-2xl md:w-1/2 lg:w-1/3"
            style={{
              filter: `blur(${blurAmount}px)`,
              transition: 'filter 0.2s ease-in',
            }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default FullScreenImage;
