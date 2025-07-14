import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Coffee, Music } from "lucide-react";

const AboutMeApp = () => {
  const funFacts = [
    "🎵 I code better with jazz music playing",
    "☕ Coffee is my debugging superpower",
    "🌟 I believe in clean code and cleaner data",
    "🚀 Always learning something new in AI",
    "📚 Currently diving deep into LangChain"
  ];

  const quickStats = [
    { icon: MapPin, label: "Location", value: "San Francisco, CA" },
    { icon: Calendar, label: "Experience", value: "3+ Years" },
    { icon: Coffee, label: "Coffee/Day", value: "4-6 cups" },
    { icon: Music, label: "Code Playlist", value: "Jazz & Lo-fi" }
  ];

  return (
    <div className="space-y-6 text-white">
      {/* Header */}
      <div className="text-center">
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg mb-4">
          DK
        </div>
        <h1 className="text-2xl font-bold mb-2">Debra-Kaye Smith</h1>
        <p className="text-white/70">Full Stack Developer & AI Enthusiast</p>
      </div>

      {/* Mission Control */}
      <Card className="bg-white/5 border-white/20">
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-3 text-blue-300">Mission Control</h3>
          <p className="text-white/80 leading-relaxed">
            I'm passionate about building intelligent applications that make a real difference. 
            Currently focusing on AI engineering with LangChain, creating solutions that bridge 
            the gap between complex AI capabilities and user-friendly experiences.
          </p>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        {quickStats.map((stat, index) => (
          <Card key={index} className="bg-white/5 border-white/20">
            <CardContent className="p-3">
              <div className="flex items-center space-x-2">
                <stat.icon size={16} className="text-blue-300" />
                <div>
                  <p className="text-xs text-white/60">{stat.label}</p>
                  <p className="text-sm font-medium text-white">{stat.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Fun Facts */}
      <Card className="bg-white/5 border-white/20">
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-3 text-blue-300">Random Facts</h3>
          <div className="space-y-2">
            {funFacts.map((fact, index) => (
              <Badge key={index} variant="secondary" className="block w-full text-left p-2 bg-white/10 text-white border-white/20">
                {fact}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutMeApp;