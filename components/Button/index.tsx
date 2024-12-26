"use client";

import React from "react";

interface ButtonProps {
  url: string;
  label: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ url, label, className }) => {
  return (
    <div className={`rounded hover:shadow ${className || ""}`}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-base p-1 dark:text-white text-white bg-[#97321D] rounded block text-center"
      >
        {label}
      </a>
    </div>
  );
};

export default Button;