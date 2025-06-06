import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Instagram, Twitch, Youtube, Linkedin } from 'lucide-react';
import { FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const socialLinksData = [
  {
    name: "GitHub Profile",
    internalPath: "/github-profiles",
    icon: <Github className="h-8 w-8" />,
    description: "Entdecke unsere Open-Source-Projekte und trage zu unserer Community bei.",
    color: "bg-gray-800 hover:bg-gray-700",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/felig0r",
    icon: <Instagram className="h-8 w-8" />,
    description: "Folge uns für die neuesten Updates, Tipps und Ankündigungen.",
    color: "bg-pink-500 hover:bg-pink-600",
  },
  {
    name: "Twitch",
    url: "https://twitch.tv/fel1g0r",
    icon: <Twitch className="h-8 w-8" />,
    description: "Schau dir unsere Live-Streams zu Gaming und Coding an.",
    color: "bg-purple-600 hover:bg-purple-700",
  },
  {
    name: "YouTube Kanäle",
    internalPath: "/youtube-channels",
    icon: <Youtube className="h-8 w-8" />,
    description: "Tutorials, Gameplay und Coding-Sessions auf unseren Kanälen.",
    color: "bg-red-600 hover:bg-red-700",
  },
  {
    name: "Discord",
    url: "https://discord.gg/6ZPskNPHXC",
    icon: <FaDiscord className="h-8 w-8" />,
    description: "Tritt unserer Community bei und tausche dich mit Gleichgesinnten aus.",
    color: "bg-indigo-600 hover:bg-indigo-700",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: <Linkedin className="h-8 w-8" />,
    description: "Vernetze dich beruflich und entdecke Karrieremöglichkeiten.",
    color: "bg-blue-700 hover:bg-blue-800",
  },
];

const SocialLinks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Folge uns auf Social Media
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Bleibe auf dem Laufenden und verbinde dich mit unserer Community auf verschiedenen Plattformen.
          </p>
        </div>

        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {socialLinksData.map((link, index) => (
            <motion.div key={index} variants={itemVariants}>
              {link.internalPath ? (
                <Link to={link.internalPath} className="block h-full">
                  <Card className="h-full card-hover border-border/50 bg-card/50 overflow-hidden">
                    <div className={`h-2 w-full ${link.color}`}></div>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className={`rounded-full p-2 ${link.color} text-white`}>
                        {link.icon}
                      </div>
                      <CardTitle>{link.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground">
                        {link.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ) : (
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="h-full card-hover border-border/50 bg-card/50 overflow-hidden">
                    <div className={`h-2 w-full ${link.color}`}></div>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className={`rounded-full p-2 ${link.color} text-white`}>
                        {link.icon}
                      </div>
                      <CardTitle>{link.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground">
                        {link.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialLinks;