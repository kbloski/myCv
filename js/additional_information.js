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
    "Chętnie zgodzę się, aby pierwszy miesiąc pełnił rolę okresu próbnego bez wynagrodzenia, a po jego zakończeniu poczekam na decyzję co do podjęcia współpracy lub jej braku.",
    `Ten plik pdf to tylko wersja uproszczona mojej strony internetowej, która znajduje się pod tym linkiem: 
    <a href='https://kbloski.github.io/myCv/'>
        https://kbloski.github.io/myCv/
    </a> `,
];

addInformationToList()