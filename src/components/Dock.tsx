import { User, Briefcase, Brain, FileText, Mail, Lightbulb } from "lucide-react";
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
    { id: "resume", icon: FileText, label: "Resume" },
    { id: "contact", icon: Mail, label: "Contact" },
    { id: "jamai", icon: Brain, label: "JamAI Assistant" },
  ];

  const handleAppClick = (appId: string) => {
    const openWindow = openWindows.find(w => w.id === appId);
    if (openWindow && openWindow.isMinimized) {
      onWindowRestore(appId);
    } else {
      onAppClick(appId);
    }
  };

  const isAppOpen = (appId: string) => {
    return openWindows.some(w => w.id === appId && !w.isMinimized);
  };

  const isAppMinimized = (appId: string) => {
    return openWindows.some(w => w.id === appId && w.isMinimized);
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="glass-bg rounded-2xl p-3 border border-white/20 shadow-[var(--shadow-dock)]">
        <div className="flex space-x-3">
          {dockApps.map((app) => {
            const Icon = app.icon;
            const isOpen = isAppOpen(app.id);
            const isMinimized = isAppMinimized(app.id);
            
            return (
              <div key={app.id} className="relative group">
                <button
                  onClick={() => handleAppClick(app.id)}
                  className={`dock-icon ${isOpen ? 'bg-white/30' : ''} ${isMinimized ? 'bg-yellow-500/30' : ''}`}
                  title={app.label}
                >
                  <Icon size={24} />
                  
                  {/* Running indicator */}
                  {(isOpen || isMinimized) && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                  )}
                </button>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {app.label}
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