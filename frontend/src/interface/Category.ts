export interface TechnologyInterface {
    name: string;
    level: number;
    icon: string;
    url: string;
}

export interface CategoryInterface {
    name: string;
    technologies: TechnologyInterface[];
}