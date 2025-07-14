import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot, Sparkles, Brain, MessageCircle, Code, Zap } from "lucide-react";

const PhotosApp = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const aiGallery = [
    {
      id: 1,
      title: "JamAI Assistant Interface",
      description: "The main chat interface of JamAI showing cultural knowledge responses",
      category: "Interface Design",
      icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
      gradient: "bg-gradient-to-br from-blue-400 to-purple-600"
    },
    {
      id: 2,
      title: "AI Model Architecture",
      description: "Visual representation of the LangChain integration powering JamAI",
      category: "Technical",
      icon: <Brain className="w-8 h-8 text-green-500" />,
      gradient: "bg-gradient-to-br from-green-400 to-teal-600"
    },
    {
      id: 3,
      title: "Cultural Knowledge Base",
      description: "Jamaican cultural data visualization and AI training sets",
      category: "Data Science",
      icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
      gradient: "bg-gradient-to-br from-yellow-400 to-orange-600"
    },
    {
      id: 4,
      title: "Natural Language Processing",
      description: "Real-time language processing for Jamaican Patois understanding",
      category: "AI/ML",
      icon: <Code className="w-8 h-8 text-indigo-500" />,
      gradient: "bg-gradient-to-br from-indigo-400 to-purple-600"
    },
    {
      id: 5,
      title: "Tourism Recommendation Engine",
      description: "AI-powered suggestions for Jamaican attractions and experiences",
      category: "Tourism Tech",
      icon: <Zap className="w-8 h-8 text-red-500" />,
      gradient: "bg-gradient-to-br from-red-400 to-pink-600"
    },
    {
      id: 6,
      title: "Voice Recognition System",
      description: "Siri-like voice interface for hands-free JamAI interactions",
      category: "Voice AI",
      icon: <Bot className="w-8 h-8 text-cyan-500" />,
      gradient: "bg-gradient-to-br from-cyan-400 to-blue-600"
    }
  ];

  const categories = [...new Set(aiGallery.map(item => item.category))];

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">JamAI Gallery</h1>
            <p className="text-gray-600">AI Assistant Visualizations & Interface Designs</p>
          </div>
        </div>
        
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge key={category} variant="secondary" className="px-3 py-1">
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {aiGallery.map((item) => (
            <Card 
              key={item.id} 
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => setSelectedImage(selectedImage === item.id ? null : item.id)}
            >
              <CardContent className="p-0">
                {/* Image Placeholder with Icon */}
                <div className={`aspect-square ${item.gradient} flex items-center justify-center relative overflow-hidden rounded-t-lg`}>
                  {item.icon}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <Badge variant="secondary" className="text-xs bg-white/90 text-gray-800">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-xs text-gray-600 line-clamp-3">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Selected Image Details */}
      {selectedImage && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border">
          {(() => {
            const selected = aiGallery.find(item => item.id === selectedImage);
            return selected ? (
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 rounded-lg ${selected.gradient} flex items-center justify-center flex-shrink-0`}>
                  {selected.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{selected.title}</h3>
                  <p className="text-gray-600 mb-3">{selected.description}</p>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline">{selected.category}</Badge>
                    <Button size="sm" variant="outline">
                      View in JamAI
                    </Button>
                  </div>
                </div>
              </div>
            ) : null;
          })()}
        </div>
      )}

      {/* Footer Info */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          🔮 JamAI Assistant - Your AI-powered guide to Jamaican culture and tourism
        </p>
      </div>
    </div>
  );
};

export default PhotosApp;