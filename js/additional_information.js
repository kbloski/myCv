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
    "W razie potrzeby jestem gotów rozważyć bezpłatny staż na okres 1-3 miesięcy w celu zdobycia doświadczenia i rozwoju zawodowego.",
    // "Rozważam także możliwość zmiany miejsca zamieszkania, aby wykonywać pracę w trybie stacjonarnym.",
];
 
addInformationToList()
