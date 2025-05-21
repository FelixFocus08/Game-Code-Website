import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, HeartHandshake as Handshake } from 'lucide-react';
import { Link } from "react-router-dom";

const partners = [
  {
    name: "TechSolutions Inc.",
    logoUrl: "https://via.placeholder.com/150/8A2BE2/FFFFFF?text=TechS",
    description: "Führender Anbieter von Cloud-Infrastruktur und Entwickler-Tools. Gemeinsam gestalten wir die Zukunft der Technologie.",
    website: "https://example.com/techsolutions",
    category: "Technologie",
    imgPlaceholder: "Logo von TechSolutions Inc."
  },
  {
    name: "GamerGear Pro",
    logoUrl: "https://via.placeholder.com/150/4682B4/FFFFFF?text=GamerG",
    description: "Spezialist für hochwertige Gaming-Peripherie und Zubehör. Für das ultimative Spielerlebnis.",
    website: "https://example.com/gamergear",
    category: "Gaming Hardware",
    imgPlaceholder: "Logo von GamerGear Pro"
  },
  {
    name: "CodeCrafters Academy",
    logoUrl: "https://via.placeholder.com/150/32CD32/FFFFFF?text=CodeCA",
    description: "Online-Lernplattform für angehende und erfahrene Entwickler. Wir fördern Coding-Talente.",
    website: "https://example.com/codecrafters",
    category: "Bildung",
    imgPlaceholder: "Logo von CodeCrafters Academy"
  },
  {
    name: "StreamConnect",
    logoUrl: "https://via.placeholder.com/150/FF4500/FFFFFF?text=StreamC",
    description: "Plattform zur Vernetzung von Streamern und Zuschauern. Wir bringen die Community zusammen.",
    website: "https://example.com/streamconnect",
    category: "Streaming",
    imgPlaceholder: "Logo von StreamConnect"
  },
  {
    name: "IndieDev Collective",
    logoUrl: "https://via.placeholder.com/150/FFD700/000000?text=IndieDC",
    description: "Unterstützung und Förderung unabhängiger Spieleentwickler. Kreativität kennt keine Grenzen.",
    website: "https://example.com/indiedev",
    category: "Spieleentwicklung",
    imgPlaceholder: "Logo von IndieDev Collective"
  },
  {
    name: "CyberSecure Solutions",
    logoUrl: "https://via.placeholder.com/150/DC143C/FFFFFF?text=CyberS",
    description: "Experten für Cybersicherheit und Datenschutz. Wir schützen Ihre digitalen Werte.",
    website: "https://example.com/cybersecure",
    category: "Sicherheit",
    imgPlaceholder: "Logo von CyberSecure Solutions"
  },
];

const PartnerCard = ({ partner, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="h-full group"
  >
    <Card className="h-full card-hover border-border/50 bg-card/70 backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-primary/30 transition-all duration-300 flex flex-col group-hover:border-primary/50 transform group-hover:-translate-y-1">
      <CardHeader className="items-center text-center p-6">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary/30 group-hover:border-primary shadow-md transition-all duration-300 transform group-hover:scale-105">
          <img  src={partner.logoUrl} alt={partner.imgPlaceholder} className="w-full h-full object-cover" />
        </div>
        <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">{partner.name}</CardTitle>
        <CardDescription className="text-sm text-primary/80 group-hover:text-primary transition-colors duration-300">{partner.category}</CardDescription>
      </CardHeader>
      <CardContent className="text-center p-6 pt-0 flex-grow">
        <p className="text-muted-foreground mb-6 min-h-[60px]">{partner.description}</p>
      </CardContent>
      <div className="p-6 pt-0 mt-auto">
        <Button asChild size="lg" className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white group-hover:scale-105 transform transition-transform duration-300">
          <a href={partner.website} target="_blank" rel="noopener noreferrer">
            Webseite besuchen
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </Card>
  </motion.div>
);

const PartnerPage = () => {
  return (
    <div className="space-y-16 py-8">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="inline-block p-5 bg-gradient-to-br from-primary to-purple-600 text-primary-foreground rounded-full mb-8 shadow-xl transform hover:scale-110 transition-transform duration-300">
          <Handshake className="h-14 w-14" />
        </div>
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-gradient mb-4">
          Unsere geschätzten Partner
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Gemeinsam stark: Wir sind stolz auf die Zusammenarbeit mit führenden Unternehmen und Organisationen, die unsere Vision teilen und unserer Community einen echten Mehrwert bieten.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
        {partners.map((partner, index) => (
          <PartnerCard key={partner.name} partner={partner} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center py-12"
      >
        <Card className="max-w-3xl mx-auto border-border/50 bg-card/70 backdrop-blur-xl shadow-2xl p-8 md:p-12 rounded-xl">
          <CardHeader className="p-0 mb-6">
            <div className="inline-block p-4 bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-full mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
              <Users className="h-10 w-10" />
            </div>
            <CardTitle className="text-4xl text-gradient from-green-400 to-teal-400">
              Werden Sie Teil unseres Netzwerks!
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Haben Sie Interesse an einer strategischen Partnerschaft mit GameCodeHub? Wir sind stets auf der Suche nach innovativen Kooperationen, die unsere Community bereichern. Lassen Sie uns gemeinsam wachsen!
            </p>
            <Button size="xl" asChild className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white text-lg px-10 py-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              <Link to="/tickets?category=partnership&subject=Partnership%20Inquiry">
                Jetzt Kontakt aufnehmen
              </Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default PartnerPage;