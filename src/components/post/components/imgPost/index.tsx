import React from "react";

import classNames from "classnames/bind";

import styles from './imgPost.module.scss';

const cx = classNames.bind(styles)
// interface Props {
//     name:string,
//     urlImg :string,
//     moment:string
// }
const InfoPost :React.FC = (props)=>{
    
    
    return  <div className={cx('wrapper')}>
            
        
                <img className={cx('img-post')} src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/324146002_3329914327322802_4284410014011774362_n.jpg?stp=dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=K390LuisG1IAX_F6h2n&_nc_ht=scontent.fvca1-3.fna&oh=00_AfBgV4nHZ9bmytB-QdF6r56uyfFzHmlR74Bkyee9vrRXTA&oe=63BD746A" alt="" />
                </div>
            
}
export default InfoPost;
