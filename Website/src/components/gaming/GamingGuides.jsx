
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const guides = [
  {
    title: "Einsteiger-Guide: Battle Royale Spiele",
    content: "Battle Royale Spiele sind nach wie vor eines der beliebtesten Genres. Hier sind einige Tipps für Einsteiger:",
    points: [
      "Lande zunächst in ruhigeren Gebieten, um Ausrüstung zu sammeln",
      "Lerne die Karte und wichtige Positionen kennen",
      "Übe das Zielen und die Waffenkontrolle im Trainingsmodus",
      "Bewege dich mit dem Kreis und achte auf deine Umgebung",
      "Kommuniziere effektiv mit deinem Team",
    ],
  },
  {
    title: "Optimiere deine Gaming-Hardware",
    content: "Die richtige Hardware kann dein Spielerlebnis erheblich verbessern. Hier sind einige Tipps zur Optimierung:",
    points: [
      "Aktualisiere regelmäßig deine Grafiktreiber",
      "Optimiere die In-Game-Einstellungen für die beste Balance zwischen Leistung und Grafik",
      "Investiere in einen Gaming-Monitor mit hoher Bildwiederholrate",
      "Stelle sicher, dass dein PC ausreichend gekühlt wird",
      "Verwende eine kabelgebundene Verbindung für stabileres Online-Gaming",
    ],
  },
  {
    title: "MMORPG: Vom Anfänger zum Profi",
    content: "MMORPGs bieten riesige Welten und komplexe Systeme. Hier ist, wie du schnell vorankommst:",
    points: [
      "Wähle eine Klasse, die zu deinem Spielstil passt",
      "Schließe dich einer aktiven Gilde an",
      "Nutze Guides und Wikis, um komplexe Mechaniken zu verstehen",
      "Setze dir kurzfristige und langfristige Ziele",
      "Lerne die Ökonomie des Spiels kennen",
    ],
  },
  {
    title: "Strategiespiele: Taktiken für den Sieg",
    content: "Strategiespiele erfordern Planung und Übersicht. Diese Tipps helfen dir, deine Gegner zu besiegen:",
    points: [
      "Lerne die Stärken und Schwächen aller Einheiten",
      "Optimiere deine Ressourcenverwaltung",
      "Erkunde die Karte frühzeitig",
      "Entwickle flexible Strategien, die du an die Situation anpassen kannst",
      "Analysiere deine Niederlagen, um daraus zu lernen",
    ],
  },
];

const GamingGuides = () => {
  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="w-full space-y-4">
        {guides.map((guide, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`} className="border-border/50 bg-card/60 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <AccordionTrigger className="p-6 text-lg hover:no-underline">
              {guide.title}
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0">
              <div className="space-y-4">
                <p className="text-muted-foreground">{guide.content}</p>
                <ul className="space-y-2">
                  {guide.points.map((point, pIndex) => (
                    <li key={pIndex} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button variant="outline" size="sm">Vollständigen Guide lesen</Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default GamingGuides;
