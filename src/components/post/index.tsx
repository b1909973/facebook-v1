import React from "react"
import classNames from "classnames/bind";

import styles from './post.module.scss';
import InfoPost from "./components/infoPost/infoPost";
import ImgPost from "./components/imgPost"
import ContentPost from "./components/contentPost";
interface Info{
    name :string,
    urlImg:string,
    moment:string
}
const data:Info={
    name:'Huynh My',
    urlImg:'https://scontent.fvca1-4.fna.fbcdn.net/v/t1.6435-9/181850658_510852516752861_4909193284342280277_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1v6-oN5cWkoAX-DpdU0&_nc_ht=scontent.fvca1-4.fna&oh=00_AfCdk_t3jJV8-7zp1Hf9kxLUbaBjmSXd-Jy536iMZJZYfA&oe=63D22CF1',
    moment:'20'
}
// const datas:Info[] =[
//     data,data,data
// ]
const cx = classNames.bind(styles)
interface Props {

}
const Post :React.FC = (props:Props)=>{


    return <div className={cx('wrapper')}>
                <InfoPost {...data}/>
                <ContentPost />
               
                <ImgPost />

    </div>
}
export default Post;