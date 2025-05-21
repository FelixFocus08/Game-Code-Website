import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit3, Trash2 } from "lucide-react";

const getStatusColor = (status) => {
  switch (status) {
    case "offen": return "bg-yellow-500 text-yellow-50";
    case "in_bearbeitung": return "bg-blue-500 text-blue-50";
    case "geschlossen": return "bg-green-500 text-green-50";
    default: return "bg-gray-500 text-gray-50";
  }
};

const getCategoryLabel = (category) => {
  const labels = { gaming: "Gaming", coding: "Coding", tips: "Tipps & Tricks", other: "Sonstiges" };
  return labels[category] || category;
};

const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  }).format(date);
};

const TicketCard = ({ ticket, canManageTickets, onEdit, onDelete, isAdmin }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="overflow-hidden border-border/50 bg-card/50 flex flex-col h-full shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="pb-2">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <CardTitle className="text-lg">{ticket.subject}</CardTitle>
            <div className="flex flex-wrap gap-2">
              <Badge className={getStatusColor(ticket.status)}>
                {ticket.status === "offen" && "Offen"}
                {ticket.status === "in_bearbeitung" && "In Bearbeitung"}
                {ticket.status === "geschlossen" && "Geschlossen"}
              </Badge>
              <Badge variant="outline">{getCategoryLabel(ticket.category)}</Badge>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
            <span>Von: {ticket.name} ({ticket.email})</span>
            <span>ID: #{ticket.id}</span>
          </div>
          <div className="text-xs text-muted-foreground">
            Erstellt: {formatDate(ticket.createdAt)}
            {ticket.updatedAt && ` | Aktualisiert: ${formatDate(ticket.updatedAt)}`}
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-3">{ticket.message}</p>
        </CardContent>
        {canManageTickets && (
          <CardFooter className="border-t border-border/30 pt-3 flex justify-end gap-2">
            <Button variant="outline" size="sm" onClick={() => onEdit(ticket)}>
              <Edit3 className="h-4 w-4 mr-1" /> Bearbeiten
            </Button>
            {isAdmin && (
              <Button variant="destructive" size="sm" onClick={() => onDelete(ticket.id)}>
                <Trash2 className="h-4 w-4 mr-1" /> Löschen
              </Button>
            )}
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
};

export default TicketCard;