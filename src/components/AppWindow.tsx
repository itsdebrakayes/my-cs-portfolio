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
  isOpening?: boolean;
  isClosing?: boolean;
  isMinimizing?: boolean;
  isRestoring?: boolean;
}

const AppWindow = ({ 
  window, 
  isFocused, 
  onClose, 
  onMinimize, 
  onFocus, 
  onPositionChange, 
  onSizeChange,
  children,
  isOpening = false,
  isClosing = false,
  isMinimizing = false,
  isRestoring = false
}: AppWindowProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [currentSize, setCurrentSize] = useState(window.defaultSize);
  const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });
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
        setDragStartPos({
          x: e.clientX,
          y: e.clientY
        });
      }
      // Add smooth-drag class for better performance
      windowRef.current?.classList.add('dragging');
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
        // Smooth momentum-based dragging
        const deltaX = e.clientX - dragStartPos.x;
        const deltaY = e.clientY - dragStartPos.y;
        
        // Apply momentum with easing
        const newX = Math.max(0, Math.min(globalThis.innerWidth - currentSize.width, 
          window.position.x + deltaX));
        const newY = Math.max(0, Math.min(globalThis.innerHeight - currentSize.height, 
          window.position.y + deltaY));
        
        onPositionChange({ x: newX, y: newY });
        
        // Update drag start position for next frame
        setDragStartPos({ x: e.clientX, y: e.clientY });
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
      if (isDragging) {
        windowRef.current?.classList.remove('dragging');
      }
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
  }, [isDragging, isResizing, dragStartPos, currentSize, window.position, onPositionChange, onSizeChange]);

  // Get animation class based on state
  const getAnimationClass = () => {
    if (isOpening) return 'window-opening';
    if (isClosing) return 'window-closing';
    if (isMinimizing) return 'window-minimizing';
    if (isRestoring) return 'window-restoring';
    return '';
  };

  return (
    <div
      ref={windowRef}
      className={`absolute smooth-drag ${getAnimationClass()} ${isFocused ? 'z-40' : 'z-30'} ${
        isDragging ? 'dragging' : ''
      }`}
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
        minHeight: '200px',
        transition: isDragging ? 'none' : 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
        willChange: isDragging ? 'transform' : 'auto'
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
          <button 
            className="window-control maximize"
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
          className="absolute bottom-0 right-0 w-4 h-4 cursor-nw-resize opacity-0 hover:opacity-50 transition-opacity duration-200"
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