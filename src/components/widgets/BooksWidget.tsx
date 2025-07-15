import { useState } from "react";

const BooksWidget = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed top-60 right-6 w-64 h-32 bg-white rounded-2xl shadow-xl backdrop-blur-sm border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src="/lovable-uploads/1fb617a1-4651-467f-a99c-2ff8150abc3b.png" 
        alt="Bookshelf" 
        className="w-full h-full object-cover"
      />
      
      {isHovered && (
        <div className="absolute inset-0 bg-orange-500/20 rounded-2xl flex items-center justify-center">
          <div className="text-orange-400 text-sm font-medium">📚 Library</div>
        </div>
      )}
    </div>
  );
};

export default BooksWidget;