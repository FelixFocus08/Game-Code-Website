
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-bold text-primary">404</h1>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mt-6 mb-2">Seite nicht gefunden</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Die von dir gesuchte Seite existiert nicht oder wurde verschoben. Überprüfe die URL oder kehre zur Startseite zurück.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Zur Startseite
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="#" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück
            </Link>
          </Button>
        </div>
      </motion.div>
      
      <motion.div
        className="mt-16 w-full max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Vielleicht interessieren dich diese Bereiche:</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link to="/gaming">Gaming</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link to="/coding">Coding</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link to="/tips">Tipps & Tricks</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link to="/tickets">Support</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
