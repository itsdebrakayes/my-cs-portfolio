import { useState } from "react";

const SimsWidget = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed top-80 left-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-teal-500 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full flex items-center justify-center">
        {/* Sims Diamond Logo */}
        <div className="w-8 h-8 bg-white rotate-45 rounded-sm shadow-lg"></div>
        
        {isHovered && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            The Sims 4
          </div>
        )}
      </div>
    </div>
  );
};

export default SimsWidget;