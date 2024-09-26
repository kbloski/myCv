class ProjectControler {
    projectElement = document.getElementById("my-projects");
    projectsList = [];

    createProjectElement({ name, description, link }) {
        const listElement = document.createElement("li");
        listElement.classList = "d-flex row list-group-item";

        const nameElement = document.createElement("div");
        nameElement.classList = 'col-3'
        nameElement.innerText = name;

        const descriptionElement = document.createElement("div");
        descriptionElement.classList = 'col-7'
        descriptionElement.innerText = description;

        const linkElement = document.createElement("a");
        linkElement.classList = 'col-2'
        linkElement.href = link;
        linkElement.innerText = "See More...";
        linkElement.target = '_blank'

        listElement.appendChild(nameElement);
        listElement.appendChild(descriptionElement);
        listElement.appendChild(linkElement);

        this.projectsList.push(listElement);
    }

    render() {
        const list = document.createElement('ul');
        list.classList = 'list-group';


        for (const project of this.projectsList) {
            list.appendChild(project);
        }

        this.projectElement.appendChild( list )
    }
}
const myProject = new ProjectControler();

const projects = [
    {
        name: "photographer-website",
        description: "Monorepo Application: pełnostackowy projekt z backendem w Node.js i frontendem w Next.js, oba w TypeScript.",
        link: "https://github.com/kbloski/photographer-website",
    }
]

for(const project of projects){
    myProject.createProjectElement(project);
}

myProject.render();
