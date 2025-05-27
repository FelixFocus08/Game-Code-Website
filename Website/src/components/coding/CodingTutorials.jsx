import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";

const tutorialItems = [
  {
    title: "React für Einsteiger: Dein erstes Projekt",
    description: "Lerne die Grundlagen von React, erstelle Komponenten und manage State in deinem ersten interaktiven Webprojekt.",
    imgAlt: "React Logo auf abstraktem Hintergrund",
    imageDescription: "Das React-Logo leuchtet blau auf einem dunklen, abstrakten Hintergrund mit Code-Fragmenten.",
    tags: ["React", "JavaScript", "Frontend"],
    duration: "2 Std.",
    level: "Einsteiger",
    link: "/coding/tutorials/react-basics",
  },
  {
    title: "Python Masterclass: Von Null zum Profi",
    description: "Ein umfassender Kurs, der dich von den Python-Grundlagen bis zu fortgeschrittenen Konzepten wie OOP und Datenanalyse führt.",
    imgAlt: "Python Code auf einem dunklen Bildschirm",
    imageDescription: "Ein Monitor zeigt Python-Codezeilen mit farbiger Syntaxhervorhebung auf einem dunklen Theme.",
    tags: ["Python", "Backend", "Data Science"],
    duration: "10 Std.",
    level: "Alle Level",
    link: "/coding/tutorials/python-masterclass",
  },
  {
    title: "Node.js & Express: Baue deine erste API",
    description: "Erstelle eine performante REST-API mit Node.js und dem Express-Framework. Inklusive Datenbankanbindung.",
    imgAlt: "Node.js Logo und Server-Infrastruktur Grafik",
    imageDescription: "Das Node.js-Logo ist neben einer stilisierten Darstellung von Server-Racks und Netzwerkverbindungen abgebildet.",
    tags: ["Node.js", "Express", "API", "Backend"],
    duration: "4 Std.",
    level: "Fortgeschritten",
    link: "/coding/tutorials/nodejs-express-api",
  },
  {
    title: "TailwindCSS: Modernes UI-Design meistern",
    description: "Lerne, wie du mit TailwindCSS schnell ansprechende und responsive User Interfaces erstellst, ohne CSS zu verlassen.",
    imgAlt: "TailwindCSS Logo mit Farbpalette",
    imageDescription: "Das TailwindCSS-Logo schwebt über einer Palette von Blautönen, die typisch für das Framework sind.",
    tags: ["TailwindCSS", "CSS", "Frontend", "UI/UX"],
    duration: "3 Std.",
    level: "Einsteiger",
    link: "/coding/tutorials/tailwindcss-design",
  },
];

const CodingTutorials = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {tutorialItems.map((item, index) => (
        <Card key={index} className="card-hover border-border/50 bg-card/70 backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-out flex flex-col group transform hover:-translate-y-1">
          <CardHeader className="p-0 relative">
            <div className="aspect-video overflow-hidden">
              <img  alt={item.imgAlt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                <CardTitle className="text-xl text-white group-hover:text-primary transition-colors">{item.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-6 flex-grow">
            <CardDescription className="text-muted-foreground mb-4 text-sm leading-relaxed min-h-[60px]">
              {item.description}
            </CardDescription>
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs group-hover:bg-primary/20 group-hover:text-primary transition-colors">{tag}</Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0 border-t border-border/30 mt-auto">
            <div className="flex justify-between items-center w-full">
              <div className="text-xs text-muted-foreground flex items-center gap-4">
                <span className="flex items-center"><Clock size={14} className="mr-1" /> {item.duration}</span>
                <span className="flex items-center"><BarChart2 size={14} className="mr-1" /> {item.level}</span>
              </div>
              <Button variant="ghost" size="sm" asChild className="group-hover:text-primary">
                <Link to={item.link}>
                  Details <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CodingTutorials;