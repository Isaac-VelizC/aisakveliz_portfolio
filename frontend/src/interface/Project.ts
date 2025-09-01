// import type { TechnologyInterface } from "./Category";

export interface ProjectsInterface {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string | null;
  repository_url: string | null;
  demo_url: string | null;
  date: string;
  status: string;
  technologies: { name: string }[];
  views: number;
  stars: number;
  featured: boolean;
  created_at: string;
}