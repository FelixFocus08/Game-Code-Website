import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Gamepad2, Code2 } from 'lucide-react';

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.9]); 
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.4]); 
  const yText = useTransform(scrollYProgress, [0, 0.15], [0, 70]); 
  const yButtons = useTransform(scrollYProgress, [0, 0.15], [0, 100]); 

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 12
      },
    },
  };

  return (
    <motion.section 
      className="relative py-24 md:py-32 lg:py-48 overflow-hidden min-h-[80vh] flex items-center"
      style={{ scale, opacity, willChange: 'transform, opacity' }}
    >
      
      <motion.div 
        className="container mx-auto px-4 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
            variants={itemVariants} 
            style={{ y: yText, willChange: 'transform' }} 
            className="inline-block mb-8 px-5 py-2.5 bg-primary/10 text-primary rounded-full text-base font-semibold border border-primary/30 shadow-lg backdrop-blur-sm"
        >
          <Zap className="inline-block h-5 w-5 mr-2.5 animate-pulse" /> Willkommen bei GameCodeHub!
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          style={{ y: yText, willChange: 'transform' }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-10 text-gradient leading-tight"
        >
          Deine Zentrale für Gaming, Code & Skills
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          style={{ y: yText, willChange: 'transform' }}
          className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-muted-foreground mb-14 leading-relaxed"
        >
          Entdecke die neuesten Trends, meistere neue Technologien und verbinde dich mit einer passionierten Community. Alles, was du brauchst, an einem Ort.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          style={{ y: yButtons, willChange: 'transform' }}
          className="flex flex-col sm:flex-row justify-center items-center gap-5"
        >
          <Button 
            asChild 
            size="xl" 
            className="text-lg px-10 py-4 shadow-xl hover:shadow-primary/40 transition-all bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
            motionProps={{ whileHover: { scale: 1.1, y: -2 }, whileTap: { scale: 0.9 } }}
          >
            <Link to="/register">
              Jetzt starten <ArrowRight className="ml-2.5 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="xl" 
            className="text-lg px-10 py-4 shadow-lg hover:shadow-primary/20 transition-all border-border/60 hover:border-primary/70 backdrop-blur-sm bg-card/30 hover:bg-card/50"
            motionProps={{ whileHover: { scale: 1.1, y: -2 }, whileTap: { scale: 0.9 } }}
          >
            <Link to="/#feature-section">
              Mehr erfahren
            </Link>
          </Button>
        </motion.div>
        
        <motion.div 
          variants={itemVariants} 
          style={{ y: yButtons, willChange: 'transform' }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-10 max-w-5xl mx-auto"
        >
          {[
            { icon: <Gamepad2 className="h-10 w-10 text-primary" />, title: "Gaming Insights", description: "News, Reviews und Strategien." },
            { icon: <Code2 className="h-10 w-10 text-primary" />, title: "Coding-Ressourcen", description: "Tutorials, Projekte und Tools." },
            { icon: <Zap className="h-10 w-10 text-primary" />, title: "Skills & Tipps", description: "Hardware, Software und mehr." },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="p-6 bg-card/40 backdrop-blur-lg rounded-2xl shadow-xl border border-border/40 text-left hover:bg-card/60 transition-colors duration-300"
              whileHover={{ y: -8, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
              style={{ willChange: 'transform, box-shadow' }}
            >
              <div className="flex items-center gap-5 mb-4">
                {item.icon}
                <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
              </div>
              <p className="text-muted-foreground text-base">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default React.memo(HeroSection);