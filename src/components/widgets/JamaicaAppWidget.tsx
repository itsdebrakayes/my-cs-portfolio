import { useState } from "react";

const JamaicaAppWidget = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed top-60 left-6 w-64 h-32 bg-black rounded-2xl shadow-xl border border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4 h-full flex items-center justify-center">
        <img 
          src="/lovable-uploads/5b05c2ad-d2c0-46f7-9b7c-0297ccd07d9c.png" 
          alt="Jamaica Flag Shape"
          className="w-full h-full object-contain"
        />
        
        {isHovered && (
          <div className="absolute inset-0 bg-yellow-500/20 rounded-2xl flex items-center justify-center">
            <div className="text-yellow-500 text-sm font-medium">🇯🇲 Jamaica</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JamaicaAppWidget;