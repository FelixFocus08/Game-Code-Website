import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Gamepad2, Code, Monitor, Cpu, ArrowRight } from "lucide-react";
import TipsGaming from "@/components/tips/TipsGaming";
import TipsCoding from "@/components/tips/TipsCoding";
import TipsHardware from "@/components/tips/TipsHardware";
import TipsSoftware from "@/components/tips/TipsSoftware";
import TipOfTheDay from "@/components/tips/TipOfTheDay";

const TipsPage = () => {
  const tipsCategories = [
    { id: "gaming", title: "Gaming", icon: <Gamepad2 className="h-5 w-5" />, component: <TipsGaming /> },
    { id: "coding", title: "Coding", icon: <Code className="h-5 w-5" />, component: <TipsCoding /> },
    { id: "hardware", title: "Hardware", icon: <Cpu className="h-5 w-5" />, component: <TipsHardware /> },
    { id: "software", title: "Software", icon: <Monitor className="h-5 w-5" />, component: <TipsSoftware /> },
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
            <img-replace alt="Abstrakter Hintergrund mit Glühbirnen und Zahnrädern für Tipps und Tricks" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent opacity-90 group-hover:opacity-85 transition-opacity duration-500"></div>
          </div>
          
          <div className="relative p-8 md:p-12 lg:p-20 min-h-[350px] md:min-h-[450px] flex flex-col justify-center">
             <motion.div 
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Lightbulb className="h-14 w-14 text-primary mr-5 animate-bounce" />
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-gradient">
                Tipps & Tricks
              </h1>
            </motion.div>
            <motion.p 
              className="max-w-3xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Entdecke clevere Lifehacks, Software-Kniffe und Hardware-Optimierungen, die deinen digitalen Alltag erleichtern. Verbessere deine Fähigkeiten und optimiere deine Systeme mit unseren praktischen Ratschlägen.
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
                className="group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-lg px-10 py-4 shadow-lg hover:shadow-2xl transition-all duration-300"
                motionProps={{ whileHover: { scale: 1.05, y: -2 }, whileTap: { scale: 0.95 } }}
              >
                <a href="#tips-content">
                  Tipps entdecken <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="xl" 
                className="text-lg px-10 py-4 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-primary/50 hover:bg-primary/10 hover:border-primary"
                motionProps={{ whileHover: { scale: 1.05, y: -2 }, whileTap: { scale: 0.95 } }}
              >
                <Link to="/tickets?category=tips">Frage stellen</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      <motion.div id="tips-content" className="pt-10" variants={itemVariants}>
        <Tabs defaultValue="gaming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2.5 mb-10 bg-card/80 backdrop-blur-md p-2 rounded-xl shadow-lg border border-border/60">
            {tipsCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id} 
                className="text-base font-medium py-3.5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-purple-600 data-[state=active]:text-primary-foreground data-[state=active]:shadow-xl data-[state=active]:scale-105 transition-all duration-300 rounded-lg hover:bg-muted/80 data-[state=active]:hover:opacity-95 flex items-center justify-center gap-2"
              >
                {category.icon}
                <span>{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          <AnimatePresence mode="wait">
            {tipsCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="focus-visible:ring-0 focus-visible:ring-offset-0">
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -25 }}
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
      
      <motion.div variants={itemVariants}>
        <TipOfTheDay />
      </motion.div>
    </motion.div>
  );
};

export default TipsPage;