class TechnologiesController {
    technologiesElement = document.getElementById("technologies");
    inProgressElement = document.getElementById("in-progress");

    constructor() {
        this.technologies = {
            list: [],
            classList: ["badge", "bg-success", "p-2", "m-1"],
        };
        this.progress = {
            list: [],
            classList: ["badge", "bg-warning", "p-2", "m-1"],
        };
    }

    createTechnologyItem(text) {
        const badge = document.createElement("div");
        badge.classList = this.technologies.classList.join(" ");
        badge.innerText = text;
        this.technologies.list.push(badge);
    }

    createProgressItem(text) {
        const badge = document.createElement("div");
        badge.classList = this.progress.classList.join(" ");
        badge.innerText = text;
        this.progress.list.push(badge);
    }

    render() {
        for (const item of this.progress.list) {
            this.inProgressElement.appendChild(item);
        }

        for (const item of this.technologies.list) {
            this.technologiesElement.appendChild(item);
        }
    }
}
const technologiesController = new TechnologiesController();

const technologies = [
    "Git / GitHub",
    "HTML & CSS",
    "JavaScript",
    "TypeScript",
    "NodeJS",
    "ExpressJs",
    "Sequelize",
    "SQL (MySQL)",
];

for (const item of technologies) {
    technologiesController.createTechnologyItem(item);
}

const inProgress = ["React", "NextJs", "Bootstrap5"];

for (const item of inProgress) {
    technologiesController.createProgressItem(item);
}

technologiesController.render();
