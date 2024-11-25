const elementsUl = document.querySelectorAll('[data-id="additional-information"]')

function addInformationToList(){
    for (const list of elementsUl) {
        for (const info of informationList) {
            const liElement = document.createElement("li");
            liElement.innerHTML = info;
            list.appendChild(liElement);
        }
    }
}

const informationList = [
    "Chętnie zgodzę się na okres próbnego bez wynagrodzenia (max 1-2 miesiące), a po jego zakończeniu poczekam na decyzję co do podjęcia współpracy lub jej braku.",

    `Ten plik pdf nieostylowana wersja mojej strony internetowej z cv, która znajduje się pod tym linkiem: 
    <a href='https://kbloski.github.io/myCv/'>
        https://kbloski.github.io/myCv/
    </a> zachęcam do odwiedzenia jej.`,
];

addInformationToList()