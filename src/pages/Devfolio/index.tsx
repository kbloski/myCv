// @ts-nocheck
import style from './Devfolio.module.scss'
import '@features/devfolio/styles/index.scss'

import { Wrapper, Background } from "@shared/components";
import { AboutMe, Banner, PersonalCard, TechStack } from '../../features/devfolio';

function Devfolio(){
    return <div className={style.devfolio}>
        <Background />
        <Wrapper>
            <Banner />
            <PersonalCard />
            <AboutMe />
            <TechStack />
        </Wrapper>
    </div>
}

export default Devfolio;