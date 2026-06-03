// ============================================================
//  PORTFOLIO KONFIGURATION — Hier alles ausfüllen!
// ============================================================

export const config = {

  // --- PERSÖNLICHE DATEN ---
  name: "Paul Kühnel",
  role: "iOS Entwickler",
  location: "Salzgitter, Deutschland",
  email: "paul.kuehnel@proton.me",
  available: true, // true = "Open to Work" Badge anzeigen

  // --- BIO ---
  // Kurze Headline (wird groß angezeigt)
  tagline: "Ich entwickle native iOS-Apps, die Millionen von Menschen täglich nutzen.",
  // Längerer Fließtext über dich (kann mehrere Sätze sein)
  bio: "Ich bin iOS-Entwickler mit über 5 Jahren Erfahrung in der nativen App-Entwicklung mit Swift. Von Banking-Apps für die Erste Bank bis hin zu Mobilitätslösungen für die Wiener Linien – ich bringe komplexe Produkte sauber und nutzerzentriert auf iOS. Mein Fokus liegt auf robuster Architektur (MVVM, Modularisierung) und modernem Swift mit SwiftUI, Combine und Async/Await.",

  // --- SKILLS / TECHNOLOGIEN ---
  // Werden als animiertes Laufband angezeigt
  skills: [
    "Swift", "SwiftUI", "UIKit", "Combine", "Async/Await",
    "Concurrency", "Xcode", "MVVM", "Modularization", "Dependency Injection",
    "Git", "CI/CD", "Fastlane", "Jira", "Scrum", "TypeScript",
  ],

  // --- AUSBILDUNG ---
  education: [
    {
      degree: "Ausbildung Applikationsentwickler",
      institution: "Berufsschule EVITA, Wien",
      period: "Jul 2019 – Aug 2022",
      description: "Ausbildung im Bereich Applikationsentwicklung mit Schwerpunkt iOS, parallel zur Tätigkeit bei all about apps GmbH.",
    },
    {
      degree: "Duales Studium Angewandte Informatik",
      institution: "DHBW / SSI Schäfer, Mosbach",
      period: "Sep 2018 – Mär 2019",
      description: "",
    },
    {
      degree: "Duales Studium Onlinemedien",
      institution: "DHBW / Dichtungs Specht, Mosbach",
      period: "Feb 2017 – Jun 2018",
      description: "",
    },
    {
      degree: "Abitur",
      institution: "Nikolaus Kistner Gymnasium, Mosbach",
      period: "Sep 2004 – Jun 2016",
      description: "",
    },
  ],

  // --- BERUFSERFAHRUNG ---
  experience: [
    {
      role: "iOS Entwickler",
      company: "SHAPE (ehem. Appmotion), Hamburg",
      period: "Nov 2022 – heute",
      description: "Entwicklung und Wartung nativer iOS-Apps für namhafte Kunden wie Mercedes-Benz, Wiener Linien und FK Austria Wien. Umsetzung moderner Swift-Architekturen in agilen Teams.",
      tags: ["Swift", "SwiftUI", "UIKit", "MVVM", "Fastlane"],
    },
    {
      role: "iOS Entwickler (Ausbildung)",
      company: "all about apps GmbH, Wien",
      period: "Jul 2019 – Aug 2022",
      description: "Einstieg in die professionelle iOS-Entwicklung. Mitarbeit an mehreren Client-Projekten, darunter die GeorgeID App für die Erste Bank Österreich (MacOS SwiftUI).",
      tags: ["Swift", "UIKit", "SwiftUI", "Xcode"],
    },
  ],

  // --- PROJEKTE ---
  // Bild: Lege dein Projektbild in /public/projects/ ab und trage den Dateinamen ein.
  // Beispiel: image: "/projects/mein-projekt.jpg"
  // Ohne eigenes Bild → null lassen, dann wird ein Platzhalter angezeigt.
  projects: [
    {
      name: "Mercedes E-Commerce SDK",
      description: "Entwicklung eines nativen iOS SDKs für die Mercedes-Benz E-Commerce Plattform – mit UIKit und sauber modularisierter Architektur für den Einsatz in verschiedenen Mercedes-Apps.",
      image: null,
      tags: ["iOS", "UIKit", "Swift", "SDK"],
      link: null,
      liveUrl: null,
    },
    {
      name: "WienMobil – Wiener Linien",
      description: "Mitentwicklung der offiziellen Mobilitäts-App der Wiener Linien. Die App wird täglich von hunderttausenden Pendlern genutzt und deckt ÖPNV, Ticketing und Echtzeitdaten ab.",
      image: null,
      tags: ["iOS", "UIKit", "Swift"],
      link: null,
      liveUrl: null,
    },
    {
      name: "GeorgeID – Erste Bank Österreich",
      description: "Entwicklung der GeorgeID Authentifizierungs-App für die Erste Bank auf MacOS mit SwiftUI – sichere digitale Identitätslösung für das George Banking-Ökosystem.",
      image: null,
      tags: ["MacOS", "SwiftUI", "Swift"],
      link: null,
      liveUrl: null,
    },
    {
      name: "kombinationen.com",
      description: "Persönliches Projekt: Eine Webanwendung, entwickelt mit TypeScript.",
      image: null,
      tags: ["TypeScript"],
      link: null,
      liveUrl: "https://kombinationen.com",
    },
    {
      name: "Hero Stream Games",
      description: "Persönliches Projekt: Eine Gaming-Webapp, entwickelt mit TypeScript und auf Vercel gehostet.",
      image: null,
      tags: ["TypeScript", "Vercel"],
      link: null,
      liveUrl: "https://hero-stream-games.vercel.app",
    },
  ],

  // --- SOCIAL LINKS ---
  social: {
    github: "", // Trage deinen GitHub-Link ein
    linkedin: "", // Trage deinen LinkedIn-Link ein
    twitter: "",
    website: "",
  },

  // --- PROFILBILD ---
  // Lege dein Foto als /public/profile.jpg ab (empfohlen: quadratisch, min. 400x400px)
  // Oder trage eine externe URL ein.
  profileImage: null, // z.B. "/profile.jpg" oder "https://..."

};
