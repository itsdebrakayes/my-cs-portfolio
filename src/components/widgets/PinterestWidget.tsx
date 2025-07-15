import { useState } from "react";

const PinterestWidget = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed top-20 left-6 right-6 h-32 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src="/lovable-uploads/67302dab-275c-4b6a-9522-21f8125cbb1a.png" 
        alt="Pinterest Mood Board" 
        className="w-full h-full object-cover"
      />
      
      {isHovered && (
        <div className="absolute inset-0 bg-red-500/10 rounded-xl flex items-center justify-center">
          <div className="text-red-600 text-sm font-medium">Open Pinterest</div>
        </div>
      )}
    </div>
  );
};

export default PinterestWidget;