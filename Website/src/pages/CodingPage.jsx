
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, BookOpen, Lightbulb, FolderGit2, Wrench as Tool, Bot, ArrowRight } from 'lucide-react';
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

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div 
      className="space-y-10"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={itemVariants}>
        <div className="relative rounded-xl overflow-hidden shadow-2xl group">
          <div className="absolute inset-0">
            <img-replace alt="Dynamischer Coding-Banner mit Code-Fragmenten und Netzwerklinien in Schwarz und Grün" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-br from-black via-green-900/70 to-transparent opacity-95 group-hover:opacity-90 transition-opacity duration-500"></div>
          </div>
          
          <div className="relative p-8 md:p-12 lg:p-20 min-h-[350px] md:min-h-[450px] flex flex-col justify-center">
            <motion.div 
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Code2 className="h-14 w-14 text-green-400 mr-5 animate-pulse" />
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500">
                Coding-Hub
              </h1>
            </motion.div>
            <motion.p 
              className="max-w-3xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Willkommen im Coding-Hub! Hier findest du alles, was du brauchst, um deine Programmierfähigkeiten zu erweitern – von interaktiven Tutorials und wertvollen Ressourcen bis hin zu inspirierenden Projektideen und strukturierten Lernpfaden.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button 
                asChild 
                size="xl" 
                className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-lg px-10 py-4 shadow-lg hover:shadow-2xl transition-all duration-300"
                motionProps={{ whileHover: { scale: 1.05, y: -2 }, whileTap: { scale: 0.95 } }}
              >
                <a href="#coding-content">
                  Jetzt entdecken <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="xl" 
                className="text-lg px-10 py-4 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-green-500/50 hover:bg-green-600/10 hover:border-green-500 text-green-300 hover:text-green-200"
                motionProps={{ whileHover: { scale: 1.05, y: -2 }, whileTap: { scale: 0.95 } }}
              >
                <Link to="/tickets?category=coding">Code-Frage stellen</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      <motion.div id="coding-content" className="pt-10" variants={itemVariants}>
        <Tabs defaultValue="tutorials" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2.5 mb-10 bg-neutral-900/80 backdrop-blur-md p-2 rounded-xl shadow-lg border border-green-800/60">
            {codingCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id} 
                className="text-base font-medium py-3.5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-600 data-[state=active]:text-primary-foreground data-[state=active]:shadow-xl data-[state=active]:scale-105 transition-all duration-300 rounded-lg hover:bg-neutral-700/80 data-[state=active]:hover:opacity-95 flex items-center justify-center gap-2"
              >
                {category.icon}
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <AnimatePresence mode="wait">
            {codingCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="focus-visible:ring-0 focus-visible:ring-offset-0">
                <motion.div
                  key={category.id} 
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 25 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="min-h-[450px] p-1.5" 
                >
                  {category.component}
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="py-16"
      >
        <Link to="/tickets?category=coding_challenge" className="block group">
          <motion.div 
            className="relative p-10 md:p-14 rounded-xl shadow-2xl bg-gradient-to-br from-green-600 via-teal-600 to-cyan-600 text-white overflow-hidden transition-all duration-300 hover:shadow-cyan-500/50"
            whileHover={{ scale: 1.03, boxShadow: "0px 15px 30px rgba(0, 200, 200, 0.3)"}}
          >
            <div className="absolute -bottom-10 -right-10 opacity-15 group-hover:opacity-25 transition-opacity duration-300 transform group-hover:rotate-6">
              <Bot size={160} className="transition-transform duration-500 group-hover:scale-110"/>
            </div>
            <h2 className="text-4xl font-bold mb-4">Nimm an der Coding Challenge teil!</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Stell deine Fähigkeiten auf die Probe, lerne Neues und gewinne vielleicht sogar coole Preise. Unsere nächste Challenge startet bald!
            </p>
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-white/20 text-white border-white/60 hover:bg-white/30 backdrop-blur-sm text-lg px-10 py-4 rounded-lg"
              motionProps={{ whileHover: { scale: 1.1, y: -2, boxShadow: "0px 5px 15px rgba(255,255,255,0.2)" }, whileTap: { scale: 0.95 } }}
            >
              Mehr Infos & Anmeldung <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default CodingPage;
