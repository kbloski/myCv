
export type ExperienceType = {
    company: string;
    address: string;
    position: string;
    description: string;
    period?: {
        start: string;
        end: string;
    };
    skils?: string[];
};

