import classNames from 'classnames/bind';
import styles from './defaultLayout.module.scss';
import Header from '../Header/Index';
const cx = classNames.bind(styles)
type childrenProps = {
    children: string| JSX.Element | JSX.Element[]
  }
function defaultLayout({children}:childrenProps) {
    return <div className={cx('wrapper')}>
    <Header />
           {children}       
           <footer>this is footer</footer>
        </div>
    
}

export default defaultLayout ;