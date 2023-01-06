import React from "react";

import classNames from "classnames/bind";

import styles from './contentPost.module.scss';

const cx = classNames.bind(styles)
// interface Props {
//     name:string,
//     urlImg :string,
//     moment:string
// }
const ContentPost :React.FC = (props)=>{
    
    
    return  <div className={cx('wrapper')}>
            
            <div>Hello</div>    
                <div>🐧</div>
                <div>#j2team_share</div>
                <div>#j2team_relax</div>
              
                </div>
            
}
export default ContentPost;
