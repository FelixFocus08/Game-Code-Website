import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const resourcesData = [
  {
    title: "Online-Kurse",
    links: [
      { name: "Udemy", url: "https://www.udemy.com" },
      { name: "Coursera", url: "https://www.coursera.org" },
      { name: "edX", url: "https://www.edx.org" },
      { name: "Pluralsight", url: "https://www.pluralsight.com" },
      { name: "freeCodeCamp", url: "https://www.freecodecamp.org" },
    ],
  },
  {
    title: "Dokumentationen",
    links: [
      { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
      { name: "Python Docs", url: "https://docs.python.org" },
      { name: "React Docs", url: "https://reactjs.org/docs" },
      { name: "Microsoft Docs", url: "https://docs.microsoft.com" },
      { name: "DevDocs", url: "https://devdocs.io" },
    ],
  },
  {
    title: "Coding-Challenges",
    links: [
      { name: "HackerRank", url: "https://www.hackerrank.com" },
      { name: "LeetCode", url: "https://leetcode.com" },
      { name: "Codewars", url: "https://www.codewars.com" },
      { name: "Project Euler", url: "https://projecteuler.net" },
      { name: "TopCoder", url: "https://www.topcoder.com" },
    ],
  },
  {
    title: "Entwicklungstools",
    links: [
      { name: "Visual Studio Code", url: "https://code.visualstudio.com" },
      { name: "JetBrains IDEs", url: "https://www.jetbrains.com" },
      { name: "Git", url: "https://git-scm.com" },
      { name: "Docker", url: "https://www.docker.com" },
      { name: "Postman", url: "https://www.postman.com" },
    ],
  },
  {
    title: "Community & Foren",
    links: [
      { name: "Stack Overflow", url: "https://stackoverflow.com" },
      { name: "GitHub", url: "https://github.com" },
      { name: "DEV Community", url: "https://dev.to" },
      { name: "Reddit Programming", url: "https://www.reddit.com/r/programming" },
      { name: "Discord Communities", url: "https://discord.com" },
    ],
  },
  {
    title: "Blogs & Newsletters",
    links: [
      { name: "CSS-Tricks", url: "https://css-tricks.com" },
      { name: "Smashing Magazine", url: "https://www.smashingmagazine.com" },
      { name: "JavaScript.info", url: "https://javascript.info" },
      { name: "freeCodeCamp News", url: "https://www.freecodecamp.org/news" },
      { name: "Hacker Newsletter", url: "https://hackernewsletter.com" },
    ],
  },
];

const CodingResources = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {resourcesData.map((resourceCategory) => (
        <Card key={resourceCategory.title} className="card-hover border-border/50 bg-card/50">
          <CardHeader>
            <CardTitle>{resourceCategory.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              {resourceCategory.links.map((link) => (
                <li key={link.name} className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-primary" />
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CodingResources;