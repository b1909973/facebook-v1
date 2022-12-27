import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from './Search.module.scss'

const cx = classNames.bind(styles)


function Search() {
        console.log('rre-render')
        return (<div className={cx('wrapper','row')}>
                <div className={cx('logo')}>
     <svg viewBox="0 0 36 36"  fill="url(#jsc_s_2)" height="40" width="40"><defs><linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_s_2"><stop offset="0%" stop-color="#0062E0"></stop><stop offset="100%" stop-color="#19AFFF"></stop></linearGradient></defs><path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path><path d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z" fill='white'></path></svg>

                        </div>        
                <div className={cx('search')}>
                <span className={cx('button-search')}><FontAwesomeIcon icon={faMagnifyingGlass} /></span>

                <input type="text" className={cx('inputSearch')} placeholder='Tìm kiếm trên Facebook'  />
                        
                </div>
    </div>  );
}

export default Search;