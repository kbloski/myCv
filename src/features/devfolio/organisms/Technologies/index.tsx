
import style from './Technologies.module.scss'
import {
    Container,
    TheTitle,
} from "../../templates";
import { useSelector } from 'react-redux';
import { getProgrammingSkils } from "../../../../entities/cv/model/selectors";

function Technologies(){
    const skills = useSelector(getProgrammingSkils);

    return (
        <Container className={style.technologies}>
            <TheTitle tag={3} className={style.title}>
                <span>Tech</span>
                <span className="text-accent">Skills</span>
            </TheTitle>
            { skills.length && skills.map( skill => 
            <div>
                <span className={skill.icon}></span>
                <span  className={style.name}>{skill.name}</span>
            </div>)
            }
        </Container>
    );
}

export default Technologies; 