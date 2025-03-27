import style from './Devfolio.module.scss'

import { 
    BackgroundPage, 
    Dashboard,
    DetailsPanel,
    SideWrapper
} from "../../features/devfolio";

function Portfolio(){
    return <div className={style.devfolio}>
        <BackgroundPage />
        <SideWrapper>
            <Dashboard />
            <DetailsPanel />
        </SideWrapper>
    </div>
}

export default Portfolio;