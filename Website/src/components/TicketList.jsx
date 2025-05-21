import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import TicketFilters from "@/components/tickets/TicketFilters";
import TicketCard from "@/components/tickets/TicketCard";
import EditTicketDialog from "@/components/tickets/EditTicketDialog";
import DeleteTicketDialog from "@/components/tickets/DeleteTicketDialog";
import { Button } from "@/components/ui/button";

const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const { user } = useAuth();

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [ticketToDelete, setTicketToDelete] = useState(null);

  const canManageTickets = user && ['admin', 'support', 'moderator'].includes(user.role);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets") || "[]");
    const sortedTickets = storedTickets.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setTickets(sortedTickets);
    setFilteredTickets(sortedTickets); 
  }, []);

  const handleFiltersChange = (filters) => {
    let result = tickets;
    if (filters.searchTerm) {
      result = result.filter(
        (ticket) =>
          ticket.subject.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
          ticket.message.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
          ticket.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
          ticket.email.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );
    }
    if (filters.statusFilter !== "all") {
      result = result.filter((ticket) => ticket.status === filters.statusFilter);
    }
    if (filters.categoryFilter !== "all") {
      result = result.filter((ticket) => ticket.category === filters.categoryFilter);
    }
    if (user && !canManageTickets) {
      result = result.filter(ticket => ticket.email === user.email);
    }
    setFilteredTickets(result);
  };

  const handleEditTicket = (ticket) => {
    setSelectedTicket(ticket);
    setIsEditDialogOpen(true);
  };

  const handleDeleteRequest = (ticketId) => {
    const ticket = tickets.find(t => t.id === ticketId);
    if (ticket) {
      setTicketToDelete(ticket);
      setIsDeleteDialogOpen(true);
    }
  };

  const onTicketUpdate = (updatedTicket) => {
    const updatedTickets = tickets.map(t => (t.id === updatedTicket.id ? updatedTicket : t));
    setTickets(updatedTickets);
    localStorage.setItem('tickets', JSON.stringify(updatedTickets));
    setFilteredTickets(prev => prev.map(t => (t.id === updatedTicket.id ? updatedTicket : t)));
  };

  const onTicketDelete = (deletedTicketId) => {
    const updatedTickets = tickets.filter(t => t.id !== deletedTicketId);
    setTickets(updatedTickets);
    localStorage.setItem('tickets', JSON.stringify(updatedTickets));
    setFilteredTickets(prev => prev.filter(t => t.id !== deletedTicketId));
  };

  return (
    <div className="space-y-6">
      <TicketFilters onFiltersChange={handleFiltersChange} />
      
      {filteredTickets.length === 0 ? (
        <div className="rounded-lg border border-border/50 bg-card/50 p-8 text-center">
          <p className="text-muted-foreground">
            {user && !canManageTickets && tickets.length > 0 
              ? "Du hast noch keine Tickets erstellt oder deine Tickets entsprechen nicht den aktuellen Filtern." 
              : "Keine Tickets gefunden."}
          </p>
          {tickets.length > 0 && (
            <Button 
              variant="link" 
              onClick={() => handleFiltersChange({ searchTerm: "", statusFilter: "all", categoryFilter: "all" })}
            >
              Filter zurücksetzen
            </Button>
          )}
        </div>
      ) : (
        <AnimatePresence>
          <motion.div 
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {filteredTickets.map((ticket) => (
              <TicketCard 
                key={ticket.id} 
                ticket={ticket} 
                canManageTickets={canManageTickets}
                onEdit={handleEditTicket}
                onDelete={handleDeleteRequest}
                isAdmin={user?.role === 'admin'}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      )}

      {selectedTicket && (
        <EditTicketDialog
          isOpen={isEditDialogOpen}
          onOpenChange={setIsEditDialogOpen}
          ticket={selectedTicket}
          onTicketUpdate={onTicketUpdate}
        />
      )}

      {ticketToDelete && (
         <DeleteTicketDialog
          isOpen={isDeleteDialogOpen}
          onOpenChange={setIsDeleteDialogOpen}
          ticket={ticketToDelete}
          onTicketDelete={onTicketDelete}
        />
      )}
    </div>
  );
};

export default TicketList;