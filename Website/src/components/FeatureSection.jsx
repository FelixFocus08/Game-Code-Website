import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Gamepad2, Code2, Lightbulb, ShieldCheck, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <Gamepad2 className="h-12 w-12 mb-5 text-primary" />,
    title: "Gaming-Welt",
    description: "Aktuelle News, tiefgehende Reviews und Profi-Strategien für deine Lieblingsspiele.",
    link: "/gaming",
    linkText: "Zum Gaming-Bereich",
  },
  {
    icon: <Code2 className="h-12 w-12 mb-5 text-primary" />,
    title: "Coding-Hub",
    description: "Tutorials, Projektideen und die besten Tools für Entwickler aller Erfahrungsstufen.",
    link: "/coding",
    linkText: "Zum Coding-Hub",
  },
  {
    icon: <Lightbulb className="h-12 w-12 mb-5 text-primary" />,
    title: "Tipps & Tricks",
    description: "Clevere Hacks für Software, Hardware und Produktivität, die deinen Alltag erleichtern.",
    link: "/tips",
    linkText: "Zu den Tipps & Tricks",
  },
  {
    icon: <ShieldCheck className="h-12 w-12 mb-5 text-primary" />,
    title: "Support & Tickets",
    description: "Unser engagiertes Team hilft dir bei Fragen und Problemen. Erstelle einfach ein Ticket.",
    link: "/tickets",
    linkText: "Zum Ticketsystem",
  },
];

const FeatureCard = ({ feature, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 60, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
    className="h-full"
  >
    <Card 
      className="h-full flex flex-col border-border/50 bg-card/70 backdrop-blur-xl shadow-xl hover:shadow-primary/30 transition-all duration-300 ease-out transform hover:-translate-y-2 hover:border-primary/60"
    >
      <CardHeader className="items-center text-center p-8">
        <motion.div whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1 }} transition={{ duration:0.4 }}>
         {feature.icon}
        </motion.div>
        <CardTitle className="text-2xl font-semibold">{feature.title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center flex-grow px-6 pb-6">
        <CardDescription className="leading-relaxed text-base min-h-[70px]">{feature.description}</CardDescription>
      </CardContent>
      <div className="p-6 pt-0 mt-auto">
        <Button 
          asChild 
          variant="outline" 
          className="w-full group border-border/60 hover:border-primary/70 hover:bg-primary/10 transition-colors"
          motionProps={{ whileHover: { scale: 1.05, y: -1 }, whileTap: { scale: 0.98 } }}
        >
          <Link to={feature.link}>
            {feature.linkText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </Button>
      </div>
    </Card>
  </motion.div>
);

const MemoizedFeatureCard = React.memo(FeatureCard);

const FeatureSection = () => {
  return (
    <section id="feature-section" className="py-20 md:py-28 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-gradient">
            Entdecke unsere Kernbereiche
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
            GameCodeHub bietet dir eine breite Palette an Informationen, Ressourcen und Community-Interaktionen für dein digitales Leben.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <MemoizedFeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(FeatureSection);