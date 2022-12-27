import classNames from "classnames/bind";
import styles from './avatarRadius.module.scss'

const cx = classNames.bind(styles)
function avatarRadius({urlImg}:{urlImg:string}) {
    return (
            <div className={cx('wrapper')}>
                    <img src={urlImg} alt="avatar" className={cx('avatar')}  />
            </div>
        
    );
}

export default avatarRadius;