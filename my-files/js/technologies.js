const technologies = [
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
    "HTML5 & CSS3",
    "JavaScript",
    "SCSS",
    "TypeScript",
    "NodeJS",
    "Express",
    // "Sequelize",
    "Git / GitHub",
    // MySQL",
    "Python",
    "VSC",
];

const technologiesInProgress = [
    "React (advanced)",
   
    // Docker
    // "Bootstrap5",
];

function initTechnologies() {
    const elementsUl = document.querySelectorAll(`[data-id='technologies']`);
    for (const el of elementsUl) {
        for (const tech of technologies) {
            const liEl = document.createElement("li");
            liEl.innerHTML = tech;
            el.appendChild(liEl);
        }
    }
}

function initTechnologiesInProgress() {
    const elementsUl = document.querySelectorAll(
        `[data-id='technologies-in-progress']`
    );
    for (const el of elementsUl) {
        for (const tech of technologiesInProgress) {
            const liEl = document.createElement("li");
            liEl.innerHTML = tech;
            el.appendChild(liEl);
        }
    }
}

initTechnologies();
initTechnologiesInProgress();
