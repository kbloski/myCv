import DotIcon from '../DotIcon';
import style from './Header.module.scss'

function Header(){
    const numDots: number = 3;

    const links = [
        {
            name: 'Home',
            to: {
                name: 'devfolio'
            }
        },
        {
            name: 'CV',
            to: {
                name: 'cv'
            }
        },
    ]

    return <header className={style.header}>
        <div className="flex">
            { Array.from({ length: numDots }).map(() => ( <DotIcon />))}
        </div>
        <div>
            <ul className='flex'>
                { links.map( link => <li></li>)}
            </ul>
        </div>
    </header>
}

export default Header;