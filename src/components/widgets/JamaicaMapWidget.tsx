import { useState } from "react";

const JamaicaMapWidget = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed top-32 left-6 w-48 h-32 bg-black rounded-2xl shadow-xl border-2 border-yellow-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-3 h-full flex items-center justify-center">
        {/* Jamaica Map Outline */}
        <svg width="160" height="80" viewBox="0 0 160 80" className="stroke-yellow-500 fill-transparent">
          {/* Main Jamaica outline */}
          <path 
            d="M20 45 Q30 25 50 28 Q70 30 90 32 Q110 30 130 35 Q140 40 135 50 Q130 60 110 58 Q90 56 70 54 Q50 56 30 52 Q20 50 20 45 Z" 
            strokeWidth="2"
          />
          
          {/* Parish lines */}
          <g className="stroke-green-500" strokeWidth="1">
            {/* Vertical parish divisions */}
            <line x1="45" y1="30" x2="50" y2="54" />
            <line x1="65" y1="32" x2="70" y2="54" />
            <line x1="85" y1="33" x2="90" y2="56" />
            <line x1="105" y1="32" x2="110" y2="58" />
            <line x1="125" y1="35" x2="130" y2="60" />
            
            {/* Horizontal parish divisions */}
            <line x1="30" y1="40" x2="130" y2="45" />
          </g>
          
          {/* St. Catherine red dot */}
          <circle cx="80" cy="42" r="3" fill="red" className="animate-pulse" />
        </svg>
        
        {/* St. Catherine Label */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-yellow-500 text-xs font-medium">
          St. Catherine
        </div>
        
        {isHovered && (
          <div className="absolute inset-0 bg-yellow-500/20 rounded-2xl flex items-center justify-center">
            <div className="text-yellow-500 text-sm font-medium">Jamaica</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JamaicaMapWidget;
