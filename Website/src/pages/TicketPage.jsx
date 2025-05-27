import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TicketForm from "@/components/TicketForm";
import TicketList from "@/components/TicketList";
import SupportBot from "@/components/SupportBot";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight, LifeBuoy } from "lucide-react";
import { Link } from "react-router-dom";

const TicketPage = () => {
  const [activeTab, setActiveTab] = useState("create");
  const [showBot, setShowBot] = useState(false);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  
  const tabContentVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeInOut" } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const faqItems = [
    { q: "Wie schnell erhalte ich eine Antwort?", a: "Wir bemühen uns, alle Tickets innerhalb von 24-48 Stunden zu beantworten. Für schnellere Hilfe, versuche unseren Support-Bot!" },
    { q: "Welche Informationen sollte ich angeben?", a: "Je detaillierter deine Beschreibung, desto besser können wir dir helfen. Bei technischen Problemen gib bitte Systemspezifikationen und Fehlermeldungen an." },
    { q: "Kann ich Dateien anhängen?", a: "Aktuell unterstützen wir keine Dateianhänge. Bitte füge Screenshots oder relevante Informationen direkt in deine Nachricht ein." },
    { q: "Wie kann ich den Status meines Tickets überprüfen?", a: "Du kannst den Status deiner Tickets im Tab \"Meine Tickets\" einsehen." },
    { q: "Community-Support", isLink: true, linkText: "Hilfe von unserer Community auf Discord erhalten.", discordLink: "https://discord.gg/6ZPskNPHXC" },
  ];

  return (
    <motion.div 
      className="space-y-10"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={itemVariants}>
        <div className="relative rounded-xl overflow-hidden shadow-2xl group">
          <div className="absolute inset-0">
            <img-replace alt="Support Ticket Banner mit Headset und Tastatur" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent opacity-95 group-hover:opacity-90 transition-opacity duration-500"></div>
          </div>
          
          <div className="relative p-8 md:p-12 lg:p-20 min-h-[350px] md:min-h-[450px] flex flex-col justify-center">
            <motion.div 
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <LifeBuoy className="h-14 w-14 text-primary mr-5 animate-spin-slow" />
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-gradient">
                Support-Center
              </h1>
            </motion.div>
            <motion.p 
              className="max-w-3xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Erstelle ein Ticket für deine Fragen, Probleme oder Anregungen. Unser Team wird sich so schnell wie möglich bei dir melden. Du kannst auch unseren Support-Bot für schnelle Hilfe nutzen.
            </motion.p>
             <motion.div 
              className="flex flex-wrap gap-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button 
                onClick={() => setActiveTab("create")}
                size="xl" 
                className="group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-lg px-10 py-4 shadow-lg hover:shadow-2xl transition-all duration-300"
                motionProps={{ whileHover: { scale: 1.05, y: -2 }, whileTap: { scale: 0.95 } }}
              >
                Neues Ticket erstellen <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      <motion.div className="container mx-auto px-0 md:px-4" variants={itemVariants}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-10 bg-card/80 backdrop-blur-md p-2 rounded-xl shadow-lg border border-border/60">
            <TabsTrigger value="create" className="text-base font-medium py-3.5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-purple-600 data-[state=active]:text-primary-foreground data-[state=active]:shadow-xl data-[state=active]:scale-105 transition-all duration-300 rounded-lg hover:bg-muted/80 data-[state=active]:hover:opacity-95">
              Ticket erstellen
            </TabsTrigger>
            <TabsTrigger value="view" className="text-base font-medium py-3.5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-purple-600 data-[state=active]:text-primary-foreground data-[state=active]:shadow-xl data-[state=active]:scale-105 transition-all duration-300 rounded-lg hover:bg-muted/80 data-[state=active]:hover:opacity-95">
              Meine Tickets
            </TabsTrigger>
          </TabsList>
          
          <AnimatePresence mode="wait">
            <TabsContent key={activeTab} value="create" forceMount={activeTab === "create"}>
              {activeTab === "create" && (
                <motion.div
                  variants={tabContentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <div className="grid gap-10 md:grid-cols-3">
                    <div className="md:col-span-2">
                      <TicketForm />
                    </div>
                    
                    <motion.div 
                      className="space-y-6 p-6 rounded-xl border border-border/50 bg-card/70 backdrop-blur-lg shadow-xl"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <h2 className="text-2xl font-bold mb-4 text-gradient">FAQ & Direkthilfe</h2>
                      
                      <Button 
                        onClick={() => setShowBot(true)} 
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg py-6 shadow-md"
                        motionProps={{ whileHover: { scale: 1.03, y: -1 }, whileTap: { scale: 0.98 } }}
                      >
                        <MessageSquare className="mr-2.5 h-5 w-5" /> Support-Bot starten
                      </Button>

                      {faqItems.map((item, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + idx * 0.05 }}
                          className="pt-4 border-t border-border/40 first:border-t-0 first:pt-0"
                        >
                          <h3 className="font-semibold mb-1.5 text-foreground">{item.q}</h3>
                          {item.isLink ? (
                             <p className="text-sm text-muted-foreground">
                              {item.linkText} <a href={item.discordLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Hier klicken</a>.
                            </p>
                          ) : (
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                          )}
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </TabsContent>
            
            <TabsContent key={activeTab} value="view" forceMount={activeTab === "view"}>
              {activeTab === "view" && (
                <motion.div
                  variants={tabContentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <TicketList />
                </motion.div>
              )}
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </motion.div>
      {/* SupportBot wird jetzt global im Layout verwaltet und hier nicht mehr direkt eingebunden */}
    </motion.div>
  );
};

export default TicketPage;