// import {ReactNode} from 'react' 
import classNames from "classnames/bind";

import styles from './iconNav.module.scss';

const cx= classNames.bind(styles)

function iconNav({icon,onClick,className}:{icon:JSX.Element,className?:boolean,onClick:()=>void}):JSX.Element {
 
    return (  
                <li className={cx('icon',{active:className})} onClick={onClick}>
                 {icon}
                </li>


    );
}

export default iconNav;