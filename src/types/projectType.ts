export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  fullDescription?: string;
  technologies?: string[];
  features?: string[];
  gallery?: string[];
  links?: {
    demo?: string;
    github?: string;
  };
}
