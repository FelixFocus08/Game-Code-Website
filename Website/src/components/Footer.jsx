import React from "react";
import { Link } from "react-router-dom";
import { Github, Twitter, Twitch, Mail, Heart } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Gaming", path: "/gaming" },
    { name: "Coding", path: "/coding" },
    { name: "Tipps & Tricks", path: "/tips" },
    { name: "Tickets", path: "/tickets" },
  ];
  
  const socialLinks = [
    { name: "GitHub", url: "https://github.com", icon: <Github className="h-5 w-5" /> },
    { name: "Twitter", url: "https://twitter.com", icon: <Twitter className="h-5 w-5" /> },
    { name: "Twitch", url: "https://twitch.tv", icon: <Twitch className="h-5 w-5" /> },
    { name: "Discord", url: "https://discord.gg/6ZPskNPHXC", icon: <FaDiscord className="h-5 w-5" /> },
    { name: "Email", url: "mailto:info@gamecodehub.de", icon: <Mail className="h-5 w-5" /> },
  ];

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <span className="text-xl font-bold text-gradient">GameCodeHub</span>
            <p className="mt-2 text-sm text-muted-foreground">
              Deine zentrale Anlaufstelle für Gaming, Coding und hilfreiche Tipps & Tricks.
            </p>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <p className="font-medium">Schnelllinks</p>
            <nav className="mt-4 flex flex-col space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          
          <div>
            <p className="font-medium">Newsletter</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Abonniere unseren Newsletter für die neuesten Updates.
            </p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="deine@email.de"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <button
                type="submit"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                Abonnieren
              </button>
            </form>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} GameCodeHub. Alle Rechte vorbehalten.
          </p>
          <p className="flex items-center text-sm text-muted-foreground">
            Mit <Heart className="mx-1 h-4 w-4 text-red-500" /> erstellt
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;