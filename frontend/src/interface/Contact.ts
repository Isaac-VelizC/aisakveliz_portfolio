export interface ContactInterface {
    name: string;
    email: string;
    message: string;
}

export interface ContactInfoInterface {
    email: string;
    whatsapp: string;
    work_days: string;
    work_hours: string;
    saturday_hours: string;
    sunday_hours: string;
}

export interface SocialNetworkInterface {
    name: string;
    url: string;
    icon: string;
    order: number;
}