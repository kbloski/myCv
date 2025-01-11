const experiences = [
    {
        company: "IDEAL WORK GERMANY SP. Z O.O.",
        description:
            `
                Praca w sortowni paczek kurierskich.
                Pracodawca zagraniczny: 
                GLS GENERAL LOGISTICS SYSTEMS GERMANY GMBH
            `,
        address: "CO. OHG, GLS-GERMANY-STRABE 1-7, 36286 NEUENSTEIN, NIEMCY",
        position: "Magazynier",
        period: {
            start: "10-06-2024",
            end: "06-07-2024",
        },
    },
    {
        company: "Dubeco B.V.",
        period: {
            start: "10-07-2023",
            end: "31-08-2023",
        },
        address: "Mortel 27, 6088 AH te Roggel",
        position: "Pracownik szczytowy",
        description: "Zbiory borówki amerykańskiej",
    },
    {
        company: "FHU Ematik Mateusz Nosal (serwis komputerowy)",
        address: "Brzostek 39-230, ul. Rynek 38",
        position: "Stażysta",
        description: "Staż Europejski Twoja przyszłość tu i teraz. 160 godzin.",
        // period: {
        //     start: "10-10-2022",
        //     end: undefined,
        // },
    },
];

init();

function init() {
    try {
        const experiencesLists = document.querySelectorAll(
            "[data-id=experience]"
        );

        for (const list of experiencesLists) {
            for (const experience of experiences) {
                let inputTemplate = "";

                inputTemplate += !experience.company
                    ? ""
                    : `<div class='company-title'>Company: ${experience.company}</div>`;

                inputTemplate += !experience.period
                    ? ""
                    : `<div>Work period: ${experience.period.start} - ${experience.period.end}</div>`;

                inputTemplate += !experience.position
                    ? ""
                    : `<div>Position: ${experience.position}</div>`;

                inputTemplate += !experience.address
                    ? ""
                    : `<div>Address: ${experience.address}</div>`;

                inputTemplate += !experience.description
                    ? ""
                    : `<div class='description'>Description: ${experience.description}</div>`;

                list.innerHTML += `<li>${inputTemplate}</li>`;
            }
        }
    } catch (err) {
        console.error(err);
    }
}
