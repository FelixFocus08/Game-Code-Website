import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SupportBot from "@/components/SupportBot";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [supportBotOpen, setSupportBotOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen flex-col bg-transparent">
      <AnimatedBackground />
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        
        <AnimatePresence mode="wait">
          <motion.main 
            key={location.pathname}
            className="flex-1 px-4 py-8 md:px-8 lg:px-12 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ 
              duration: 0.4, 
              ease: "easeInOut"
            }}
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
      </div>
      
      <Footer />
      <ScrollToTopButton />
      <AnimatePresence>
        {supportBotOpen && <SupportBot onClose={() => setSupportBotOpen(false)} />}
      </AnimatePresence>
      {!supportBotOpen && (
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="gooeyLeft"
              size="icon"
              className="fixed bottom-4 right-4 z-50 rounded-full shadow-xl w-14 h-14"
              onClick={() => setSupportBotOpen(true)}
              aria-label="Support Bot öffnen"
            >
              <MessageSquare className="h-7 w-7" />
            </Button>
        </motion.div>
      )}
    </div>
  );
};

export default Layout;