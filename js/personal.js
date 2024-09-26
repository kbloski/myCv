class Personal {
    nameElement = document.getElementById("name");
    surnameElement = document.getElementById("surname");
    addressElement = document.getElementById("address");
    aboutMeElement = document.getElementById("about-me");
    languageElement = document.getElementById('languages')
    emailElement = document.getElementById('email')
    phoneElement = document.getElementById('phone')

    constructor() {
        this.name = "Kamil";
        this.surname = "Błoński";
        this.address = "Jodłowa 194A, 39-225 (Podkarpackie)";
        this.aboutMe = "About me";
        this.email = "kblonski02@gmail.com";
        this.phone = "798154959";
        this.languages = [
            {
                name: 'Polski',
                description: 'Ojczysty'
            },
            {
                name: 'Angielski',
                description: 'Dokumentacja'
            },
        ]
    }

    setAboutMe(text) {
        this.aboutMe = text;
    }

    render() {
        this.nameElement.innerText = this.name;
        (this.surnameElement.innerText = this.surname),
            (this.addressElement.innerText = this.address);
        this.aboutMeElement.innerHTML = this.aboutMe;
        
        const languagesList = document.createElement('ul');
        for(const language of this.languages){
            const liElement = document.createElement('li');
            liElement.innerText = `${language.name} - ${language.description}`;
            languagesList.appendChild( liElement );
        }
        this.languageElement.appendChild( languagesList );

        const link = document.createElement('a');
        link.href = `mailto:${this.email}`;
        link.innerText = this.email;
        this.emailElement.appendChild( link );
        
        const link2 = document.createElement('a');
        link2.href = `tel:${this.phone}`;
        link2.innerText = `tel: ${this.phone}`;
        this.phoneElement.appendChild(link2) 
    }
}

const personal = new Personal();

personal.setAboutMe(
    "Jestem ambitnym programistą dążącym do rozwoju jako full-stack. Szukam współpracy z firmą, która ceni kreatywność i nowe technologie, aby tworzyć nowoczesne rozwiązania i realizować ambitne projekty."
);

personal.render();

