import Experience from "./Experience";

type Experience = {
    company: string;
    address: string;
    position: string;
    description: string;
    period?: {
        start: string;
        end: string;
    };
    skils?: string[]
};

export default Experience;