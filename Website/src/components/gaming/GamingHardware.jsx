
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, MonitorPlay, Mouse, Keyboard, Headphones as Headset } from 'lucide-react';

const hardwareItems = [
  {
    title: "Gaming-PCs 2025: Kaufberatung",
    description: "Unsere umfassende Kaufberatung für Gaming-PCs in verschiedenen Preisklassen, mit Empfehlungen für Komponenten und Fertig-PCs.",
    imgSrc: "https://images.unsplash.com/photo-1689170912270-2170c18d5597",
    imgAlt: "Moderner Gaming PC mit RGB-Beleuchtung",
    linkText: "Zur Kaufberatung",
    icon: <Cpu className="h-6 w-6 text-primary" />
  },
  {
    title: "Gaming-Peripherie im Test",
    description: "Wir testen die neuesten Gaming-Mäuse, Tastaturen, Headsets und Monitore und geben Empfehlungen für verschiedene Spielgenres.",
    imgSrc: "https://images.unsplash.com/photo-1651599731800-96d134e0c986",
    imgAlt: "Set aus Gaming-Maus, Tastatur und Headset",
    linkText: "Zu den Tests",
    icon: <Mouse className="h-6 w-6 text-primary" />
  },
];

const recommendedSetups = [
  {
    tier: "Einsteiger",
    icon: <MonitorPlay className="h-5 w-5 text-green-500" />,
    components: [
      "CPU: AMD Ryzen 5 8500X / Intel Core i5-14400",
      "GPU: NVIDIA RTX 4060 / AMD RX 7600",
      "RAM: 16GB DDR5-5200",
      "SSD: 1TB NVMe PCIe 4.0",
      "Monitor: 27\" 1440p, 144Hz",
    ],
  },
  {
    tier: "Fortgeschritten",
    icon: <MonitorPlay className="h-5 w-5 text-blue-500" />,
    components: [
      "CPU: AMD Ryzen 7 8700X / Intel Core i7-14700K",
      "GPU: NVIDIA RTX 4070 Ti / AMD RX 7800 XT",
      "RAM: 32GB DDR5-6000",
      "SSD: 2TB NVMe PCIe 4.0",
      "Monitor: 27\" 1440p, 240Hz / 34\" Ultrawide",
    ],
  },
  {
    tier: "Enthusiast",
    icon: <MonitorPlay className="h-5 w-5 text-purple-500" />,
    components: [
      "CPU: AMD Ryzen 9 8950X / Intel Core i9-14900K",
      "GPU: NVIDIA RTX 4090 / AMD RX 7900 XTX",
      "RAM: 64GB DDR5-6400",
      "SSD: 4TB NVMe PCIe 5.0",
      "Monitor: 32\" 4K, 144Hz / Dual 27\" 1440p, 240Hz",
    ],
  },
];

const GamingHardware = () => {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        {hardwareItems.map((item, index) => (
          <Card key={index} className="card-hover border-border/50 bg-card/60 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-out flex flex-col">
            <CardHeader className="p-0">
              <div className="aspect-video overflow-hidden">
                <img  src={item.imgSrc} alt={item.imgAlt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-6 flex items-center gap-3">
                {item.icon}
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-grow">
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {item.description}
              </p>
            </CardContent>
            <div className="p-6 pt-0 mt-auto">
              <Button variant="outline" size="sm" className="w-full sm:w-auto">{item.linkText}</Button>
            </div>
          </Card>
        ))}
      </div>
      
      <Card className="border-border/50 bg-card/60 backdrop-blur-sm shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-gradient">Empfohlene Gaming-Setups 2025</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {recommendedSetups.map((setup, index) => (
            <div key={index} className="p-4 rounded-lg bg-muted/30 border border-border/30">
              <div className="flex items-center gap-3 mb-3">
                {setup.icon}
                <h3 className="text-lg font-semibold">{setup.tier}</h3>
              </div>
              <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                {setup.components.map((component, cIndex) => (
                  <li key={cIndex}>{component}</li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default GamingHardware;
