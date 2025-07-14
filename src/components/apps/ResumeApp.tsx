import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Eye, FileText, Calendar, MapPin, Mail } from "lucide-react";

const ResumeApp = () => {
  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      achievements: [
        "Led development of AI-powered dashboard increasing user engagement by 40%",
        "Mentored 3 junior developers and established code review practices",
        "Implemented micro-frontend architecture reducing build times by 60%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      location: "Remote",
      achievements: [
        "Built scalable chat platform handling 10k+ concurrent users",
        "Developed ML recommendation system improving conversion by 25%",
        "Architected REST APIs serving 1M+ requests daily"
      ]
    }
  ];

  const education = [
    {
      degree: "B.S. Computer Science",
      school: "UC Berkeley",
      period: "2016 - 2020",
      honors: "Magna Cum Laude, Dean's List"
    }
  ];

  return (
    <div className="space-y-4 text-white max-h-full overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FileText className="text-blue-300" size={20} />
          <h2 className="text-xl font-bold">Resume</h2>
        </div>
        <div className="flex space-x-2">
          <Button size="sm" variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
            <Eye size={16} className="mr-1" />
            Preview
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            <Download size={16} className="mr-1" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Contact Info */}
      <Card className="bg-white/5 border-white/20">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold">Debra-Kaye Smith</h3>
              <p className="text-white/70">Full Stack Developer & AI Engineer</p>
            </div>
            <div className="text-right text-sm text-white/70">
              <div className="flex items-center space-x-1 mb-1">
                <Mail size={12} />
                <span>debra@example.com</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin size={12} />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Experience */}
      <Card className="bg-white/5 border-white/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-blue-300">Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {experience.map((job, index) => (
            <div key={index} className="border-l-2 border-blue-300/50 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold text-white">{job.title}</h4>
                  <p className="text-white/70 text-sm">{job.company}</p>
                </div>
                <div className="text-right text-xs text-white/60">
                  <div className="flex items-center space-x-1">
                    <Calendar size={10} />
                    <span>{job.period}</span>
                  </div>
                  <div className="flex items-center space-x-1 mt-1">
                    <MapPin size={10} />
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>
              <ul className="text-sm text-white/80 space-y-1">
                {job.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start space-x-2">
                    <span className="text-blue-300 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Education */}
      <Card className="bg-white/5 border-white/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-blue-300">Education</CardTitle>
        </CardHeader>
        <CardContent>
          {education.map((edu, index) => (
            <div key={index} className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-white">{edu.degree}</h4>
                <p className="text-white/70 text-sm">{edu.school}</p>
                <Badge variant="outline" className="text-xs border-white/30 text-white/70 mt-1">
                  {edu.honors}
                </Badge>
              </div>
              <div className="text-xs text-white/60">
                {edu.period}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Key Skills Summary */}
      <Card className="bg-white/5 border-white/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-blue-300">Core Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Python", "Node.js", "LangChain", "PostgreSQL", "AWS", "Docker"].map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-white/10 text-white border-white/20">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeApp;