export interface Service {
  id: number;
  title: string;
  iconName: string;
  card: string;
  expanded: string;
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
  imagePlaceholder: string;
}

export interface Project {
  id: number;
  title: string;
  category: "Urban Planning" | "Environmental" | "Infrastructure" | "GIS & Tech";
  description: string;
  stat: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface MapMarker {
  name: string;
  position: [number, number];
  projectType: string;
  isActiveHQ: boolean;
}

export interface NewsItem {
  title: string;
  source: string;
  pubDate: string;
  link: string;
  contentSnippet: string;
}

