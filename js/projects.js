const projectsList = [
    {
        name: "WeatherApp - in progress",
        description:
        "Monorepo Application: pełnostackowy projekt z backendem w Node.js, Express z autoryzacją napisany w Typescript i frontendem w Vue3 z użyciem vuex i vue-router napisany w javascript.",
        link: "https://github.com/kbloski/SpendWise",
    },
    {
        name: "SpendWise - code review",
        description:
        "Monorepo Application: pełnostackowy projekt z backendem w Node.js, Express z autoryzacją napisany w Typescript i frontendem w Vue3 z użyciem vuex i vue-router napisany w javascript.",
        link: "https://github.com/kbloski/SpendWise",
    },
    {
        name: "photographer-website - code review",
        description:
        "Monorepo Application: pełnostackowy projekt z backendem w Node.js i frontendem w Next.js, oba w TypeScript.",
        link: "https://github.com/kbloski/photographer-website/",
    },
    {
        name: "User role managment system in NextJs",
        description:
            "Prosta aplikacja wykorzystująca zarządzanie dostępem do stron za pomocą roli uzytkowników i priorytetów, technologie: HTML, CSS, TypeScript, NextJs, AppRouter",
        link: "https://usermanagment-role.netlify.app/",
    },
    {
        name: "Todo task list",
        description:
            "Prosta aplikacja zadań do wykonania z możliwością pobrania pliku z zadaniami, technologie: HTML, CSS, JS",
        link: "https://kbloski.github.io/todoList/",
    },
];

for (const project of projectsList) {
    const li = document.createElement("li");

    li.innerHTML = `
    <div class='project-title'>${project.name}</div>
    <p>${project.description}</p>
    <a href='${project.link}' target='_blank'>See more...</a>
  `;
    document.getElementById("my-projects").appendChild(li);
}
