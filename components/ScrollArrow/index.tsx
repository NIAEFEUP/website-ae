"use client"

const ScrollArrow = ({ targetId, label = "Ver mais" }: { targetId: string; label?: string }) => {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="absolute bottom-8 inset-x-0 flex justify-center z-10 animate-bounce">
      <button
        onClick={handleClick}
        className="flex flex-col items-center text-white hover:text-primary transition-colors duration-300 group"
        aria-label="Scroll to content"
      >
        <span className="text-sm mb-2 opacity-80">{label}</span>
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
    </div>
  );
};

export default ScrollArrow;