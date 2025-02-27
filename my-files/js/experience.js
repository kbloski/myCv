const experiences = [
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
