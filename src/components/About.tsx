import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding elegant solutions through code."
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Experienced in collaborative development and agile methodologies."
    },
    {
      icon: Lightbulb,
      title: "Fast Learner",
      description: "Always exploring new technologies and staying current with industry trends."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">About Me</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Hello! I'm John</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a Computer Science student with a passion for building innovative web applications. 
                My journey in programming started with curiosity about how websites work, and it has 
                evolved into a deep love for creating digital experiences that make a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When I'm not coding, you can find me contributing to open source projects, 
                reading tech blogs, or experimenting with new frameworks and tools. I believe 
                that the best solutions come from understanding both the technical and human 
                aspects of every problem.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I'm looking for internship opportunities where I can apply my skills 
                and continue learning from experienced developers.
              </p>
            </div>
            
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <Card key={index} className="border-none shadow-soft hover:shadow-medium transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-primary rounded-lg">
                        <item.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;