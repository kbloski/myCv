const personal = { name: "Kamil", surname: "Błoński" };
const internship = "Junior Frontend Developer";
const address = "Jodłowa 194A, 39-225 (woj. Podkarpackie)";

const aboutMe = `Jestem młodym, ambitnym programistą z pasją do tworzenia kodu. Choć w szkole mieliśmy podstawy programowania, większość umiejętności zdobyłem samodzielnie, realizując własne projekty i zgłębiając nowe technologie. Chcę podjąć pracę jako programista jeszcze przed studiami, aby zdobyć praktyczne doświadczenie. Jestem otwarty na naukę i gotów poświęcić pierwszy miesiąc lub dwa na pracę bez wynagrodzenia, by udowodnić swoje umiejętności i wartość dla zespołu.`;

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
const educationsArr = [
    {
        name: "ZSNR 4 im. Mikołaja Kopernika w Dębicy",
        years: "(2019r. / 2024r.)",
    },
];
const credentials = {
    prawojazdy: "B, A2",
};
const languages = {
    polski: "Ojczysty",
    angielski: "A2/B1",
};
const hobbies = [
    "Programowanie",
    "Motocykle ",
    "Projektowanie 3D", 
    "Druk 3D",
    "Gry strategiczne i logiczne",
    "Czytanie książek", 
];


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

function initEducations(){
  const ulElements = document.querySelectorAll(`[data-id='educations']`);

  for(const ulEl of ulElements){
    for(const edu of educationsArr){
      const li = document.createElement('li');
      li.innerHTML = `${edu.years} - ${edu.name}`

      ulEl.appendChild( li)
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

function initHobbies(){
    const elements = document.querySelectorAll(`[data-id='hobbies']`)
    for( const el of elements){
        console.log(el)
        for(const hobby of hobbies){
            el.innerHTML += `<li>${hobby}</li>`
        }
    }
}

initHobbies();
initAboutMe();
initAddress();
initContact();
initCredentials()
initEducations();
initInternship();
initNames();
initLanguages();
