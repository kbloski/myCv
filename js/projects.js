const projectsList = [
    {
        name: "TodoList with vuetify",
        technologies: ["vue3", "vuetify", "pinia"],
        description:
            "Aplikacja frontend pomagająca w wykonywaniu codziennych obowiązków. Wykonana w vue z frameworkiem vuetify.",
        links: [
            createLink(
                "code-review",
                "https://github.com/kbloski/vuetify-todolist"
            ),
            // createLink("page", "https://helpful-blini-7dd5ac.netlify.app/"),
        ],
    },
    {
        name: "Translator",
        technologies: ["vue3", "+api"],
        description:
            "Aplikacja frontend wykonana w vue korzystająca z publicznego api do tłumaczenia języków.",
        links: [
            createLink("code-review", "https://github.com/kbloski/translator"),
            createLink("Website", "https://helpful-blini-7dd5ac.netlify.app/"),
        ],
    },
    {
        name: "Weather App",
        technologies: ["vue3", "+api"],
        description:
            "Aplikacja frontend wykonana w vue korzystająca z publicznego api do sprawdzania warunków pogodowych.",
        links: [
            createLink("code-review", "https://github.com/kbloski/weatherApp"),
            createLink("Website", "https://demo-weater-app.netlify.app"),
        ],
    },
    {
        name: "Spend wise (fullstack project)",
        technologies: ["vue3", "node", "express", "ts", "js"],
        description:
            "Monorepo Application: pełnostackowy projekt z backendem w Node.js, Express z autoryzacją napisany w Typescript i frontendem w Vue3 z użyciem vuex i vue-router napisany w javascript.",
        links: [
            createLink("code-review", "https://github.com/kbloski/SpendWise"),
        ],
    },
    {
        name: "Photographer wbebsite (fullstack project)",
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
        technologies: [
            "nextJs",
            "react",
            "ts",
            "node",
            "express",
            "html",
            "css",
        ],
        description:
            "Prosta aplikacja wykorzystująca zarządzanie dostępem do stron za pomocą roli uzytkowników i priorytetów, technologie",
        links: [
            createLink(
                "code-review",
                "https://github.com/kbloski/userManagment"
            ),
            createLink("Website", "https://usermanagment-role.netlify.app/"),
        ],
    },
    {
        name: "Simple TodoList",
        technologies: ["html", "css", "js"],
        description:
            "Prosta aplikacja zadań do wykonania z możliwością pobrania pliku z zadaniami.",
        links: [
            createLink("code-review", "https://github.com/kbloski/todoList"),
            createLink("Website", "https://kbloski.github.io/todoList/"),
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
