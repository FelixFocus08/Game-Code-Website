
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, MessageCircle, ThumbsUp, ThumbsDown, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const guidelines = [
  {
    icon: <ThumbsUp className="h-6 w-6 text-green-500" />,
    title: "Sei respektvoll",
    description: "Behandle alle Mitglieder mit Höflichkeit und Respekt. Keine persönlichen Angriffe, Belästigungen, Hassreden oder diskriminierendes Verhalten.",
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-blue-500" />,
    title: "Bleibe beim Thema",
    description: "Halte dich in Diskussionen und Kommentaren an das jeweilige Thema. Vermeide Spam, Eigenwerbung (außer in dafür vorgesehenen Bereichen) und irrelevante Inhalte.",
  },
  {
    icon: <Users className="h-6 w-6 text-purple-500" />,
    title: "Schütze die Privatsphäre",
    description: "Teile keine persönlichen Informationen über dich oder andere ohne deren ausdrückliche Zustimmung. Dies beinhaltet Adressen, Telefonnummern, private Nachrichten etc.",
  },
  {
    icon: <Shield className="h-6 w-6 text-yellow-500" />,
    title: "Keine illegalen Inhalte",
    description: "Das Posten oder Verlinken von illegalen Inhalten, urheberrechtlich geschütztem Material ohne Erlaubnis oder schädlicher Software ist strengstens untersagt.",
  },
  {
    icon: <ThumbsDown className="h-6 w-6 text-red-500" />,
    title: "Kein Trolling oder Störenfriedverhalten",
    description: "Absichtliches Provozieren, Stören von Diskussionen oder das Erstellen von Unruhe in der Community wird nicht toleriert.",
  },
  {
    icon: <AlertTriangle className="h-6 w-6 text-orange-500" />,
    title: "Melde Verstöße",
    description: "Wenn du Verhalten siehst, das gegen diese Richtlinien verstößt, melde es bitte unserem Moderationsteam über das Ticketsystem oder die dafür vorgesehenen Meldefunktionen.",
  },
];

const CommunityGuidelinesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-12 px-4 md:px-6"
    >
      <div className="text-center mb-16">
        <motion.div 
          className="inline-block p-5 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 text-primary-foreground rounded-full mb-8 shadow-xl ring-4 ring-green-500/30"
          whileHover={{ scale: 1.1, rotate: -3 }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          <Users className="h-14 w-14" />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gradient from-green-500 via-emerald-400 to-teal-400">Community-Richtlinien</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Willkommen bei GameCodeHub! Um eine positive und konstruktive Umgebung für alle zu gewährleisten, bitten wir dich, die folgenden Richtlinien zu beachten.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {guidelines.map((guideline, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full bg-card/70 border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                <div className="p-3 rounded-full bg-muted">
                  {guideline.icon}
                </div>
                <CardTitle className="text-xl text-foreground">{guideline.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{guideline.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: guidelines.length * 0.1 + 0.3, duration: 0.5 }}
        className="mt-16 text-center p-8 bg-card/70 border border-border/50 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4 text-primary">Konsequenzen bei Verstößen</h2>
        <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
          Verstöße gegen diese Richtlinien können je nach Schweregrad zu Verwarnungen, temporären oder permanenten Ausschlüssen von der Plattform führen. Unser Ziel ist es, eine faire und einladende Community zu schaffen.
        </p>
        <p className="text-sm text-muted-foreground">
          Diese Richtlinien können jederzeit aktualisiert werden. Bitte überprüfe sie regelmäßig.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default CommunityGuidelinesPage;
