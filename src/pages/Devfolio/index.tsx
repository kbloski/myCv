import style from './Devfolio.module.scss'
import '../../features/devfolio/styles/index.scss'

import { 
    BackgroundPage, 
    Dashboard,
    DetailsPanel,
    SideWrapper
} from "../../features/devfolio";

function Devfolio(){
    return <div className={style.devfolio}>
        <BackgroundPage />
        <SideWrapper>
            <Dashboard />
            <DetailsPanel />
        </SideWrapper>
    </div>
}

export default Devfolio;