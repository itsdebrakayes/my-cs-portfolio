import { useState } from "react";
import Dock from "./Dock";
import StickyNotes from "./StickyNotes";
import AppWindow from "./AppWindow";
import AboutMeApp from "./apps/AboutMeApp";
import ProjectsApp from "./apps/ProjectsApp";
import SkillsApp from "./apps/SkillsApp";
import ResumeApp from "./apps/ResumeApp";
import ContactApp from "./apps/ContactApp";
import JamAIApp from "./apps/JamAIApp";
import TrashBin from "./TrashBin";

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
        defaultSize: { width: 500, height: 600 },
        position: { x: 350, y: 100 },
        isMinimized: false
      }
    };

    const app = apps[appId as keyof typeof apps];
    if (app) {
      setOpenWindows(prev => [...prev, app]);
      setFocusedWindow(appId);
    }
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
    <div className="h-screen w-screen wallpaper relative overflow-hidden">
      {/* Desktop Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      
      {/* Sticky Notes */}
      <StickyNotes />
      
      {/* Trash Bin */}
      <TrashBin />

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