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
    { icon: MapPin, label: "Location", value: "Kingston, Jamaica" },
    { icon: Calendar, label: "Experience", value: "2+ Years" },
    { icon: Coffee, label: "Coffee/Day", value: "4-6 cups" },
    { icon: Music, label: "Code Playlist", value: "Jazz & Lo-fi" }
  ];

  return (
    <div className="space-y-6 text-foreground">
      {/* Header */}
      <div className="text-center">
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-lg mb-4">
          DK
        </div>
        <h1 className="text-2xl font-bold mb-2 text-foreground">Debra-Kaye Smith</h1>
        <p className="text-muted-foreground">Full Stack Developer & AI Enthusiast</p>
      </div>

      {/* Mission Control */}
      <Card className="bg-card border-border">
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-3 text-primary">Mission Control</h3>
          <p className="text-foreground leading-relaxed">
            I'm passionate about building intelligent applications that make a real difference. 
            Currently focusing on AI engineering with LangChain, creating solutions that bridge 
            the gap between complex AI capabilities and user-friendly experiences.
          </p>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        {quickStats.map((stat, index) => (
          <Card key={index} className="bg-card border-border">
            <CardContent className="p-3">
              <div className="flex items-center space-x-2">
                <stat.icon size={16} className="text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="text-sm font-medium text-foreground">{stat.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Fun Facts */}
      <Card className="bg-card border-border">
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-3 text-primary">Random Facts</h3>
          <div className="space-y-2">
            {funFacts.map((fact, index) => (
              <Badge key={index} variant="secondary" className="block w-full text-left p-2">
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