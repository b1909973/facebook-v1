// import {ReactNode} from 'react' 
import classNames from "classnames/bind";

import styles from './iconNav.module.scss';

const cx= classNames.bind(styles)

function iconNav({icon}:{icon?:JSX.Element}):JSX.Element {
    return (  
                <li className={cx('icon')}>
                 {icon}
                </li>


    );
}

export default iconNav;