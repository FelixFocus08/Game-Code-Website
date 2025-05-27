import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    title: "Die neuesten Gaming-Trends 2025",
    date: "15. Mai 2025",
    description: "Entdecke die neuesten Trends in der Gaming-Welt, von Virtual Reality bis hin zu Cloud-Gaming und was die Zukunft für Gamer bereithält.",
    imgAlt: "Abstrakte Darstellung von Gaming-Trends mit Neonlichtern",
    imageDescription: "Eine futuristische Darstellung von Gaming-Trends mit Neonlichteffekten, VR-Brillen und Cloud-Symbolen."
  },
  {
    title: "Neue Konsolengeneration angekündigt",
    date: "10. Mai 2025",
    description: "Die großen Konsolenhersteller haben ihre Pläne für die nächste Generation enthüllt. Erfahre alles über die neuen Funktionen und Spezifikationen.",
    imgAlt: "Moderne Spielkonsole mit Controller",
    imageDescription: "Eine elegante, schwarze Spielkonsole der nächsten Generation mit einem passenden Controller davor."
  },
  {
    title: "E-Sports: Die größten Turniere 2025",
    date: "5. Mai 2025",
    description: "Ein Überblick über die wichtigsten E-Sports-Veranstaltungen des Jahres, mit Preisgeldern, Terminen und teilnehmenden Teams.",
    imgAlt: "E-Sports Arena mit jubelnden Zuschauern",
    imageDescription: "Eine große E-Sports-Arena, gefüllt mit Zuschauern, die ein Team auf der Bühne anfeuern, mit bunten Lichtern."
  },
  {
    title: "Die meisterwarteten Spiele des Jahres",
    date: "1. Mai 2025",
    description: "Unsere Redaktion hat die vielversprechendsten Spieleveröffentlichungen zusammengestellt, die du in diesem Jahr nicht verpassen solltest.",
    imgAlt: "Collage verschiedener Videospiel-Cover",
    imageDescription: "Eine dynamische Collage aus Cover-Art verschiedener heiß erwarteter Videospiele des Jahres 2025."
  },
];

const GamingNews = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      {newsItems.map((item, index) => (
        <Card key={index} className="card-hover border-border/50 bg-card/60 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-out">
          <CardHeader className="p-0">
            <div className="aspect-video overflow-hidden">
              <img  alt={item.imgAlt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
            </div>
            <div className="p-6">
              <CardTitle className="text-xl mb-1">{item.title}</CardTitle>
              <CardDescription>{item.date}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              {item.description}
            </p>
            <Button variant="outline" size="sm" className="w-full sm:w-auto">Weiterlesen</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default GamingNews;