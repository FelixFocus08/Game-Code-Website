import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Gamepad2, Code2, Lightbulb, ShieldCheck, Users, BarChart3, History, ExternalLink as PartnerIcon } from 'lucide-react';

const features = [
  {
    icon: <Gamepad2 className="h-10 w-10 mb-4 text-primary" />,
    title: "Gaming-Welt",
    description: "Aktuelle News, tiefgehende Reviews und Profi-Strategien für deine Lieblingsspiele.",
    link: "/gaming",
    linkText: "Zum Gaming-Bereich",
    imgPlaceholder: "Controller-Icon für Gaming"
  },
  {
    icon: <Code2 className="h-10 w-10 mb-4 text-primary" />,
    title: "Coding-Hub",
    description: "Tutorials, Projektideen und die besten Tools für Entwickler aller Erfahrungsstufen.",
    link: "/coding",
    linkText: "Zum Coding-Hub",
    imgPlaceholder: "Code-Icon für Programmierung"
  },
  {
    icon: <Lightbulb className="h-10 w-10 mb-4 text-primary" />,
    title: "Tipps & Tricks",
    description: "Clevere Hacks für Software, Hardware und Produktivität, die deinen Alltag erleichtern.",
    link: "/tips",
    linkText: "Zu den Tipps & Tricks",
    imgPlaceholder: "Glühbirnen-Icon für Tipps"
  },
  {
    icon: <ShieldCheck className="h-10 w-10 mb-4 text-primary" />,
    title: "Support & Tickets",
    description: "Unser engagiertes Team hilft dir bei Fragen und Problemen. Erstelle einfach ein Ticket.",
    link: "/tickets",
    linkText: "Zum Ticketsystem",
    imgPlaceholder: "Schild-Icon für Support"
  },
];

const FeatureCard = ({ feature, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="h-full"
  >
    <Card className="card-hover h-full flex flex-col border-border/50 bg-card/60 backdrop-blur-md shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-out">
      <CardHeader className="items-center text-center p-6">
        {feature.icon}
        <CardTitle className="text-2xl">{feature.title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center flex-grow p-6 pt-0">
        <CardDescription className="leading-relaxed min-h-[60px]">{feature.description}</CardDescription>
      </CardContent>
      <div className="p-6 pt-0 mt-auto">
        <Button asChild variant="outline" className="w-full group hover:bg-primary/10 hover:border-primary transition-colors">
          <Link to={feature.link}>
            {feature.linkText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </Card>
  </motion.div>
);

const ArrowRight = (props) => (
  <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
    <path d="M8 4l4 4-4 4M12 8H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


const FeatureSection = () => {
  return (
    <section id="feature-section" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-gradient">
            Entdecke unsere Kernbereiche
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            GameCodeHub bietet dir eine breite Palette an Informationen, Ressourcen und Community-Interaktionen.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;