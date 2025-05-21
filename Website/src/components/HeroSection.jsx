import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Gamepad2, Code2 } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-background -z-10">
        <div className="absolute inset-0 opacity-30">
          <img  alt="Abstrakter Hintergrund mit geometrischen Mustern und leuchtenden Linien" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1691198376934-e220aa77262f" />
        </div>
      </div>
      
      <motion.div 
        className="container mx-auto px-4 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-block mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/30 shadow-sm">
          <Zap className="inline-block h-4 w-4 mr-2" /> Willkommen bei GameCodeHub!
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-gradient"
        >
          Deine Zentrale für Gaming, Code & Skills
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed"
        >
          Entdecke die neuesten Trends, meistere neue Technologien und verbinde dich mit einer passionierten Community. Alles, was du brauchst, an einem Ort.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Button asChild size="lg" className="group text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
            <Link to="/register">
              Jetzt starten <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 shadow-md hover:shadow-lg transition-shadow border-border/50 hover:border-primary/50">
            <Link to="/#feature-section">
              Mehr erfahren
            </Link>
          </Button>
        </motion.div>
        
        <motion.div 
          variants={itemVariants} 
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { icon: <Gamepad2 className="h-8 w-8 text-primary" />, title: "Gaming Insights", description: "News, Reviews und Strategien." },
            { icon: <Code2 className="h-8 w-8 text-primary" />, title: "Coding-Ressourcen", description: "Tutorials, Projekte und Tools." },
            { icon: <Zap className="h-8 w-8 text-primary" />, title: "Skills & Tipps", description: "Hardware, Software und mehr." },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-card/50 backdrop-blur-md rounded-xl shadow-lg border border-border/30 text-left">
              <div className="flex items-center gap-4 mb-3">
                {item.icon}
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;