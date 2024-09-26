class InterestsController {
    interestElement = document.getElementById('interest');
    interestList = [];

    createInterest(
       text
    ){
        const liElement = document.createElement('li');
        liElement.classList = 'd-flex list-group-item justify-content-between'
        liElement.innerText = text

        this.interestList.push( liElement );
    }
    
    render(){
        const list = document.createElement('li');
        list.classList = 'list-group';

        for (const interest of this.interestList){
            list.appendChild( interest )
        }

        this.interestElement.appendChild( list );
    }
};

const interestController = new InterestsController();

const interests = [
   'Czytanie książek',
   'Projektowanie 3D',
   'Druk 3D'
]

for(const interest of interests){
    interestController.createInterest( interest )
}


interestController.render();

