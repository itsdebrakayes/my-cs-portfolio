import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe API", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "TypeScript", "Material-UI"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that displays current conditions and forecasts using OpenWeatherMap API with beautiful data visualizations.",
      technologies: ["JavaScript", "Chart.js", "OpenWeather API", "CSS3"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and TypeScript, featuring responsive design and smooth animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-none shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-foreground">{project.title}</span>
                    <div className="flex space-x-2">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-muted rounded-lg transition-colors"
                      >
                        <Github size={18} />
                      </a>
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-muted rounded-lg transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        View Live
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Other Projects</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-soft transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-foreground">{project.title}</h4>
                    <div className="flex space-x-2">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github size={16} />
                      </a>
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
