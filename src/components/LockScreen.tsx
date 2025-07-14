import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Clock, Calendar } from "lucide-react";

interface LockScreenProps {
  onUnlock: () => void;
}

const LockScreen = ({ onUnlock }: LockScreenProps) => {
  const [password, setPassword] = useState("");
  const [time, setTime] = useState(new Date());
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === "hireme" || password === "") {
      onUnlock();
    } else {
      setShowHint(true);
      setTimeout(() => setShowHint(false), 3000);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center">
      {/* Blurred background overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      {/* Time and Date */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-center text-white z-10">
        <div className="text-6xl font-light mb-2">{formatTime(time)}</div>
        <div className="text-lg opacity-80">{formatDate(time)}</div>
      </div>

      {/* Main login area */}
      <div className="relative z-10 text-center">
        {/* Profile picture area */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
            DK
          </div>
        </div>

        {/* Name */}
        <h1 className="text-3xl font-light text-white mb-8">Debra-Kaye Smith</h1>

        {/* Password input */}
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <div className="relative">
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-80 h-12 bg-white/10 border-white/30 text-white placeholder-white/60 text-center backdrop-blur-sm rounded-full focus:bg-white/20 focus:border-white/50"
              autoFocus
            />
            {showHint && (
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-red-300">
                Hint: Try "hireme" or just press Enter
              </div>
            )}
          </div>
        </form>

        {/* Hint text */}
        <div className="mt-12 text-white/60 text-sm">
          <p>💡 Hint: Type "hireme" or just press Enter to unlock</p>
          <p className="mt-2">Welcome to Debra-Kaye OS</p>
        </div>
      </div>

      {/* Bottom elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm flex items-center space-x-4">
        <Clock size={16} />
        <span>Press Enter to continue</span>
        <Calendar size={16} />
      </div>
    </div>
  );
};

export default LockScreen;