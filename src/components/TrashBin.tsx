import { useState } from "react";
import { Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TrashBin = () => {
  const [isShaking, setIsShaking] = useState(false);
  const { toast } = useToast();

  const handleTrashClick = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
    
    toast({
      title: "Nice try! 😏",
      description: "You can't throw me away that easily! I'm here to stay.",
    });
  };

  return (
    <div className="absolute bottom-20 right-8">
      <button
        onClick={handleTrashClick}
        className={`w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 
                   flex items-center justify-center text-white hover:bg-white/20 
                   transition-all duration-300 hover:scale-110 ${
                     isShaking ? 'animate-bounce' : ''
                   }`}
        title="Trash"
      >
        <Trash2 size={24} />
      </button>
    </div>
  );
};

export default TrashBin;