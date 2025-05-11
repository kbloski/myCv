import { Container } from '@shared/components';
import style from './OrbitIcons.module.scss'
import { OrbitIconsInterface } from "./interfaces";


function OrbitIcons({ children, items} : OrbitIconsInterface){

    function rotateDeg ( index = 0, length = 1 ){
        return (360/length) * index;
    }

    return <Container className={style.orbitContainer}>
        <ul className={style.orbitItemsContainer}>
                { items?.map( (item, index, arr) => {
                        const deg = rotateDeg(index, arr?.length);

                        return <li style={{transform:  `rotate(${deg}deg)`}} key={index}>
                            <div className={style.iconContainer}>
                                    <div style={{ transform: `rotate(${-deg}deg)`}}>
                                        <div className={style.icon}>
                                            <i onClick={item.onClick} className={item.icon} />
                                        </div>
                                    </div>
                                </div>
                        </li>}
                    )
                }
        </ul>

        <div className={style.orbitChild}>{children}</div>
    </Container>
}

export default OrbitIcons;