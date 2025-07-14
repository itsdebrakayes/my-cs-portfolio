import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Building } from "lucide-react";

const ExperienceApp = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Development & Hardware Technician Intern",
      company: "Supreme Court of Jamaica",
      location: "Kingston, Jamaica",
      duration: "Summer 2024",
      description: [
        "Built crucial pieces of internal and external systems for court operations",
        "Performed hardware maintenance including soldering and cable assembly",
        "Set up AV systems in courtrooms for seamless legal proceedings",
        "Collaborated with IT team on system integration and troubleshooting"
      ],
      skills: ["PHP", "MySQL", "Hardware Assembly", "AV Systems", "System Integration"]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Freelance Projects",
      location: "Remote",
      duration: "2023 - Present",
      description: [
        "Developed tourism platform Yaad Explorer showcasing Jamaica's cultural heritage",
        "Created AI-powered chatbot JamAI for cultural and tourism information",
        "Built responsive web applications using modern tech stack",
        "Implemented AI/ML solutions using LangChain and OpenAI APIs"
      ],
      skills: ["React", "Node.js", "Python", "LangChain", "MongoDB", "AI/ML"]
    }
  ];

  return (
    <div className="space-y-6 text-white">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-2">Professional Experience</h1>
        <p className="text-white/70">Building systems and solving problems</p>
      </div>

      {/* Experience List */}
      <div className="space-y-6">
        {experiences.map((exp) => (
          <Card key={exp.id} className="bg-white/5 border-white/20">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-1">{exp.title}</h3>
                  <div className="flex items-center space-x-4 text-white/70 text-sm">
                    <div className="flex items-center space-x-1">
                      <Building size={14} />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <ul className="space-y-2 text-white/80">
                  {exp.description.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-blue-300 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20"
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
  );
};

export default ExperienceApp;