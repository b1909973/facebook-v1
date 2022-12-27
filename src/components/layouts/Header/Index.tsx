import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHomeUser,faTv,faStore,faUsers,faGamepad } from "@fortawesome/free-solid-svg-icons";
import {useState} from 'react'

import styles from './Header.module.scss'
import IconNav from "./components/IconNav";
const cx = classNames.bind(styles)
const listNav:JSX.Element[] =[
        <FontAwesomeIcon  icon={faHomeUser} />,
        <FontAwesomeIcon icon={faTv}/>,
        <FontAwesomeIcon icon={faStore}/>,
        <FontAwesomeIcon icon={faUsers} />,
        <FontAwesomeIcon icon={faGamepad}/>
]

function Header():JSX.Element { 
        const [active,setActive] = useState(0)
        console.log('re-render')
    return (
    <div className={cx('grid','row','wrapper')}>
        <div className={cx('c-4')}>
                search
        </div>
        {/* search */}
        {/* iconNav */}
        <div className={cx('c-4','iconNav')}>
                <ul className={cx("iconNav-list",'justify-content-center','row','align-content-center')}>
                {listNav.map((icon,i)=>    <IconNav icon={ icon} key={i}  className={active===i} onClick={():void=>{setActive(i)}}/>
                
                )}
             
               

                </ul>

        </div>
        <div className={cx('c-4')}>
                iconOption
        </div>
        {/* iconOption */}
    </div> 
     );
}

export default Header;