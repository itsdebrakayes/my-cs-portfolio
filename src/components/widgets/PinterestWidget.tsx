import { useState } from "react";

const PinterestWidget = () => {
  const [isHovered, setIsHovered] = useState(false);

  const boards = [
    { title: "Cute Stuff", pins: "315 Pins", color: "bg-pink-500" },
    { title: "Gym Stuff", pins: "57 Pins", color: "bg-green-500" },
    { title: "Nails", pins: "345 Pins", color: "bg-purple-500" },
    { title: "Sims CC", pins: "473 Pins", color: "bg-blue-500" }
  ];

  return (
    <div 
      className="fixed top-20 left-6 right-6 h-24 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-3 h-full flex items-center">
        {/* Pinterest Icon */}
        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
          <span className="text-white text-sm font-bold">P</span>
        </div>
        
        {/* Boards Grid */}
        <div className="flex-1 grid grid-cols-4 gap-2">
          {boards.map((board, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-2 text-center hover:bg-gray-200 transition-colors"
            >
              <div className="text-xs font-medium text-gray-800 truncate">{board.title}</div>
              <div className="text-xs text-gray-500">{board.pins}</div>
            </div>
          ))}
        </div>
        
        {isHovered && (
          <div className="absolute inset-0 bg-red-500/10 rounded-xl flex items-center justify-center">
            <div className="text-red-600 text-sm font-medium">Open Pinterest</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PinterestWidget;