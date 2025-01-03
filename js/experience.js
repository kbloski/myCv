const experiences = [
    {
        company: "IDEAL WORK GERMANY SP. Z O.O.",
        description: "Pracodawca zagraniczny - GLS GENERAL LOGISTICS SYSTEMS GERMANY GMBH",
        address: "CO. OHG, GLS-GERMANY-STRABE 1-7, 36286 NEUENSTEIN, NIEMCY",
        position: "Magazynier",
        period: {
            start: "10-06-2024",
            end: "06-07-2024",
        },
    },
    {
        company: "Dubeco B.V.",
        description: "Zbiór borówki",
        address: "Mortel 27, 6088 AH te Roggel",
        position: "Pracownik sezonowy",
        period: {
            start: "10-07-2023",
            end: "31-08-2023",
        },
    },
    {
        company: "FHU Ematik Mateusz Nosal",
        description: '"Twoja przyszłość tu i teraz"',
        address: "Brzostek 39-230, ul. Rynek 38",
        position: "Stażysta",
        period: {
            start: "10-10-2022",
            end: undefined,
        },
    },
];

init();

function init(){

    try {
        const experiencesLists = document.querySelectorAll('[data-id=experience]')
    
        for( const list of experiencesLists){
            for(const experience of experiences){
                let inputTemplate = '';

                inputTemplate += 
                    !experience.period ? ""
                    : `<div>${experience.period.start} - ${experience.period.end}</div>`;

                inputTemplate += !experience.company
                    ? ""
                    : `<div>Company: ${experience.company}</div>`;

                inputTemplate += !experience.position
                    ? ""
                    : `<div>Position: ${experience.position}</div>`;

                inputTemplate += !experience.address
                    ? ""
                    : `<div>Address: ${experience.address}</div>`;

                inputTemplate += !experience.description
                    ? ""
                    : `<div>Description: ${experience.description}</div>`;

                list.innerHTML += `<li>${inputTemplate}</li>`;

            }
        }
    } catch (err){
        console.error(err)
    }
}