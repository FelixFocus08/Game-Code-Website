import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { toast } from "@/components/ui/use-toast";
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";


const AdminPage = () => {
  const { user, getAllUsers, updateUserRole } = useAuth();
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [editTicketData, setEditTicketData] = useState({ subject: '', message: '', status: '' });
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  useEffect(() => {
    setUsers(getAllUsers());
    const storedTickets = JSON.parse(localStorage.getItem('tickets') || '[]');
    setTickets(storedTickets.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
  }, [getAllUsers]);

  const handleRoleChange = (userId, newRole) => {
    updateUserRole(userId, newRole);
    setUsers(getAllUsers()); 
  };

  const handleEditTicket = (ticket) => {
    setSelectedTicket(ticket);
    setEditTicketData({ subject: ticket.subject, message: ticket.message, status: ticket.status });
    setIsEditDialogOpen(true);
  };

  const handleSaveTicketChanges = () => {
    if (!selectedTicket) return;
    const updatedTickets = tickets.map(t => 
      t.id === selectedTicket.id ? { ...t, ...editTicketData, updatedAt: new Date().toISOString() } : t
    );
    setTickets(updatedTickets);
    localStorage.setItem('tickets', JSON.stringify(updatedTickets));
    toast({ title: "Ticket aktualisiert", description: `Ticket #${selectedTicket.id} wurde erfolgreich bearbeitet.` });
    setIsEditDialogOpen(false);
    setSelectedTicket(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "offen": return "bg-yellow-500 text-yellow-50";
      case "in_bearbeitung": return "bg-blue-500 text-blue-50";
      case "geschlossen": return "bg-green-500 text-green-50";
      default: return "bg-gray-500 text-gray-50";
    }
  };
  
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("de-DE", {
      day: "2-digit", month: "2-digit", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    }).format(date);
  };


  if (!user || user.role !== 'admin') {
    return <div className="p-4">Zugriff verweigert. Nur Administratoren können diese Seite sehen.</div>;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4 space-y-8"
    >
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-gradient">Admin Dashboard</h1>
        <p className="text-lg text-muted-foreground">Verwalte Benutzer, Tickets und mehr.</p>
      </header>

      <Tabs defaultValue="userManagement" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="userManagement">Benutzerverwaltung</TabsTrigger>
          <TabsTrigger value="ticketManagement">Ticketverwaltung</TabsTrigger>
        </TabsList>

        <TabsContent value="userManagement">
          <Card className="shadow-xl border-border/50 bg-card/80 backdrop-blur-lg">
            <CardHeader>
              <CardTitle>Benutzerverwaltung</CardTitle>
              <CardDescription>Übersicht aller registrierten Benutzer und deren Rollen.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Benutzername</TableHead>
                    <TableHead>E-Mail</TableHead>
                    <TableHead>Rolle</TableHead>
                    <TableHead>Aktion</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((u) => (
                    <TableRow key={u.id}>
                      <TableCell>{u.id}</TableCell>
                      <TableCell>{u.username}</TableCell>
                      <TableCell>{u.email}</TableCell>
                      <TableCell>
                        <Badge variant={u.role === 'admin' ? 'default' : 'secondary'}>{u.role}</Badge>
                      </TableCell>
                      <TableCell>
                        {u.email !== 'FelixFocus@outlook.de' ? (
                          <Select
                            defaultValue={u.role}
                            onValueChange={(newRole) => handleRoleChange(u.id, newRole)}
                          >
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Rolle ändern" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="user">Benutzer</SelectItem>
                              <SelectItem value="support">Support</SelectItem>
                              <SelectItem value="moderator">Moderator</SelectItem>
                              <SelectItem value="admin">Admin</SelectItem>
                            </SelectContent>
                          </Select>
                        ) : (
                          <span className="text-sm text-muted-foreground">Haupt-Admin</span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ticketManagement">
          <Card className="shadow-xl border-border/50 bg-card/80 backdrop-blur-lg">
            <CardHeader>
              <CardTitle>Ticketverwaltung</CardTitle>
              <CardDescription>Übersicht und Bearbeitung aller erstellten Tickets.</CardDescription>
            </CardHeader>
            <CardContent>
              {tickets.length === 0 ? (
                <p className="text-muted-foreground text-center">Keine Tickets vorhanden.</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Betreff</TableHead>
                      <TableHead>Ersteller</TableHead>
                      <TableHead>Kategorie</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Erstellt am</TableHead>
                      <TableHead>Aktion</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tickets.map((ticket) => (
                      <TableRow key={ticket.id}>
                        <TableCell>{ticket.id}</TableCell>
                        <TableCell className="font-medium">{ticket.subject}</TableCell>
                        <TableCell>{ticket.name} ({ticket.email})</TableCell>
                        <TableCell><Badge variant="outline">{ticket.category}</Badge></TableCell>
                        <TableCell><Badge className={getStatusColor(ticket.status)}>{ticket.status}</Badge></TableCell>
                        <TableCell>{formatDate(ticket.createdAt)}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm" onClick={() => handleEditTicket(ticket)}>Bearbeiten</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Ticket #{selectedTicket?.id} bearbeiten</DialogTitle>
            <DialogDescription>
              Ändere den Betreff, die Nachricht oder den Status des Tickets.
            </DialogDescription>
          </DialogHeader>
          {selectedTicket && (
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
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Abbrechen</Button>
            <Button onClick={handleSaveTicketChanges}>Änderungen speichern</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </motion.div>
  );
};

export default AdminPage;