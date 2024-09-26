class ClauseController{
    clauseElement = document.getElementById('clause')
    clauseList = [];

    createClause( text ){
        const liElement = document.createElement('li');
        liElement.classList = 'list-group-item';
        liElement.innerText = text;
        
        this.clauseList.push(liElement);
    }

    render(){
        const list = document.createElement('li');
        list.classList = 'list-group list-group-flush';

        for (const clause of this.clauseList){
            list.appendChild( clause );
        }

        this.clauseElement.appendChild( list );
    }
}
const clauseController = new ClauseController();

const clauses = [
    'Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).',
]

for( const clause of clauses){
   clauseController.createClause( clause );
}

clauseController.render();