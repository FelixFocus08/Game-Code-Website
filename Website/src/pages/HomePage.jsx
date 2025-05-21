import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Zap, ThumbsUp, Users } from 'lucide-react';

const FeaturedContentItem = ({ title, description, link, imageSrc, imageAlt, category, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay }}
    className="h-full"
  >
    <Card className="card-hover h-full flex flex-col overflow-hidden border-border/50 bg-card/60 backdrop-blur-md shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-out">
      <CardHeader className="p-0">
        <div className="aspect-video overflow-hidden">
          <img  src={imageSrc} alt={imageAlt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1589755219022-92df00c56a0b" />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col">
        <CardDescription className="text-primary text-sm font-medium mb-1">{category}</CardDescription>
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{description}</p>
        <Button asChild variant="outline" className="mt-auto w-full group hover:bg-primary/10 hover:border-primary transition-colors">
          <Link to={link}>
            Mehr erfahren <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  </motion.div>
);

const FeaturedContentSection = () => {
  const featuredItems = [
    {
      title: "Top 5 Gaming-Strategien für 2025",
      description: "Meistere die neuesten Taktiken und verbessere dein Gameplay in kompetitiven Spielen.",
      link: "/gaming/guides/top-strategies",
      imageSrc: "https://images.unsplash.com/photo-1550745165-9bc0b252726c",
      imageAlt: "Abstrakte Gaming-Grafik mit Controllern und Neonlichtern",
      category: "Gaming Highlight",
    },
    {
      title: "React State Management: Der ultimative Guide",
      description: "Verstehe komplexe State-Management-Muster in React und wähle die richtige Lösung für dein Projekt.",
      link: "/coding/tutorials/react-state-management",
      imageSrc: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2",
      imageAlt: "Code-Schnipsel auf einem Monitor mit React Logo",
      category: "Coding Deep Dive",
    },
    {
      title: "Hardware-Optimierung: Mehr FPS für dein Setup",
      description: "Hol das Maximum aus deinem Gaming-PC heraus mit unseren detaillierten Hardware-Tuning-Tipps.",
      link: "/tips/hardware-optimization",
      imageSrc: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5",
      imageAlt: "Geöffneter PC mit beleuchteten Komponenten",
      category: "Tech Tipp",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-gradient">
            Ausgewählte Inhalte
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Entdecke unsere aktuellsten und beliebtesten Artikel, Guides und Tutorials.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredItems.map((item, index) => (
            <FeaturedContentItem key={item.title} {...item} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};


const TestimonialCard = ({ quote, author, role, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay }}
    className="h-full"
  >
    <Card className="h-full flex flex-col justify-between p-6 border-border/50 bg-card/60 backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div>
        <ThumbsUp className="h-8 w-8 text-primary mb-4" />
        <blockquote className="text-lg text-foreground italic mb-4">"{quote}"</blockquote>
      </div>
      <footer className="mt-auto">
        <p className="font-semibold text-primary">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </footer>
    </Card>
  </motion.div>
);

const TestimonialsSection = () => {
  const testimonials = [
    { quote: "GameCodeHub hat mir geholfen, meine Coding-Skills auf das nächste Level zu bringen. Die Tutorials sind erstklassig!", author: "Alex M.", role: "Softwareentwickler" },
    { quote: "Die Gaming-News sind immer aktuell und die Community ist super hilfsbereit. Mein täglicher Anlaufpunkt!", author: "Sarah K.", role: "Passionierte Gamerin" },
    { quote: "Endlich eine Plattform, die sowohl Gaming als auch Coding versteht. Die Tipps sind Gold wert!", author: "Mike P.", role: "Tech-Enthusiast" },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <Users className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-gradient">
            Was unsere Community sagt
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Wir sind stolz auf das positive Feedback unserer Nutzer.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} delay={index * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToActionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-purple-600 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Bereit, Teil der GameCodeHub-Community zu werden?
          </h2>
          <p className="max-w-xl mx-auto text-lg text-primary-foreground/80 mb-8">
            Registriere dich jetzt kostenlos und erhalte Zugang zu exklusiven Inhalten, personalisierten Empfehlungen und einer aktiven Community.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-10 py-3 shadow-xl hover:scale-105 transition-transform bg-white text-primary hover:bg-gray-100">
            <Link to="/register">
              Konto erstellen <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div className="space-y-0">
      <HeroSection />
      <FeatureSection />
      <FeaturedContentSection />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  );
};

export default HomePage;