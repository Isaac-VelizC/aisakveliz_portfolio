import type { TechnologyInterface } from "./Category";

export interface AboutInfoInterface {
    title: string;
    content: string;
    photo: string;
    years_of_experience: number;
    projects: number;
    main_technologies: TechnologyInterface[];
    cv_file: string;
}