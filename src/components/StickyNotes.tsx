import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react";

const StickyNotes = () => {
  const [currentNote, setCurrentNote] = useState(0);

  const notes = [
    {
      id: 1,
      title: "Current Focus 🎯",
      content: "Building amazing AI solutions with LangChain\n\n• Exploring RAG architectures\n• Learning vector databases\n• Experimenting with prompt engineering",
      color: "bg-yellow-200"
    },
    {
      id: 2, 
      title: "LinkedIn Updates 💼",
      content: "linkedin.com/in/debra-kaye-smith\n\n• Posted about Supreme Court internship\n• Shared AI project updates\n• Connected with tech professionals\n• Growing network in Jamaica tech scene",
      color: "bg-blue-200"
    },
    {
      id: 3,
      title: "Instagram Stories 📸", 
      content: "@debrakayetech\n\n• Behind-the-scenes coding sessions\n• Jamaica tech meetup photos\n• Weekend hackathon vibes\n• Coffee & code aesthetic",
      color: "bg-pink-200"
    },
    {
      id: 4,
      title: "Random Facts ✨",
      content: "• I debug better with reggae music 🎵\n• Favorite coding snack: Ting & plantain chips\n• Dream: Build AI for Caribbean tourism\n• Secret talent: Can solder while coding\n• Goal: Speak at Grace Hopper Conference",
      color: "bg-green-200"
    }
  ];

  const nextNote = () => {
    setCurrentNote((prev) => (prev + 1) % notes.length);
  };

  const prevNote = () => {
    setCurrentNote((prev) => (prev - 1 + notes.length) % notes.length);
  };

  const note = notes[currentNote];

  return (
    <div className="fixed top-6 right-6 w-72 z-30">
      <div className={`${note.color} rounded-lg shadow-lg border border-gray-300 overflow-hidden`}>
        {/* Notes App Header */}
        <div className="bg-white/90 backdrop-blur-sm px-3 py-2 border-b border-gray-200 flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-sm font-medium text-gray-700">Notes</div>
          <div className="flex space-x-1">
            <button className="p-1 hover:bg-gray-200 rounded">
              <Plus size={12} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Notes Navigation */}
        <div className="bg-white/80 px-3 py-2 border-b border-gray-200 flex items-center justify-between">
          <button 
            onClick={prevNote}
            className="p-1 hover:bg-gray-200 rounded transition-colors"
          >
            <ChevronLeft size={16} className="text-gray-600" />
          </button>
          <div className="text-xs text-gray-600 font-medium">
            {currentNote + 1} of {notes.length}
          </div>
          <button 
            onClick={nextNote}
            className="p-1 hover:bg-gray-200 rounded transition-colors"
          >
            <ChevronRight size={16} className="text-gray-600" />
          </button>
        </div>

        {/* Note Content */}
        <div className="p-4">
          <h3 className="font-bold text-gray-800 mb-3 text-sm">{note.title}</h3>
          <div className="text-xs text-gray-700 leading-relaxed whitespace-pre-line">
            {note.content}
          </div>
        </div>

        {/* Page Indicators */}
        <div className="flex justify-center space-x-1 pb-3">
          {notes.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                index === currentNote ? 'bg-gray-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentNote(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickyNotes;