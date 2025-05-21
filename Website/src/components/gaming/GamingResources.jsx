import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Gamepad2 } from "lucide-react";
import { FaTwitch, FaSteam, FaRedditAlien, FaYoutube } from "react-icons/fa";
import { SiIgn } from "react-icons/si";


const resources = [
  { name: "Twitch", url: "https://www.twitch.tv", description: "Live-Streams und Gaming-Content", icon: <FaTwitch className="h-6 w-6 text-purple-500" />, color: "bg-purple-600/10" },
  { name: "Steam", url: "https://store.steampowered.com", description: "PC-Spiele und Community", icon: <FaSteam className="h-6 w-6 text-blue-500" />, color: "bg-blue-600/10" },
  { name: "Reddit Gaming", url: "https://www.reddit.com/r/gaming", description: "Gaming-Community und Diskussionen", icon: <FaRedditAlien className="h-6 w-6 text-orange-500" />, color: "bg-orange-600/10" },
  { name: "IGN", url: "https://www.ign.com", description: "Gaming-News und Reviews", icon: <SiIgn className="h-6 w-6 text-red-500" />, color: "bg-red-600/10" },
  { name: "PC Gamer", url: "https://www.pcgamer.com", description: "PC-Gaming-News und Guides", icon: <Gamepad2 className="h-6 w-6 text-green-500" />, color: "bg-green-600/10" },
  { name: "YouTube Gaming", url: "https://gaming.youtube.com", description: "Videos, Streams und mehr", icon: <FaYoutube className="h-6 w-6 text-red-600" />, color: "bg-red-600/10" },
];

const GamingResources = () => {
  return (
    <section className="py-12">
      <Card className="border-border/50 bg-card/60 backdrop-blur-sm shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-gradient">Nützliche Gaming-Ressourcen</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => (
              <a 
                key={index}
                href={resource.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block rounded-lg border border-border/50 bg-muted/30 p-4 transition-all duration-300 hover:bg-muted/50 hover:shadow-md hover:border-primary/50"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 rounded-lg p-3 ${resource.color} group-hover:scale-110 transition-transform`}>
                    {resource.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{resource.name}</div>
                    <div className="text-sm text-muted-foreground">{resource.description}</div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                </div>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default GamingResources;