import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from "@/components/ui/use-toast";

const defaultSettings = {
  darkMode: true,
  notificationsEnabled: true,
  buttonSoundsEnabled: true,
};

const SettingsContext = createContext({
  settings: defaultSettings,
  toggleDarkMode: () => {},
  toggleNotifications: () => {},
  toggleButtonSounds: () => {},
  updateSetting: (key, value) => {},
});

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem('appSettings');
    if (savedSettings) {
      return { ...defaultSettings, ...JSON.parse(savedSettings) };
    }
    return defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem('appSettings', JSON.stringify(settings));
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings]);

  const updateSetting = (key, value) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [key]: value,
    }));
  };

  const toggleDarkMode = () => {
    setSettings(prevSettings => ({
      ...prevSettings,
      darkMode: !prevSettings.darkMode,
    }));
    toast({
      title: "Design geändert",
      description: `Dark Mode ${!settings.darkMode ? "aktiviert" : "deaktiviert"}.`,
    });
  };

  const toggleNotifications = () => {
    setSettings(prevSettings => ({
      ...prevSettings,
      notificationsEnabled: !prevSettings.notificationsEnabled,
    }));
     toast({
      title: "Benachrichtigungen",
      description: `Benachrichtigungen ${!settings.notificationsEnabled ? "aktiviert" : "deaktiviert"}.`,
    });
  };

  const toggleButtonSounds = () => {
    setSettings(prevSettings => ({
      ...prevSettings,
      buttonSoundsEnabled: !prevSettings.buttonSoundsEnabled,
    }));
    toast({
      title: "Button-Sounds",
      description: `Sounds ${!settings.buttonSoundsEnabled ? "aktiviert" : "deaktiviert"}.`,
    });
  };

  return (
    <SettingsContext.Provider value={{ settings, toggleDarkMode, toggleNotifications, toggleButtonSounds, updateSetting }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);