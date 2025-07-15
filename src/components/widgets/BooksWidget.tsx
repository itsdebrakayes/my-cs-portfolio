import { useState } from "react";

const BooksWidget = () => {
  const [isHovered, setIsHovered] = useState(false);

  const books = [
    { title: "JavaScript: The Good Parts", shortTitle: "JS", color: "bg-yellow-600", spine: "h-20" },
    { title: "The Duke and I", shortTitle: "Duke", color: "bg-purple-600", spine: "h-24" },
    { title: "Clean Code", shortTitle: "Clean", color: "bg-blue-600", spine: "h-22" },
    { title: "Romancing Mr. Bridgerton", shortTitle: "Romance", color: "bg-pink-600", spine: "h-20" },
    { title: "React in Action", shortTitle: "React", color: "bg-cyan-600", spine: "h-24" },
    { title: "An Offer From a Gentleman", shortTitle: "Offer", color: "bg-rose-600", spine: "h-22" }
  ];

  return (
    <div 
      className="fixed top-60 right-6 w-64 h-32 bg-gray-900 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4 h-full flex items-end justify-center">
        {/* Bookshelf */}
        <div className="flex items-end space-x-1 w-full">
          {/* Left bookend */}
          <div className="w-3 h-20 bg-amber-800 rounded-t-sm"></div>
          
          {/* Books */}
          {books.map((book, index) => (
            <div
              key={index}
              className={`${book.color} ${book.spine} w-4 rounded-t-sm shadow-sm border-r border-black/20 flex items-center justify-center relative`}
            >
              <span className="text-white text-xs font-bold transform -rotate-90 whitespace-nowrap absolute">
                {book.shortTitle}
              </span>
            </div>
          ))}
          
          {/* Right bookend */}
          <div className="w-3 h-20 bg-amber-800 rounded-t-sm"></div>
        </div>
        
        {/* Shelf */}
        <div className="absolute bottom-4 left-4 right-4 h-1 bg-amber-900 rounded"></div>
        
        {isHovered && (
          <div className="absolute inset-0 bg-orange-500/20 rounded-2xl flex items-center justify-center">
            <div className="text-orange-400 text-sm font-medium">📚 Library</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BooksWidget;