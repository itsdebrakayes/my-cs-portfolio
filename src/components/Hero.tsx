import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-primary text-white relative">
      <div className="container px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            John Doe
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-blue-100">
            Full Stack Developer & Computer Science Student
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto text-blue-50 leading-relaxed">
            Passionate about creating innovative solutions through code. 
            Specializing in modern web technologies and always eager to learn new technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => scrollToSection('projects')}
              className="hover:scale-105 transition-transform duration-200"
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:john@example.com"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-white/70 hover:text-white transition-colors" />
      </button>
    </section>
  );
};

export default Hero;