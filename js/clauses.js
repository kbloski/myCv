const clauses = [
    "Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).",
];

function initClauses(){
  const elementsUl = document.querySelectorAll(`[data-id='clauses']`)
  for(const ulEl of elementsUl){
    for(const clause of clauses){
      const liEl = document.createElement('li');
      liEl.innerHTML = clause
      ulEl.appendChild( liEl )
    }
  }
}

initClauses()