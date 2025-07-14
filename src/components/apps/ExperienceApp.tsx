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
      title: "IT Intern",
      company: "Access Financial Services Limited",
      location: "Kingston, Jamaica",
      duration: "June 2024 - August 2024",
      description: [
        "Rewired and labeled server hubs for improved network organization",
        "Serviced generators and helped prepare for hurricane damage repairs",
        "Troubleshot and corrected issues in their new mobile application",
        "Built virtual machines and provided remote computer troubleshooting",
        "Enhanced skills in both hardware and software problem-solving"
      ],
      skills: ["Hardware Maintenance", "Mobile App Development", "Virtual Machines", "Network Infrastructure", "Disaster Recovery"]
    },
    {
      id: 3,
      title: "Social Media Intern",
      company: "Access Financial",
      location: "Kingston, Jamaica",
      duration: "July 2023 - August 2023",
      description: [
        "Created engaging posts and generated innovative content ideas",
        "Designed graphics to enhance online engagement and brand visibility",
        "Analyzed existing social media pages and provided improvement suggestions",
        "Attended in-person events to boost brand positioning and audience connection",
        "Blended creative online strategies with hands-on marketing efforts"
      ],
      skills: ["Social Media Marketing", "Graphic Design", "Content Creation", "Brand Strategy", "Event Marketing"]
    },
    {
      id: 4,
      title: "Co-Founder and Graphic Designer",
      company: "BooksForKidz JA",
      location: "Jamaica",
      duration: "March 2022 - June 2023",
      description: [
        "Co-founded initiative to address reading level loss in post-pandemic early learning",
        "Created flyers and promotional posts, including materials used in Kingston Bookshop stores",
        "Coordinated with schools and organizations to arrange book donations and reading days",
        "Hosted book drives across the island and supplied books to schools in need",
        "Collaborated with cousin to establish sustainable educational support system"
      ],
      skills: ["Non-profit Leadership", "Graphic Design", "Community Outreach", "Project Coordination", "Educational Support"]
    },
    {
      id: 5,
      title: "Full Stack Developer",
      company: "Personal Projects",
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

  const education = [
    {
      id: 1,
      institution: "The University of the West Indies, Mona",
      degree: "Bachelor of Science in Computer Science",
      duration: "2023 - Present",
      location: "Kingston, Jamaica"
    },
    {
      id: 2,
      institution: "Immaculate Conception High School",
      degree: "High School Diploma, Associate's Degree",
      duration: "2016 - 2023",
      location: "Kingston, Jamaica"
    }
  ];

  return (
    <div className="space-y-6 text-white h-full overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-2">Experience & Education</h1>
        <p className="text-white/70">Building systems and solving problems</p>
      </div>

      {/* Experience Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-4">Work Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <Card key={exp.id} className="bg-white/5 border-white/20">
              <CardContent className="p-4">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-blue-300 mb-1">{exp.title}</h3>
                  <div className="flex items-center space-x-4 text-white/70 text-sm">
                    <div className="flex items-center space-x-1">
                      <Building size={12} />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <ul className="space-y-1 text-white/80 text-sm">
                    {exp.description.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-blue-300 mt-1 text-xs">•</span>
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
                      className="bg-white/10 text-white border-white/20 hover:bg-white/20 text-xs"
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

      {/* Education Section */}
      <div>
        <h2 className="text-xl font-semibold text-blue-300 mb-4">Education</h2>
        <div className="space-y-4">
          {education.map((edu) => (
            <Card key={edu.id} className="bg-white/5 border-white/20">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-300 mb-1">{edu.institution}</h3>
                    <p className="text-white/80 text-sm mb-1">{edu.degree}</p>
                    <div className="flex items-center space-x-4 text-white/70 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={12} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceApp;