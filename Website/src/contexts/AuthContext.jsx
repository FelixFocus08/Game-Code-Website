import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from "@/components/ui/use-toast";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const adminExists = users.some(u => u.role === 'admin');
    if (!adminExists) {
      const adminUser = {
        id: Date.now(),
        email: 'FelixFocus@outlook.de',
        password: '05060411', 
        role: 'admin',
        username: 'AdminFelix'
      };
      users.push(adminUser);
      localStorage.setItem('users', JSON.stringify(users));
    }
  }, []);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find(u => u.email === email && u.password === password);

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      toast({ title: "Login erfolgreich", description: `Willkommen zurück, ${foundUser.username}!` });
      return foundUser;
    } else {
      toast({ title: "Login fehlgeschlagen", description: "Ungültige E-Mail oder Passwort.", variant: "destructive" });
      return null;
    }
  };

  const register = (username, email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find(u => u.email === email);

    if (existingUser) {
      toast({ title: "Registrierung fehlgeschlagen", description: "Diese E-Mail-Adresse wird bereits verwendet.", variant: "destructive" });
      return null;
    }

    const newUser = {
      id: Date.now(),
      username,
      email,
      password, 
      role: 'user', 
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    toast({ title: "Registrierung erfolgreich", description: "Dein Account wurde erstellt. Du kannst dich jetzt einloggen." });
    return newUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
    toast({ title: "Logout erfolgreich" });
  };
  
  const updateUserRole = (userId, newRole) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex !== -1) {
      users[userIndex].role = newRole;
      localStorage.setItem('users', JSON.stringify(users));
      if (user && user.id === userId) {
        setUser({...user, role: newRole });
        localStorage.setItem('currentUser', JSON.stringify({...user, role: newRole }));
      }
      toast({ title: "Benutzerrolle aktualisiert", description: `Rolle für Benutzer ID ${userId} wurde zu ${newRole} geändert.` });
      return users[userIndex];
    }
    toast({ title: "Fehler", description: "Benutzer nicht gefunden.", variant: "destructive" });
    return null;
  };

  const getAllUsers = () => {
    return JSON.parse(localStorage.getItem('users') || '[]');
  };


  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateUserRole, getAllUsers }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);