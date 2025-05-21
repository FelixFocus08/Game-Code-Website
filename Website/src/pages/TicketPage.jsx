import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TicketForm from "@/components/TicketForm";
import TicketList from "@/components/TicketList";
import SupportBot from "@/components/SupportBot";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const TicketPage = () => {
  const [activeTab, setActiveTab] = useState("create");
  const [showBot, setShowBot] = useState(false);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute inset-0">
            <img  alt="Support Ticket Banner" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1599326014852-e083419b6f65" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20"></div>
          </div>
          
          <div className="relative p-8 md:p-12 lg:p-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Ticket-System
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground mb-8">
              Erstelle ein Ticket für deine Fragen, Probleme oder Anregungen. Unser Team wird sich so schnell wie möglich bei dir melden. Du kannst auch unseren Support-Bot für schnelle Hilfe nutzen.
            </p>
          </div>
        </div>
      </motion.div>
      
      <div className="container mx-auto px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="create">Ticket erstellen</TabsTrigger>
            <TabsTrigger value="view">Meine Tickets</TabsTrigger>
          </TabsList>
          
          <TabsContent value="create">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid gap-8 md:grid-cols-3">
                <div className="md:col-span-2">
                  <TicketForm />
                </div>
                
                <div>
                  <div className="rounded-lg border border-border/50 bg-card/50 p-6 shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">FAQ & Direkthilfe</h2>
                    
                    <div className="space-y-4">
                      <Button 
                        onClick={() => setShowBot(true)} 
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      >
                        <MessageSquare className="mr-2 h-4 w-4" /> Support-Bot starten
                      </Button>
                      <div className="mt-4">
                        <h3 className="font-semibold mb-1">Wie schnell erhalte ich eine Antwort?</h3>
                        <p className="text-sm text-muted-foreground">
                          Wir bemühen uns, alle Tickets innerhalb von 24-48 Stunden zu beantworten. Für schnellere Hilfe, versuche unseren Support-Bot!
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-1">Welche Informationen sollte ich angeben?</h3>
                        <p className="text-sm text-muted-foreground">
                          Je detaillierter deine Beschreibung, desto besser können wir dir helfen. Bei technischen Problemen gib bitte Systemspezifikationen und Fehlermeldungen an.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-1">Kann ich Dateien anhängen?</h3>
                        <p className="text-sm text-muted-foreground">
                          Aktuell unterstützen wir keine Dateianhänge. Bitte füge Screenshots oder relevante Informationen direkt in deine Nachricht ein.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-1">Wie kann ich den Status meines Tickets überprüfen?</h3>
                        <p className="text-sm text-muted-foreground">
                          Du kannst den Status deiner Tickets im Tab "Meine Tickets" einsehen.
                        </p>
                      </div>

                       <div>
                        <h3 className="font-semibold mb-1">Community-Support</h3>
                        <p className="text-sm text-muted-foreground">
                          Du kannst auch Hilfe von unserer Community auf Discord erhalten. Klicke <a href="https://discord.gg/6ZPskNPHXC" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">hier</a>, um unserem Server beizutreten.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="view">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TicketList />
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
      {showBot && <SupportBot onClose={() => setShowBot(false)} />}
    </div>
  );
};

export default TicketPage;