import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Zap } from "lucide-react";

const projectIdeas = [
  {
    title: "Persönliches Portfolio-Website",
    description: "Erstelle eine dynamische Portfolio-Website mit React und Framer Motion, um deine Projekte und Fähigkeiten zu präsentieren.",
    difficulty: "Mittel",
    tags: ["React", "Frontend", "Framer Motion", "UI/UX"],
    imgAlt: "Laptop mit Code für eine Portfolio-Website",
    imageDescription: "Eine moderne Portfolio Webseite auf einem Laptop Display, die verschiedene Projekte und Fähigkeiten ansprechend darstellt."
  },
  {
    title: "Aufgaben-Manager (To-Do App)",
    description: "Entwickle eine To-Do-App mit Funktionen wie Priorisierung, Fälligkeitsdaten und Benutzerauthentifizierung (z.B. mit localStorage oder Supabase).",
    difficulty: "Einsteiger",
    tags: ["JavaScript", "CRUD", "State Management", "Auth"],
    imgAlt: "Notizblock mit einer To-Do-Liste",
    imageDescription: "Ein Notizblock mit einer handgeschriebenen To-Do-Liste, Stift daneben, symbolisiert Aufgabenmanagement."
  },
  {
    title: "Wetter-App mit API-Integration",
    description: "Baue eine Wetter-App, die aktuelle Wetterdaten von einer externen API (z.B. OpenWeatherMap) abruft und ansprechend darstellt.",
    difficulty: "Mittel",
    tags: ["API", "Async JavaScript", "Datenvisualisierung", "Frontend"],
    imgAlt: "Smartphone-Bildschirm mit einer Wettervorhersage-App",
    imageDescription: "Ein Smartphone zeigt eine Wetter-App mit sonnigem Himmel und Temperaturanzeige für eine Stadt."
  },
  {
    title: "E-Commerce Produktseite",
    description: "Gestalte eine detaillierte Produktseite für einen fiktiven Online-Shop mit Bildgalerie, Produktvarianten und Warenkorb-Funktionalität (Client-seitig).",
    difficulty: "Fortgeschritten",
    tags: ["React", "E-Commerce", "UI Design", "State Management"],
    imgAlt: "Nahaufnahme eines Online-Shops auf einem Tablet",
    imageDescription: "Ein Tablet zeigt eine E-Commerce Produktseite mit einem Sneaker, Preis und 'In den Warenkorb'-Button."
  },
];

const CodingProjectIdeas = () => {
  return (
    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
      {projectIdeas.map((project, index) => (
        <Card key={index} className="card-hover border-border/50 bg-card/70 backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-out flex flex-col group transform hover:-translate-y-1">
          <CardHeader className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Lightbulb className="h-8 w-8 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
              <Badge variant={project.difficulty === "Einsteiger" ? "default" : project.difficulty === "Mittel" ? "secondary" : "destructive"} className="group-hover:scale-105 transition-transform">
                {project.difficulty}
              </Badge>
            </div>
            <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0 flex-grow">
            <div className="aspect-[16/10] rounded-md overflow-hidden mb-4 shadow-inner">
               <img  alt={project.imgAlt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
            </div>
            <CardDescription className="text-muted-foreground text-sm leading-relaxed mb-4 min-h-[40px]">
              {project.description}
            </CardDescription>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs group-hover:border-primary/50 group-hover:text-primary transition-colors">{tag}</Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0 border-t border-border/30 mt-auto">
            <Button variant="default" size="sm" className="w-full group/button bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
              <Zap size={16} className="mr-2 transition-transform duration-300 group-hover/button:rotate-[360deg] group-hover/button:scale-125" />
              Projekt starten
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CodingProjectIdeas;