import type { TechnologyInterface } from "./Category";

export interface ProjectsInterface {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  repository_url: string;
  demo_url: string;
  date: string;
  status: string;
  technologies: TechnologyInterface[];
  views: number;
  stars: number;
  featured: boolean;
  created_at: string;
}