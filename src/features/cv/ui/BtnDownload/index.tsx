import style from './BtnDownload.module.scss'
import { BtnDownloadProps } from "./type";

function BtnDownload({ onClick } : BtnDownloadProps){
    return <div className={style.btnContainer}>
        <button onClick={ onClick } className={style.btnDownload}>
            Download CV
        </button>
    </div>;
}

export default BtnDownload;