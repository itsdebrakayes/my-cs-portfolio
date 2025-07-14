import { useState, useRef, useEffect } from "react";
import { X, Minus, Square } from "lucide-react";
import { OpenWindow } from "./Desktop";

interface AppWindowProps {
  window: OpenWindow;
  isFocused: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
  onPositionChange: (position: { x: number; y: number }) => void;
  children: React.ReactNode;
}

const AppWindow = ({ 
  window, 
  isFocused, 
  onClose, 
  onMinimize, 
  onFocus, 
  onPositionChange, 
  children 
}: AppWindowProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget || (e.target as HTMLElement).closest('.window-header')) {
      setIsDragging(true);
      onFocus();
      const rect = windowRef.current?.getBoundingClientRect();
      if (rect) {
        setDragOffset({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = Math.max(0, e.clientX - dragOffset.x);
        const newY = Math.max(0, e.clientY - dragOffset.y);
        onPositionChange({ x: newX, y: newY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset, onPositionChange]);

  return (
    <div
      ref={windowRef}
      className={`absolute transition-all duration-200 ${isFocused ? 'z-40' : 'z-30'}`}
      style={{
        left: window.position.x,
        top: window.position.y,
        width: window.defaultSize.width,
        height: window.defaultSize.height,
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(40px)',
        borderRadius: '12px',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: isFocused 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2)' 
          : '0 10px 25px -5px rgba(0, 0, 0, 0.15)',
        overflow: 'hidden'
      }}
      onMouseDown={handleMouseDown}
      onClick={onFocus}
    >
      {/* Window Header */}
      <div 
        className="flex items-center px-4 py-3 bg-gradient-to-b from-gray-50 to-gray-100 border-b border-gray-200 cursor-move"
        style={{ minHeight: '44px' }}
        onMouseDown={handleMouseDown}
      >
        <div className="flex space-x-2">
          <button 
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-sm border border-red-600/20" 
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          />
          <button 
            className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-sm border border-yellow-600/20" 
            onClick={(e) => {
              e.stopPropagation();
              onMinimize();
            }}
          />
          <button 
            className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-sm border border-green-600/20"
          />
        </div>
        <div className="flex-1 text-center">
          <h3 className="text-gray-800 font-medium text-sm">{window.title}</h3>
        </div>
        <div className="w-16"></div> {/* Spacer for centering */}
      </div>

      {/* Window Content */}
      <div className="h-full overflow-hidden">
        <div className="h-full overflow-auto text-gray-800" style={{ paddingTop: '0px' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppWindow;