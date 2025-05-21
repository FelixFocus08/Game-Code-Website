
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Youtube, Twitter, Twitch, Github, Linkedin, BarChart3, TrendingUp, Eye } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

const socialPlatforms = [
  { name: "YouTube", icon: <Youtube className="h-8 w-8 text-red-500" />, key: "youtubeSubscribers", unit: "Abonnenten", color: "shadow-red-500/50" },
  { name: "Twitter", icon: <Twitter className="h-8 w-8 text-blue-400" />, key: "twitterFollowers", unit: "Follower", color: "shadow-blue-400/50" },
  { name: "Twitch", icon: <Twitch className="h-8 w-8 text-purple-500" />, key: "twitchFollowers", unit: "Follower", color: "shadow-purple-500/50" },
  { name: "Discord", icon: <FaDiscord className="h-8 w-8 text-indigo-500" />, key: "discordMembers", unit: "Mitglieder", color: "shadow-indigo-500/50" },
  { name: "GitHub", icon: <Github className="h-8 w-8 text-gray-400" />, key: "githubStars", unit: "Stars", color: "shadow-gray-400/50" },
  { name: "LinkedIn", icon: <Linkedin className="h-8 w-8 text-sky-600" />, key: "linkedinConnections", unit: "Kontakte", color: "shadow-sky-600/50" },
];

const AnimatedCounter = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value, 10);
    if (start === end) return;

    const duration = 1500; 
    const incrementTime = (duration / end); 

    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / 50)); 
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setDisplayValue(start);
    }, Math.max(incrementTime, 20)); 

    return () => clearInterval(timer);
  }, [value]);

  return <span className="text-4xl font-bold text-gradient">{displayValue.toLocaleString()}</span>;
};


const SocialStatsPage = () => {
  const [stats, setStats] = useState({
    youtubeSubscribers: 0,
    twitterFollowers: 0,
    twitchFollowers: 0,
    discordMembers: 0,
    githubStars: 0,
    linkedinConnections: 0,
    totalReach: 0,
    monthlyImpressions: 0,
  });

  useEffect(() => {
    // Simuliere API-Aufruf
    const fetchStats = () => {
      setTimeout(() => {
        const newStats = {
          youtubeSubscribers: Math.floor(Math.random() * 50000) + 10000,
          twitterFollowers: Math.floor(Math.random() * 20000) + 5000,
          twitchFollowers: Math.floor(Math.random() * 30000) + 7000,
          discordMembers: Math.floor(Math.random() * 15000) + 3000,
          githubStars: Math.floor(Math.random() * 5000) + 1000,
          linkedinConnections: Math.floor(Math.random() * 2000) + 500,
        };
        const totalReach = Object.values(newStats).reduce((sum, val) => sum + val, 0);
        setStats({
          ...newStats,
          totalReach,
          monthlyImpressions: Math.floor(Math.random() * 500000) + 100000,
        });
      }, 1000);
    };
    fetchStats();
  }, []);

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="inline-block p-4 bg-gradient-to-br from-primary to-purple-600 text-primary-foreground rounded-full mb-6 shadow-lg">
          <BarChart3 className="h-12 w-12" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gradient">
          Social Media Statistiken
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Einblicke in unsere Community-Größe und Reichweite auf verschiedenen Plattformen. Diese Zahlen werden regelmäßig aktualisiert (derzeit mit Dummy-Daten).
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {socialPlatforms.map((platform, index) => (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className={`card-hover border-border/50 bg-card/60 backdrop-blur-md overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${platform.color}`}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium text-muted-foreground">{platform.name}</CardTitle>
                {platform.icon}
              </CardHeader>
              <CardContent>
                <AnimatedCounter value={stats[platform.key]} />
                <p className="text-xs text-muted-foreground mt-1">{platform.unit}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: socialPlatforms.length * 0.1 }}
      >
        <Card className="border-border/50 bg-card/60 backdrop-blur-md shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-gradient">Gesamtübersicht</CardTitle>
            <CardDescription>Aggregierte Statistiken unserer Online-Präsenz.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg">
              <div className="p-3 bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-full shadow-md">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Gesamte Community-Größe</p>
                <AnimatedCounter value={stats.totalReach} />
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-full shadow-md">
                <Eye className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Monatliche Impressionen (geschätzt)</p>
                <AnimatedCounter value={stats.monthlyImpressions} />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: (socialPlatforms.length * 0.1) + 0.2 }}
        className="text-center text-sm text-muted-foreground"
      >
        Hinweis: Die angezeigten Zahlen sind derzeit Dummy-Daten und dienen zur Veranschaulichung.
      </motion.p>
    </div>
  );
};

export default SocialStatsPage;
