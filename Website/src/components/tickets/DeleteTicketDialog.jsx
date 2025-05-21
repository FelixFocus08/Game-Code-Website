import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const DeleteTicketDialog = ({ isOpen, onOpenChange, ticket, onTicketDelete }) => {
  const confirmDeleteTicket = () => {
    if (!ticket) return;
    onTicketDelete(ticket.id);
    toast({ title: "Ticket gelöscht", description: `Ticket #${ticket.id} wurde gelöscht.` });
    onOpenChange(false);
  };

  if (!ticket) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ticket löschen bestätigen</DialogTitle>
          <DialogDescription>
            Bist du sicher, dass du das Ticket #{ticket.id} unwiderruflich löschen möchtest? Diese Aktion kann nicht rückgängig gemacht werden.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Abbrechen</Button>
          <Button variant="destructive" onClick={confirmDeleteTicket}>Löschen</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteTicketDialog;