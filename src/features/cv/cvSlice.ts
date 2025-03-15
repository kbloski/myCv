import { createSlice } from "@reduxjs/toolkit";
import type Experience from "./ExperienceType";

interface InitialState {
    aboutMe: string;
    name: string;
    surname: string;
    profession: string;
    address: string;
    contact: {
        phone: string;
        email: string;
        websites: {name: string, url: string}[];
    };
    credentials: string[];
    languages: { name: string; level: string }[];
    hobbies: string[];
    education: {
        name: string;
        years: string;
    }[];
    diplomas: { name: string; result: string }[];
    experience: Experience[];
    technologies: {
        inProgress: string[];
        familiar: string[];
    };
    courses: { name: string; hours: string; link: string }[];
    projects: {
        name: string;
        technologies: string[];
        description: string;
        links: { name: string; link: string }[];
    }[];
}



// const projectsList = 
// extras: [
//     "W razie potrzeby jestem gotów rozważyć bezpłatny staż na okres 1-3 miesięcy w celu zdobycia doświadczenia i rozwoju zawodowego.",
//     // "Rozważam także możliwość zmiany miejsca zamieszkania, aby wykonywać pracę w trybie stacjonarnym.",
// ],

const initialState: InitialState = {
    aboutMe:
        "Jestem młodym, ambitnym programistą z pasją do kodowania. Większość umiejętności zdobyłem samodzielnie, realizując projekty i ucząc się nowych technologii. Chcę pracować jako programista przed studiami, by zdobyć doświadczenie.",
    name: "Kamil",
    surname: "Błoński",
    profession: "Junior Frontend Developer",
    address: "Jodłowa 194A, 39-225",
    contact: {
        phone: "798 154 959",
        email: "kblonski02@gmail.com",
        websites: [
            {
                name: "GitHub",
                url: "https://github.com/kbloski",
            },
            {
                name: "LinkedIn",
                url: "www.linkedin.com/in/kamil-błoński-1958b4297",
            },
        ],
    },
    languages: [
        { name: "Polski", level: "Native" },
        { name: "Angielski", level: "A2/B1" },
    ],
    credentials: ["Prawo jazdy kat. B"],
    hobbies: [
        "Programowanie",
        "Motocykle ",
        "Projektowanie 3D",
        "Druk 3D",
        "Gry strategiczne i logiczne",
        "Czytanie książek",
    ],
    education: [
        {
            name: "ZSNR 4 im. Mikołaja Kopernika w Dębicy",
            years: "2019 | 2024",
        },
    ],
    experience: [
        {
            company: "IDEAL WORK GERMANY SP. Z O.O.",
            description: `
                Praca w sortowni paczek kurierskich.
                Pracodawca zagraniczny: 
                GLS GENERAL LOGISTICS SYSTEMS GERMANY GMBH
            `,
            address:
                "CO. OHG, GLS-GERMANY-STRABE 1-7, 36286 NEUENSTEIN, NIEMCY",
            position: "Magazynier",
            period: {
                start: "06-2024", //10-06-2024
                end: "07-2024", //06-07-2024
            },
            skils: [
                "praca zespołowa",
                "praca w systemie zmianowym",
                "organizacja pracy"
            ],
        },
        {
            company: "Dubeco B.V.",
            period: {
                start: "07-2023", // 10-07-2023
                end: "08-2023", // 31-08-2023
            },
            address: "Mortel 27, 6088 AH te Roggel",
            position: "Pracownik szczytowy",
            description: "Zbiory borówki amerykańskiej",
            skils: [
                'praca zespołowa',
                'szybkość i precyzja pracy manualnej',
            ],
        },
        {
            company: "FHU Ematik Mateusz Nosal",
            address: "Brzostek 39-230, ul. Rynek 38",
            position: "Stażysta",
            description:
                "Serwis komputerowy. Udział w projekcie Staż Europejski Twoja przyszłość tu i teraz. 160 godzin.",
            period: {
                start: "10-2022", //10-10-2022
                end: "04-2023", //15-04-2023
            },
            skils: [
                
                "diagnozowanie i naprawa urządzeń elektronicznych",
            ],
        },
    ],
    technologies: {
        inProgress: [
            "React (advanced)",
            // Docker
            // "Bootstrap5",
            // "Taiwildcss"
        ],
        familiar: [
            // "Wordpress",
            // "PrestaShop",
            "NextJs",
            "React",
            "Redux",
            // "React/ContextAPI",
            "Vue3",
            // "VueX",
            "Vuetify",
            "Pinia",
            // "HTML5 & CSS3",
            "JavaScript",
            // "SCSS",
            "TypeScript",
            "NodeJS",
            "Express",
            // "Sequelize",
            "Git",
            // MySQL",
            // "Python",
            "VSC",
        ],
    },
    diplomas: [
        {
            name: "Dyplom zawodowy Technik Informatyk",
            result: "92%",
        },
        {
            name: "Kwalifikacja zawodowa INF.02",
            result: "97%",
        },
        {
            name: "Kwalifikacja zawodowa INF.03",
            result: "83.5%",
        },
        {
            name: "Matura",
            result: "Success",
        },
    ],
    courses: [
        {
            name: "Vue3 - The Complete Guide (incl. Router & Composition API)",
            hours: "32 godzin",
            link: "https://www.udemy.com/certificate/UC-397ddca6-3a80-4d1d-a116-ffe71cdb7891/",
        },
        {
            name: 'Kurs Fullstack Developer "Od podstaw do Mastera"',
            hours: "72 godziny",
            link: "https://www.udemy.com/certificate/UC-bce7a037-943f-4c20-b918-b4131a5d0c4e/",
        },
        {
            name: 'Kurs PHP "Programowanie w PHP od podstaw - teoria i praktyka"',
            hours: "40 godzin",
            link: "https://www.udemy.com/certificate/UC-0efc533a-5a25-445f-85d2-eb3dacc1d124/",
        },
        {
            name: "Next.js 14 od podstaw. Pełen kurs",
            hours: "9 godzin",
            link: "https://www.udemy.com/certificate/UC-758b1c19-2dfc-42ab-870c-8c090a4deca6/",
        },
        {
            name: 'Kurs "Git od podstaw dla każdego"',
            hours: "4,5 godziny",
            link: "https://www.udemy.com/certificate/UC-60824cbf-e03d-494c-b52c-f32c46c2c940/",
        },
        {
            name: "Kurs Sass (Tylko część z sass)",
            hours: "3 godziny",
            link: "https://www.udemy.com/certificate/UC-b15c9685-bb9c-4fa2-844f-46d649002e2b/",
        },
    ],
    projects: [
        {
            name: "Translator",
            technologies: ["vue3", "+api"],
            description:
                "Aplikacja frontend wykonana w vue korzystająca z publicznego api do tłumaczenia języków.",
            links: [
                {
                    name: "Code-review",
                    link: "https://github.com/kbloski/translator",
                },
                {
                    name: "Website",
                    link: "https://helpful-blini-7dd5ac.netlify.app/",
                },
            ],
        },
        {
            name: "Spend wise (fullstack project)",
            technologies: ["vue3", "node", "express", "ts", "js"],
            description:
                "Monorepo Application: pełnostackowy projekt z backendem w Node.js, Express z autoryzacją napisany w Typescript i frontendem w Vue3 z użyciem vuex i vue-router napisany w javascript.",
            links: [
                {
                    name: "code-review",
                    link: "https://github.com/kbloski/SpendWise",
                },
            ],
        },
        {
            name: "Photographer website (fullstack project)",
            technologies: ["nextJs", "react", "ts", "node", "express"],
            description:
                "Monorepo Application: pełnostackowy projekt z backendem w Node.js i frontendem w Next.js, oba w TypeScript.",
            links: [
                {
                    name: "code-review",
                    link: "https://github.com/kbloski/photographer-website/",
                },
            ],
        },
    ],
};




const cvSlice = createSlice({
    name: 'cv',
    initialState,
    reducers: { }
})


export const { } = cvSlice.actions;
export default cvSlice.reducer;

export const getCvData = (state : any) => state.cv as InitialState

