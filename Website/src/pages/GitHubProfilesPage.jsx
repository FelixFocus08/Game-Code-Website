import React from 'react';
import { motion } from 'framer-motion';
import { Github, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const profiles = [
  {
    name: 'FelixFocus08',
    url: 'https://github.com/FelixFocus08',
    description: 'Interessiert an Webentwicklung und Open-Source-Projekten.',
    avatarText: 'FF',
  },
  {
    name: 'Feligor08',
    url: 'https://github.com/Feligor08',
    description: 'Fokus auf Spieleentwicklung und interaktive Anwendungen.',
    avatarText: 'F0',
  },
];

const GitHubProfilesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-12 px-4 md:px-6"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Unsere GitHub Profile</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Entdecke unsere Projekte und Beiträge auf GitHub. Wir freuen uns über dein Interesse und mögliche Kollaborationen!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {profiles.map((profile, index) => (
          <motion.div
            key={profile.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden shadow-xl hover:shadow-primary/20 transition-shadow duration-300 h-full flex flex-col">
              <CardHeader className="bg-muted/50 p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                    {profile.avatarText}
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-semibold">{profile.name}</CardTitle>
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Profil ansehen
                    </a>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardDescription className="text-base text-muted-foreground">
                  {profile.description}
                </CardDescription>
              </CardContent>
              <div className="p-6 border-t bg-muted/30">
                <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white">
                  <a href={profile.url} target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="w-4 h-4 mr-2" />
                    Besuche {profile.name}
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
       <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <img   
            alt="Octocat, das GitHub Maskottchen, winkt freundlich" 
            className="mx-auto w-32 h-32"
          src="https://images.unsplash.com/photo-1566241440091-ec10de8db2e1" />
        <p className="mt-4 text-muted-foreground">
            Wir sind aktiv auf GitHub – schau vorbei und werde Teil unserer Community!
        </p>
      </motion.div>
    </motion.div>
  );
};

export default GitHubProfilesPage;