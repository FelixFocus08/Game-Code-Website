
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { History, GitCommit, PlusCircle, Wrench, Zap } from "lucide-react";

const changelogData = [
  {
    version: "1.2.0",
    date: "2025-05-19",
    title: "Neue Features & UI-Verbesserungen",
    changes: [
      { type: "new", description: "Partnerseite hinzugefügt, um Kooperationen zu präsentieren." },
      { type: "new", description: "Changelog-Seite implementiert für Update-Transparenz." },
      { type: "new", description: "Social Stats Seite mit Countern für Social Media Accounts (Dummy-Daten)." },
      { type: "improvement", description: "Überarbeitung der Startseite mit neuen Sektionen und visuellen Akzenten." },
      { type: "improvement", description: "Verbesserte Texte und Bilder auf der Homepage." },
      { type: "improvement", description: "Modernisierung der Hero- und Feature-Sektionen." },
      { type: "refactor", description: "TicketList Komponente in kleinere Module aufgeteilt." },
      { type: "fix", description: "Diverse kleinere Bugfixes und Performance-Optimierungen." },
    ],
  },
  {
    version: "1.1.0",
    date: "2025-05-12",
    title: "Benutzerrollen & Admin-Dashboard",
    changes: [
      { type: "new", description: "Admin-, Support- und Moderator-Rollen hinzugefügt." },
      { type: "new", description: "Admin-Dashboard zur Benutzer- und Ticketverwaltung (localStorage)." },
      { type: "new", description: "Registrierungs- und Login-Funktionalität implementiert." },
      { type: "improvement", description: "Ticket-System: Admins/Supporter können Tickets bearbeiten." },
      { type: "improvement", description: "E-Mail-Übersicht für Benutzer mit Rollen im Admin-Panel." },
    ],
  },
  {
    version: "1.0.5",
    date: "2025-05-05",
    title: "Support-Bot & Discord-Integration",
    changes:
      [
        { type: "new", description: "Einfacher Support-Bot für häufige Fragen auf der Ticket-Seite." },
        { type: "new", description: "Discord-Server-Link in Navigation und Footer hinzugefügt." },
        { type: "improvement", description: "Verbesserte Navigation auf Mobilgeräten." },
      ],
  },
  {
    version: "1.0.0",
    date: "2025-04-28",
    title: "Initial-Release",
    changes: [
      { type: "new", description: "Grundstruktur der Web-App mit Gaming-, Coding- und Tipps-Bereichen." },
      { type: "new", description: "Linkbereich für Social Media." },
      { type: "new", description: "Basis-Ticketsystem implementiert (localStorage)." },
      { type: "new", description: "Modernes, responsives Design mit Dark Mode." },
    ],
  },
];

const getChangeIcon = (type) => {
  switch (type) {
    case "new": return <PlusCircle className="h-4 w-4 text-green-500" />;
    case "improvement": return <Zap className="h-4 w-4 text-blue-500" />;
    case "fix": return <Wrench className="h-4 w-4 text-orange-500" />;
    case "refactor": return <GitCommit className="h-4 w-4 text-purple-500" />;
    default: return <GitCommit className="h-4 w-4 text-gray-500" />;
  }
};

const getChangeBadgeVariant = (type) => {
  switch (type) {
    case "new": return "default";
    case "improvement": return "secondary";
    case "fix": return "destructive";
    case "refactor": return "outline";
    default: return "outline";
  }
}

const ChangelogEntry = ({ version, date, title, changes, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative pl-8 py-6 border-l-2 border-primary/50 group"
  >
    <div className="absolute -left-[11px] top-6 w-5 h-5 bg-primary rounded-full border-4 border-background group-hover:scale-110 transition-transform"></div>
    <Card className="border-border/50 bg-card/60 backdrop-blur-md shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
          <CardTitle className="text-2xl text-gradient">{version} - {title}</CardTitle>
          <Badge variant="outline" className="mt-2 sm:mt-0 text-sm">{new Date(date).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {changes.map((change, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="mt-1">{getChangeIcon(change.type)}</span>
              <div>
                <Badge variant={getChangeBadgeVariant(change.type)} className="mr-2 capitalize text-xs">{change.type}</Badge>
                <span className="text-muted-foreground">{change.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </motion.div>
);

const ChangelogPage = () => {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="inline-block p-4 bg-gradient-to-br from-primary to-purple-600 text-primary-foreground rounded-full mb-6 shadow-lg">
          <History className="h-12 w-12" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gradient">
          Changelog & Updates
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Verfolge die neuesten Änderungen, Verbesserungen und neuen Funktionen unserer Plattform. Wir arbeiten ständig daran, GameCodeHub für dich zu optimieren.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {changelogData.map((entry, index) => (
          <ChangelogEntry key={entry.version} {...entry} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ChangelogPage;
