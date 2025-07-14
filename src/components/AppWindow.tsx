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
  onSizeChange?: (size: { width: number; height: number }) => void;
  children: React.ReactNode;
}

const AppWindow = ({ 
  window, 
  isFocused, 
  onClose, 
  onMinimize, 
  onFocus, 
  onPositionChange, 
  onSizeChange,
  children 
}: AppWindowProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [currentSize, setCurrentSize] = useState(window.defaultSize);
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

  const handleResizeMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResizing(true);
    onFocus();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = Math.max(0, e.clientX - dragOffset.x);
        const newY = Math.max(0, e.clientY - dragOffset.y);
        onPositionChange({ x: newX, y: newY });
      } else if (isResizing) {
        const rect = windowRef.current?.getBoundingClientRect();
        if (rect) {
          const newWidth = Math.max(300, e.clientX - rect.left);
          const newHeight = Math.max(200, e.clientY - rect.top);
          const newSize = { width: newWidth, height: newHeight };
          setCurrentSize(newSize);
          onSizeChange?.(newSize);
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, dragOffset, onPositionChange, onSizeChange]);

  return (
    <div
      ref={windowRef}
      className={`absolute transition-all duration-200 ${isFocused ? 'z-40' : 'z-30'}`}
      style={{
        left: window.position.x,
        top: window.position.y,
        width: currentSize.width,
        height: currentSize.height,
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(40px)',
        borderRadius: '12px',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: isFocused 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2)' 
          : '0 10px 25px -5px rgba(0, 0, 0, 0.15)',
        overflow: 'hidden',
        resize: 'both',
        minWidth: '300px',
        minHeight: '200px'
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
      <div className="h-full overflow-hidden relative">
        <div className="h-full overflow-auto text-gray-800" style={{ paddingTop: '0px', paddingBottom: '20px' }}>
          {children}
        </div>
        {/* Resize Handle */}
        <div 
          className="absolute bottom-0 right-0 w-4 h-4 cursor-nw-resize opacity-0 hover:opacity-50 transition-opacity"
          style={{
            background: 'linear-gradient(-45deg, transparent 30%, #999 30%, #999 40%, transparent 40%, transparent 60%, #999 60%, #999 70%, transparent 70%)',
          }}
          onMouseDown={handleResizeMouseDown}
        />
      </div>
    </div>
  );
};

export default AppWindow;