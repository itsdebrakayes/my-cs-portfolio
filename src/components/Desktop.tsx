import { useState } from "react";
import Dock from "./Dock";
import StickyNotes from "./StickyNotes";
import AppWindow from "./AppWindow";
import AboutMeApp from "./apps/AboutMeApp";
import ProjectsApp from "./apps/ProjectsApp";
import SkillsApp from "./apps/SkillsApp";
import ExperienceApp from "./apps/ExperienceApp";
import ResumeApp from "./apps/ResumeApp";
import ContactApp from "./apps/ContactApp";
import JamAIApp from "./apps/JamAIApp";
import TrashBin from "./TrashBin";
import SimsWidget from "./widgets/SimsWidget";
import JamaicaMapWidget from "./widgets/JamaicaMapWidget";
import BooksWidget from "./widgets/BooksWidget";
import MusicWidget from "./widgets/MusicWidget";
import PinterestWidget from "./widgets/PinterestWidget";

export interface OpenWindow {
  id: string;
  title: string;
  component: React.ComponentType;
  defaultSize: { width: number; height: number };
  position: { x: number; y: number };
  isMinimized: boolean;
}

const Desktop = () => {
  const [openWindows, setOpenWindows] = useState<OpenWindow[]>([]);
  const [focusedWindow, setFocusedWindow] = useState<string | null>(null);

  const openApp = (appId: string) => {
    if (openWindows.find(w => w.id === appId)) {
      // If window exists but is minimized, restore it
      setOpenWindows(prev => 
        prev.map(w => 
          w.id === appId ? { ...w, isMinimized: false } : w
        )
      );
      setFocusedWindow(appId);
      return;
    }

    const apps = {
      about: {
        id: "about",
        title: "About Me",
        component: AboutMeApp,
        defaultSize: { width: 600, height: 500 },
        position: { x: 100, y: 100 },
        isMinimized: false
      },
      projects: {
        id: "projects",
        title: "Projects",
        component: ProjectsApp,
        defaultSize: { width: 800, height: 600 },
        position: { x: 150, y: 120 },
        isMinimized: false
      },
      skills: {
        id: "skills",
        title: "Skills",
        component: SkillsApp,
        defaultSize: { width: 700, height: 550 },
        position: { x: 200, y: 140 },
        isMinimized: false
      },
      experience: {
        id: "experience",
        title: "Experience",
        component: ExperienceApp,
        defaultSize: { width: 750, height: 600 },
        position: { x: 180, y: 120 },
        isMinimized: false
      },
      resume: {
        id: "resume",
        title: "Resume",
        component: ResumeApp,
        defaultSize: { width: 650, height: 800 },
        position: { x: 250, y: 80 },
        isMinimized: false
      },
      contact: {
        id: "contact",
        title: "Contact",
        component: ContactApp,
        defaultSize: { width: 600, height: 500 },
        position: { x: 300, y: 160 },
        isMinimized: false
      },
      jamai: {
        id: "jamai",
        title: "JamAI Assistant",
        component: JamAIApp,
        defaultSize: { width: 600, height: 700 },
        position: { x: 300, y: 160 },
        isMinimized: false
      },
      notes: {
        id: "notes",
        title: "Notes",
        component: StickyNotes,
        defaultSize: { width: 400, height: 500 },
        position: { x: 400, y: 140 },
        isMinimized: false
      }
    };

    const app = apps[appId as keyof typeof apps];
    if (app) {
      setOpenWindows(prev => [...prev, app]);
      setFocusedWindow(appId);
    }
  };

  const returnToLockScreen = () => {
    // This would typically be handled by the parent component
    window.location.reload();
  };

  const closeWindow = (windowId: string) => {
    setOpenWindows(prev => prev.filter(w => w.id !== windowId));
    if (focusedWindow === windowId) {
      setFocusedWindow(null);
    }
  };

  const minimizeWindow = (windowId: string) => {
    setOpenWindows(prev => 
      prev.map(w => 
        w.id === windowId ? { ...w, isMinimized: true } : w
      )
    );
  };

  const updateWindowPosition = (windowId: string, position: { x: number; y: number }) => {
    setOpenWindows(prev => 
      prev.map(w => 
        w.id === windowId ? { ...w, position } : w
      )
    );
  };

  return (
    <div className="h-screen w-screen relative overflow-hidden desktop-enter" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* Menu Bar */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-black/20 backdrop-blur-md border-b border-white/10 flex items-center px-4 text-white text-sm z-50">
        <div className="flex items-center space-x-4">
          <button 
            onClick={returnToLockScreen}
            className="hover:bg-white/10 px-2 py-1 rounded transition-all duration-200 ease-apple hover:scale-105"
          >
            🍎
          </button>
          <span className="font-medium">Debra-Kaye OS</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <span className="text-xs">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'short', 
              month: 'short', 
              day: 'numeric',
              hour: 'numeric',
              minute: '2-digit'
            })}
          </span>
        </div>
      </div>
      
      {/* Desktop Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      
      {/* Trash Bin */}
      <TrashBin />

      {/* Desktop Widgets */}
      <SimsWidget />
      <JamaicaMapWidget />
      <BooksWidget />
      <MusicWidget />
      <PinterestWidget />

      {/* Notes App - Auto-open on desktop load */}
      {openWindows.length === 0 && (
        <div className="absolute top-10 right-10">
          <button
            onClick={() => openApp('notes')}
            className="bg-yellow-400 hover:bg-yellow-300 rounded-lg p-3 shadow-lg transition-all duration-300 ease-apple-spring hover:scale-105 animate-spring-bounce"
          >
            📝 Open Notes
          </button>
        </div>
      )}

      {/* Open Windows */}
      {openWindows.map((window) => (
        !window.isMinimized && (
          <AppWindow
            key={window.id}
            window={window}
            isFocused={focusedWindow === window.id}
            onClose={() => closeWindow(window.id)}
            onMinimize={() => minimizeWindow(window.id)}
            onFocus={() => setFocusedWindow(window.id)}
            onPositionChange={(position) => updateWindowPosition(window.id, position)}
          >
            <window.component />
          </AppWindow>
        )
      ))}

      {/* Dock */}
      <Dock 
        onAppClick={openApp} 
        openWindows={openWindows}
        onWindowRestore={(windowId) => {
          setOpenWindows(prev => 
            prev.map(w => 
              w.id === windowId ? { ...w, isMinimized: false } : w
            )
          );
          setFocusedWindow(windowId);
        }}
      />
    </div>
  );
};

export default Desktop;