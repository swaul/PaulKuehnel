// ============================================================
//  PORTFOLIO KONFIGURATION — Hier alles ausfüllen!
//  Jeder Abschnitt hat eine "de" und "en" Version.
// ============================================================

export const config = {

  // --- PERSÖNLICHE DATEN (sprachunabhängig) ---
  name: "Paul Kühnel",
  email: "paul.kuehnel@proton.me",
  location: { de: "Salzgitter, Deutschland", en: "Salzgitter, Germany" },
  available: true,

  // --- SOCIAL LINKS ---
  social: {
    github: "https://github.com/swaul",
    linkedin: "https://www.linkedin.com/in/paul-k-2a9949279/",
    website: "",
  },

  // --- PROFILBILD ---
  profileImage: null, // z.B. "/profile.jpg"

  // --- SKILLS (sprachunabhängig) ---
  skills: [
    "Swift", "SwiftUI", "UIKit", "Combine", "Async/Await",
    "Concurrency", "Xcode", "MVVM", "Modularization", "Dependency Injection",
    "Git", "CI/CD", "Fastlane", "Jira", "Scrum", "TypeScript",
  ],

  // ============================================================
  //  ÜBERSETZUNGEN
  // ============================================================
  de: {
    role: "iOS Entwickler",
    tagline: "Ich entwickle native iOS-Apps, die Millionen von Menschen täglich nutzen.",
    bio: "Ich bin iOS-Entwickler mit über 5 Jahren Erfahrung in der nativen App-Entwicklung mit Swift. Von Banking-Apps für die Erste Bank bis hin zu Mobilitätslösungen für die Wiener Linien - ich bringe komplexe Produkte sauber und nutzerzentriert auf iOS. Mein Fokus liegt auf robuster Architektur (MVVM, Modularisierung) und modernem Swift mit SwiftUI, Combine und Async/Await.",
    available: "Offen für Angebote",

    nav: {
      about: "Über mich",
      skills: "Skills",
      experience: "Erfahrung",
      projects: "Projekte",
      contact: "Kontakt",
    },

    about: {
      sectionLabel: "Über mich",
      heading: "Wer steckt hinter\nden Projekten?",
      educationHeading: "Ausbildung",
      yearsExp: "Jahre Erfahrung",
      projectsLabel: "Projekte",
      degreesLabel: "Abschlüsse",
    },

    expLabels: {
      sectionLabel: "Werdegang",
      heading: "Berufserfahrung",
    },

    projectLabels: {
      sectionLabel: "Portfolio",
      heading: "Ausgewählte Projekte",
      sub: "Eine Auswahl meiner Arbeiten — von Konzept bis zur fertigen Umsetzung.",
      liveDemo: "Live Demo",
      code: "Code",
      repository: "Repository",
      liveLink: "Live ansehen",
      placeholder: "Bild in /public/projects/\nablegen & config anpassen",
    },

    contact: {
      sectionLabel: "Kontakt",
      heading: "Lass uns etwas",
      headingAccent: "zusammen bauen.",
      sub: "Du hast ein Projekt, eine Idee oder eine offene Stelle? Ich freue mich über jede Nachricht.",
    },

    footer: {
      rights: "Alle Rechte vorbehalten.",
      built: "Built with React + Vite",
    },

    education: [
      {
        degree: "Ausbildung Applikationsentwickler",
        institution: "Berufsschule EVITA, Wien",
        period: "Jul 2019 - Aug 2022",
        description: "Ausbildung im Bereich Applikationsentwicklung mit Schwerpunkt iOS, parallel zur Tätigkeit bei all about apps GmbH.",
      },
      {
        degree: "Duales Studium Angewandte Informatik",
        institution: "DHBW / SSI Schäfer, Mosbach",
        period: "Sep 2018 - Mär 2019",
        description: "",
      },
      {
        degree: "Abitur",
        institution: "Nikolaus Kistner Gymnasium, Mosbach",
        period: "Sep 2004 - Jun 2016",
        description: "",
      },
    ],

    experience: [
      {
        role: "iOS Entwickler",
        company: "SHAPE (ehem. Appmotion), Hamburg",
        period: "Nov 2022 - heute",
        description: "Entwicklung und Wartung nativer iOS-Apps für namhafte Kunden wie Mercedes-Benz, Wiener Linien und FK Austria Wien. Umsetzung moderner Swift-Architekturen in agilen Teams.",
        tags: ["Swift", "SwiftUI", "UIKit", "MVVM", "Fastlane"],
      },
      {
        role: "Applikationsentwickler - Coding (Ausbildung)",
        company: "all about apps GmbH, Wien",
        period: "Jul 2019 - Aug 2022",
        description: "Im Unternehmen der Einstieg in die professionelle iOS-Entwicklung. Hierbei Mitarbeit an mehreren Client-Projekten, darunter die GeorgeID App für die Erste Bank Österreich (MacOS SwiftUI). In der Berufsschule EVITA parallel dazu die theoretische Ausbildung zum Applikationsentwickler mit Schwerpunkt in .NET und MAUI.",
        tags: ["iOS", "UIKit", "Swift", "SDK", ".NET", ".MAUI"],
      },
    ],

    projects: [
      {
        name: "Mercedes E-Commerce SDK",
        description: "Entwicklung eines nativen iOS SDKs für die Mercedes-Benz E-Commerce Plattform - mit UIKit und sauber modularisierter Architektur für den Einsatz in verschiedenen Mercedes-Apps.",
        image: null,
        tags: ["iOS", "UIKit", "Swift", "SDK"],
        link: null,
        liveUrl: null,
      },
      {
        name: "WienMobil - Wiener Linien",
        description: "Mitentwicklung der offiziellen Mobilitäts-App der Wiener Linien. Die App wird täglich von hunderttausenden Pendlern genutzt und deckt ÖPNV, Ticketing und Echtzeitdaten ab.",
        image: null,
        tags: ["iOS", "UIKit", "Swift"],
        link: null,
        liveUrl: null,
      },
      {
        name: "GeorgeID - Erste Bank Österreich für MacOS",
        description: "Entwicklung der GeorgeID Authentifizierungs-App für die Erste Bank auf MacOS mit SwiftUI - sichere digitale Identitätslösung für das George Banking-Ökosystem.",
        image: null,
        tags: ["MacOS", "SwiftUI", "Swift"],
        link: null,
        liveUrl: null,
      },
      {
        name: "kombinationen.com",
        description: "Persönliches Projekt: Eine Webanwendung, entwickelt mit TypeScript.",
        image: "kombinationen.png",
        tags: ["TypeScript"],
        link: null,
        liveUrl: "https://kombinationen.com",
      },
      {
        name: "Hero Stream Games",
        description: "Persönliches Projekt: Eine Gaming-Webapp für ein Streamer Duo mit Spielen die im Live Stream interaktive mit dem Chat gespielt werden können. Entwickelt mit TypeScript und auf Vercel gehostet.",
        image: "hero-stream-games.png",
        tags: ["TypeScript", "Vercel"],
        link: null,
        liveUrl: "https://hero-stream-games.vercel.app",
      },
    ],
  },

  en: {
    role: "iOS Developer",
    tagline: "I build native iOS apps used by millions of people every day.",
    bio: "I'm an iOS developer with over 5 years of experience in native app development using Swift. From banking apps for Erste Bank to mobility solutions for Wiener Linien - I deliver complex products cleanly and user-centrically on iOS. My focus is on robust architecture (MVVM, modularization) and modern Swift with SwiftUI, Combine, and Async/Await.",
    available: "Open to Work",

    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },

    about: {
      sectionLabel: "About me",
      heading: "The person behind\nthe projects",
      educationHeading: "Education",
      yearsExp: "Years Experience",
      projectsLabel: "Projects",
      degreesLabel: "Degrees",
    },

    expLabels: {
      sectionLabel: "Career",
      heading: "Work Experience",
    },

    projectLabels: {
      sectionLabel: "Portfolio",
      heading: "Selected Projects",
      sub: "A selection of my work — from concept to finished product.",
      liveDemo: "Live Demo",
      code: "Code",
      repository: "Repository",
      liveLink: "View Live",
      placeholder: "Add image to /public/projects/\nand update config",
    },

    contact: {
      sectionLabel: "Contact",
      heading: "Let's build something",
      headingAccent: "together.",
      sub: "Got a project, an idea, or an open position? I'd love to hear from you.",
    },

    footer: {
      rights: "All rights reserved.",
      built: "Built with React + Vite",
    },

    education: [
      {
        degree: "Apprenticeship - Application Developer",
        institution: "Berufsschule EVITA, Vienna",
        period: "Jul 2019 - Aug 2022",
        description: "Vocational training in application development with a focus on iOS, alongside work at all about apps GmbH.",
      },
      {
        degree: "Dual Study - Applied Computer Science",
        institution: "DHBW / SSI Schäfer, Mosbach",
        period: "Sep 2018 - Mar 2019",
        description: "",
      },
      {
        degree: "Abitur (German A-Levels)",
        institution: "Nikolaus Kistner Gymnasium, Mosbach",
        period: "Sep 2004 - Jun 2016",
        description: "",
      },
    ],

    experience: [
      {
        role: "iOS Developer",
        company: "SHAPE (formerly Appmotion), Hamburg",
        period: "Nov 2022 - present",
        description: "Development and maintenance of native iOS apps for high-profile clients including Mercedes-Benz, Wiener Linien, and FK Austria Wien. Implementing modern Swift architectures in agile teams.",
        tags: ["Swift", "SwiftUI", "UIKit", "MVVM", "Fastlane"],
      },
      {
        role: "iOS Developer (Apprenticeship)",
        company: "all about apps GmbH, Vienna",
        period: "Jul 2019 - Aug 2022",
        description: "Entry into professional iOS development at work. Contributed to multiple client projects, including the GeorgeID app for Erste Bank Austria (MacOS SwiftUI). In school EVITA training as an application developer with a focus on .NET and MAUI.",
        tags: ["Swift", "UIKit", "SwiftUI", "Xcode"],
      },
    ],

    projects: [
      {
        name: "Mercedes E-Commerce SDK",
        description: "Development of a native iOS SDK for the Mercedes-Benz e-commerce platform - built with UIKit and a cleanly modularized architecture for use across multiple Mercedes apps.",
        image: null,
        tags: ["iOS", "UIKit", "Swift", "SDK", ".NET", ".MAUI"],
        link: null,
        liveUrl: null,
      },
      {
        name: "WienMobil - Wiener Linien",
        description: "Co-development of the official mobility app for Wiener Linien. The app is used daily by hundreds of thousands of commuters and covers public transit, ticketing, and real-time data.",
        image: null,
        tags: ["iOS", "UIKit", "Swift"],
        link: null,
        liveUrl: null,
      },
      {
        name: "GeorgeID - Erste Bank Austria",
        description: "Development of the GeorgeID authentication app for Erste Bank on MacOS using SwiftUI - a secure digital identity solution for the George banking ecosystem.",
        image: null,
        tags: ["MacOS", "SwiftUI", "Swift"],
        link: null,
        liveUrl: null,
      },
      {
        name: "kombinationen.com",
        description: "Personal project: A web application built with TypeScript.",
        image: null,
        tags: ["TypeScript"],
        link: null,
        liveUrl: "https://kombinationen.com",
      },
      {
        name: "Hero Stream Games",
        description: "Personal project: A gaming web app built with TypeScript and hosted on Vercel.",
        image: null,
        tags: ["TypeScript", "Vercel"],
        link: null,
        liveUrl: "https://hero-stream-games.vercel.app",
      },
    ],
  },
};
