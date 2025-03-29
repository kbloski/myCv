
import style from './Technologies.module.scss'
import {
    Container,
} from "../../templates";
import { useSelector } from 'react-redux';
import { getProgrammingSkils } from "../../../../entities/cv/model/selectors";

function Technologies(){
    const skills = useSelector(getProgrammingSkils);

    return (
        <Container className={style.technologies}>
            <div>
                <span>Tech</span>
                <span className="text-accent">Skills</span>
            </div>
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