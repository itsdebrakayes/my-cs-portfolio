import { useState } from "react";

const MusicWidget = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div 
      className="fixed bottom-40 right-6 w-64 h-48 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="text-white text-lg font-bold">🎵 Music</div>
          <div className="text-white/70 text-xs">Apple Music</div>
        </div>
        
        {/* Now Playing */}
        <div className="flex-1 flex items-center">
          {/* IMAGE TO ADD: Album cover or artist photo will go here */}
          <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg mr-3 flex items-center justify-center text-2xl overflow-hidden">
            {/* PLACEHOLDER: Replace this div with <img src="/path-to-image.jpg" alt="Album Cover" className="w-full h-full object-cover" /> */}
            <div className="w-full h-full bg-gray-400 flex items-center justify-center text-gray-600 text-xs">
              <img src="/images/emotional_cover.png" 
              alt="Album Cover" 
              className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex-1">
            <div className="text-white text-sm font-medium">Emotional</div>
            <div className="text-white/70 text-xs">Debrakaye</div>
            <div className="text-white/50 text-xs mt-1">Recently Played</div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex items-center justify-center space-x-4 mt-3">
          <button className="text-white/70 hover:text-white transition-colors">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
            </svg>
          </button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-white hover:text-white/80 transition-colors"
          >
            {isPlaying ? (
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            ) : (
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
          <button className="text-white/70 hover:text-white transition-colors">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
            </svg>
          </button>
        </div>
        
        {/* Top Artist */}
        <div className="mt-2 text-white/80 text-xs text-center">
          🎨 Top Artist: Debrakaye
        </div>
        
        {isHovered && (
          <div className="absolute inset-0 bg-gray-800/20 rounded-2xl flex items-center justify-center">
            <div className="text-white text-sm font-medium">Open Music</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicWidget;