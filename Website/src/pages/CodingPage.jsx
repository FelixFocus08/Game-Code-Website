import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code2, BookOpen, Lightbulb, FolderGit2, Wrench as Tool, Bot } from 'lucide-react';
import CodingTutorials from "@/components/coding/CodingTutorials";
import CodingResources from "@/components/coding/CodingResources";
import CodingProjectIdeas from "@/components/coding/CodingProjectIdeas";
import CodingLearningPaths from "@/components/coding/CodingLearningPaths";

const CodingPage = () => {
  const codingCategories = [
    { id: "tutorials", title: "Tutorials", icon: <BookOpen className="h-5 w-5 mr-2" />, component: <CodingTutorials /> },
    { id: "resources", title: "Ressourcen", icon: <FolderGit2 className="h-5 w-5 mr-2" />, component: <CodingResources /> },
    { id: "projects", title: "Projektideen", icon: <Lightbulb className="h-5 w-5 mr-2" />, component: <CodingProjectIdeas /> },
    { id: "paths", title: "Lernpfade", icon: <Tool className="h-5 w-5 mr-2" />, component: <CodingLearningPaths /> },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative rounded-lg overflow-hidden shadow-xl group">
          <div className="absolute inset-0">
            <img  alt="Dynamischer Coding-Banner mit Code-Fragmenten und Netzwerklinien" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1560510368-611be7ca72cd" />
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/70 to-transparent opacity-95"></div>
          </div>
          
          <div className="relative p-8 md:p-12 lg:p-16 min-h-[300px] md:min-h-[400px] flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <Code2 className="h-12 w-12 text-primary mr-4" />
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gradient">
                Coding-Hub: Entfessle dein Potenzial
              </h1>
            </div>
            <p className="max-w-3xl text-lg text-muted-foreground mb-8 leading-relaxed">
              Willkommen im Coding-Hub! Hier findest du alles, was du brauchst, um deine Programmierfähigkeiten zu erweitern – von interaktiven Tutorials und wertvollen Ressourcen bis hin zu inspirierenden Projektideen und strukturierten Lernpfaden.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-shadow">
                <a href="#coding-content">Jetzt entdecken</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 shadow-md hover:shadow-lg transition-shadow border-border/50 hover:border-primary/50">
                <Link to="/tickets?category=coding">Code-Frage stellen</Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
      
      <div id="coding-content" className="pt-8">
        <Tabs defaultValue="tutorials" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 mb-8 bg-muted/50 p-1 rounded-lg shadow-sm">
            {codingCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm sm:text-base py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-purple-600 data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300 flex items-center justify-center">
                {category.icon}
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {codingCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="focus-visible:ring-0 focus-visible:ring-offset-0">
              <motion.div
                key={category.id} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="min-h-[400px] p-1" 
              >
                {category.component}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-12"
      >
        <Link to="/tickets?category=coding_challenge" className="block group">
          <div className="relative p-8 md:p-12 rounded-lg shadow-xl bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 text-white overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
            <div className="absolute -bottom-8 -right-8 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
              <Bot size={128} className="transform rotate-[-15deg]"/>
            </div>
            <h2 className="text-3xl font-bold mb-3">Nimm an der Coding Challenge teil!</h2>
            <p className="text-lg mb-6 max-w-2xl">
              Stell deine Fähigkeiten auf die Probe, lerne Neues und gewinne vielleicht sogar coole Preise. Unsere nächste Challenge startet bald!
            </p>
            <Button variant="outline" size="lg" className="bg-white/20 text-white border-white/50 hover:bg-white/30 backdrop-blur-sm group-hover:scale-105 transform transition-transform">
              Mehr Infos & Anmeldung
            </Button>
          </div>
        </Link>
      </motion.div>

    </div>
  );
};

export default CodingPage;