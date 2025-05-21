
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

const gamingTips = [
  {
    title: "Optimiere deine Gaming-Performance",
    content: "Mit diesen Tipps kannst du die Performance deines Gaming-Systems verbessern:",
    points: [
      "Aktualisiere regelmäßig deine Grafiktreiber für optimale Leistung",
      "Schließe Hintergrundprogramme, die Ressourcen verbrauchen",
      "Aktiviere den \"Game Mode\" in Windows",
      "Optimiere die In-Game-Einstellungen (reduziere Schatten, Reflexionen und Partikeleffekte)",
      "Verwende eine SSD für schnellere Ladezeiten",
      "Stelle sicher, dass dein PC ausreichend gekühlt wird",
      "Deaktiviere unnötige visuelle Effekte im Betriebssystem",
    ],
  },
  {
    title: "Verbessere deine Aim in Shootern",
    content: "Diese Übungen und Einstellungen können dir helfen, deine Zielgenauigkeit zu verbessern:",
    points: [
      "Finde die richtige Mausempfindlichkeit (DPI und In-Game-Sensitivität)",
      "Übe regelmäßig in Aim-Trainern wie Aim Lab oder KovaaK's",
      "Konzentriere dich auf Kopfhöhe und Vorpositionierung deines Fadenkreuzes",
      "Trainiere verschiedene Bewegungsmuster: Tracking, Flicking und Target Switching",
      "Verwende eine große Mausmatte für mehr Bewegungsfreiheit",
      "Achte auf eine ergonomische Sitzposition",
      "Spiele mit konstanten FPS für ein konsistentes Gefühl",
    ],
  },
  {
    title: "Strategien für Battle Royale Spiele",
    content: "Mit diesen Strategien kannst du deine Gewinnchancen in Battle Royale Spielen erhöhen:",
    points: [
      "Wähle deine Landezone strategisch (Balance zwischen Loot und Gegnern)",
      "Priorisiere Positionierung über aggressive Spielweise",
      "Bewege dich früh mit dem Kreis und sichere dir vorteilhafte Positionen",
      "Lerne die Meta-Waffen und optimale Loadouts kennen",
      "Nutze Audio-Cues, um Gegner zu lokalisieren",
      "Analysiere deine Tode und lerne aus Fehlern",
      "Spiele als Team und kommuniziere effektiv",
    ],
  },
  {
    title: "Effizientes Leveln in RPGs",
    content: "So kommst du in Rollenspielen schneller voran:",
    points: [
      "Fokussiere dich auf Hauptquests für schnellen Fortschritt",
      "Nutze XP-Boosts und Events optimal aus",
      "Finde effiziente Farming-Spots für Ressourcen und Erfahrung",
      "Optimiere deine Ausrüstung für maximale Effizienz",
      "Schließe dich einer aktiven Gilde oder Gruppe an",
      "Plane deine Charakterentwicklung im Voraus",
      "Nutze Guides und Wikis für komplexe Inhalte",
    ],
  },
];

const TipsGaming = () => {
  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="w-full space-y-4">
        {gamingTips.map((tip, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`} className="border-border/50 bg-card/60 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <AccordionTrigger className="p-6 text-lg hover:no-underline text-left">
              {tip.title}
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0">
              <div className="space-y-4">
                <p className="text-muted-foreground">{tip.content}</p>
                <ul className="space-y-2">
                  {tip.points.map((point, pIndex) => (
                    <li key={pIndex} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default TipsGaming;
