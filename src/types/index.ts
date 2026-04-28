export interface ServiceCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ProblemCard {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface StepItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ContactDetail {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export interface ValueRow {
  title: string;
  description: string;
}
