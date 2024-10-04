class ProjectControler {
    projectElement = document.getElementById("my-projects");
    projectsList = [];

    createProjectElement({ name, description, link }) {
        const listElement = document.createElement("li");

        const nameElement = document.createElement("h3");
        nameElement.innerText = name;

        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = description;

        const linkElement = document.createElement("a");
        linkElement.href = link;

        linkElement.innerText = "See More...";
        linkElement.target = '_blank'

        listElement.appendChild(nameElement);
        listElement.appendChild(descriptionElement);
        listElement.appendChild(linkElement);

        this.projectsList.push(listElement);
    }

    render() {
        for (const project of this.projectsList) {
            this.projectElement.appendChild(project);
        }
    }
}
const myProject = new ProjectControler();

const projects = [
    {
        name: "photographer-website",
        description: "Monorepo Application: pełnostackowy projekt z backendem w Node.js i frontendem w Next.js, oba w TypeScript. Wgląd tylko do kodu aplikacji.",
        link: "https://github.com/kbloski/photographer-website/",
    },
    {
        name: "todo-task-list",
        description: "Prosta aplikacja zadań do wykonania z możliwością pobrania pliku z zadaniami, technologie: HTML, CSS, JS",
        link: "https://kbloski.github.io/todoList/",
    },
    {
        name: "user-role-managment",
        description: "Prosta aplikacja wykorzystująca zarządzanie dostępem do stron za pomocą roli uzytkowników i priorytetów, technologie: HTML, CSS, TypeScript, NextJs, AppRouter",
        link: "https://usermanagment-role.netlify.app/",
    },

]

for(const project of projects){
    console.log(project)
    myProject.createProjectElement(project);
}

myProject.render();
