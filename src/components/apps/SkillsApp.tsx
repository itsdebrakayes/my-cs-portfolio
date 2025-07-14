import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Brain, Wrench } from "lucide-react";

const SkillsApp = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-blue-300",
      skills: [
        { name: "Python", level: 90 },
        { name: "HTML, CSS and JavaScript", level: 90 },
        { name: "Java", level: 65 },
        { name: "PHP", level: 65 },
        { name: "C", level: 45 },
        { name: "MySQL", level: 90 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Database,
      color: "text-green-300",
      skills: [
        { name: "React", level: 85 },
        { name: "Node.js", level: 75 },
        { name: "Tailwind CSS", level: 88 },
        { name: "LangChain", level: 80 },
        { name: "OpenAI API", level: 85 }
      ]
    },
    {
      title: "Soft Skills",
      icon: Brain,
      color: "text-purple-300",
      skills: [
        { name: "Teamwork and Collaboration", level: 90 },
        { name: "Adaptability", level: 85 },
        { name: "Creativity", level: 88 },
        { name: "Tutoring", level: 85 },
        { name: "Discord and Online Communications", level: 90 }
      ]
    },
    {
      title: "Hardware & Tools",
      icon: Wrench,
      color: "text-orange-300",
      skills: [
        { name: "Git", level: 90 },
        { name: "Hardware Assembly", level: 80 },
        { name: "AV Systems", level: 75 },
        { name: "System Integration", level: 85 },
        { name: "Machine Learning", level: 70 }
      ]
    }
  ];

  const certifications = [
    "Virtual Server Certification (June 2024)",
    "Python Certification (June 2025)",
    "Beginner Machine Learning Certification (June 2025)"
  ];

  return (
    <div className="space-y-4 text-white">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold mb-2">Skills & Technologies</h2>
        <p className="text-white/70 text-sm">My technical expertise and proficiency levels</p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 gap-4">
        {skillCategories.map((category, index) => (
          <Card key={index} className="bg-white/5 border-white/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-sm">
                <category.icon size={16} className={category.color} />
                <span className="text-white">{category.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/80">{skill.name}</span>
                    <span className="text-xs text-white/60">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-1.5 bg-white/10"
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Certifications */}
      <Card className="bg-white/5 border-white/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm text-blue-300">Certifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="outline" className="text-xs border-white/30 text-white/70">
                {cert}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillsApp;