import style from './Hobbies.module.scss';

import { useSelector } from "react-redux";

// @ts-ignore
import { Container } from "@shared/components";
import { Title } from "../../templates";
import { getHobbies } from "../../../../entities/cv/model/selectors";

function Hobbies()
{
    const hobbies = useSelector(getHobbies);

    if (!hobbies.length) return;

    return <Container>
        <Title tag={4}>
            Hobbies
        </Title>
        <ul className={style.hobbiesList}>
            <Container className={style.listContainer}>
                { hobbies.map(h => <li>{h}</li>)}
            </Container>
        </ul>
    </Container>
}

export default Hobbies;