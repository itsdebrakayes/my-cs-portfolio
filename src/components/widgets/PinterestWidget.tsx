import { useState } from "react";

const PinterestWidget = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentPin, setCurrentPin] = useState(0);

  const pins = [
    { title: "Tech Setup", emoji: "💻", color: "bg-blue-500" },
    { title: "Coding Aesthetic", emoji: "⌨️", color: "bg-purple-500" },
    { title: "UI/UX Inspo", emoji: "🎨", color: "bg-pink-500" },
    { title: "Workspace", emoji: "🖥️", color: "bg-green-500" },
    { title: "Jamaica Vibes", emoji: "🏝️", color: "bg-yellow-500" },
    { title: "Romance Books", emoji: "📚", color: "bg-rose-500" }
  ];

  return (
    <div 
      className="fixed top-80 left-6 w-48 h-56 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="text-white text-lg font-bold">📌 Pinterest</div>
          <div className="text-white/70 text-xs">Board</div>
        </div>
        
        {/* Pin Grid */}
        <div className="flex-1 grid grid-cols-2 gap-2">
          {pins.slice(0, 4).map((pin, index) => (
            <div
              key={index}
              className={`${pin.color} rounded-lg p-2 flex flex-col items-center justify-center text-white transition-all duration-200 hover:scale-105 cursor-pointer`}
              onClick={() => setCurrentPin(index)}
            >
              <div className="text-2xl mb-1">{pin.emoji}</div>
              <div className="text-xs text-center font-medium">{pin.title}</div>
            </div>
          ))}
        </div>
        
        {/* Current Focus */}
        <div className="mt-2 text-white/80 text-xs text-center">
          ✨ {pins[currentPin].title} Ideas
        </div>
        
        {/* Vision Board Counter */}
        <div className="mt-1 text-white/60 text-xs text-center">
          {pins.length} pins • 3 boards
        </div>
        
        {isHovered && (
          <div className="absolute inset-0 bg-red-600/20 rounded-2xl flex items-center justify-center">
            <div className="text-white text-sm font-medium">View Board</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PinterestWidget;