import style from './Languages.module.scss';

// @ts-ignore
import { Container } from '@shared/components';

import  { useSelector } from 'react-redux';
import { getLanguages } from "../../../../entities/cv/model/selectors";


function Languages()
{
    const languages = useSelector(getLanguages)

    if (!languages.length) return;

    return <Container>
        <ul className={style.languagesList}>
            { languages.map( l => <li key={l.name}>
                <i className='pi pi-check'></i>
                <span>{l.name}</span>
                <span>( {l.level} )</span>
            </li>)}
        </ul>
    </Container>
}

export default Languages;