import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext"; // Import useAuth

const TicketForm = () => {
  const { user } = useAuth(); // Get current user
  const [formData, setFormData] = useState({
    name: user ? user.username : "", // Pre-fill if user is logged in
    email: user ? user.email : "", // Pre-fill if user is logged in
    subject: "",
    category: "gaming",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");
      const newTicket = {
        id: Date.now(),
        ...formData,
        status: "offen",
        createdAt: new Date().toISOString(),
        updatedAt: null, // Add updatedAt field
      };
      
      tickets.push(newTicket);
      localStorage.setItem("tickets", JSON.stringify(tickets));
      
      setFormData({
        name: user ? user.username : "",
        email: user ? user.email : "",
        subject: "",
        category: "gaming",
        message: "",
      });
      
      setIsSubmitting(false);
      
      toast({
        title: "Ticket erstellt",
        description: "Dein Ticket wurde erfolgreich erstellt. Wir werden uns so schnell wie möglich bei dir melden.",
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg border border-border/50 bg-card/50 p-6 shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Neues Ticket erstellen</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Dein Name"
              required
              disabled={!!user} // Disable if user is logged in and name is pre-filled
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">E-Mail</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="deine@email.de"
              required
              disabled={!!user} // Disable if user is logged in and email is pre-filled
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="subject">Betreff</Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Betreff deines Tickets"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="category">Kategorie</Label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            required
          >
            <option value="gaming">Gaming</option>
            <option value="coding">Coding</option>
            <option value="tips">Tipps & Tricks</option>
            <option value="other">Sonstiges</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message">Nachricht</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Beschreibe dein Anliegen ausführlich..."
            rows={5}
            required
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Wird gesendet..." : "Ticket erstellen"}
        </Button>
      </form>
    </motion.div>
  );
};

export default TicketForm;