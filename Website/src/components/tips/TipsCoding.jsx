
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

const codingTips = [
  {
    title: "Produktivitätstipps für Entwickler",
    content: "Steigere deine Produktivität beim Programmieren mit diesen Tipps:",
    points: [
      "Lerne Tastaturkürzel deines Code-Editors (VS Code, IntelliJ, etc.)",
      "Nutze Erweiterungen und Plugins für häufige Aufgaben",
      "Implementiere die Pomodoro-Technik (25 Minuten Arbeit, 5 Minuten Pause)",
      "Verwende Snippets für wiederkehrende Codeblöcke",
      "Automatisiere wiederkehrende Aufgaben mit Skripten",
      "Richte eine angenehme Arbeitsumgebung ein",
      "Dokumentiere deinen Code während der Entwicklung",
    ],
  },
  {
    title: "Clean Code Prinzipien",
    content: "Schreibe besseren, wartbaren Code mit diesen Prinzipien:",
    points: [
      "Verwende aussagekräftige Variablen- und Funktionsnamen",
      "Halte Funktionen klein und fokussiert (Single Responsibility)",
      "Kommentiere \"Warum\", nicht \"Was\" (der Code sollte selbsterklärend sein)",
      "Vermeide Duplizierung (DRY - Don't Repeat Yourself)",
      "Schreibe Tests für kritische Funktionalitäten",
      "Refaktoriere regelmäßig",
      "Folge konsistenten Formatierungsrichtlinien",
    ],
  },
  {
    title: "Debugging-Strategien",
    content: "Finde und behebe Fehler effektiver mit diesen Strategien:",
    points: [
      "Verstehe das Problem vollständig, bevor du nach Lösungen suchst",
      "Nutze Debugging-Tools deiner IDE (Breakpoints, Watches, etc.)",
      "Isoliere das Problem durch systematisches Testen",
      "Verwende Logging für komplexe Abläufe",
      "Überprüfe die Dokumentation und bekannte Issues",
      "Nutze Rubber Duck Debugging (erkläre das Problem laut)",
      "Mache regelmäßige Pausen, wenn du festgefahren bist",
    ],
  },
  {
    title: "Effizientes Git-Workflow",
    content: "Optimiere deine Arbeit mit Git durch diese Praktiken:",
    points: [
      "Committe früh und oft mit aussagekräftigen Commit-Messages",
      "Nutze Feature-Branches für neue Funktionen",
      "Führe regelmäßig Rebases oder Merges vom Hauptbranch durch",
      "Verwende Git-Hooks für automatisierte Checks",
      "Lerne fortgeschrittene Git-Befehle (rebase, cherry-pick, stash)",
      "Nutze Pull Requests für Code-Reviews",
      "Automatisiere Tests und Deployments mit CI/CD",
    ],
  },
];

const TipsCoding = () => {
  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="w-full space-y-4">
        {codingTips.map((tip, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`} className="border-border/50 bg-card/60 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <AccordionTrigger className="p-6 text-lg hover:no-underline text-left">
              {tip.title}
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0">
              <div className="space-y-4">
                <p className="text-muted-foreground">{tip.content}</p>
                <ul className="space-y-2">
                  {tip.points.map((point, pIndex) => (
                    <li key={pIndex} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default TipsCoding;
