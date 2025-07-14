import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot, Sparkles, Brain, MessageCircle, Code, Zap } from "lucide-react";

const JamAIApp = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const aiGallery = [
    {
      id: 1,
      title: "JamAI Assistant Interface",
      description: "The main chat interface of JamAI showing cultural knowledge responses",
      category: "Interface Design",
      icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Natural Language Processing", "Real-time Responses", "Cultural Context"]
    },
    {
      id: 2,
      title: "AI Model Architecture",
      description: "Visual representation of the LangChain integration powering JamAI",
      category: "Backend Systems",
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["LangChain Framework", "Vector Embeddings", "Memory Management"]
    },
    {
      id: 3,
      title: "Cultural Data Training",
      description: "Jamaican cultural data visualization and AI training sets",
      category: "Data Science",
      icon: <Code className="w-8 h-8 text-green-500" />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Cultural Dataset", "Training Pipeline", "Knowledge Base"]
    },
    {
      id: 4,
      title: "Language Processing Engine",
      description: "Real-time language processing for Jamaican Patois understanding",
      category: "NLP Technology",
      icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Patois Recognition", "Sentiment Analysis", "Context Understanding"]
    },
    {
      id: 5,
      title: "Tourism Recommendations",
      description: "AI-powered suggestions for Jamaican attractions and experiences",
      category: "Recommendation System",
      icon: <Bot className="w-8 h-8 text-cyan-500" />,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Smart Recommendations", "Location Based", "Personalized Suggestions"]
    },
    {
      id: 6,
      title: "Voice Integration",
      description: "Siri-like voice interface for hands-free JamAI interactions",
      category: "Voice Technology",
      icon: <Zap className="w-8 h-8 text-red-500" />,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Speech Recognition", "Voice Synthesis", "Hands-free Operation"]
    }
  ];

  return (
    <div className="h-full overflow-hidden bg-gray-50">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex-shrink-0 bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/9ad84fc0-5d63-41d4-b0ca-6d35abaa377c.png" 
                alt="JamAI Logo" 
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">JamAI Gallery</h1>
                <p className="text-sm text-gray-600">AI-Powered Jamaican Cultural Assistant</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiGallery.map((item) => (
              <Card 
                key={item.id} 
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(selectedImage === item.id ? null : item.id)}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {item.category}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2">
                    {item.icon}
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  
                  {selectedImage === item.id && (
                    <div className="space-y-3 animate-fade-in">
                      <div className="flex flex-wrap gap-1">
                        {item.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <Button 
                        size="sm" 
                        className="w-full bg-blue-600 hover:bg-blue-700"
                      >
                        View in JamAI
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 bg-white border-t border-gray-200 px-6 py-3">
          <div className="text-center">
            <p className="text-xs text-gray-500">
              🔮 JamAI Assistant - Your AI-powered guide to Jamaican culture and tourism
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JamAIApp;