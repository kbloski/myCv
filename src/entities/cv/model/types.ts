export type Experience = {
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

export type SkillType = {
    name: string;
    icon: string;
}

export type InitialCvSliceState = {
    aboutMe: string;
    name: string;
    surname: string;
    profession: string;
    address: string;
    contact: {
        phone: string;
        email: string;
        websites: { name: string; url: string }[];
    };
    credentials: string[];
    hobbies: string[];
    education: {
        name: string;
        years: string;
    }[];
    diplomas: { name: string; result: string }[];
    experience: Experience[];
    skills: {
        programming: {
            inProgress: SkillType[];
            familiar: SkillType[];
        };
        languages: { name: string; level: string }[];
        soft: string[];
    };
    courses: { name: string; hours: string; link: string }[];
    projects: {
        name: string;
        technologies: string[];
        description: string;
        links: { name: string; link: string }[];
    }[];
}
