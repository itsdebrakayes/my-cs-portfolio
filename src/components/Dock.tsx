import { User, Briefcase, Brain, FileText, Mail, Lightbulb, Camera } from "lucide-react";
import { OpenWindow } from "./Desktop";

interface DockProps {
  onAppClick: (appId: string) => void;
  openWindows: OpenWindow[];
  onWindowRestore: (windowId: string) => void;
}

const Dock = ({ onAppClick, openWindows, onWindowRestore }: DockProps) => {
  const dockApps = [
    { id: "about", icon: User, label: "About Me" },
    { id: "projects", icon: Briefcase, label: "Projects" },
    { id: "skills", icon: Lightbulb, label: "Skills" },
    { id: "experience", icon: Brain, label: "Experience" },
    { id: "resume", icon: FileText, label: "Resume" },
    { id: "contact", icon: Mail, label: "Contact" },
    { id: "jamai", icon: () => <span className="text-2xl">🔮</span>, label: "JamAI Assistant" },
    { id: "gallery", icon: Camera, label: "Photos" },
    { id: "notes", icon: () => <span className="text-2xl">📝</span>, label: "Notes" },
  ];

  const handleAppClick = (appId: string) => {
    const openWindow = openWindows.find(w => w.id === appId);
    if (openWindow && openWindow.isMinimized) {
      onWindowRestore(appId);
    } else {
      // Special handling for JamAI - open gallery instead
      if (appId === "jamai") {
        onAppClick("gallery");
      } else {
        onAppClick(appId);
      }
    }
  };

  const isAppOpen = (appId: string) => {
    return openWindows.some(w => w.id === appId && !w.isMinimized);
  };

  const isAppMinimized = (appId: string) => {
    return openWindows.some(w => w.id === appId && w.isMinimized);
  };

  return (
    <div className="fixed bottom-1 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl px-2 py-2 border border-white/20" style={{
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
      }}>
        <div className="flex space-x-1">
          {dockApps.map((app) => {
            const Icon = app.icon;
            const isOpen = isAppOpen(app.id);
            const isMinimized = isAppMinimized(app.id);
            
            return (
              <div key={app.id} className="relative group">
                <button
                  onClick={() => handleAppClick(app.id)}
                  className={`relative w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-2 ${
                    isOpen ? 'bg-white/20' : 'hover:bg-white/10'
                  } ${isMinimized ? 'bg-yellow-500/20' : ''}`}
                  title={app.label}
                  style={{
                    background: isOpen 
                      ? 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))' 
                      : 'linear-gradient(145deg, rgba(255,255,255,0.05), transparent)',
                    boxShadow: isOpen 
                      ? 'inset 0 1px 3px rgba(0,0,0,0.3), 0 1px 3px rgba(255,255,255,0.1)' 
                      : '0 2px 8px rgba(0,0,0,0.2)'
                  }}
                >
                  {app.id === "notes" || app.id === "jamai" ? (
                    <Icon />
                  ) : (
                    <Icon size={28} className="text-white drop-shadow-sm" />
                  )}
                  
                  {/* Running indicator */}
                  {(isOpen || isMinimized) && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full shadow-sm"></div>
                  )}
                </button>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-2 py-1 bg-gray-900/90 backdrop-blur-sm text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none" style={{
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
                }}>
                  {app.label}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900/90"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dock;