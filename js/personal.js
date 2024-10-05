function createLink(text, url, classList) {
    const link = document.createElement('a');
    link.innerText = text ?? 'Link created',
        link.href = url ?? '#',
        link.classList = classList ?? '';
    return link;
}

document.getElementById('about-me').innerText = "Jestem junior programistą, który chce dążyc do rozwoju jako fullstack-developer. Szukam współpracy z firmą, która ceni kreatywność i nowe technologie, aby tworzyć nowoczesne rozwiązania i realizować ambitne projekty.";

const personal = { name: 'Kamil', surname: 'Błoński' }
document.getElementById('name').innerText = `${personal.name} ${personal.surname}`;

const address = 'Jodłowa 194A, 39-225 (woj. Podkarpackie)'
document.getElementById('address').innerText = address;

const phone = '798154959'
const phoneLink = createLink(phone, `tel:${phone}`)
document.getElementById('phone').appendChild(phoneLink)

export const email = 'kblonski02@gmail.com'
const emailLink = createLink(email, `mailto:${email}`)
document.getElementById('email').appendChild(emailLink);

const languagesList = [
    { name: 'Polski', description: 'Ojczysty' },
    { name: 'Angielski', description: 'Dokumentacja' },
]
for (const language of languagesList) {
    const li = document.createElement('li');
    li.innerText = `${language.name} - ${language.description}`
    document.getElementById('languages').appendChild(li);
}

const credentialList = [
    { name: 'Prawojazdy', description: 'A2, B' }
]
for (const credential of credentialList) {
    const liElement = document.createElement('li');
    liElement.innerText = `${credential.name} - ${credential.description}`
    document.getElementById('credentials').appendChild(liElement)
}