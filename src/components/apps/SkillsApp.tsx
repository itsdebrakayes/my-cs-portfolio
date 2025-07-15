import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SkillsApp = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    // Trigger progress bar animations on mount
    const timer = setTimeout(() => {
      setAnimateProgress(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    {
      name: "React",
      level: 90,
      category: "Frontend",
      color: "from-blue-400 to-blue-600",
      icon: "⚛️",
      description: "Advanced React development with hooks, context, and modern patterns"
    },
    {
      name: "JavaScript",
      level: 88,
      category: "Programming",
      color: "from-yellow-400 to-yellow-600",
      icon: "🟨",
      description: "ES6+, async programming, and modern JavaScript frameworks"
    },
    {
      name: "Python",
      level: 85,
      category: "Programming",
      color: "from-green-400 to-green-600",
      icon: "🐍",
      description: "Backend development, data science, and AI/ML applications"
    },
    {
      name: "PHP",
      level: 75,
      category: "Backend",
      color: "from-purple-400 to-purple-600",
      icon: "🐘",
      description: "Server-side development and web application frameworks"
    },
    {
      name: "Java",
      level: 70,
      category: "Programming",
      color: "from-red-400 to-red-600",
      icon: "☕",
      description: "Object-oriented programming and enterprise applications"
    },
    {
      name: "HTML/CSS",
      level: 92,
      category: "Frontend",
      color: "from-orange-400 to-orange-600",
      icon: "🎨",
      description: "Semantic markup, responsive design, and modern CSS features"
    },
    {
      name: "Node.js",
      level: 80,
      category: "Backend",
      color: "from-teal-400 to-teal-600",
      icon: "🟢",
      description: "Server-side JavaScript and API development"
    },
    {
      name: "SQL",
      level: 85,
      category: "Database",
      color: "from-indigo-400 to-indigo-600",
      icon: "🗄️",
      description: "Database design, queries, and optimization"
    },
    {
      name: "Supabase",
      level: 78,
      category: "Database",
      color: "from-emerald-400 to-emerald-600",
      icon: "⚡",
      description: "Backend-as-a-Service and real-time applications"
    },
    {
      name: "Flask",
      level: 72,
      category: "Backend",
      color: "from-gray-400 to-gray-600",
      icon: "🌶️",
      description: "Lightweight Python web framework for APIs"
    },
    {
      name: "Vue.js",
      level: 68,
      category: "Frontend",
      color: "from-green-500 to-green-700",
      icon: "💚",
      description: "Progressive framework for building user interfaces"
    },
    {
      name: "C",
      level: 65,
      category: "Programming",
      color: "from-blue-500 to-blue-700",
      icon: "🔧",
      description: "System programming and low-level development"
    }
  ];

  const categories = ["All", "Frontend", "Backend", "Programming", "Database"];

  const filteredSkills = selectedCategory && selectedCategory !== "All" 
    ? skills.filter(skill => skill.category === selectedCategory)
    : skills;

  return (
    <div className="h-full bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="text-center">
          <h1 className="text-xl font-bold text-foreground mb-2">Skills & Technologies</h1>
          <p className="text-sm text-muted-foreground">Technical expertise and proficiency levels</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="p-4 bg-card/50 border-b border-border">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              size="sm"
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="text-xs"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Skills Grid - Launchpad Style */}
      <div className="p-6 overflow-auto">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
                <CardContent className="p-0">
                  {/* Skill Icon/Background */}
                  <div className={`relative h-20 bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                    <div className="text-2xl opacity-80">
                      {skill.icon}
                    </div>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                  </div>
                  
                  {/* Skill Info */}
                  <div className="p-3 bg-card">
                    <h3 className="text-xs font-semibold text-foreground text-center mb-2 truncate">
                      {skill.name}
                    </h3>
                    
                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Level</span>
                        <span className="text-xs font-medium text-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={animateProgress ? skill.level : 0} 
                        className="h-1.5"
                      />
                    </div>
                    
                    {/* Category Badge */}
                    <div className="mt-2 flex justify-center">
                      <Badge variant="secondary" className="text-xs px-2 py-0.5">
                        {skill.category}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Tooltip on Hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                <div className="bg-popover border border-border rounded-lg p-2 shadow-lg">
                  <p className="text-xs text-popover-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {categories.slice(1).map((category) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            const avgLevel = Math.round(
              categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length
            );
            
            return (
              <div key={category} className="text-center p-3 bg-card rounded-lg border border-border">
                <div className="text-lg font-bold text-primary">{avgLevel}%</div>
                <div className="text-xs text-muted-foreground">{category}</div>
                <div className="text-xs text-muted-foreground">({categorySkills.length} skills)</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsApp;