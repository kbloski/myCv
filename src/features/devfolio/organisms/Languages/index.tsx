import style from './Languages.module.scss';

// @ts-ignore
import { Container } from '@shared/components';

import  { useSelector } from 'react-redux';
import { getLanguages } from "../../../../entities/cv/model/selectors";
import { Title } from '../../templates';


function Languages()
{
    const languages = useSelector(getLanguages)

    if (!languages.length) return;

    return <Container>
        <div className={style.languages}>
            <Title tag={4}>
                Languages
            </Title>
            <ul>
                { languages.map( l => <li key={l.name}><div className={style.level}>{l.level}</div><span>{l.name}</span></li>)}
            </ul>
        </div>
    </Container>
}

export default Languages;