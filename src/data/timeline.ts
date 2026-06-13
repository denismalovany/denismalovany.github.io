export interface TimelineEntry {
  period: string;
  company: string;
  subtitle: string;
  dotColor: "black" | "gray";
  collapsed: boolean;
  details: {
    role?: string;
    period?: string;
    description: string;
  }[];
}

export const timelineData: TimelineEntry[] = [
  {
    period: "Feb 2024 – Present",
    company: "VOL",
    subtitle: "Product Designer, Mechanical Engineer",
    dotColor: "black",
    collapsed: false,
    details: [
      {
        role: "Product Designer & Mechanical Engineer",
        description: ""
      }
    ]
  },
  {
    period: "May 2022 – Dec 2023",
    company: "Career Break",
    subtitle: "",
    dotColor: "gray",
    collapsed: false,
    details: [
      {
        role: "",
        description: ""
      }
    ]
  },
  {
    period: "Jun 2021 – May 2022",
    company: "HebronSoft",
    subtitle: "UI Designer, UX Designer",
    dotColor: "black",
    collapsed: false,
    details: [
      {
        role: "UX/UI Designer",
        description: "Designed and developed user interfaces across the full design-to-development pipeline."
      }
    ]
  },
  {
    period: "Dec 2020 – May 2021",
    company: "FeliTalk",
    subtitle: "UI Designer, HTML Developer",
    dotColor: "black",
    collapsed: true,
    details: [
      {
        role: "UI Designer & HTML Developer",
        description: "Designed and coded client-facing pages for a Japanese-market English learning platform."
      }
    ]
  },
  {
    period: "Feb 2019 – Mar 2020",
    company: "Cygnati Group",
    subtitle: "UX Designer, UI Developer",
    dotColor: "black",
    collapsed: true,
    details: [
      {
        description: "Worked on medical cannabis portal, restaurant employee scoring system, and landing pages."
      }
    ]
  },
  {
    period: "Mar 2017 – Jan 2019",
    company: "Codemotion Ninjas",
    subtitle: "HTML5 Developer",
    dotColor: "black",
    collapsed: true,
    details: [
      {
        description: "UI development for Mercteil, Linkry Events, Vtax, and payment gateway solutions."
      }
    ]
  },
  {
    period: "Apr 2015 – Feb 2017",
    company: "Early Career",
    subtitle: "",
    dotColor: "black",
    collapsed: true,
    details: [
      {
        role: "Saleslion Suomi Oy · Oct 2016 – Feb 2017",
        description: "Frontend development for business e-commerce portal."
      },
      {
        role: "InvestGo24 · Oct 2015 – Apr 2016",
        description: "Landing page and crowdfunding portal HTML5 development."
      },
      {
        role: "BITECC GmbH · Apr 2015 – Oct 2015",
        description: "Frontend development and refactoring for social network."
      }
    ]
  }
];
