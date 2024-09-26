class EducationControll  {
    educationItem = document.getElementById('education');
    educationList = [
        {
            name: 'ZSNR 4 im. Mikołaja Kopernika w Dębicy',
            description: '(2019r. / 2024r.)'
        }
    ]

    render(){
        const list = document.createElement('li');
        list.classList = 'list-group'; 

        for(const education of this.educationList){
            const liElement = document.createElement('li');
            liElement.innerText = `${education.name} - ${education.description}`
            liElement.classList = 'list-group-item'
            list.appendChild( liElement );
        }

        this.educationItem.appendChild( list );
    }
};

const educationControll = new EducationControll();

educationControll.render();


