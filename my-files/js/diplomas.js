const diplomasArr = [
    {
        name: "Dyplom zawodowy Technik Informatyk",
        result: "92%",
    },
    {
        name: "Kwalifikacja zawodowa INF.02",
        result: "97%",
    },
    {
        name: "Kwalifikacja zawodowa INF.03",
        result: "83.5%",
    },
    {
        name: "Matura",
        result: "Success",
    },
];

function initDiplomas(){
    const ulElements = document.querySelectorAll(`[data-id="diplomas"]`)

    for(const ulEl of ulElements){
        for(const d of diplomasArr){
            const liEl = document.createElement('li');
            liEl.innerHTML = `
                <div class='diploma-name'>${d.name}</div>
                <div class='diploma-result'>${d.result}</div>
            `
            ulEl.appendChild( liEl )
        }
    }
}

initDiplomas()