class CoursesController {
    coursesElement = document.getElementById('courses');
    coursesList = [];

    createCourse(
        {
            name,
            hours,
            link
        }
    ){
        const liElement = document.createElement('li');
        liElement.classList = 'list-group-item row'

        const nameElement = document.createElement('div');
        nameElement.classList = 'col-12';
        nameElement.innerText = name;
        nameElement.style.color = 'rgb(148, 133, 0)';

        const hoursElement = document.createElement('div');
        hoursElement.classList = 'badge bg-primary col-12'
        hoursElement.innerText = hours
        
        const linkElement = document.createElement('a');
        linkElement.href = link;
        linkElement.target = '_blank',
        linkElement.innerText = 'View Certificate'

        liElement.appendChild( nameElement);
        if (hours) liElement.appendChild( hoursElement);
        if (link) liElement.appendChild( linkElement)

        this.coursesList.push( liElement );
    }
    
    render(){
        const list = document.createElement('li');
        list.classList = 'list-group';

        for (const course of this.coursesList){
            list.appendChild( course )
        }

        this.coursesElement.appendChild( list );
    }
};

const coursesController = new CoursesController();

const courses = [
    {
        name: 'Next.js 14 od podstaw. Pełen kurs',
        hours: '9 godzin',
        link: 'https://www.udemy.com/certificate/UC-758b1c19-2dfc-42ab-870c-8c090a4deca6/'
    },
    {
        name: 'Kurs Fullstack Developer "Od podstaw do Mastera"',
        hours: '72 godziny',
        link: 'https://www.udemy.com/certificate/UC-bce7a037-943f-4c20-b918-b4131a5d0c4e/'
    },
    {
        name: 'Kurs "Git od podstaw dla każdego"',
        hours: '4 godziny 30 minut',
        link: 'https://www.udemy.com/certificate/UC-60824cbf-e03d-494c-b52c-f32c46c2c940/'
    },
    {
        name: 'Kurs PHP "Programowanie w PHP od podstaw - teoria i praktyka"',
        hours: '40 godzin',
        link: 'https://www.udemy.com/certificate/UC-0efc533a-5a25-445f-85d2-eb3dacc1d124/'
    },
]

for(const course of courses){
    coursesController.createCourse( course )
}

coursesController.render();

