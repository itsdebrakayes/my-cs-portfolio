import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Send, Github, Linkedin, ExternalLink, Copy, MessageCircle, Phone, Video } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactApp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [activeTab, setActiveTab] = useState("messages");
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

  const conversations = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechFlow Solutions",
      avatar: "SJ",
      lastMessage: "Your coding skills are incredible! We'd love to discuss opportunities.",
      time: "2:30 PM",
      unread: true,
      messages: [
        { sender: "Sarah Johnson", message: "Hi Debra-Kaye! I came across your GitHub profile and I'm really impressed with your work on the Yaad Explorer project.", time: "2:25 PM", isMe: false },
        { sender: "Sarah Johnson", message: "Your coding skills are incredible! We'd love to discuss opportunities at TechFlow. Are you available for a call?", time: "2:30 PM", isMe: false }
      ]
    },
    {
      id: 2,
      name: "Marcus Williams",
      company: "Caribbean Tech Hub",
      avatar: "MW",
      lastMessage: "The JamAI Assistant is brilliant! How did you build it?",
      time: "1:45 PM",
      unread: true,
      messages: [
        { sender: "Marcus Williams", message: "Debra-Kaye, your JamAI Assistant project caught my attention. The AI implementation is brilliant!", time: "1:40 PM", isMe: false },
        { sender: "Marcus Williams", message: "How did you build it? I'd love to learn more about your approach to LangChain integration.", time: "1:45 PM", isMe: false }
      ]
    },
    {
      id: 3,
      name: "Dr. Patricia Brown",
      company: "University of Technology",
      avatar: "PB",
      lastMessage: "Would you be interested in mentoring our CS students?",
      time: "11:20 AM",
      unread: false,
      messages: [
        { sender: "Dr. Patricia Brown", message: "Hello Debra-Kaye! Your work at the Supreme Court and your AI projects are impressive.", time: "11:15 AM", isMe: false },
        { sender: "Dr. Patricia Brown", message: "Would you be interested in mentoring our computer science students? Your expertise would be invaluable.", time: "11:20 AM", isMe: false },
        { sender: "Me", message: "Hi Dr. Brown! I'd be honored to help mentor the students. Let's schedule a meeting to discuss this further.", time: "11:35 AM", isMe: true }
      ]
    },
    {
      id: 4,
      name: "Kevin Clarke",
      company: "StartupJA",
      avatar: "KC",
      lastMessage: "Your technical skills are exactly what we need!",
      time: "Yesterday",
      unread: false,
      messages: [
        { sender: "Kevin Clarke", message: "Hi Debra-Kaye! I've been following your projects and your technical skills are exactly what we need at StartupJA.", time: "Yesterday", isMe: false },
        { sender: "Kevin Clarke", message: "We're building the next big thing in Caribbean fintech. Interested in joining our team?", time: "Yesterday", isMe: false }
      ]
    }
  ];

  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);

  const contactMethods = [
    {
      label: "Email",
      value: "debrakayesam@gmail.com",
      icon: Mail,
      action: () => copyToClipboard("debrakayesam@gmail.com"),
      color: "text-blue-600"
    },
    {
      label: "GitHub",
      value: "github.com/itsdebrakayes",
      icon: Github,
      action: () => window.open("https://github.com/itsdebrakayes", "_blank"),
      color: "text-gray-800"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/debra-kaye-smith",
      icon: Linkedin,
      action: () => window.open("https://www.linkedin.com/in/debra-kaye-smith/", "_blank"),
      color: "text-blue-700"
    }
  ];

  return (
    <div className="h-full flex flex-col text-gray-800">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 bg-gray-50">
        <button
          onClick={() => setActiveTab("messages")}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "messages" 
              ? "border-b-2 border-blue-500 text-blue-600" 
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Messages
        </button>
        <button
          onClick={() => setActiveTab("contact")}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "contact" 
              ? "border-b-2 border-blue-500 text-blue-600" 
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Contact Info
        </button>
      </div>

      {activeTab === "messages" ? (
        <div className="flex-1 flex">
          {/* Conversations List */}
          <div className="w-1/3 border-r border-gray-200 bg-gray-50">
            <div className="p-3 border-b border-gray-200">
              <h3 className="font-semibold text-gray-800">Messages</h3>
            </div>
            <div className="overflow-y-auto">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => setSelectedConversation(conv)}
                  className={`p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-100 ${
                    selectedConversation.id === conv.id ? "bg-blue-50 border-l-4 border-l-blue-500" : ""
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
                      {conv.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <p className="text-sm font-medium text-gray-800 truncate">{conv.name}</p>
                        <span className="text-xs text-gray-500">{conv.time}</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-1">{conv.company}</p>
                      <p className="text-xs text-gray-600 truncate">{conv.lastMessage}</p>
                      {conv.unread && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message View */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 bg-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
                  {selectedConversation.avatar}
                </div>
                <div>
                  <p className="font-medium text-gray-800">{selectedConversation.name}</p>
                  <p className="text-xs text-gray-500">{selectedConversation.company}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="ghost" className="p-2">
                  <Phone size={16} />
                </Button>
                <Button size="sm" variant="ghost" className="p-2">
                  <Video size={16} />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {selectedConversation.messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    msg.isMe 
                      ? "bg-blue-500 text-white" 
                      : "bg-gray-200 text-gray-800"
                  }`}>
                    <p>{msg.message}</p>
                    <p className={`text-xs mt-1 ${msg.isMe ? "text-blue-100" : "text-gray-500"}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex space-x-2">
                <Input 
                  placeholder="Type a message..." 
                  className="flex-1"
                />
                <Button size="sm">
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col bg-gray-50">
          {/* iMessage-style Header */}
          <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <h2 className="text-lg font-semibold">Contact Info</h2>
            <p className="text-blue-100 text-sm">Here's how to reach me!</p>
          </div>

          {/* iMessage-style Chat */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {/* Email Message */}
            <div className="flex justify-start">
              <div className="bg-gray-200 rounded-lg px-4 py-2 max-w-xs shadow-sm">
                <p className="text-sm text-gray-800 mb-1">📧 Email me at:</p>
                <button 
                  onClick={() => copyToClipboard("debrakayesam@gmail.com")}
                  className="text-blue-600 underline hover:text-blue-800 text-sm font-medium"
                >
                  debrakayesam@gmail.com
                </button>
              </div>
            </div>

            {/* GitHub Message */}
            <div className="flex justify-start">
              <div className="bg-gray-200 rounded-lg px-4 py-2 max-w-xs shadow-sm">
                <p className="text-sm text-gray-800 mb-1">💻 Check out my code:</p>
                <button 
                  onClick={() => window.open("https://github.com/itsdebrakayes", "_blank")}
                  className="text-blue-600 underline hover:text-blue-800 text-sm font-medium"
                >
                  @itsdebrakayes
                </button>
              </div>
            </div>

            {/* LinkedIn Message */}
            <div className="flex justify-start">
              <div className="bg-gray-200 rounded-lg px-4 py-2 max-w-xs shadow-sm">
                <p className="text-sm text-gray-800 mb-1">💼 Connect professionally:</p>
                <button 
                  onClick={() => window.open("https://www.linkedin.com/in/debra-kaye-smith/", "_blank")}
                  className="text-blue-600 underline hover:text-blue-800 text-sm font-medium"
                >
                  LinkedIn Profile
                </button>
              </div>
            </div>

            {/* Location Message */}
            <div className="flex justify-start">
              <div className="bg-gray-200 rounded-lg px-4 py-2 max-w-xs shadow-sm">
                <p className="text-sm text-gray-800">📍 Based in Kingston, Jamaica 🇯🇲</p>
              </div>
            </div>

            {/* Fun Message */}
            <div className="flex justify-start">
              <div className="bg-gray-200 rounded-lg px-4 py-2 max-w-xs shadow-sm">
                <p className="text-sm text-gray-800">🚀 Always excited to discuss new opportunities and cool projects!</p>
              </div>
            </div>

            {/* Response Time */}
            <div className="flex justify-start">
              <div className="bg-gray-200 rounded-lg px-4 py-2 max-w-xs shadow-sm">
                <p className="text-sm text-gray-800">⚡ I typically respond within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Message Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="Send me a message..." 
                className="flex-1 px-3 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition-colors">
                Send
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">Click the links above to get in touch!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactApp;