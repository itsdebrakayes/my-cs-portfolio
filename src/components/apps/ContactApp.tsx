import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Send, Github, Linkedin, ExternalLink, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactApp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 📧",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Email address copied to clipboard",
    });
  };

  const contactMethods = [
    {
      label: "Email",
      value: "debrakayesam@gmail.com",
      icon: Mail,
      action: () => copyToClipboard("debrakayesam@gmail.com"),
      color: "text-blue-300"
    },
    {
      label: "GitHub",
      value: "github.com/itsdebrakayes",
      icon: Github,
      action: () => window.open("https://github.com/itsdebrakayes", "_blank"),
      color: "text-purple-300"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/debra-kaye-smith",
      icon: Linkedin,
      action: () => window.open("https://www.linkedin.com/in/debra-kaye-smith/", "_blank"),
      color: "text-blue-400"
    }
  ];

  const quickMessages = [
    "Let's discuss a project opportunity",
    "I'd like to learn more about your AI work",
    "Interested in collaboration",
    "Question about your experience"
  ];

  return (
    <div className="space-y-4 text-white">
      {/* Header */}
      <div className="text-center">
        <Mail className="mx-auto mb-2 text-blue-300" size={24} />
        <h2 className="text-xl font-bold mb-1">Get In Touch</h2>
        <p className="text-white/70 text-sm">Let's start a conversation!</p>
      </div>

      {/* Contact Methods */}
      <div className="grid gap-3">
        {contactMethods.map((method, index) => (
          <Card key={index} className="bg-white/5 border-white/20 hover:bg-white/10 transition-colors cursor-pointer" onClick={method.action}>
            <CardContent className="p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <method.icon size={18} className={method.color} />
                  <div>
                    <p className="text-sm font-medium text-white">{method.label}</p>
                    <p className="text-xs text-white/70">{method.value}</p>
                  </div>
                </div>
                {method.label === "Email" ? (
                  <Copy size={16} className="text-white/50" />
                ) : (
                  <ExternalLink size={16} className="text-white/50" />
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Message Templates */}
      <Card className="bg-white/5 border-white/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-blue-300">Quick Start</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {quickMessages.map((message, index) => (
            <Badge 
              key={index}
              variant="outline"
              className="w-full text-left p-2 cursor-pointer border-white/30 text-white/70 hover:bg-white/10 hover:text-white text-xs"
              onClick={() => setFormData({...formData, subject: message})}
            >
              {message}
            </Badge>
          ))}
        </CardContent>
      </Card>

      {/* Contact Form */}
      <Card className="bg-white/5 border-white/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-blue-300 text-sm">Send Message</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-white/10 border-white/20 text-white placeholder-white/50 text-sm h-8"
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-white/10 border-white/20 text-white placeholder-white/50 text-sm h-8"
                required
              />
            </div>
            <Input
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="bg-white/10 border-white/20 text-white placeholder-white/50 text-sm h-8"
              required
            />
            <Textarea
              name="message"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleInputChange}
              className="bg-white/10 border-white/20 text-white placeholder-white/50 text-sm resize-none"
              rows={3}
              required
            />
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-8 text-sm">
              <Send size={14} className="mr-1" />
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactApp;