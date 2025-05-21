
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GamingNews from "@/components/gaming/GamingNews";
import GamingGuides from "@/components/gaming/GamingGuides";
import GamingHardware from "@/components/gaming/GamingHardware";
import GamingResources from "@/components/gaming/GamingResources";

const GamingPage = () => {
  const gamingCategories = [
    { id: "news", title: "Neuigkeiten", component: <GamingNews /> },
    { id: "guides", title: "Guides & Tutorials", component: <GamingGuides /> },
    { id: "hardware", title: "Hardware & Setup", component: <GamingHardware /> },
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
            <img  alt="Gaming Banner mit dynamischen Lichtern und Action-Szene" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1636036769389-343bb250f013" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent opacity-90"></div>
          </div>
          
          <div className="relative p-8 md:p-12 lg:p-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 text-gradient">
              Gaming Universum
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground mb-8 leading-relaxed">
              Tauche ein in die Welt des Gamings! Entdecke aktuelle News, detaillierte Spiele-Reviews, unschlagbare Hardware-Tipps und umfassende Guides, um dein Spielerlebnis auf das nächste Level zu heben.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-shadow">
                <a href="#gaming-content">Inhalte entdecken</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 shadow-md hover:shadow-lg transition-shadow">
                <Link to="/tickets?category=gaming">Support anfragen</Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
      
      <div id="gaming-content" className="pt-8">
        <Tabs defaultValue="news" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 mb-8 bg-muted/50 p-1 rounded-lg">
            {gamingCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm sm:text-base py-2.5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-purple-600 data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300">
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {gamingCategories.map((category) => (
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
      
      <GamingResources />
    </div>
  );
};

export default GamingPage;
