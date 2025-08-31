// import type { TechnologyInterface } from "./Category";

export interface ServiceInterface {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  order: number;
  technologies?: string[];
  gradient: string;
}