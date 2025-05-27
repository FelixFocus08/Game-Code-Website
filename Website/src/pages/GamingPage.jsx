
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GamingNews from "@/components/gaming/GamingNews";
import GamingGuides from "@/components/gaming/GamingGuides";
import GamingHardware from "@/components/gaming/GamingHardware";
import GamingResources from "@/components/gaming/GamingResources";
import { ArrowRight, Gamepad as GamepadIcon } from 'lucide-react';

const GamingPage = () => {
  const gamingCategories = [
    { id: "news", title: "Neuigkeiten", component: <GamingNews /> },
    { id: "guides", title: "Guides & Tutorials", component: <GamingGuides /> },
    { id: "hardware", title: "Hardware & Setup", component: <GamingHardware /> },
  ];

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative rounded-xl overflow-hidden shadow-2xl group">
          <div className="absolute inset-0">
            <img-replace alt="Dynamische Gaming-Szene mit Neonlichtern in Schwarz und Lila" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-purple-900/70 to-transparent opacity-95 group-hover:opacity-85 transition-opacity duration-500"></div>
          </div>
          
          <div className="relative p-8 md:p-12 lg:p-16 min-h-[400px] flex flex-col justify-center">
            <motion.div 
              className="inline-block p-4 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full mb-6 w-fit shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
            >
              <GamepadIcon className="h-10 w-10 text-primary-foreground" />
            </motion.div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-500">
              Gaming Universum
            </h1>
            <p className="max-w-3xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Tauche ein in die Welt des Gamings! Entdecke aktuelle News, detaillierte Spiele-Reviews, unschlagbare Hardware-Tipps und umfassende Guides, um dein Spielerlebnis auf das nächste Level zu heben.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="xl" className="group bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-lg px-10 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <a href="#gaming-content">
                  Inhalte entdecken <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="xl" className="text-lg px-10 py-4 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-purple-500/50 hover:bg-purple-600/10 hover:border-purple-500 transform hover:scale-105 text-purple-300 hover:text-purple-200">
                <Link to="/tickets?category=gaming">Support anfragen</Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
      
      <div id="gaming-content" className="pt-12">
        <Tabs defaultValue="news" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 mb-10 bg-neutral-900/80 p-2 rounded-xl shadow-md border border-purple-800/50">
            {gamingCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id} 
                className="text-base font-medium py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-violet-700 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:scale-105 transition-all duration-300 rounded-md hover:bg-neutral-700/80 data-[state=active]:hover:opacity-90"
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {gamingCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="min-h-[400px] p-1" 
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
