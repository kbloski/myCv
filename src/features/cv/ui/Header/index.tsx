import { useDispatch } from 'react-redux';
import style from './BtnDownload.module.scss'
import { BtnDownloadProps } from "./type";
import { navigateTo } from '../../../../app/router';

function BtnDownload({ onClick } : BtnDownloadProps){
    const dispatch = useDispatch();

    function handleDevfolio(){
        dispatch(navigateTo({path: '/'}))
    }

    return <div className={style.btnContainer}>
        <button onClick={ handleDevfolio } className={style.btnDownload}>
            Devfolio
        </button>
        <button onClick={ onClick } className={style.btnDownload}>
            Download CV
        </button>
    </div>;
}

export default BtnDownload;