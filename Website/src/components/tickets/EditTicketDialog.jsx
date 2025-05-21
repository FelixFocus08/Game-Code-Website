import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

const EditTicketDialog = ({ isOpen, onOpenChange, ticket, onTicketUpdate }) => {
  const [editTicketData, setEditTicketData] = useState({ subject: '', message: '', status: '' });

  useEffect(() => {
    if (ticket) {
      setEditTicketData({ subject: ticket.subject, message: ticket.message, status: ticket.status });
    }
  }, [ticket]);

  const handleSaveTicketChanges = () => {
    if (!ticket) return;
    const updatedTicket = { ...ticket, ...editTicketData, updatedAt: new Date().toISOString() };
    onTicketUpdate(updatedTicket);
    toast({ title: "Ticket aktualisiert", description: `Ticket #${ticket.id} wurde erfolgreich bearbeitet.` });
    onOpenChange(false);
  };

  if (!ticket) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Ticket #{ticket.id} bearbeiten</DialogTitle>
          <DialogDescription>
            Ändere den Betreff, die Nachricht oder den Status des Tickets.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="edit-subject" className="text-right">Betreff</Label>
            <Input id="edit-subject" value={editTicketData.subject} onChange={(e) => setEditTicketData({...editTicketData, subject: e.target.value })} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="edit-message" className="text-right">Nachricht</Label>
            <Textarea id="edit-message" value={editTicketData.message} onChange={(e) => setEditTicketData({...editTicketData, message: e.target.value })} className="col-span-3" rows={5} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="edit-status" className="text-right">Status</Label>
            <Select value={editTicketData.status} onValueChange={(value) => setEditTicketData({...editTicketData, status: value })}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Status auswählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="offen">Offen</SelectItem>
                <SelectItem value="in_bearbeitung">In Bearbeitung</SelectItem>
                <SelectItem value="geschlossen">Geschlossen</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Abbrechen</Button>
          <Button onClick={handleSaveTicketChanges}>Änderungen speichern</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditTicketDialog;