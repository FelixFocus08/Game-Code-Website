import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Zap, Github } from "lucide-react";

const projectIdeas = [
  {
    title: "Persönliches Portfolio-Website",
    description: "Erstelle eine dynamische Portfolio-Website mit React und Framer Motion, um deine Projekte und Fähigkeiten zu präsentieren.",
    difficulty: "Mittel",
    tags: ["React", "Frontend", "Framer Motion", "UI/UX"],
    imgSrc: "https://images.unsplash.com/photo-1555099962-4199c345e546",
    imgAlt: "Laptop mit Code für eine Portfolio-Website",
  },
  {
    title: "Aufgaben-Manager (To-Do App)",
    description: "Entwickle eine To-Do-App mit Funktionen wie Priorisierung, Fälligkeitsdaten und Benutzerauthentifizierung (z.B. mit localStorage oder Supabase).",
    difficulty: "Einsteiger",
    tags: ["JavaScript", "CRUD", "State Management", "Auth"],
    imgSrc: "https://images.unsplash.com/photo-1522199670076-2852f80289c3",
    imgAlt: "Notizblock mit einer To-Do-Liste",
  },
  {
    title: "Wetter-App mit API-Integration",
    description: "Baue eine Wetter-App, die aktuelle Wetterdaten von einer externen API (z.B. OpenWeatherMap) abruft und ansprechend darstellt.",
    difficulty: "Mittel",
    tags: ["API", "Async JavaScript", "Datenvisualisierung", "Frontend"],
    imgSrc: "https://images.unsplash.com/photo-1530569677193-16817f82dff0",
    imgAlt: "Smartphone-Bildschirm mit einer Wettervorhersage-App",
  },
  {
    title: "E-Commerce Produktseite",
    description: "Gestalte eine detaillierte Produktseite für einen fiktiven Online-Shop mit Bildgalerie, Produktvarianten und Warenkorb-Funktionalität (Client-seitig).",
    difficulty: "Fortgeschritten",
    tags: ["React", "E-Commerce", "UI Design", "State Management"],
    imgSrc: "https://images.unsplash.com/photo-1585150478350-14ac2595319a",
    imgAlt: "Nahaufnahme eines Online-Shops auf einem Tablet",
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
               <img  src={project.imgSrc} alt={project.imgAlt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1699304296669-ccf495d8c952" />
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