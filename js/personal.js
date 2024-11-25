const personal = { name: "Kamil", surname: "Błoński" };
const address = "Jodłowa 194A, 39-225 (woj. Podkarpackie)";
const internship = "Junior Frontend Developer";
const aboutMe =
    "Jestem junior programistą, który chce zacząć przygodę z programowaniem. Szukam współpracy z firmą, która ceni kreatywność i nowe technologie, aby tworzyć nowoczesne rozwiązania i realizować ambitne projekty.";
const contactInfo = {
    phone: {
        type: "phone",
        value: "798 154 959",
    },
    email: {
        type: "email",
        value: "kblonski02@gmail.com",
    },
};
const credentials = {
    prawojazdy: "B, A2",
};
const languages = {
    polski: "Ojczysty",
    angielski: "Dokumentacja, A1/A2",
};

function initLanguages(){
    const elementsUl = document.querySelectorAll('[data-id="languages"]');
    for (const el of elementsUl) {
        for (const [key, val] of Object.entries(languages)) {
            const liEl = document.createElement("li");

            const innerName = key.charAt(0).toUpperCase() + key.substring(1);
            liEl.innerHTML = `${innerName}: ${val}`;
            el.appendChild(liEl);
        }
    }
}

function initAddress() {
    const elements = document.querySelectorAll('[data-id="address"]');
    for (const el of elements) {
        el.innerHTML = address;
    }
}

function initAboutMe() {
    const elements = document.querySelectorAll(`[data-id='about-me']`);
    for (const el of elements) {
        el.innerHTML = aboutMe;
    }
}

function initCredentials() {
    const elementsUl = document.querySelectorAll('[data-id="credentials"]');
    for (const el of elementsUl) {
        for (const [key, val] of Object.entries(credentials)) {
            const liEl = document.createElement("li");

            const innerName = key.charAt(0).toUpperCase() + key.substring(1);
            liEl.innerHTML = `${innerName}: ${val}`;
            el.appendChild(liEl);
        }
    }
}

function initContact() {
    const elements = document.querySelectorAll(`[data-id='contact']`);
    for (const el of elements) {
        for (const info in contactInfo) {
            const item = contactInfo[info];
            const liEl = document.createElement("li");

            let innerValue = "";
            if (item.type.toLowerCase() === "phone") {
                innerValue = `<a href='tel:${item.value}'>${item.value}</a>`;
            } else if (item.type.toLowerCase() === "email") {
                innerValue = `<a href='mailto:${item.value}'>${item.value}</a>`;
            } else {
                innerValue = item.value;
            }

            const innerType =
                item.type.charAt(0).toUpperCase() + item.type.substring(1);

            liEl.innerHTML = innerType + ": " + innerValue;
            el.appendChild(liEl);
        }
    }
}

function initNames() {
    const namesElement = document.querySelectorAll('[data-id="fullname"]');
    for (const el of namesElement) {
        el.innerText = personal.name + " " + personal.surname;
    }
}

function initInternship() {
    const elements = document.querySelectorAll(`[data-id='internship']`);
    for (const el of elements) {
        el.innerHTML = internship;
    }
}

initAboutMe();
initAddress();
initContact();
initCredentials();
initInternship();
initNames();
initLanguages();
