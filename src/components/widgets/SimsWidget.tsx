import { useState } from "react";

const SimsWidget = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed bottom-40 left-6 w-64 h-32 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full flex items-center justify-center p-4">
        {/* IMAGE ADDED: The Sims 4 logo */}
        <img 
          src="public/images/sims_logo.png" 
          alt="The Sims 4" 
          className="w-full h-full object-contain"
        />
        
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