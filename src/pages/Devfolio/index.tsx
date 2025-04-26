import style from './Devfolio.module.scss'
import '@features/devfolio/styles/index.scss'

import { Wrapper } from "@shared/components";

import { 
    BackgroundPage, 
    Dashboard,
    DetailsPanel,
} from "@features/devfolio";

function Devfolio(){
    return <div className={style.devfolio}>
        <BackgroundPage />
        <Wrapper>
            <Dashboard />
            {/* <DetailsPanel /> */}
        </Wrapper>
    </div>
}

export default Devfolio;