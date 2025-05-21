
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckSquare, Settings, ShieldCheck, Globe } from "lucide-react";

const softwareTipCategories = [
  {
    title: "Produktivitäts-Tools",
    icon: <CheckSquare className="h-5 w-5 text-primary" />,
    description: "Diese Tools können deine tägliche Arbeit effizienter gestalten:",
    tips: [
      "Notion: All-in-One Workspace für Notizen, Aufgaben und Projekte",
      "Obsidian: Wissensmanagement mit verknüpften Notizen",
      "Todoist: Aufgabenverwaltung mit Erinnerungen und Prioritäten",
      "Bitwarden: Open-Source Passwort-Manager",
      "ShareX: Leistungsstarkes Screenshot- und Aufnahmetool",
    ],
  },
  {
    title: "Entwickler-Tools",
    icon: <Settings className="h-5 w-5 text-primary" />,
    description: "Nützliche Tools für Entwickler:",
    tips: [
      "VS Code: Leichtgewichtiger, anpassbarer Code-Editor",
      "Insomnia/Postman: API-Entwicklung und -Tests",
      "GitHub Desktop: Benutzerfreundliche Git-Oberfläche",
      "DevToys: Schweizer Taschenmesser für Entwickler",
      "Docker Desktop: Container-Management leicht gemacht",
    ],
  },
  {
    title: "Windows-Optimierungstipps",
    icon: <ShieldCheck className="h-5 w-5 text-primary" />,
    description: "Optimiere dein Windows-System mit diesen Einstellungen:",
    tips: [
      "Deaktiviere unnötige Startprogramme über den Task-Manager",
      "Aktiviere den \"Ultimate Performance\" Energieplan",
      "Deaktiviere visuelle Effekte für bessere Performance",
      "Nutze die integrierte Speicherbereinigung regelmäßig",
      "Aktiviere Hardware-beschleunigte GPU-Planung",
    ],
  },
  {
    title: "Browser-Optimierung",
    icon: <Globe className="h-5 w-5 text-primary" />,
    description: "Verbessere deine Browser-Erfahrung mit diesen Tipps:",
    tips: [
      "Verwende einen Ad-Blocker wie uBlock Origin",
      "Nutze Passwort-Manager-Erweiterungen",
      "Aktiviere Hardware-Beschleunigung in den Browser-Einstellungen",
      "Verwende Tab-Management-Erweiterungen",
      "Bereinige regelmäßig Cache und Cookies",
    ],
  },
];

const TipsSoftware = () => {
  return (
    <div className="space-y-6">
      {softwareTipCategories.map((category, index) => (
        <Card key={index} className="card-hover border-border/50 bg-card/60 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-out">
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-md">{category.icon}</div>
            <CardTitle className="text-xl">{category.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{category.description}</p>
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

export default TipsSoftware;
