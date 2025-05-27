import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, ChevronRight } from 'lucide-react';

const faqData = [
  {
    category: "Allgemein",
    questions: [
      {
        q: "Was ist GameCodeHub?",
        a: "GameCodeHub ist eine Plattform für Gaming-Enthusiasten und Programmierer. Wir bieten News, Tutorials, Ressourcen und eine Community, um Wissen zu teilen und Fähigkeiten zu verbessern."
      },
      {
        q: "Wie kann ich mich registrieren?",
        a: "Klicke oben rechts auf 'Registrieren' und fülle das Formular aus. Die Registrierung ist kostenlos und dauert nur wenige Minuten."
      },
      {
        q: "Ist die Nutzung von GameCodeHub kostenlos?",
        a: "Ja, die grundlegende Nutzung der Plattform, einschließlich des Zugriffs auf Artikel, Tutorials und Foren, ist kostenlos. Es könnte in Zukunft Premium-Funktionen geben."
      }
    ]
  },
  {
    category: "Gaming",
    questions: [
      {
        q: "Wo finde ich die neuesten Gaming-News?",
        a: "Besuche unseren Gaming-Bereich. Dort findest du aktuelle Nachrichten, Reviews zu neuen Spielen und Event-Berichterstattungen."
      },
      {
        q: "Bietet ihr auch Guides für bestimmte Spiele an?",
        a: "Ja, wir haben eine wachsende Sammlung an Guides und Strategien für beliebte Spiele. Schau im Gaming-Bereich unter 'Guides' nach."
      }
    ]
  },
  {
    category: "Coding",
    questions: [
      {
        q: "Welche Programmiersprachen werden behandelt?",
        a: "Wir konzentrieren uns auf Webentwicklung (JavaScript, React, etc.), Spieleentwicklung (C#, Unity, Unreal) und allgemeine Programmierkonzepte. Das Angebot wird stetig erweitert."
      },
      {
        q: "Ich bin Anfänger im Programmieren. Wo soll ich anfangen?",
        a: "Unser Coding-Bereich bietet spezielle Einführungen und Lernpfade für Anfänger. Starte mit den Grundlagen und arbeite dich zu komplexeren Themen vor."
      },
      {
        q: "Kann ich eigene Coding-Projekte vorstellen?",
        a: "Ja, wir planen eine Sektion, in der Community-Mitglieder ihre Projekte präsentieren können. Halte Ausschau nach Ankündigungen!"
      }
    ]
  },
  {
    category: "Account & Support",
    questions: [
      {
        q: "Wie kann ich mein Passwort zurücksetzen?",
        a: "Auf der Login-Seite findest du einen Link 'Passwort vergessen'. Folge den Anweisungen, um dein Passwort zurückzusetzen."
      },
      {
        q: "An wen wende ich mich bei Problemen oder Fragen?",
        a: "Du kannst ein Support-Ticket erstellen oder unseren Support-Bot nutzen. Für allgemeine Fragen steht auch die Community im Forum zur Verfügung."
      }
    ]
  }
];

const FAQPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-12 px-4 md:px-6"
    >
      <div className="text-center mb-16">
        <motion.div 
          className="inline-block p-5 bg-gradient-to-br from-primary via-purple-600 to-pink-600 text-primary-foreground rounded-full mb-8 shadow-xl ring-4 ring-primary/30"
          whileHover={{ scale: 1.1, rotate: -5 }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          <HelpCircle className="h-14 w-14" />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gradient">Häufig gestellte Fragen (FAQ)</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Hier findest du Antworten auf die am häufigsten gestellten Fragen zu GameCodeHub und unseren Angeboten.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-10">
        {faqData.map((categoryItem, index) => (
          <motion.div
            key={categoryItem.category}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary flex items-center">
              <ChevronRight className="h-7 w-7 mr-2 text-primary/70" />
              {categoryItem.category}
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {categoryItem.questions.map((faq, qIndex) => (
                <AccordionItem key={qIndex} value={`item-${index}-${qIndex}`} className="bg-card/70 border border-border/50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <AccordionTrigger className="p-5 text-left hover:no-underline text-base md:text-lg font-medium text-foreground">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="p-5 pt-0 text-base text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: faqData.length * 0.1 + 0.3, duration: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="text-lg text-muted-foreground">
          Noch Fragen? <a href="/tickets" className="text-primary hover:underline font-medium">Kontaktiere unseren Support</a>.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default FAQPage;