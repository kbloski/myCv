const projectsList = [
    {
        name: "Weather App - in progress",
        technologies: ["vue3"],
        description:
            "Aplikacja frontend wykonana w vue korzystająca z publicznego api do sprawdzania warunków pogodowych.",
        links: [
            createLink("app", "https://demo-weater-app.netlify.app")
        ],
    },
    {
        name: "Spend Wise",
        technologies: ["vue3", "node", "express", "ts", "js"],
        description:
            "Monorepo Application: pełnostackowy projekt z backendem w Node.js, Express z autoryzacją napisany w Typescript i frontendem w Vue3 z użyciem vuex i vue-router napisany w javascript.",
        links: [
            createLink("code-review", "https://github.com/kbloski/SpendWise"),
        ],
    },
    {
        name: "Photographer Prototype App",
        technologies: ["nextJs", "react", "ts", "node", "express"],
        description:
            "Monorepo Application: pełnostackowy projekt z backendem w Node.js i frontendem w Next.js, oba w TypeScript.",
        links: [
            createLink(
                "code-review",
                "https://github.com/kbloski/photographer-website/"
            ),
        ],
    },
    {
        name: "Role Managment",
        technologies: ["nextJs", "react", "ts", "node", "express", 'html', 'css'],
        description:
            "Prosta aplikacja wykorzystująca zarządzanie dostępem do stron za pomocą roli uzytkowników i priorytetów, technologie",
        links: [
            createLink('app', "https://usermanagment-role.netlify.app/"),
        ]
    },
    {
        name: "TODO Task List",
        technologies: ["html", 'css', 'js'],
        description:
            "Prosta aplikacja zadań do wykonania z możliwością pobrania pliku z zadaniami.",
        links: [
            createLink('app',"https://kbloski.github.io/todoList/")
        ],
    },
];

function createLink( title, link){
    return { title, link }
}

function initProjects(){
    const elementsUl = document.querySelectorAll(`[data-id='projects']`);
    for(const ulEl of elementsUl){
        for( const project of projectsList){
            const liEl = document.createElement('li');

            let htmlLinks = ''
            for(const l of project.links){
                htmlLinks+= `
                    <li>
                        <a href='${l.link}'>${l.title}</a>
                    </li>
                `
            }
            
            let htmlTechnologies  = ''
            for(const tech of project.technologies){
                htmlTechnologies += `<li>${tech}</li>`
            }

            liEl.innerHTML = `
                <div class='project-title'>${project.name}</div>
                <ul class='project-technologies'>${ htmlTechnologies}</ul>
                <div class='project-description'>${project.description}</div>
                <ul class='project-links'>${htmlLinks}</ul>
            `;

            ulEl.appendChild(liEl);
        }
    }
}

initProjects();
