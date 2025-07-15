import { useState } from "react";

const SimsWidget = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed top-20 left-6 w-52 h-52 bg-gradient-to-br from-blue-400 to-teal-500 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rotate-45 rounded-sm"></div>
          </div>
          <span className="text-white text-xs font-medium">The Sims 4</span>
        </div>
        
        {/* Sim Character */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/30 rounded-full mb-2 flex items-center justify-center text-2xl">
              👩🏽‍💻
            </div>
            <div className="text-white text-sm font-medium">Debra-Kaye</div>
            <div className="text-white/70 text-xs mt-1">Tech Enthusiast</div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 text-white/80 text-xs">
          <div className="bg-white/20 rounded-lg p-2 text-center">
            <div className="font-medium">Programming</div>
            <div className="text-green-300">⭐⭐⭐⭐</div>
          </div>
          <div className="bg-white/20 rounded-lg p-2 text-center">
            <div className="font-medium">Creativity</div>
            <div className="text-yellow-300">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
        
        {isHovered && (
          <div className="absolute inset-0 bg-blue-500/20 rounded-2xl flex items-center justify-center">
            <div className="text-white text-sm font-medium">Enter Build Mode</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimsWidget;