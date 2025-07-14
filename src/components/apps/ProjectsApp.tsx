import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder, Star } from "lucide-react";

const ProjectsApp = () => {
  const projects = [
    {
      name: "Yaad Explorer",
      description: "Tourism platform showcasing Jamaica's hidden gems and cultural experiences with interactive maps and local insights",
      technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
      status: "Featured",
      githubUrl: "https://github.com/itsdebrakayes/yaad-explorer",
      liveUrl: "https://yaad-explorer.vercel.app",
      category: "Web"
    },
    {
      name: "JamAI Assistant",
      description: "AI-powered chatbot providing comprehensive information about Jamaican culture, tourism, and local recommendations",
      technologies: ["Python", "LangChain", "OpenAI", "FastAPI"],
      status: "Featured",
      githubUrl: "https://github.com/itsdebrakayes/jamai-assistant",
      liveUrl: "https://jamai.example.com",
      category: "AI"
    },
    {
      name: "Supreme Court Management System",
      description: "Internal system for case management and court operations developed during my internship",
      technologies: ["PHP", "MySQL", "JavaScript", "Hardware Integration"],
      status: "Professional",
      githubUrl: "#",
      liveUrl: "#",
      category: "Web"
    }
  ];

  const categories = ["All", "AI", "Web", "Mobile"];

  return (
    <div className="space-y-4 text-white">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Folder className="text-blue-300" size={20} />
          <h2 className="text-xl font-bold">Projects</h2>
        </div>
        <div className="flex space-x-2">
          {categories.map((category) => (
            <Button key={category} size="sm" variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-4 max-h-96 overflow-y-auto">
        {projects.map((project, index) => (
          <Card key={index} className="bg-white/5 border-white/20 hover:bg-white/10 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between text-lg">
                <span className="text-white">{project.name}</span>
                <div className="flex items-center space-x-1">
                  {project.status === "Featured" && (
                    <Star size={16} className="text-yellow-400 fill-current" />
                  )}
                  <Badge variant="outline" className="text-xs border-white/30 text-white/70">
                    {project.category}
                  </Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/70 text-sm mb-3 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="text-xs bg-white/10 text-white border-white/20">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex space-x-2">
                <Button size="sm" variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 p-1">
                  <Github size={16} />
                </Button>
                <Button size="sm" variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 p-1">
                  <ExternalLink size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsApp;