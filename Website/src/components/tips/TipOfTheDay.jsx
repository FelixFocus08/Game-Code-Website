
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const allTips = [
  { title: "Tastaturkürzel meistern", description: "Lerne die wichtigsten Tastaturkürzel für deine meistgenutzten Programme. Dies kann deine Arbeitsgeschwindigkeit erheblich steigern." },
  { title: "Regelmäßige Pausen", description: "Mache alle 25-50 Minuten kurze Pausen (Pomodoro-Technik), um deine Konzentration und Produktivität aufrechtzuerhalten." },
  { title: "Backup-Strategie", description: "Erstelle regelmäßige Backups deiner wichtigen Daten. Nutze Cloud-Speicher oder externe Festplatten." },
  { title: "Zwei-Faktor-Authentifizierung", description: "Aktiviere 2FA für alle deine Online-Konten, um die Sicherheit deutlich zu erhöhen." },
  { title: "Clean Desk Policy", description: "Ein aufgeräumter Arbeitsplatz fördert einen klaren Geist und bessere Konzentration." },
  { title: "Lerne täglich etwas Neues", description: "Nimm dir jeden Tag 15-30 Minuten Zeit, um etwas Neues in deinem Interessengebiet zu lernen. Kleine Schritte führen zu großem Fortschritt." },
  { title: "Netzwerken", description: "Baue aktiv dein berufliches und privates Netzwerk auf. Kontakte können Türen öffnen und neue Perspektiven bieten." },
  { title: "Ausreichend Schlaf", description: "Sorge für 7-9 Stunden Schlaf pro Nacht. Guter Schlaf ist essentiell für kognitive Funktionen und Wohlbefinden." },
  { title: "Digitale Detox-Zeiten", description: "Plane regelmäßige Zeiten ohne Bildschirme ein, um deine Augen zu schonen und mental abzuschalten." },
  { title: "Wasser trinken", description: "Trinke ausreichend Wasser über den Tag verteilt, um hydriert zu bleiben und deine Leistungsfähigkeit zu unterstützen." },
];

const TipOfTheDay = () => {
  const [currentTip, setCurrentTip] = useState(allTips[0]);
  const [showTip, setShowTip] = useState(true);

  const getRandomTip = () => {
    setShowTip(false);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * allTips.length);
      setCurrentTip(allTips[randomIndex]);
      setShowTip(true);
    }, 300); // Duration of exit animation
  };

  useEffect(() => {
    getRandomTip(); // Load initial random tip
  }, []);

  return (
    <section className="py-12">
      <Card className="border-border/50 bg-card/60 backdrop-blur-sm shadow-xl overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-muted/30 p-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-full shadow-md">
              <Lightbulb className="h-6 w-6" />
            </div>
            <CardTitle className="text-2xl text-gradient from-yellow-400 to-orange-500">Tipp des Tages</CardTitle>
          </div>
          <Button variant="ghost" size="icon" onClick={getRandomTip} aria-label="Neuer Tipp">
            <RefreshCw className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Button>
        </CardHeader>
        <CardContent className="p-6 min-h-[150px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {showTip && (
              <motion.div
                key={currentTip.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold mb-2 text-foreground">{currentTip.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{currentTip.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </section>
  );
};

export default TipOfTheDay;
