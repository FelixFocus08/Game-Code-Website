
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Lightbulb, Gamepad2, Code, Monitor, Cpu } from "lucide-react";
import TipsGaming from "@/components/tips/TipsGaming";
import TipsCoding from "@/components/tips/TipsCoding";
import TipsHardware from "@/components/tips/TipsHardware";
import TipsSoftware from "@/components/tips/TipsSoftware";
import TipOfTheDay from "@/components/tips/TipOfTheDay";

const TipsPage = () => {
  const tipsCategories = [
    { id: "gaming", title: "Gaming", icon: <Gamepad2 className="h-4 w-4" />, component: <TipsGaming /> },
    { id: "coding", title: "Coding", icon: <Code className="h-4 w-4" />, component: <TipsCoding /> },
    { id: "hardware", title: "Hardware", icon: <Cpu className="h-4 w-4" />, component: <TipsHardware /> },
    { id: "software", title: "Software", icon: <Monitor className="h-4 w-4" />, component: <TipsSoftware /> },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative rounded-lg overflow-hidden shadow-xl">
          <div className="absolute inset-0">
            <img  alt="Abstrakter Hintergrund mit Glühbirnen und Zahnrädern für Tipps und Tricks" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1607615896122-6c919f897e55" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent opacity-90"></div>
          </div>
          
          <div className="relative p-8 md:p-12 lg:p-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 text-gradient">
              Tipps & Tricks Fundgrube
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground mb-8 leading-relaxed">
              Entdecke clevere Lifehacks, Software-Kniffe und Hardware-Optimierungen, die deinen digitalen Alltag erleichtern. Verbessere deine Fähigkeiten und optimiere deine Systeme mit unseren praktischen Ratschlägen.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-shadow">
                <a href="#tips-content">Tipps entdecken</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 shadow-md hover:shadow-lg transition-shadow">
                <Link to="/tickets?category=tips">Frage stellen</Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
      
      <div id="tips-content" className="pt-8">
        <Tabs defaultValue="gaming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2 mb-8 bg-muted/50 p-1 rounded-lg">
            {tipsCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm sm:text-base py-2.5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-purple-600 data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300 flex items-center justify-center gap-2">
                {category.icon}
                <span>{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {tipsCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="min-h-[400px]"
              >
                {category.component}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      
      <TipOfTheDay />
    </div>
  );
};

export default TipsPage;
