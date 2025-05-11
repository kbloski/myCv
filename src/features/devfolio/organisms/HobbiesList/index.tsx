import style from './HobbiesList.module.scss';

import { useSelector } from "react-redux";

import { Container } from "@shared/components";
import { getHobbies } from "@entities/cv/model/selectors";

function HobbiesList()
{
    const hobbies = useSelector(getHobbies);

    if (!hobbies.length) return;

    return <Container>
        <ul className={style.hobbiesList}>
            <div className={style.listContainer}>
                { hobbies.map(h => <li key={h}>{h}</li>)}
            </div>
        </ul>
    </Container>
}

export default HobbiesList;