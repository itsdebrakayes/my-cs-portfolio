import { useState } from "react";
import { X } from "lucide-react";

const StickyNotes = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: "🎯 Currently learning: LangChain & AI Engineering",
      color: "bg-yellow-200/90",
      position: { x: 50, y: 100 }
    },
    {
      id: 2,
      content: "🎵 Favorite Artist: Jazmine Sullivan",
      color: "bg-pink-200/90",
      position: { x: 250, y: 300 }
    },
    {
      id: 3,
      content: "💡 Fun fact: I code better with jazz playing!",
      color: "bg-blue-200/90",
      position: { x: 80, y: 450 }
    }
  ]);

  const removeNote = (id: number) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  return (
    <>
      {notes.map((note) => (
        <div
          key={note.id}
          className={`absolute w-48 h-32 ${note.color} p-3 rounded-lg shadow-lg border-l-4 border-yellow-500 cursor-move select-none`}
          style={{ left: note.position.x, top: note.position.y }}
        >
          <button
            onClick={() => removeNote(note.id)}
            className="absolute top-1 right-1 text-gray-600 hover:text-gray-800"
          >
            <X size={14} />
          </button>
          <p className="text-sm text-gray-800 font-medium leading-relaxed pt-2">
            {note.content}
          </p>
        </div>
      ))}
    </>
  );
};

export default StickyNotes;