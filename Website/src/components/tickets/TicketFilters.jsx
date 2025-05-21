import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const TicketFilters = ({ onFiltersChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onFiltersChange({ searchTerm: e.target.value, statusFilter, categoryFilter });
  };

  const handleStatusChange = (value) => {
    setStatusFilter(value);
    onFiltersChange({ searchTerm, statusFilter: value, categoryFilter });
  };

  const handleCategoryChange = (value) => {
    setCategoryFilter(value);
    onFiltersChange({ searchTerm, statusFilter, categoryFilter: value });
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Tickets durchsuchen (Betreff, Nachricht, Name, E-Mail)..."
          className="pl-10"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      
      <div className="flex gap-2 flex-wrap">
        <Select value={statusFilter} onValueChange={handleStatusChange}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Status filtern" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Alle Status</SelectItem>
            <SelectItem value="offen">Offen</SelectItem>
            <SelectItem value="in_bearbeitung">In Bearbeitung</SelectItem>
            <SelectItem value="geschlossen">Geschlossen</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={categoryFilter} onValueChange={handleCategoryChange}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Kategorie filtern" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Alle Kategorien</SelectItem>
            <SelectItem value="gaming">Gaming</SelectItem>
            <SelectItem value="coding">Coding</SelectItem>
            <SelectItem value="tips">Tipps & Tricks</SelectItem>
            <SelectItem value="other">Sonstiges</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default TicketFilters;