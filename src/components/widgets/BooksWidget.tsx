import { useState } from "react";

const BooksWidget = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentBook, setCurrentBook] = useState(0);

  const books = [
    { title: "JavaScript: The Good Parts", author: "Douglas Crockford", color: "bg-yellow-500" },
    { title: "The Duke and I", author: "Julia Quinn", color: "bg-pink-500" },
    { title: "React Documentation", author: "React Team", color: "bg-blue-500" },
    { title: "The Viscount Who Loved Me", author: "Julia Quinn", color: "bg-purple-500" },
    { title: "Clean Code", author: "Robert Martin", color: "bg-green-500" },
    { title: "An Offer From a Gentleman", author: "Julia Quinn", color: "bg-rose-500" }
  ];

  return (
    <div 
      className="fixed bottom-32 left-6 w-56 h-64 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="text-white text-lg font-bold">📚 Books</div>
          <div className="text-white/70 text-xs">Library</div>
        </div>
        
        {/* Book Display */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className={`w-24 h-32 ${books[currentBook].color} rounded-lg shadow-lg mb-2 flex items-center justify-center transform rotate-3`}>
              <div className="text-white text-xs font-bold p-2 text-center leading-tight">
                {books[currentBook].title}
              </div>
            </div>
            <div className="text-white text-sm font-medium truncate">
              {books[currentBook].title}
            </div>
            <div className="text-white/70 text-xs">
              by {books[currentBook].author}
            </div>
          </div>
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center space-x-2 mt-2">
          {books.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBook(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentBook ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
        
        {/* Collections */}
        <div className="mt-2 text-white/80 text-xs text-center">
          📖 Coding & Romance
        </div>
        
        {isHovered && (
          <div className="absolute inset-0 bg-orange-600/20 rounded-2xl flex items-center justify-center">
            <div className="text-white text-sm font-medium">Open Library</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BooksWidget;