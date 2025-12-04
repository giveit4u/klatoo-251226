export interface FeatureItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  stats?: Array<{ label: string; value: string }>;
}

export interface NavItem {
  label: string;
  href: string;
}