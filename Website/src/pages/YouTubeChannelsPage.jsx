import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Youtube, ExternalLink, UserCircle, PlayCircle, Users, Video } from 'lucide-react';

const channels = [
  {
    name: "Feligor08",
    description: "Gaming-Highlights, Let's Plays und mehr von Feligor08. Tauche ein in spannende Abenteuer und epische Momente.",
    url: "https://www.youtube.com/@Feligor08",
    bannerPlaceholder: "Abstraktes Gaming Banner für Feligor08 mit dunklen Tönen und Neon-Akzenten",
    subscribers: "1.2K", 
    videos: "150+",
    iconColor: "text-red-500 group-hover:text-red-400"
  },
  {
    name: "Felix_Focus",
    description: "Coding-Tutorials, Tech-Reviews und Einblicke in die Welt der Softwareentwicklung mit Felix_Focus.",
    url: "https://www.youtube.com/@Felix_Focus",
    bannerPlaceholder: "Modernes Tech-Banner für Felix_Focus mit Code-Fragmenten und hellen Farben",
    subscribers: "850",
    videos: "80+",
    iconColor: "text-blue-500 group-hover:text-blue-400"
  }
];

const YouTubeChannelCard = ({ channel, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="h-full group"
  >
    <Card className="h-full card-hover border-border/60 bg-card/80 backdrop-blur-xl overflow-hidden shadow-2xl hover:shadow-primary/40 transition-all duration-300 flex flex-col group-hover:border-primary/60 transform group-hover:-translate-y-2.5">
      <CardHeader className="p-0 relative">
        <div className="aspect-video overflow-hidden bg-muted">
          <img-replace alt={channel.bannerPlaceholder} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 w-full">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-full bg-background/20 backdrop-blur-sm ${channel.iconColor} transition-colors`}>
              <UserCircle className="h-8 w-8" />
            </div>
            <CardTitle className="text-3xl text-white group-hover:text-primary transition-colors duration-300">
              {channel.name}
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col">
        <CardDescription className="text-muted-foreground mb-5 text-base leading-relaxed min-h-[70px] flex-grow">
          {channel.description}
        </CardDescription>
        <div className="flex justify-between items-center text-sm text-muted-foreground mb-6 border-t border-border/50 pt-4 mt-auto">
          <div className="flex items-center gap-1.5">
            <Users className="h-4 w-4 text-primary/80" />
            <span>Abonnenten: <span className="font-semibold text-foreground">{channel.subscribers}</span></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Video className="h-4 w-4 text-primary/80" />
            <span>Videos: <span className="font-semibold text-foreground">{channel.videos}</span></span>
          </div>
        </div>
      </CardContent>
      <div className="p-6 pt-0">
        <Button asChild size="lg" className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white group-hover:scale-105 transform transition-transform duration-300 shadow-lg hover:shadow-red-500/50">
          <a href={channel.url} target="_blank" rel="noopener noreferrer">
            <PlayCircle className="mr-2 h-5 w-5" />
            Kanal besuchen
            <ExternalLink className="ml-auto h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </Card>
  </motion.div>
);

const YouTubeChannelsPage = () => {
  return (
    <div className="space-y-20 py-16">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center"
      >
        <div className="inline-block p-6 bg-gradient-to-br from-red-600 via-red-500 to-orange-400 text-white rounded-full mb-10 shadow-xl transform hover:scale-110 transition-transform duration-300 ring-4 ring-red-500/30">
          <Youtube className="h-16 w-16" />
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-gradient from-red-500 via-orange-400 to-yellow-400 mb-6">
          Unsere YouTube Kanäle
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Entdecke exklusive Inhalte, Tutorials und Unterhaltung auf unseren offiziellen YouTube-Kanälen. Abonniere uns, um nichts zu verpassen!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-14 max-w-6xl mx-auto px-4">
        {channels.map((channel, index) => (
          <YouTubeChannelCard key={channel.name} channel={channel} index={index} />
        ))}
      </div>
    </div>
  );
};

export default YouTubeChannelsPage;