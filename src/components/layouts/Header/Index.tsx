import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHomeUser,faTv,faStore,faUsers,faGamepad } from "@fortawesome/free-solid-svg-icons";

import styles from './Header.module.scss'
import IconNav from "./components/IconNav";
const cx = classNames.bind(styles)
function Header():JSX.Element {
    return (
    <div className={cx('grid','row','wrapper')}>
        <div className={cx('c-4')}>
                search
        </div>
        {/* search */}
        {/* iconNav */}
        <div className={cx('c-4','iconNav')}>
                <ul className={cx("iconNav-list",'justify-content-center','row','align-content-center')}>
                <IconNav icon={  <FontAwesomeIcon  icon={faHomeUser} />} />
                <IconNav icon={<FontAwesomeIcon icon={faTv}/>}/>
                <IconNav icon={<FontAwesomeIcon icon={faStore}/>}/>
                <IconNav icon={<FontAwesomeIcon icon={faUsers} />}/>
                <IconNav icon={<FontAwesomeIcon icon={faGamepad}/>}/>

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