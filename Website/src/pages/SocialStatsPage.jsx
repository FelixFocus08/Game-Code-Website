import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Youtube, Twitter, Twitch, Github, Linkedin, BarChart3, TrendingUp, Eye } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

const socialPlatforms = [
  { name: "YouTube", icon: <Youtube className="h-10 w-10 text-red-500" />, key: "youtubeSubscribers", unit: "Abonnenten", color: "shadow-red-500/40 hover:shadow-red-500/60 border-red-500/30 hover:border-red-500/50", gradient: "from-red-500/10 to-background" },
  { name: "Twitter", icon: <Twitter className="h-10 w-10 text-blue-400" />, key: "twitterFollowers", unit: "Follower", color: "shadow-blue-400/40 hover:shadow-blue-400/60 border-blue-400/30 hover:border-blue-400/50", gradient: "from-blue-400/10 to-background" },
  { name: "Twitch", icon: <Twitch className="h-10 w-10 text-purple-500" />, key: "twitchFollowers", unit: "Follower", color: "shadow-purple-500/40 hover:shadow-purple-500/60 border-purple-500/30 hover:border-purple-500/50", gradient: "from-purple-500/10 to-background" },
  { name: "Discord", icon: <FaDiscord className="h-10 w-10 text-indigo-500" />, key: "discordMembers", unit: "Mitglieder", color: "shadow-indigo-500/40 hover:shadow-indigo-500/60 border-indigo-500/30 hover:border-indigo-500/50", gradient: "from-indigo-500/10 to-background" },
  { name: "GitHub", icon: <Github className="h-10 w-10 text-gray-400" />, key: "githubStars", unit: "Stars", color: "shadow-gray-400/40 hover:shadow-gray-400/60 border-gray-400/30 hover:border-gray-400/50", gradient: "from-gray-400/10 to-background" },
  { name: "LinkedIn", icon: <Linkedin className="h-10 w-10 text-sky-600" />, key: "linkedinConnections", unit: "Kontakte", color: "shadow-sky-600/40 hover:shadow-sky-600/60 border-sky-600/30 hover:border-sky-600/50", gradient: "from-sky-600/10 to-background" },
];

const AnimatedCounter = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value, 10);
    if (start === end || isNaN(end)) {
      setDisplayValue(isNaN(end) ? 0 : end);
      return;
    }

    const duration = 1800; 
    const totalFrames = duration / 20; // approx 50fps
    const increment = Math.ceil(end / totalFrames);

    let currentFrame = 0;
    const timer = setInterval(() => {
      currentFrame++;
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setDisplayValue(start);
    }, 20); 

    return () => clearInterval(timer);
  }, [value]);

  return <span className="text-5xl font-extrabold text-gradient">{displayValue.toLocaleString()}</span>;
};


const SocialStatsPage = () => {
  const [stats, setStats] = useState({
    youtubeSubscribers: 0, twitterFollowers: 0, twitchFollowers: 0,
    discordMembers: 0, githubStars: 0, linkedinConnections: 0,
    totalReach: 0, monthlyImpressions: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = () => {
      setLoading(true);
      setTimeout(() => {
        const newStats = {
          youtubeSubscribers: Math.floor(Math.random() * 75000) + 15000,
          twitterFollowers: Math.floor(Math.random() * 30000) + 8000,
          twitchFollowers: Math.floor(Math.random() * 45000) + 10000,
          discordMembers: Math.floor(Math.random() * 20000) + 5000,
          githubStars: Math.floor(Math.random() * 8000) + 1500,
          linkedinConnections: Math.floor(Math.random() * 3000) + 700,
        };
        const totalReach = Object.values(newStats).reduce((sum, val) => sum + val, 0);
        setStats({
          ...newStats,
          totalReach,
          monthlyImpressions: Math.floor(Math.random() * 800000) + 150000,
        });
        setLoading(false);
      }, 1200);
    };
    fetchStats();
  }, []);

  return (
    <div className="space-y-16 py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <motion.div 
          className="inline-block p-5 bg-gradient-to-br from-primary via-purple-600 to-pink-600 text-primary-foreground rounded-full mb-8 shadow-xl ring-4 ring-primary/30"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          <BarChart3 className="h-14 w-14" />
        </motion.div>
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl text-gradient mb-5">
          Social Media Statistiken
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Einblicke in unsere Community-Größe und Reichweite auf verschiedenen Plattformen. Diese Zahlen werden regelmäßig aktualisiert (derzeit mit Dummy-Daten).
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
        {socialPlatforms.map((platform, index) => (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.12, ease: [0.25, 1, 0.5, 1] }}
            whileHover={{ y: -8, scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 15 } }}
          >
            <Card className={`h-full card-hover border bg-card/70 backdrop-blur-lg overflow-hidden shadow-lg transition-all duration-300 ${platform.color} bg-gradient-to-br ${platform.gradient}`}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 pt-6 px-6">
                <CardTitle className="text-xl font-semibold text-foreground">{platform.name}</CardTitle>
                {platform.icon}
              </CardHeader>
              <CardContent className="px-6 pb-6">
                {loading ? (
                  <div className="h-12 bg-muted/50 animate-pulse rounded-md w-3/4 my-1"></div>
                ) : (
                  <AnimatedCounter value={stats[platform.key]} />
                )}
                <p className="text-sm text-muted-foreground mt-1.5">{platform.unit}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: socialPlatforms.length * 0.12, ease: "easeOut" }}
      >
        <Card className="border-border/50 bg-card/70 backdrop-blur-xl shadow-2xl overflow-hidden">
          <CardHeader className="p-8 bg-muted/30">
            <CardTitle className="text-3xl font-bold text-gradient">Gesamtübersicht</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">Aggregierte Statistiken unserer Online-Präsenz.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Gesamte Community-Größe", valueKey: "totalReach", icon: <Users className="h-8 w-8" />, iconBg: "bg-gradient-to-br from-green-500 to-teal-500" },
              { title: "Monatliche Impressionen (geschätzt)", valueKey: "monthlyImpressions", icon: <Eye className="h-8 w-8" />, iconBg: "bg-gradient-to-br from-orange-500 to-yellow-500" },
            ].map(item => (
              <motion.div 
                key={item.title}
                className="flex items-center space-x-6 p-6 bg-card/50 backdrop-blur-sm rounded-xl shadow-lg border border-border/40"
                whileHover={{ scale: 1.03, boxShadow: "0px 8px 20px rgba(0,0,0,0.1)" }}
              >
                <div className={`p-4 ${item.iconBg} text-white rounded-full shadow-md`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-base text-muted-foreground mb-1">{item.title}</p>
                  {loading ? (
                    <div className="h-12 bg-muted/50 animate-pulse rounded-md w-3/4"></div>
                  ) : (
                    <AnimatedCounter value={stats[item.valueKey]} />
                  )}
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
      
      <AnimatePresence>
      {!loading && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: (socialPlatforms.length * 0.12) + 0.3 }}
          className="text-center text-base text-muted-foreground"
        >
          Hinweis: Die angezeigten Zahlen sind derzeit Dummy-Daten und dienen zur Veranschaulichung.
        </motion.p>
      )}
      </AnimatePresence>
    </div>
  );
};

export default SocialStatsPage;