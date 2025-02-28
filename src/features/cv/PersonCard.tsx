type PersonCardProps = {
    name: string;
    surname: string;
    address: string;
    aboutMe:string;
}

function PersonCard({name, surname, address, aboutMe} : PersonCardProps){
    return (
        <div className="personCard">
            <div></div>
        </div>
    )
}

export default PersonCard;