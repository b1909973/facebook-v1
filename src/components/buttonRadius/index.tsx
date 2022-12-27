import classNames from "classnames/bind";
import styles from './buttonRadius.module.scss'

const cx = classNames.bind(styles)
function buttonRadius({icon}:{icon?:JSX.Element}) {
    return (
            <button className={cx('wrapper')}>
                    {icon}
            </button>
        
    );
}

export default buttonRadius;