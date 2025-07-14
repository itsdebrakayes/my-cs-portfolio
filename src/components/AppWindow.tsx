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
      className={`window absolute ${isFocused ? 'z-40' : 'z-30'}`}
      style={{
        left: window.position.x,
        top: window.position.y,
        width: window.defaultSize.width,
        height: window.defaultSize.height,
      }}
      onMouseDown={handleMouseDown}
      onClick={onFocus}
    >
      {/* Window Header */}
      <div className="window-header cursor-move">
        <div className="window-controls">
          <button 
            className="window-control close"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          />
          <button 
            className="window-control minimize"
            onClick={(e) => {
              e.stopPropagation();
              onMinimize();
            }}
          />
          <button className="window-control maximize" />
        </div>
        <div className="text-sm font-medium text-white/80 flex-1 text-center">
          {window.title}
        </div>
        <div className="w-12"></div> {/* Spacer for centering */}
      </div>

      {/* Window Content */}
      <div className="flex-1 overflow-auto p-6">
        {children}
      </div>
    </div>
  );
};

export default AppWindow;