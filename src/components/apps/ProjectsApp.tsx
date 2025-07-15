import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Folder, 
  FileText, 
  Calendar, 
  Clock, 
  ExternalLink, 
  Github,
  ArrowLeft,
  Star,
  Users,
  Target,
  Zap
} from "lucide-react";

const ProjectsApp = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const projects = [
    {
      id: "yaad-explorer",
      name: "Yaad Explorer",
      type: "folder",
      icon: <Folder className="w-12 h-12 text-blue-500" />,
      description: "Tourism platform showcasing Jamaica's hidden gems and cultural experiences with interactive maps and local insights",
      technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
      status: "Featured",
      githubUrl: "https://github.com/itsdebrakayes/yaad-explorer",
      liveUrl: "https://yaad-explorer.vercel.app",
      category: "Web Application",
      timeline: [
        { date: "2024-01", phase: "Planning & Research", description: "Market analysis and user research for Jamaica tourism" },
        { date: "2024-02", phase: "Design & Prototyping", description: "UI/UX design and interactive map integration planning" },
        { date: "2024-03", phase: "Development", description: "Frontend development with React and MongoDB backend" },
        { date: "2024-04", phase: "Testing & Launch", description: "User testing, bug fixes, and deployment to production" }
      ],
      features: ["Interactive Maps", "Cultural Insights", "Local Recommendations", "Mobile Responsive"],
      images: ["https://images.unsplash.com/photo-1501919115144-3de29aa4b1b1", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4"]
    },
    {
      id: "jamai-assistant",
      name: "JamAI Assistant",
      type: "folder",
      icon: <Folder className="w-12 h-12 text-purple-500" />,
      description: "AI-powered chatbot providing comprehensive information about Jamaican culture, tourism, and local recommendations",
      technologies: ["Python", "LangChain", "OpenAI", "FastAPI"],
      status: "Featured",
      githubUrl: "https://github.com/itsdebrakayes/jamai-assistant",
      liveUrl: "https://jamai.example.com",
      category: "AI Application",
      timeline: [
        { date: "2024-05", phase: "AI Model Research", description: "Research on LangChain and cultural data training" },
        { date: "2024-06", phase: "Data Collection", description: "Gathering Jamaican cultural and tourism data" },
        { date: "2024-07", phase: "Model Training", description: "Training AI model with cultural context" },
        { date: "2024-08", phase: "API Development", description: "FastAPI backend and OpenAI integration" }
      ],
      features: ["Natural Language Processing", "Cultural Context", "Tourism Recommendations", "Voice Integration"],
      images: ["https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"]
    },
    {
      id: "court-system",
      name: "Supreme Court Management System",
      type: "folder",
      icon: <Folder className="w-12 h-12 text-green-500" />,
      description: "Internal system for case management and court operations developed during my internship",
      technologies: ["PHP", "MySQL", "JavaScript", "Hardware Integration"],
      status: "Professional",
      githubUrl: "#",
      liveUrl: "#",
      category: "Enterprise System",
      timeline: [
        { date: "2023-06", phase: "Requirements Analysis", description: "Analysis of court management workflows" },
        { date: "2023-07", phase: "System Design", description: "Database design and system architecture" },
        { date: "2023-08", phase: "Development", description: "PHP backend and MySQL database implementation" },
        { date: "2023-09", phase: "Hardware Integration", description: "Integration with court hardware systems" }
      ],
      features: ["Case Management", "Document Processing", "Hardware Integration", "User Management"],
      images: ["https://images.unsplash.com/photo-1589829545856-d10d557cf95f", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"]
    }
  ];

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  if (selectedProject && selectedProjectData) {
    return (
      <div className="h-full bg-background">
        {/* Document Header */}
        <div className="bg-card border-b border-border p-4">
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setSelectedProject(null)}
              className="hover:bg-accent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <FileText className="w-5 h-5 text-primary" />
            <div>
              <h1 className="text-lg font-semibold text-foreground">{selectedProjectData.name}</h1>
              <p className="text-sm text-muted-foreground">{selectedProjectData.category}</p>
            </div>
            {selectedProjectData.status === "Featured" && (
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
            )}
          </div>
        </div>

        {/* Document Content */}
        <div className="overflow-auto h-full p-6 space-y-8">
          {/* Project Overview */}
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <Target className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Project Overview</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {selectedProjectData.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedProjectData.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Development Timeline</h2>
            </div>
            <div className="space-y-4">
              {selectedProjectData.timeline.map((item, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    {index < selectedProjectData.timeline.length - 1 && (
                      <div className="w-0.5 h-12 bg-border mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex items-center space-x-2 mb-1">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">{item.date}</span>
                      <Badge variant="outline" className="text-xs">{item.phase}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Key Features</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {selectedProjectData.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 bg-card rounded-lg border border-border">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Project Images */}
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <Users className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Project Showcase</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedProjectData.images.map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={image}
                    alt={`${selectedProjectData.name} screenshot ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg border border-border group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-lg transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </section>

          {/* Links */}
          <section>
            <div className="flex space-x-4">
              <Button variant="default" className="flex items-center space-x-2">
                <Github className="w-4 h-4" />
                <span>View Code</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </Button>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-background">
      {/* Finder-style Toolbar */}
      <div className="bg-card border-b border-border p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Folder className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">Projects</span>
            </div>
            <div className="text-sm text-muted-foreground">
              {projects.length} items
            </div>
          </div>
          <div className="flex space-x-2">
            <Button 
              size="sm" 
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              onClick={() => setViewMode("grid")}
            >
              Grid
            </Button>
            <Button 
              size="sm" 
              variant={viewMode === "list" ? "secondary" : "ghost"}
              onClick={() => setViewMode("list")}
            >
              List
            </Button>
          </div>
        </div>
      </div>

      {/* Projects Grid/List */}
      <div className="p-6">
        <div className={viewMode === "grid" ? "grid grid-cols-3 gap-6" : "space-y-2"}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group cursor-pointer ${
                viewMode === "grid" 
                  ? "flex flex-col items-center p-4 rounded-lg hover:bg-accent transition-colors" 
                  : "flex items-center space-x-3 p-2 rounded hover:bg-accent transition-colors"
              }`}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className={viewMode === "grid" ? "mb-2" : ""}>
                {project.icon}
              </div>
              <div className={viewMode === "grid" ? "text-center" : "flex-1"}>
                <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </div>
                {viewMode === "list" && (
                  <div className="text-xs text-muted-foreground">
                    {project.category}
                  </div>
                )}
              </div>
              {project.status === "Featured" && viewMode === "list" && (
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsApp;