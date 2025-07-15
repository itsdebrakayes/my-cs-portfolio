import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot, Sparkles, Brain, MessageCircle, Code, Zap, Star } from "lucide-react";

const JamAIApp = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Interface Design", "Technical", "Data Science", "AI/ML", "Tourism Tech", "Voice AI"];

  const aiFeatures = [
    {
      id: 1,
      title: "Natural Language Processing",
      description: "Real-time language processing for Jamaican Patois understanding",
      category: "AI/ML",
      color: "from-purple-500 to-purple-700",
      bgImage: "/images/jamai/nlp-processing.jpg",
      features: ["Patois Recognition", "Sentiment Analysis", "Context Understanding"],
      status: "Active"
    },
    {
      id: 2,
      title: "Tourism Recommendation Engine",
      description: "AI-powered suggestions for Jamaican attractions and experiences",
      category: "Tourism Tech",
      color: "from-red-500 to-pink-600",
      bgImage: "/images/jamai/tourism-recommendations.jpg",
      features: ["Smart Recommendations", "Location Based", "Personalized Suggestions"],
      status: "Featured"
    },
    {
      id: 3,
      title: "Voice Recognition System",
      description: "Siri-like voice interface for hands-free JamAI interactions",
      category: "Voice AI",
      color: "from-blue-500 to-cyan-600",
      bgImage: "/images/jamai/voice-recognition.jpg",
      features: ["Speech Recognition", "Voice Synthesis", "Hands-free Operation"],
      status: "Beta"
    },
    {
      id: 4,
      title: "Cultural Knowledge Base",
      description: "Comprehensive database of Jamaican culture, history, and traditions",
      category: "Data Science",
      color: "from-green-500 to-teal-600",
      bgImage: "/images/jamai/cultural-database.jpg",
      features: ["Cultural Dataset", "Historical Context", "Traditional Knowledge"],
      status: "Active"
    },
    {
      id: 5,
      title: "Chat Interface Design",
      description: "Modern, intuitive chat interface with Jamaican cultural elements",
      category: "Interface Design",
      color: "from-indigo-500 to-purple-600",
      bgImage: "/images/jamai/chat-interface.jpg",
      features: ["Responsive Design", "Cultural Themes", "User Experience"],
      status: "Active"
    },
    {
      id: 6,
      title: "AI Model Architecture",
      description: "LangChain-powered backend with advanced reasoning capabilities",
      category: "Technical",
      color: "from-orange-500 to-red-600",
      bgImage: "/images/jamai/ai-architecture.jpg",
      features: ["LangChain Framework", "Vector Embeddings", "Memory Management"],
      status: "Core"
    }
  ];

  const filteredFeatures = selectedCategory === "All" 
    ? aiFeatures 
    : aiFeatures.filter(feature => feature.category === selectedCategory);

  return (
    <div className="h-full bg-background overflow-hidden">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">JamAI Gallery</h1>
            <p className="text-sm text-muted-foreground">AI Assistant Visualizations & Interface Designs</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              size="sm"
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="text-xs px-3 py-1.5 rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="p-6 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feature, index) => (
            <Card 
              key={feature.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${feature.bgImage})` }}
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-80`} />
                
                {/* Status Badge */}
                <div className="absolute top-3 left-3">
                  <Badge 
                    variant={feature.status === "Featured" ? "default" : "secondary"}
                    className="text-xs font-medium"
                  >
                    {feature.status === "Featured" && <Star className="w-3 h-3 mr-1" />}
                    {feature.status}
                  </Badge>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <Badge variant="outline" className="bg-white/90 text-gray-800 text-xs border-0">
                    {feature.category}
                  </Badge>
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    {feature.id === 1 && <Brain className="w-5 h-5 text-white" />}
                    {feature.id === 2 && <Bot className="w-5 h-5 text-white" />}
                    {feature.id === 3 && <Zap className="w-5 h-5 text-white" />}
                    {feature.id === 4 && <Code className="w-5 h-5 text-white" />}
                    {feature.id === 5 && <MessageCircle className="w-5 h-5 text-white" />}
                    {feature.id === 6 && <Sparkles className="w-5 h-5 text-white" />}
                  </div>
                </div>
              </div>

              <CardContent className="p-4 bg-card">
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-2 mb-4">
                  {feature.features.map((feat, featIndex) => (
                    <div key={featIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-xs text-muted-foreground">{feat}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  size="sm" 
                  variant="outline"
                  className="w-full text-xs"
                >
                  Explore Feature
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-card rounded-full border border-border">
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              JamAI Assistant - Your AI-powered guide to Jamaican culture and tourism
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JamAIApp;