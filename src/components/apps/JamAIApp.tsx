import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, Sparkles } from "lucide-react";

interface Message {
  id: number;
  sender: "user" | "ai";
  content: string;
  timestamp: Date;
}

const JamAIApp = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ai",
      content: "Hey there! 👋 I'm JamAI, Debra-Kaye's AI assistant. I can tell you about her projects, skills, experience, or just chat! What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickCommands = [
    "Tell me about her projects",
    "What are her skills?",
    "Show her experience",
    "Tell me a fun fact"
  ];

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("project")) {
      return "Debra-Kaye has worked on some amazing projects! Her AI-powered task manager uses LangChain for natural language processing, and she built a real-time chat platform with end-to-end encryption. She's also created a music recommendation engine using ML algorithms. Each project showcases her full-stack skills and AI expertise!";
    }
    
    if (lowerMessage.includes("skill") || lowerMessage.includes("technology")) {
      return "She's got a solid tech stack! Frontend: React, TypeScript, Tailwind CSS. Backend: Node.js, Python, PostgreSQL. AI/ML: LangChain, OpenAI API, TensorFlow. She's also AWS certified and loves working with modern tools like Docker and Figma. Her specialty is definitely in AI engineering!";
    }
    
    if (lowerMessage.includes("experience") || lowerMessage.includes("work")) {
      return "Debra-Kaye is currently a Senior Frontend Developer at TechCorp Inc., where she led development of an AI-powered dashboard that increased user engagement by 40%! Previously, she was at StartupXYZ building scalable chat platforms. She has a CS degree from UC Berkeley and loves mentoring other developers.";
    }
    
    if (lowerMessage.includes("fun") || lowerMessage.includes("interesting")) {
      return "Here's a fun fact: She codes better with jazz music playing! ☕ She drinks 4-6 cups of coffee a day (debugging fuel!), and she's currently diving deep into LangChain. She believes clean code is just as important as clean data. Oh, and she's a Jazmine Sullivan fan! 🎵";
    }
    
    if (lowerMessage.includes("contact") || lowerMessage.includes("hire")) {
      return "Interested in working with her? You can reach out via email at debra@example.com, check out her GitHub, or connect on LinkedIn. She's always open to discussing new opportunities and interesting projects!";
    }
    
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return "Hello! 👋 I'm excited to tell you about Debra-Kaye. She's a talented full-stack developer with a passion for AI. What specific aspect would you like to know about?";
    }
    
    return "That's an interesting question! While I know a lot about Debra-Kaye's professional work and background, I'd recommend reaching out to her directly for more specific details. She's very responsive and loves talking about technology and AI! 🤖";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        sender: "ai",
        content: getAIResponse(inputValue),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickCommand = (command: string) => {
    setInputValue(command);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full text-white">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-4">
        <Bot className="text-purple-300" size={20} />
        <h2 className="text-lg font-bold">JamAI Assistant</h2>
        <Sparkles className="text-yellow-400" size={16} />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-3 mb-4 max-h-80">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <Card className={`max-w-[80%] ${message.sender === 'user' ? 'bg-blue-600/80' : 'bg-white/10'} border-white/20`}>
              <CardContent className="p-3">
                <div className="flex items-start space-x-2">
                  {message.sender === 'ai' ? (
                    <Bot size={16} className="text-purple-300 mt-0.5 flex-shrink-0" />
                  ) : (
                    <User size={16} className="text-blue-300 mt-0.5 flex-shrink-0" />
                  )}
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
                <p className="text-xs text-white/50 mt-2">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-3">
                <div className="flex items-center space-x-2">
                  <Bot size={16} className="text-purple-300" />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Commands */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {quickCommands.map((command, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className="text-xs h-8 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/20"
            onClick={() => handleQuickCommand(command)}
          >
            {command}
          </Button>
        ))}
      </div>

      {/* Input */}
      <div className="flex space-x-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me anything about Debra-Kaye..."
          className="flex-1 bg-white/10 border-white/20 text-white placeholder-white/50 text-sm h-9"
        />
        <Button 
          onClick={handleSendMessage}
          disabled={!inputValue.trim() || isTyping}
          className="bg-purple-600 hover:bg-purple-700 h-9 px-3"
        >
          <Send size={14} />
        </Button>
      </div>
    </div>
  );
};

export default JamAIApp;