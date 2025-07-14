import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Search, Share, Trash2 } from "lucide-react";

const StickyNotes = () => {
  const [currentNote, setCurrentNote] = useState(0);
  const [isListView, setIsListView] = useState(false);

  const notes = [
    {
      id: 1,
      title: "Current Focus 🎯",
      content: "Building amazing AI solutions with LangChain\n\n• Exploring RAG architectures\n• Learning vector databases\n• Experimenting with prompt engineering\n• Building Yaad Explorer tourism platform\n• Working on JamAI Assistant",
      color: "bg-yellow-50",
      date: "Today"
    },
    {
      id: 2, 
      title: "LinkedIn Updates 💼",
      content: "linkedin.com/in/debra-kaye-smith\n\n• Posted about Supreme Court internship\n• Shared AI project updates\n• Connected with tech professionals\n• Growing network in Jamaica tech scene\n• Featured Yaad Explorer project",
      color: "bg-blue-50",
      date: "Yesterday"
    },
    {
      id: 3,
      title: "Instagram Stories 📸", 
      content: "@debrakayetech\n\n• Behind-the-scenes coding sessions\n• Jamaica tech meetup photos\n• Weekend hackathon vibes\n• Coffee & code aesthetic\n• Caribbean developer life",
      color: "bg-pink-50",
      date: "2 days ago"
    },
    {
      id: 4,
      title: "Random Facts ✨",
      content: "• I debug better with reggae music 🎵\n• Favorite coding snack: Ting & plantain chips\n• Dream: Build AI for Caribbean tourism\n• Secret talent: Can solder while coding\n• Goal: Speak at Grace Hopper Conference\n• Love building hardware & software",
      color: "bg-green-50",
      date: "3 days ago"
    }
  ];

  const nextNote = () => {
    setCurrentNote((prev) => (prev + 1) % notes.length);
  };

  const prevNote = () => {
    setCurrentNote((prev) => (prev - 1 + notes.length) % notes.length);
  };

  const note = notes[currentNote];

  if (isListView) {
    return (
      <div className="h-full bg-gray-50 text-gray-800">
        {/* Notes Header */}
        <div className="border-b border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-xl font-semibold">Notes</h1>
            <div className="flex space-x-2">
              <button className="p-2 hover:bg-gray-200 rounded-lg">
                <Search size={16} />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded-lg">
                <Plus size={16} />
              </button>
            </div>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => setIsListView(false)}
              className="px-3 py-1 bg-yellow-400 text-black rounded-md text-sm font-medium"
            >
              All Notes
            </button>
          </div>
        </div>

        {/* Notes List */}
        <div className="p-4 space-y-3">
          {notes.map((n, index) => (
            <div 
              key={n.id}
              onClick={() => {
                setCurrentNote(index);
                setIsListView(false);
              }}
              className="p-3 bg-white rounded-lg border border-gray-200 hover:shadow-sm cursor-pointer"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-gray-900">{n.title}</h3>
                <span className="text-xs text-gray-500">{n.date}</span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">
                {n.content.split('\n')[0]}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-white text-gray-800 flex">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-200 bg-gray-50">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-gray-900">Notes</h2>
            <button className="p-1 hover:bg-gray-200 rounded">
              <Plus size={16} />
            </button>
          </div>
          <div className="relative">
            <Search size={14} className="absolute left-3 top-2.5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full pl-8 pr-3 py-2 bg-white border border-gray-300 rounded-md text-sm"
            />
          </div>
        </div>

        <div className="overflow-y-auto">
          {notes.map((n, index) => (
            <div 
              key={n.id}
              onClick={() => setCurrentNote(index)}
              className={`p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-100 ${
                currentNote === index ? "bg-yellow-100 border-l-4 border-l-yellow-500" : ""
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium text-sm text-gray-900 truncate">{n.title}</h3>
                <span className="text-xs text-gray-500">{n.date}</span>
              </div>
              <p className="text-xs text-gray-600 line-clamp-2">
                {n.content.split('\n')[0]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="border-b border-gray-200 p-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
          <div className="flex space-x-2">
            <button className="p-1 hover:bg-gray-200 rounded">
              <Share size={16} />
            </button>
            <button className="p-1 hover:bg-gray-200 rounded text-red-600">
              <Trash2 size={16} />
            </button>
          </div>
        </div>

        {/* Note Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{note.title}</h1>
          <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">
            {note.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNotes;