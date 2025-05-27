import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, HeartHandshake as Handshake, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

const partners = [
  {
    name: "TechSolutions Inc.",
    logoPlaceholder: "Abstraktes Tech-Logo für TechSolutions in Blau und Silber",
    description: "Führender Anbieter von Cloud-Infrastruktur und Entwickler-Tools. Gemeinsam gestalten wir die Zukunft der Technologie.",
    website: "https://example.com/techsolutions",
    category: "Technologie",
  },
  {
    name: "GamerGear Pro",
    logoPlaceholder: "Dynamisches Gaming-Logo für GamerGear Pro in Rot und Schwarz",
    description: "Spezialist für hochwertige Gaming-Peripherie und Zubehör. Für das ultimative Spielerlebnis.",
    website: "https://example.com/gamergear",
    category: "Gaming Hardware",
  },
  {
    name: "CodeCrafters Academy",
    logoPlaceholder: "Minimalistisches Code-Logo für CodeCrafters Academy in Grün",
    description: "Online-Lernplattform für angehende und erfahrene Entwickler. Wir fördern Coding-Talente.",
    website: "https://example.com/codecrafters",
    category: "Bildung",
  },
  {
    name: "StreamConnect",
    logoPlaceholder: "Modernes Verbindungs-Logo für StreamConnect in Lila und Orange",
    description: "Plattform zur Vernetzung von Streamern und Zuschauern. Wir bringen die Community zusammen.",
    website: "https://example.com/streamconnect",
    category: "Streaming",
  },
  {
    name: "IndieDev Collective",
    logoPlaceholder: "Kreatives Indie-Game-Logo für IndieDev Collective in bunten Farben",
    description: "Unterstützung und Förderung unabhängiger Spieleentwickler. Kreativität kennt keine Grenzen.",
    website: "https://example.com/indiedev",
    category: "Spieleentwicklung",
  },
  {
    name: "CyberSecure Solutions",
    logoPlaceholder: "Starkes Schild-Logo für CyberSecure Solutions in Dunkelblau",
    description: "Experten für Cybersicherheit und Datenschutz. Wir schützen Ihre digitalen Werte.",
    website: "https://example.com/cybersecure",
    category: "Sicherheit",
  },
];

const PartnerCard = ({ partner, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
    className="h-full group"
  >
    <Card className="h-full card-hover border-border/60 bg-card/80 backdrop-blur-xl overflow-hidden shadow-xl hover:shadow-primary/35 transition-all duration-300 flex flex-col group-hover:border-primary/70 transform group-hover:-translate-y-2.5">
      <CardHeader className="items-center text-center p-8">
        <motion.div 
          className="w-28 h-28 rounded-full overflow-hidden mb-5 border-2 border-primary/40 group-hover:border-primary shadow-lg transition-all duration-300 bg-muted flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img-replace alt={partner.logoPlaceholder} className="w-full h-full object-contain p-2" />
        </motion.div>
        <CardTitle className="text-2xl font-semibold group-hover:text-primary transition-colors duration-300">{partner.name}</CardTitle>
        <CardDescription className="text-sm text-primary/80 group-hover:text-primary transition-colors duration-300 font-medium">{partner.category}</CardDescription>
      </CardHeader>
      <CardContent className="text-center px-6 pb-6 flex-grow">
        <p className="text-muted-foreground text-base mb-6 min-h-[70px] leading-relaxed">{partner.description}</p>
      </CardContent>
      <div className="p-6 pt-0 mt-auto">
        <Button 
          asChild 
          size="lg" 
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white group-hover:scale-[1.03] transform transition-transform duration-300 shadow-lg hover:shadow-blue-500/50"
          motionProps={{ whileHover: { scale: 1.08, y: -2 }, whileTap: { scale: 0.98 } }}
        >
          <a href={partner.website} target="_blank" rel="noopener noreferrer">
            Webseite besuchen
            <ExternalLink className="ml-2.5 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </Card>
  </motion.div>
);

const PartnerPage = () => {
  return (
    <div className="space-y-20 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center"
      >
        <motion.div 
          className="inline-block p-6 bg-gradient-to-br from-primary via-purple-600 to-pink-600 text-primary-foreground rounded-full mb-10 shadow-2xl ring-4 ring-primary/30"
          whileHover={{ scale: 1.15, rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <Handshake className="h-16 w-16" />
        </motion.div>
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-gradient mb-6">
          Unsere geschätzten Partner
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Gemeinsam stark: Wir sind stolz auf die Zusammenarbeit mit führenden Unternehmen und Organisationen, die unsere Vision teilen und unserer Community einen echten Mehrwert bieten.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-12 max-w-7xl mx-auto px-4">
        {partners.map((partner, index) => (
          <PartnerCard key={partner.name} partner={partner} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="text-center py-16"
      >
        <Card className="max-w-4xl mx-auto border-border/60 bg-card/80 backdrop-blur-xl shadow-2xl p-10 md:p-14 rounded-2xl">
          <CardHeader className="p-0 mb-8">
            <motion.div 
              className="inline-block p-5 bg-gradient-to-br from-green-500 via-teal-500 to-cyan-500 text-white rounded-full mb-8 shadow-xl ring-4 ring-green-500/30"
              whileHover={{ scale: 1.15, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Users className="h-12 w-12" />
            </motion.div>
            <CardTitle className="text-4xl md:text-5xl font-bold text-gradient from-green-400 via-teal-400 to-cyan-400">
              Werden Sie Teil unseres Netzwerks!
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed">
              Haben Sie Interesse an einer strategischen Partnerschaft mit GameCodeHub? Wir sind stets auf der Suche nach innovativen Kooperationen, die unsere Community bereichern. Lassen Sie uns gemeinsam wachsen!
            </p>
            <Button 
              size="xl" 
              asChild 
              className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white text-lg px-12 py-4 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300"
              motionProps={{ whileHover: { scale: 1.1, y: -3, boxShadow: "0px 10px 25px rgba(0, 200, 150, 0.3)"}, whileTap: { scale: 0.95 } }}
            >
              <Link to="/tickets?category=partnership&subject=Partnership%20Inquiry">
                Jetzt Kontakt aufnehmen <ArrowRight className="ml-2.5 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default PartnerPage;