class CertificatesController {
    certificatesElement = document.getElementById("certificates");
    certificatesList = [];

    createCourse({ name, description }) {
        const liElement = document.createElement("li");
        liElement.classList = "d-flex list-group-item justify-content-between";

        const nameElement = document.createElement("div");
        nameElement.innerText = name;

        const descriptionElement = document.createElement("div");
        descriptionElement.classList = "text-secondary";
        descriptionElement.innerText = description;

        liElement.appendChild(nameElement);
        liElement.appendChild(descriptionElement);

        this.certificatesList.push(liElement);
    }

    render() {
        const list = document.createElement("li");
        list.classList = "list-group";

        for (const certificates of this.certificatesList) {
            list.appendChild(certificates);
        }

        this.certificatesElement.appendChild(list);
    }
}

const certificatesController = new CertificatesController();

const certificates = [
    {
        name: "Dyplom zawodowy Technik Informatyk",
        description: "92%",
    },
    {
        name: "Kwalifikacja zawodowa INF.02",
        description: "97%",
    },
    {
        name: "Kwalifikacja zawodowa INF.03",
        description: "83.5%",
    },
    {
        name: "Matura",
        description: "Success",
    },
];

for (const cert of certificates) {
    certificatesController.createCourse(cert);
}

certificatesController.render();
