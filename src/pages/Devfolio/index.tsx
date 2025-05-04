// @ts-nocheck
import style from './Devfolio.module.scss'
import '@features/devfolio/styles/index.scss'

import { Wrapper, Background } from "@shared/components";

import { 
    BackgroundPage, 
    Dashboard,
    DetailsPanel,
} from "@features/devfolio";
import { AboutMe, Banner, PersonalCard } from '../../features/devfolio';

function Devfolio(){
    return <div className={style.devfolio}>
        <Background />
        <Wrapper>
            <Banner />
            <PersonalCard />
        </Wrapper>
    </div>
}

export default Devfolio;