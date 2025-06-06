import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Github, Instagram, Twitch, LogIn, LogOut, UserPlus, ShieldCheck, Users, History, BarChart3, Youtube as YoutubeIcon, MessageSquare as MessageSquareIcon, HelpCircle, BookOpen } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { useSettings } from "@/contexts/SettingsContext";
import SettingsMenu from "@/components/SettingsMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const Navbar = ({ toggleSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();
  const { settings } = useSettings(); 
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Gaming", path: "/gaming" },
    { name: "Coding", path: "/coding" },
    { name: "Tipps", path: "/tips" },
    { name: "Tickets", path: "/tickets" },
  ];

  const moreLinks = [
    { name: "Partner", path: "/partners", icon: <Users className="mr-2 h-4 w-4" /> },
    { name: "Changelog", path: "/changelog", icon: <History className="mr-2 h-4 w-4" /> },
    { name: "Social Stats", path: "/social-stats", icon: <BarChart3 className="mr-2 h-4 w-4" /> },
    { name: "YouTube Kanäle", path: "/youtube-channels", icon: <YoutubeIcon className="mr-2 h-4 w-4" /> },
    { name: "FAQ", path: "/faq", icon: <HelpCircle className="mr-2 h-4 w-4" /> },
    { name: "Glossar", path: "/glossary", icon: <BookOpen className="mr-2 h-4 w-4" /> },
    { name: "Community Richtlinien", path: "/community-guidelines", icon: <MessageSquareIcon className="mr-2 h-4 w-4" /> },
  ];

  return (
    <motion.header
      className={`sticky top-0 z-40 w-full ${
        isScrolled ? "glass-effect" : "bg-background"
      } transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-gradient">GameCodeHub</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`link-hover text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="link-hover text-sm font-medium text-muted-foreground hover:text-foreground">
                Mehr
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {moreLinks.map((link) => (
                <DropdownMenuItem key={link.path} asChild>
                  <Link to={link.path} className={`flex items-center ${
                    location.pathname === link.path ? "text-primary" : ""
                  }`}>
                    {link.icon}
                    {link.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub Profil"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/felig0r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram Profil"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://twitch.tv/fel1g0r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitch Kanal"
            >
              <Twitch className="h-5 w-5" />
            </a>
            <Link
              to="/youtube-channels"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="YouTube Kanäle"
            >
              <YoutubeIcon className="h-5 w-5" />
            </Link>
            <a
              href="https://discord.gg/6ZPskNPHXC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Discord Server"
            >
              <FaDiscord className="h-5 w-5" />
            </a>
          </div>
          
          <SettingsMenu />


          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{user.username ? user.username.charAt(0).toUpperCase() : 'U'}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.username}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {user.role === 'admin' && (
                  <DropdownMenuItem asChild>
                    <Link to="/admin" className="flex items-center">
                      <ShieldCheck className="mr-2 h-4 w-4" />
                      Admin Panel
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem onClick={handleLogout} className="text-red-500 hover:!text-red-500 focus:!text-red-500">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-1 sm:gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/login">
                  <LogIn className="mr-1 sm:mr-2 h-4 w-4" /> Login
                </Link>
              </Button>
              <Button variant="default" size="sm" asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Link to="/register">
                  <UserPlus className="mr-1 sm:mr-2 h-4 w-4" /> Registrieren
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;