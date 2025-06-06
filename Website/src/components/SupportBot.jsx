import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { X, Send, Bot, User, MessageSquare, HelpCircle, BookOpen, Users } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const botResponses = {
  "hallo": "Hallo! Wie kann ich dir heute helfen?",
  "hilfe": "Gerne! Was ist dein Problem? Du kannst nach 'Passwort vergessen', 'Account gesperrt', 'Problem melden', 'FAQ', 'Glossar' oder 'Community Richtlinien' fragen.",
  "passwort vergessen": "Kein Problem. Um dein Passwort zurückzusetzen, gehe bitte zu [Link zur Passwort-Reset-Seite einfügen] und folge den Anweisungen.",
  "account gesperrt": "Ich verstehe. Bitte kontaktiere unseren Support direkt über das Ticketsystem, damit wir deinen Account überprüfen können.",
  "problem melden": "Bitte beschreibe dein Problem so detailliert wie möglich. Welche Schritte hast du bereits unternommen? Du kannst auch ein Ticket erstellen.",
  "danke": "Gern geschehen! Wenn du weitere Fragen hast, sag einfach Bescheid.",
  "gaming": "Gaming ist super! Hast du eine spezifische Frage zu einem Spiel, Hardware oder Einstellungen? Schau auch mal in unsere <a href='/gaming' class='text-primary hover:underline'>Gaming-Sektion</a> oder die <a href='/faq' class='text-primary hover:underline'>FAQ</a>.",
  "coding": "Coding kann knifflig sein. Suchst du nach Tutorials, Ressourcen oder hast du ein spezifisches Programmierproblem? Besuche unsere <a href='/coding' class='text-primary hover:underline'>Coding-Sektion</a> oder das <a href='/glossary' class='text-primary hover:underline'>Glossar</a>.",
  "tipps": "Wir haben viele Tipps & Tricks! Zu welchem Thema suchst du Ratschläge: Gaming, Coding, Hardware oder Software? Schau auf unserer <a href='/tips' class='text-primary hover:underline'>Tipps-Seite</a> vorbei.",
  "discord": "Unseren Discord-Server findest du hier: https://discord.gg/6ZPskNPHXC. Tritt gerne bei!",
  "faq": "Unsere <a href='/faq' class='text-primary hover:underline'>FAQ-Seite</a> beantwortet viele häufig gestellte Fragen. Schau doch mal rein!",
  "glossar": "Begriffe unklar? Unser <a href='/glossary' class='text-primary hover:underline'>Glossar</a> erklärt wichtige Begriffe aus Gaming und Coding.",
  "community richtlinien": "Für ein faires Miteinander haben wir <a href='/community-guidelines' class='text-primary hover:underline'>Community-Richtlinien</a>. Bitte lies sie dir durch.",
  "default": "Das habe ich leider nicht verstanden. Kannst du es anders formulieren? Du kannst auch 'Hilfe' eingeben, um Optionen zu sehen oder eine der Fragen unten auswählen."
};

const predefinedQuestions = [
  { id: "q1", text: "Passwort vergessen?", query: "passwort vergessen" },
  { id: "q2", text: "Was steht in der FAQ?", query: "faq" },
  { id: "q3", text: "Coding-Begriffe erklärt?", query: "glossar" },
  { id: "q4", text: "Community Regeln?", query: "community richtlinien" },
  { id: "q5", text: "Link zum Discord Server?", query: "discord" },
];

const SupportBot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hallo! Ich bin dein Support-Assistent. Wie kann ich dir helfen? Du kannst eine Frage stellen oder eine der Optionen unten wählen." }
  ]);
  const [inputValue, setInputValue] = useState("");
  const scrollAreaRef = useRef(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    const userMessage = { sender: "user", text: text.trim() };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const lowerCaseInput = text.trim().toLowerCase();
    let botReplyText = botResponses.default;

    for (const keyword in botResponses) {
      if (lowerCaseInput.includes(keyword)) {
        botReplyText = botResponses[keyword];
        break;
      }
    }
    
    setTimeout(() => {
      const botMessage = { sender: "bot", text: botReplyText };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 700);

    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  const handlePredefinedQuestionClick = (query) => {
    handleSendMessage(query);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <Card className="w-full max-w-md shadow-2xl border-border/50 bg-card/80 backdrop-blur-lg">
          <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-border/50">
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-primary" />
              <CardTitle className="text-lg">Support Bot</CardTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} aria-label="Support-Bot schließen">
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea ref={scrollAreaRef} className="h-[350px] p-4">
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className={`flex items-end gap-2 ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.sender === "bot" && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          <Bot className="h-5 w-5" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`max-w-[75%] rounded-lg px-3 py-2 text-sm ${
                        msg.sender === "user"
                          ? "bg-primary text-primary-foreground rounded-br-none"
                          : "bg-muted text-muted-foreground rounded-bl-none"
                      }`}
                      dangerouslySetInnerHTML={{ __html: msg.text }} 
                    />
                    {msg.sender === "user" && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          <User className="h-5 w-5" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="p-4 border-t border-border/50">
            <div className="w-full space-y-2">
                <div className="flex flex-wrap gap-2 mb-2">
                    {predefinedQuestions.map((q) => (
                        <Button 
                            key={q.id} 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handlePredefinedQuestionClick(q.query)}
                            className="text-xs"
                        >
                            {q.text}
                        </Button>
                    ))}
                </div>
                <form onSubmit={handleFormSubmit} className="flex items-center gap-2">
                <Input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Schreibe eine Nachricht..."
                    className="flex-1"
                    aria-label="Nachricht eingeben"
                />
                <Button type="submit" size="icon" aria-label="Nachricht senden">
                    <Send className="h-4 w-4" />
                </Button>
                </form>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};

export default SupportBot;