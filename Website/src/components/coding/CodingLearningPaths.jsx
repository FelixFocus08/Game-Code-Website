import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const learningPathsData = [
  {
    title: "Web-Entwicklung",
    badges: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    description: "Beginne mit den Grundlagen von HTML, CSS und JavaScript, bevor du zu Frameworks wie React übergehst. Lerne dann Backend-Entwicklung mit Node.js und Datenbanken.",
  },
  {
    title: "Data Science",
    badges: ["Python", "Pandas", "NumPy", "Matplotlib", "Machine Learning"],
    description: "Starte mit Python-Grundlagen, dann lerne Datenanalyse mit Pandas und NumPy. Visualisiere Daten mit Matplotlib und tauche in Machine Learning mit scikit-learn ein.",
  },
  {
    title: "Mobile Entwicklung",
    badges: ["JavaScript", "React Native", "Flutter", "Swift", "Kotlin"],
    description: "Beginne mit JavaScript und React für Cross-Platform-Entwicklung mit React Native, oder lerne Flutter für eine Alternative. Für native Apps konzentriere dich auf Swift (iOS) oder Kotlin (Android).",
  },
  {
    title: "DevOps & Cloud",
    badges: ["Linux", "Docker", "Kubernetes", "AWS", "CI/CD"],
    description: "Starte mit Linux-Grundlagen und Bash-Scripting. Lerne dann Container mit Docker und Orchestrierung mit Kubernetes. Vertiefe dein Wissen mit Cloud-Plattformen wie AWS und CI/CD-Pipelines.",
  },
];

const CodingLearningPaths = () => {
  return (
    <section className="py-12">
      <div className="rounded-lg border border-border/50 bg-card/50 p-6">
        <h2 className="text-2xl font-bold mb-6">Empfohlene Lernpfade</h2>
        <div className="space-y-6">
          {learningPathsData.map((path) => (
            <div key={path.title} className="rounded-md border border-border/50 bg-background/50 p-4">
              <h3 className="text-lg font-semibold mb-2">{path.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {path.badges.map((badge) => (
                  <Badge key={badge}>{badge}</Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {path.description}
              </p>
              <Button variant="outline" size="sm">Lernpfad anzeigen</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingLearningPaths;