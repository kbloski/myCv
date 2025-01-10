const personal = { name: "Kamil", surname: "Błoński" };
const internship = "Junior Frontend Developer";
const address = "Jodłowa 194A, 39-225 (woj. Podkarpackie)";

const aboutMe = `
Jestem uczniem, który niedawno ukończył technikum informatyczne, gdzie zdobyłem solidne podstawy programowania. Choć mój kierunek był związany z informatyką w szerszym zakresie, to właśnie programowanie darzę szczególną sympatią i pasją. Poza szkołą rozwijam swoje umiejętności, realizując hobbystyczne projekty, ucząc się nowych technologii oraz regularnie uczestnicząc w kursach i szkoleniach.

Chciałbym rozpocząć swoją pierwszą pracę, aby zdobyć cenne doświadczenie i dalej się rozwijać. Jestem osobą ambitną, otwartą na nowe wyzwania i gotową do nauki oraz pracy.`;

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
    angielski: "Dokumentacja, A2. ( Dobrze radzę sobie z dokumentacją )",
};
// const interests = ["Czytanie książek", "Projektowanie 3D", "Druk 3D"];


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

initAboutMe();
initAddress();
initContact();
initCredentials()
initEducations();
initInternship();
initNames();
initLanguages();
