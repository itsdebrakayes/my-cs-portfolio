import { useState } from "react";
import LockScreen from "@/components/LockScreen";
import Desktop from "@/components/Desktop";

const Index = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  return (
    <div className="h-screen w-screen overflow-hidden">
      {!isUnlocked ? (
        <LockScreen onUnlock={handleUnlock} />
      ) : (
        <Desktop />
      )}
    </div>
  );
};

export default Index;
