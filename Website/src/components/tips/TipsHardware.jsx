
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Monitor, Cpu } from "lucide-react";

const hardwareTipCategories = [
  {
    title: "PC-Wartung und Optimierung",
    icon: <Wrench className="h-5 w-5 text-primary" />,
    tips: [
      "Reinige deinen PC regelmäßig von Staub (alle 3-6 Monate)",
      "Überprüfe und aktualisiere Treiber (besonders GPU, Mainboard)",
      "Überwache Temperaturen mit Tools wie HWMonitor oder MSI Afterburner",
      "Defragmentiere HDDs regelmäßig (nicht für SSDs notwendig)",
      "Entferne ungenutzte Programme und temporäre Dateien",
    ],
  },
  {
    title: "Peripheriegeräte-Tipps",
    icon: <Monitor className="h-5 w-5 text-primary" />,
    tips: [
      "Kalibriere deinen Monitor für bessere Farbgenauigkeit",
      "Reinige Tastaturen regelmäßig mit Druckluft und Isopropylalkohol",
      "Verwende Mausgleiter für besseres Gleitverhalten",
      "Investiere in ein hochwertiges Headset für bessere Audioqualität",
      "Nutze Kabelmanagement für einen aufgeräumten Arbeitsplatz",
    ],
  },
  {
    title: "Upgrade-Empfehlungen",
    icon: <Cpu className="h-5 w-5 text-primary" />,
    tips: [
      "SSD-Upgrade: Der effektivste Weg, einen älteren PC zu beschleunigen",
      "RAM-Erweiterung: Ideal für Multitasking und anspruchsvolle Anwendungen",
      "GPU-Upgrade: Priorität für Gaming und Grafikbearbeitung",
      "Netzteil: Oft übersehen, aber wichtig für Stabilität und zukünftige Upgrades",
      "Kühlung: Bessere Lüfter oder Wasserkühlung für Übertaktung und Lautstärkereduzierung",
    ],
  },
  {
    title: "Fehlerbehebung",
    icon: <Wrench className="h-5 w-5 text-orange-500" />,
    tips: [
      "PC startet nicht: Überprüfe Stromversorgung, RAM-Sitze und Kabelverbindungen",
      "Bluescreens: Aktualisiere Treiber und überprüfe RAM mit Memtest86",
      "Überhitzung: Reinige Lüfter und erneuere Wärmeleitpaste",
      "Langsame Leistung: Überprüfe Hintergrundprozesse und Malware",
      "Netzwerkprobleme: Überprüfe Router, Kabel und Treiber",
    ],
  },
];

const TipsHardware = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {hardwareTipCategories.map((category, index) => (
        <Card key={index} className="card-hover border-border/50 bg-card/60 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-out">
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-md">{category.icon}</div>
            <CardTitle className="text-xl">{category.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              {category.tips.map((tip, tipIndex) => (
                <li key={tipIndex} className="flex items-start gap-2">
                  <div className="h-2 w-2 flex-shrink-0 rounded-full bg-primary mt-[7px]"></div>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TipsHardware;
