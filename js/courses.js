const courses = [
    {
        name: "Vue - The Complete Guide (incl. Router & Composition API)",
        hours: "30 godzin",
        link: "https://www.udemy.com/certificate/UC-397ddca6-3a80-4d1d-a116-ffe71cdb7891/",
    },
    {
        name: "Next.js 14 od podstaw. Pełen kurs",
        hours: "9 godzin",
        link: "https://www.udemy.com/certificate/UC-758b1c19-2dfc-42ab-870c-8c090a4deca6/",
    },
    {
        name: 'Kurs Fullstack Developer "Od podstaw do Mastera"',
        hours: "72 godziny",
        link: "https://www.udemy.com/certificate/UC-bce7a037-943f-4c20-b918-b4131a5d0c4e/",
    },
    {
        name: 'Kurs "Git od podstaw dla każdego"',
        hours: "4 godziny 30 minut",
        link: "https://www.udemy.com/certificate/UC-60824cbf-e03d-494c-b52c-f32c46c2c940/",
    },
    {
        name: 'Kurs PHP "Programowanie w PHP od podstaw - teoria i praktyka"',
        hours: "40 godzin",
        link: "https://www.udemy.com/certificate/UC-0efc533a-5a25-445f-85d2-eb3dacc1d124/",
    },
];

for (const cours of courses) {
    const li = document.createElement("li");
    li.classList.add("courses-list-item");

    li.innerHTML = `
        <span>
            <span>${cours.name}</span>
            
            <span>( ${cours.hours} )</span>
        </span>
        <a href='${cours.link}'>View certificate</a>
    `;

    document.getElementById("courses-list").appendChild(li);
}
