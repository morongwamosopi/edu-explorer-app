import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MobileFrame } from "@/components/ui/MobileFrame";
import { BottomNav } from "@/components/ui/BottomNav";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mic, MicOff, Send, Sparkles, Camera, Image, Volume2 } from "lucide-react";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

const AITutor = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content: "Hi there! 👋 I'm your AI learning assistant. Ask me anything about Maths, Reading, Languages, or Writing! You can type, speak, or even upload a picture of your question.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Great question! Let me break this down step by step for you... 📚\n\nFirst, let's understand the basics. When we add fractions, we need to make sure the denominators are the same. If they're not, we find a common denominator first!",
        "I can help with that! 🌟\n\nHere's a simple way to think about it: imagine you have a pizza cut into equal slices...",
        "That's a wonderful question! Let me explain in a way that's easy to understand... ✨",
      ];
      const aiMessage: Message = {
        id: Date.now(),
        role: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)],
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simulate voice recognition
      setTimeout(() => {
        setInput("How do I add fractions?");
        setIsListening(false);
      }, 2000);
    }
  };

  return (
    <MobileFrame>
      <div className="min-h-screen flex flex-col bg-background">
        {/* Header */}
        <header className="safe-area-top px-6 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/home")}
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 flex-1">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center animate-float">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h1 className="font-bold">AI Learning Assistant</h1>
                <p className="text-xs opacity-90">Ask anything, in any language!</p>
              </div>
            </div>
          </div>
        </header>

        {/* Messages */}
        <main className="flex-1 overflow-y-auto p-4 space-y-4 pb-32">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-slide-up`}
            >
              <div
                className={`max-w-[85%] p-4 rounded-2xl ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-secondary text-secondary-foreground rounded-bl-md"
                }`}
              >
                <p className="text-sm whitespace-pre-line">{message.content}</p>
                {message.role === "assistant" && (
                  <button className="mt-2 flex items-center gap-1 text-xs opacity-70 hover:opacity-100 transition-opacity">
                    <Volume2 className="w-4 h-4" />
                    Listen
                  </button>
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-secondary p-4 rounded-2xl rounded-bl-md">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </main>

        {/* Input Area */}
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-full max-w-[390px] p-4 glass border-t border-border/50">
          {/* Quick Actions */}
          <div className="flex gap-2 mb-3">
            <button className="flex items-center gap-1 px-3 py-1.5 bg-secondary rounded-full text-xs font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors">
              <Camera className="w-3.5 h-3.5" />
              Photo
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 bg-secondary rounded-full text-xs font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors">
              <Image className="w-3.5 h-3.5" />
              Upload
            </button>
          </div>

          {/* Input */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleListening}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                isListening
                  ? "bg-destructive text-destructive-foreground animate-pulse"
                  : "bg-muted text-muted-foreground hover:bg-secondary"
              }`}
            >
              {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 h-12 px-4 bg-muted rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button
              onClick={handleSend}
              disabled={!input.trim()}
              className="w-12 h-12 rounded-full p-0"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <BottomNav />
      </div>
    </MobileFrame>
  );
};

export default AITutor;
