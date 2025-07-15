import { useState } from "react";

const JamaicaMapWidget = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed top-20 right-6 w-64 h-48 bg-gradient-to-br from-green-600 to-yellow-500 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="text-white text-lg font-bold">🇯🇲 Jamaica</div>
          <div className="text-white/70 text-xs">Maps</div>
        </div>
        
        {/* Map Area */}
        <div className="flex-1 relative bg-white/20 rounded-lg overflow-hidden">
          {/* Simplified Jamaica outline */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="200" height="80" viewBox="0 0 200 80" className="fill-white/40">
              <path d="M20 40 Q50 20 100 30 Q150 25 180 40 Q170 60 100 55 Q50 60 20 40 Z" />
            </svg>
          </div>
          
          {/* St. Catherine Highlight */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-white text-xs font-medium whitespace-nowrap">
              St. Catherine
            </div>
          </div>
          
          {/* Other parishes dots */}
          <div className="absolute top-4 left-8 w-2 h-2 bg-white/60 rounded-full"></div>
          <div className="absolute top-8 right-8 w-2 h-2 bg-white/60 rounded-full"></div>
          <div className="absolute bottom-4 left-12 w-2 h-2 bg-white/60 rounded-full"></div>
          <div className="absolute bottom-6 right-12 w-2 h-2 bg-white/60 rounded-full"></div>
        </div>
        
        {/* Footer */}
        <div className="mt-2 text-white/80 text-xs text-center">
          Home Sweet Home 🏠
        </div>
        
        {isHovered && (
          <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center">
            <div className="text-white text-sm font-medium">Explore Jamaica</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JamaicaMapWidget;
