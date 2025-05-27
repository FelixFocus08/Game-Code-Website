import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, Search } from 'lucide-react';

const glossaryTerms = [
  { term: "AAA (Triple-A)", definition: "Ein Klassifizierungsbegriff für Spiele mit sehr hohen Entwicklungs- und Marketingbudgets." },
  { term: "API (Application Programming Interface)", definition: "Eine Schnittstelle, die es verschiedenen Softwarekomponenten ermöglicht, miteinander zu kommunizieren." },
  { term: "Backend", definition: "Der Teil einer Softwareanwendung, der für die serverseitige Logik, Datenbankinteraktionen und API-Verwaltung zuständig ist und für den Benutzer nicht direkt sichtbar ist." },
  { term: "Beta", definition: "Eine Testphase für ein Spiel oder eine Software, die vor der offiziellen Veröffentlichung stattfindet, um Fehler zu finden und Feedback zu sammeln." },
  { term: "Bug", definition: "Ein Fehler oder eine Fehlfunktion in einem Computerprogramm oder System." },
  { term: "CLI (Command Line Interface)", definition: "Eine textbasierte Benutzeroberfläche, über die Benutzer Befehle an ein Computerprogramm eingeben." },
  { term: "Cloud Computing", definition: "Die Bereitstellung von IT-Ressourcen (z.B. Server, Speicher, Datenbanken) über das Internet nach Bedarf." },
  { term: "Commit", definition: "In der Versionskontrolle (z.B. Git) das Speichern von Änderungen an Dateien in einem Repository." },
  { term: "Compiler", definition: "Ein Programm, das Quellcode einer Programmiersprache in Maschinencode oder eine andere Zielsprache übersetzt." },
  { term: "Cookie", definition: "Eine kleine Textdatei, die von einer Website auf dem Computer eines Benutzers gespeichert wird, um Informationen wie Anmeldedaten oder Präferenzen zu speichern." },
  { term: "CPU (Central Processing Unit)", definition: "Der Hauptprozessor eines Computers, der die meisten Berechnungen ausführt." },
  { term: "CSS (Cascading Style Sheets)", definition: "Eine Stylesheet-Sprache, die verwendet wird, um das Aussehen und die Formatierung von Webseiten zu beschreiben, die in HTML oder XML geschrieben sind." },
  { term: "Datenbank", definition: "Eine organisierte Sammlung von Daten, die elektronisch gespeichert und abgerufen werden können." },
  { term: "Debugging", definition: "Der Prozess des Findens und Behebens von Fehlern (Bugs) in Softwarecode." },
  { term: "Deployment", definition: "Der Prozess der Bereitstellung einer Softwareanwendung auf einem Server oder einer anderen Umgebung, damit sie von Benutzern verwendet werden kann." },
  { term: "DLC (Downloadable Content)", definition: "Zusätzliche Inhalte für ein bereits veröffentlichtes Videospiel, die heruntergeladen werden können." },
  { term: "DOM (Document Object Model)", definition: "Eine plattform- und sprachunabhängige Schnittstelle, die es Programmen und Skripten ermöglicht, dynamisch auf den Inhalt, die Struktur und das Format von HTML- und XML-Dokumenten zuzugreifen und diese zu aktualisieren." },
  { term: "Early Access", definition: "Ein Finanzierungsmodell in der Spielebranche, bei dem Konsumenten ein Spiel in einem frühen Entwicklungsstadium kaufen und spielen können." },
  { term: "Easter Egg", definition: "Eine versteckte Nachricht, ein Bild oder eine Funktion in einem Videospiel, Film oder einer Software." },
  { term: "Framework", definition: "Ein Software-Rahmenwerk, das eine grundlegende Struktur und Werkzeuge für die Entwicklung von Anwendungen bereitstellt." },
  { term: "Frontend", definition: "Der Teil einer Softwareanwendung, mit dem der Benutzer direkt interagiert (Benutzeroberfläche)." },
  { term: "Git", definition: "Ein verteiltes Versionskontrollsystem, das zur Verfolgung von Änderungen im Quellcode während der Softwareentwicklung verwendet wird." },
  { term: "GPU (Graphics Processing Unit)", definition: "Ein spezialisierter elektronischer Schaltkreis, der zur schnellen Manipulation und Änderung von Speicher entwickelt wurde, um die Erstellung von Bildern in einem Framebuffer zu beschleunigen, der für die Ausgabe auf einem Anzeigegerät vorgesehen ist." },
  { term: "HTML (HyperText Markup Language)", definition: "Die Standardauszeichnungssprache für Dokumente, die im Webbrowser angezeigt werden sollen." },
  { term: "HTTP (Hypertext Transfer Protocol)", definition: "Ein Anwendungsprotokoll zur Übertragung von Hypermedia-Dokumenten, wie z.B. HTML." },
  { term: "IDE (Integrated Development Environment)", definition: "Eine Softwareanwendung, die Programmierern umfassende Einrichtungen für die Softwareentwicklung bietet. Eine IDE besteht normalerweise mindestens aus einem Quellcode-Editor, Build-Automatisierungstools und einem Debugger." },
  { term: "Indie Game", definition: "Ein Videospiel, das von Einzelpersonen oder kleinen Teams ohne finanzielle Unterstützung eines großen Publishers entwickelt wird." },
  { term: "JavaScript", definition: "Eine Programmiersprache, die häufig für die Webentwicklung verwendet wird, um interaktive Effekte in Webbrowsern zu erzeugen." },
  { term: "JSON (JavaScript Object Notation)", definition: "Ein leichtgewichtiges Daten-Austauschformat, das für Menschen einfach zu lesen und zu schreiben und für Maschinen einfach zu parsen und zu generieren ist." },
  { term: "Lag", definition: "Eine spürbare Verzögerung zwischen der Aktion eines Spielers und der Reaktion des Spielservers in einem Online-Spiel." },
  { term: "LAN (Local Area Network)", definition: "Ein Computernetzwerk, das Computer innerhalb eines begrenzten Bereichs wie einem Wohnhaus, einer Schule, einem Labor, einem Universitätsgelände oder einem Bürogebäude verbindet." },
  { term: "Library (Bibliothek)", definition: "Eine Sammlung von vordefinierten Funktionen oder Routinen, die von Programmen verwendet werden können." },
  { term: "MMORPG (Massively Multiplayer Online Role-Playing Game)", definition: "Ein Online-Rollenspiel, das eine sehr große Anzahl von Spielern gleichzeitig in derselben persistenten Welt unterstützt." },
  { term: "Mod", definition: "Eine von Spielern erstellte Modifikation eines Videospiels, die Aspekte des Spiels verändert." },
  { term: "Noob", definition: "Ein abfälliger Begriff für einen Neuling oder eine unerfahrene Person in einem Spiel oder einer Aktivität." },
  { term: "NPC (Non-Player Character)", definition: "Eine Figur in einem Videospiel, die nicht von einem menschlichen Spieler gesteuert wird." },
  { term: "Open Source", definition: "Software, deren Quellcode öffentlich zugänglich ist und von jedermann eingesehen, modifiziert und verteilt werden kann." },
  { term: "Patch", definition: "Ein Software-Update, das Fehler behebt oder die Funktionalität verbessert." },
  { term: "Ping", definition: "Ein Maß für die Latenzzeit in Millisekunden, die Datenpakete benötigen, um von einem Computer zu einem Server und zurück zu gelangen." },
  { term: "Pixel", definition: "Der kleinste adressierbare Bildpunkt auf einem Bildschirm." },
  { term: "Plugin", definition: "Eine Softwarekomponente, die einer bestehenden Computeranwendung eine bestimmte Funktion hinzufügt." },
  { term: "RAM (Random Access Memory)", definition: "Eine Form von Computerspeicher, auf den direkt zugegriffen werden kann, unabhängig von der Reihenfolge, in der die Daten gespeichert wurden." },
  { term: "React", definition: "Eine JavaScript-Bibliothek zur Erstellung von Benutzeroberflächen." },
  { term: "Repository", definition: "Ein zentraler Speicherort, an dem Daten, typischerweise Quellcode, verwaltet und gespeichert werden." },
  { term: "Responsive Design", definition: "Ein Ansatz im Webdesign, der darauf abzielt, dass sich Webseiten flexibel an die Bildschirmgröße und Ausrichtung verschiedener Geräte anpassen." },
  { term: "RPG (Role-Playing Game)", definition: "Ein Spielgenre, in dem Spieler die Rollen von Charakteren in einer fiktiven Umgebung übernehmen." },
  { term: "SDK (Software Development Kit)", definition: "Eine Sammlung von Softwareentwicklungswerkzeugen in einer installierbaren Paket." },
  { term: "Server", definition: "Ein Computer oder ein System, das Ressourcen, Daten, Dienste oder Programme für andere Computer, sogenannte Clients, über ein Netzwerk bereitstellt." },
  { term: "Spam", definition: "Unerwünschte, meist kommerzielle Nachrichten, die massenhaft per E-Mail oder in Online-Foren verbreitet werden." },
  { term: "Sprite", definition: "Ein zweidimensionales Bitmap, das in die größere Szene eines Computerspiels integriert wird." },
  { term: "SQL (Structured Query Language)", definition: "Eine Datenbanksprache zur Definition, Abfrage und Manipulation von Daten in relationalen Datenbanken." },
  { term: "UI (User Interface)", definition: "Die Schnittstelle, über die ein Mensch mit einer Maschine oder Software interagiert." },
  { term: "UX (User Experience)", definition: "Das gesamte Erlebnis und die Wahrnehmung eines Benutzers bei der Interaktion mit einem Produkt, System oder einer Dienstleistung." },
  { term: "VPN (Virtual Private Network)", definition: "Ein Netzwerk, das eine sichere und verschlüsselte Verbindung über ein weniger sicheres Netzwerk, wie das Internet, herstellt." },
  { term: "Walkthrough", definition: "Eine detaillierte Anleitung, die zeigt, wie man ein Videospiel oder einen bestimmten Abschnitt davon erfolgreich abschließt." },
  { term: "Wireframe", definition: "Eine schematische Darstellung der Struktur einer Webseite oder Anwendung, die die Anordnung von Elementen und Funktionen zeigt, bevor das visuelle Design erstellt wird." },
];

const GlossaryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTerms = useMemo(() => {
    return glossaryTerms
      .filter(item => item.term.toLowerCase().includes(searchTerm.toLowerCase()) || item.definition.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [searchTerm]);

  const groupedTerms = useMemo(() => {
    return filteredTerms.reduce((acc, term) => {
      const firstLetter = term.term[0].toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(term);
      return acc;
    }, {});
  }, [filteredTerms]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-12 px-4 md:px-6"
    >
      <div className="text-center mb-16">
        <motion.div 
          className="inline-block p-5 bg-gradient-to-br from-sky-500 via-cyan-500 to-teal-500 text-primary-foreground rounded-full mb-8 shadow-xl ring-4 ring-sky-500/30"
          whileHover={{ scale: 1.1, rotate: 3 }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          <BookOpen className="h-14 w-14" />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gradient from-sky-500 via-cyan-400 to-teal-400">Glossar</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Finde Erklärungen zu wichtigen Begriffen aus der Welt des Gamings und der Programmierung.
        </p>
      </div>

      <div className="mb-10 max-w-xl mx-auto">
        <div className="relative">
          <Input
            type="text"
            placeholder="Begriff suchen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 py-3 text-base border-border/70 focus:border-primary"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
      </div>

      {Object.keys(groupedTerms).length === 0 && searchTerm && (
        <p className="text-center text-muted-foreground text-lg">Keine Begriffe für "{searchTerm}" gefunden.</p>
      )}

      <div className="space-y-10">
        {Object.entries(groupedTerms).map(([letter, terms]) => (
          <motion.div 
            key={letter}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary/30 pb-2 w-16 text-center">{letter}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {terms.map((item, index) => (
                <motion.div
                  key={item.term}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="h-full bg-card/70 border-border/50 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl text-foreground">{item.term}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-muted-foreground leading-relaxed">{item.definition}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default GlossaryPage;