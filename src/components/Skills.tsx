import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Material-UI", "Responsive Design"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Python", "PostgreSQL", "MongoDB", "RESTful APIs", "GraphQL"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Docker", "AWS", "Firebase", "Vercel"]
    },
    {
      title: "Concepts",
      skills: ["Object-Oriented Programming", "Data Structures", "Algorithms", "Agile Development", "Test-Driven Development", "UI/UX Design"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I've worked with in my projects and studies
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-none shadow-soft hover:shadow-medium transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3"></div>
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="px-3 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                      >
                        {skill}
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

export default Skills;