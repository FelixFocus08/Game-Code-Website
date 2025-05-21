
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Home, Gamepad2, Code, Lightbulb, BadgeCheck as TicketCheck, Github, Twitter, Twitch, Users, History, BarChart3 } from 'lucide-react';
import { FaDiscord } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const mainLinks = [
    { name: "Home", path: "/", icon: <Home className="h-5 w-5" /> },
    { name: "Gaming", path: "/gaming", icon: <Gamepad2 className="h-5 w-5" /> },
    { name: "Coding", path: "/coding", icon: <Code className="h-5 w-5" /> },
    { name: "Tipps", path: "/tips", icon: <Lightbulb className="h-5 w-5" /> },
    { name: "Tickets", path: "/tickets", icon: <TicketCheck className="h-5 w-5" /> },
  ];

  const moreLinks = [
    { name: "Partner", path: "/partners", icon: <Users className="h-5 w-5" /> },
    { name: "Changelog", path: "/changelog", icon: <History className="h-5 w-5" /> },
    { name: "Social Stats", path: "/social-stats", icon: <BarChart3 className="h-5 w-5" /> },
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com", icon: <Github className="h-5 w-5" /> },
    { name: "Twitter", url: "https://twitter.com", icon: <Twitter className="h-5 w-5" /> },
    { name: "Twitch", url: "https://twitch.tv", icon: <Twitch className="h-5 w-5" /> },
    { name: "Discord", url: "https://discord.gg/6ZPskNPHXC", icon: <FaDiscord className="h-5 w-5" /> },
  ];

  const sidebarVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { x: "-100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
  };

  const overlayVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  const NavLinkItem = ({ link, onClick }) => (
    <Link
      to={link.path}
      className={`flex items-center gap-3 rounded-md px-3 py-2 transition-colors ${
        location.pathname === link.path
          ? "bg-primary/10 text-primary"
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
      onClick={onClick}
    >
      {link.icon}
      <span>{link.name}</span>
    </Link>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            onClick={toggleSidebar}
            aria-hidden="true"
          />
          
          <motion.aside
            className="fixed left-0 top-0 z-50 h-full w-64 bg-card border-r border-border p-4 md:hidden flex flex-col"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            aria-label="Seitenleiste"
          >
            <div className="flex items-center justify-between mb-6">
              <Link to="/" className="text-xl font-bold text-gradient" onClick={toggleSidebar}>
                GameCodeHub
              </Link>
              <Button variant="ghost" size="icon" onClick={toggleSidebar} aria-label="Seitenleiste schließen">
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <nav className="flex-grow space-y-1 overflow-y-auto">
              <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Navigation</p>
              {mainLinks.map((link) => (
                <NavLinkItem key={link.path} link={link} onClick={toggleSidebar} />
              ))}
              <Separator className="my-4" />
              <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Mehr</p>
              {moreLinks.map((link) => (
                <NavLinkItem key={link.path} link={link} onClick={toggleSidebar} />
              ))}
            </nav>
            
            <div className="mt-auto pt-4 border-t border-border">
              <p className="text-sm font-medium text-muted-foreground mb-2 text-center">Social Media</p>
              <div className="flex items-center justify-around">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
