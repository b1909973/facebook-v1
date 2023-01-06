import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHomeUser,faTv,faStore,faUsers,faGamepad, faBarsProgress, faMessage, faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {useState} from 'react'


import styles from './Header.module.scss'
import IconNav from "./components/iconNav/IconNav";
import Search from "./components/Search";
import ButtonRadius from "../../buttonRadius";
import AvatarRadius from "../../avatarRadius";
const cx = classNames.bind(styles)
const listNav:{title:string,path:string,icon:JSX.Element
}[] =[
       {
        title:'home',
        path:'/',
        
        
       
        icon: <FontAwesomeIcon  icon={faHomeUser} />,
       },{
        title:'watch',
        path:'/watch',
        
        icon: <FontAwesomeIcon icon={faTv}/>,
   
       },
       {
        title:'market',
        path:'/market'
        ,
        icon:     <FontAwesomeIcon icon={faStore}/>,
       
       },
       {
        title:'group',
        path:'/group'
        ,
        icon:  <FontAwesomeIcon icon={faUsers} />,
       },{
        title:'game',
        path:'/game'
        ,
       
        icon: <FontAwesomeIcon icon={faGamepad}/>
       }
       
]

function Header():JSX.Element { 
        const [active,setActive] = useState(0)
        console.log('re-render')
    return (
    <div className={cx('grid','row','wrapper')}>
        <div className={cx('c-4')}>
              <Search />
        </div>
        {/* search */}
        {/* iconNav */}
        <div className={cx('c-4','iconNav')}>
                <ul className={cx("iconNav-list",'justify-content-center','row','align-content-center')}>
                {listNav.map((icon,i)=> <Link to={icon.path} key={i}><IconNav icon={ icon.icon} title={icon.title}   className={active===i} onClick={():void=>{setActive(i)}}/></Link> 
                
                )}
             
               

                </ul>

        </div>
        <div className={cx('c-4','row','align-items-center','justify-content-end')}>
            
               <ButtonRadius icon={<FontAwesomeIcon icon={faBarsProgress} />} />

             
               
           
                <ButtonRadius icon={<FontAwesomeIcon icon={faMessage}/>} />
        
             

                <ButtonRadius icon={<FontAwesomeIcon icon={faBell} />} />
             
              <AvatarRadius  urlImg='https://scontent.fvca1-4.fna.fbcdn.net/v/t1.6435-9/181850658_510852516752861_4909193284342280277_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1v6-oN5cWkoAX-DpdU0&_nc_ht=scontent.fvca1-4.fna&oh=00_AfCdk_t3jJV8-7zp1Hf9kxLUbaBjmSXd-Jy536iMZJZYfA&oe=63D22CF1'/>

        </div>
        {/* iconOption */}
    </div> 
     );
}

export default Header;