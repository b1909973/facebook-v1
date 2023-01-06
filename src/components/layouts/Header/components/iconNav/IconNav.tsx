// import {ReactNode} from 'react' 
import classNames from "classnames/bind";

import styles from './iconNav.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
const cx= classNames.bind(styles)

function iconNav({icon,title,onClick,className}:{icon:JSX.Element,title:string,className?:boolean,onClick:()=>void}):JSX.Element {
 
    return (   <Tippy content={title} >
                <li className={cx('icon',{active:className})} onClick={onClick}>
                 {icon}
                </li>
                </Tippy>


    );
}

export default iconNav;