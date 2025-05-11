import style from "./TechStack.module.scss";

import { OrbitIcons, Container } from "@shared/components";
import { Title } from "../..";
import { useSelector } from "react-redux";

import { getProgrammingSkils } from "@entities/cv/model/selectors";

function TechStack()
{
    const technologies  = useSelector(getProgrammingSkils);
    

    return <Container>
        <div className={style.techOrbit}>
            <OrbitIcons items={technologies}>
                <Title tag={2}>Moje Technologie</Title>
            </OrbitIcons>
        </div>
    </Container>
}

export default TechStack;