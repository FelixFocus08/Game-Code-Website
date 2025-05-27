import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Settings, Sun, Moon, Bell, Volume2, VolumeX } from "lucide-react";
import { useSettings } from "@/contexts/SettingsContext";
import { setGlobalVolume, playClickSound } from "@/lib/soundUtils";
import { toast } from "@/components/ui/use-toast";

const SettingsMenu = () => {
  const { settings, toggleDarkMode, toggleNotifications, toggleButtonSounds, updateSetting } = useSettings();
  const [volume, setVolume] = useState(() => {
    const savedVolume = localStorage.getItem('appVolume');
    return savedVolume ? parseFloat(savedVolume) : 0.1;
  });
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleVolumeChange = (newVolumeArray) => {
    const newVolume = newVolumeArray[0];
    setVolume(newVolume);
    setGlobalVolume(newVolume);
    localStorage.setItem('appVolume', newVolume.toString());
    if (settings.buttonSoundsEnabled) {
        playClickSound(); 
    }
  };
  
  React.useEffect(() => {
    setGlobalVolume(volume); 
  }, []);


  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Einstellungen öffnen">
          <Settings className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[350px] sm:w-[450px] flex flex-col">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-bold text-gradient">Einstellungen</SheetTitle>
          <SheetDescription>
            Passe das Erscheinungsbild und Verhalten der Anwendung an.
          </SheetDescription>
        </SheetHeader>
        
        <div className="space-y-8 flex-grow overflow-y-auto pr-2">
          <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/50">
            <div className="flex items-center space-x-3">
              {settings.darkMode ? <Moon className="h-5 w-5 text-primary" /> : <Sun className="h-5 w-5 text-primary" />}
              <Label htmlFor="dark-mode" className="text-base font-medium">
                Dark Mode
              </Label>
            </div>
            <Switch
              id="dark-mode"
              checked={settings.darkMode}
              onCheckedChange={toggleDarkMode}
              aria-label="Dark Mode umschalten"
            />
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/50">
            <div className="flex items-center space-x-3">
              <Bell className="h-5 w-5 text-primary" />
              <Label htmlFor="notifications" className="text-base font-medium">
                Benachrichtigungen
              </Label>
            </div>
            <Switch
              id="notifications"
              checked={settings.notificationsEnabled}
              onCheckedChange={toggleNotifications}
              aria-label="Benachrichtigungen umschalten"
            />
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/50">
            <div className="flex items-center space-x-3">
              {settings.buttonSoundsEnabled ? <Volume2 className="h-5 w-5 text-primary" /> : <VolumeX className="h-5 w-5 text-primary" />}
              <Label htmlFor="button-sounds" className="text-base font-medium">
                Button Sounds
              </Label>
            </div>
            <Switch
              id="button-sounds"
              checked={settings.buttonSoundsEnabled}
              onCheckedChange={toggleButtonSounds}
              aria-label="Button Sounds umschalten"
            />
          </div>
          
          <div className="space-y-3 p-4 rounded-lg bg-muted/30 border border-border/50">
             <div className="flex items-center justify-between">
                <Label htmlFor="volume-slider" className="text-base font-medium flex items-center">
                    <Volume2 className="h-5 w-5 text-primary mr-3" />
                    Globale Lautstärke
                </Label>
                <span className="text-sm text-muted-foreground">{(volume * 100).toFixed(0)}%</span>
            </div>
            <Slider
              id="volume-slider"
              defaultValue={[volume]}
              max={1}
              step={0.01}
              onValueChange={handleVolumeChange}
              disabled={!settings.buttonSoundsEnabled}
              aria-label="Lautstärke anpassen"
            />
          </div>
        </div>
        
        <SheetFooter className="mt-auto pt-6">
          <SheetClose asChild>
            <Button type="button" variant="outline" className="w-full">Schließen</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SettingsMenu;