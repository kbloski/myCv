const courses = [
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
];

function initCourses(){
    const elementsUl = document.querySelectorAll(`[data-id='courses']`)

    for(const ulEl of elementsUl){
        for(const course of courses){
            const liEl = document.createElement('li');

            liEl.innerHTML = `
                <div class='course-title'>${course.name}</div>
                <div class='course-hours'>${course.hours}</div>
                <a class='course-link' href=${course.link}>Certificate</a>
            `

            ulEl.appendChild( liEl)
        }
    }
}

initCourses();

