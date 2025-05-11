import style from "./Header.module.scss";

import { useDispatch } from 'react-redux';
import { navigateTo } from '../../../../app/router';
import { Button, Container } from '@shared/components'; 
import { HeaderInterface } from './interface';

function Header({ onClick } : HeaderInterface){
    const dispatch = useDispatch();

    function handleDevfolio(){
        dispatch(navigateTo({path: '/'}))
    }

    return <Container className={style.header}>
        <Button onClick={ handleDevfolio }>
            Devfolio
        </Button>
        <Button onClick={ onClick } >
            Download CV
        </Button>
    </Container>;
}
Header
export default Header;