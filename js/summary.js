const elements = document.querySelectorAll(".cv_summary");
const informationArr = [
    "Chętnie zgodzę się, aby pierwszy miesiąc pełnił rolę okresu próbnego bez wynagrodzenia, a po jego zakończeniu poczekam na decyzję co do podjęcia współpracy lub jej braku.",
];

// console.log( elements)
for( const el of elements){ 
    for( const info of informationArr){
        el.innerHTML = info
    }
}