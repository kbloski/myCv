class CredentialsControll  {
    credentialItem = document.getElementById('credentials');
    credentialList = [
        {
            name: 'Prawojazdy',
            description: 'A2, B'
        }
    ]

    render(){
        const list = document.createElement('li');
        list.classList = 'list-group'; 

        for(const credential of this.credentialList){
            const liElement = document.createElement('li');
            liElement.innerText = `${credential.name} - ${credential.description}`
            liElement.classList = 'list-group-item'
            list.appendChild( liElement );
        }

        this.credentialItem.appendChild( list );
    }
};

const credentialsControll = new CredentialsControll();

credentialsControll.render();


