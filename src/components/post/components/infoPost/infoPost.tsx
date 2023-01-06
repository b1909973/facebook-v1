import React from "react";

import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes,faEllipsis } from "@fortawesome/free-solid-svg-icons";

import AvatarRadius from '../../../avatarRadius'
import styles from './infoPost.module.scss';
import ButtonRadius from "../../../buttonRadius";
const cx = classNames.bind(styles)
interface Props {
    name:string,
    urlImg :string,
    moment:string
}
const InfoPost :React.FC<Props> = (props)=>{
    
    
    return  <div className={cx('row','justify-content-between','wrapper')}>
                <div className={cx('c-1')}>
                <AvatarRadius  urlImg={props.urlImg}/>
                </div>
                <div className={cx('c-9')}>
                    <p>{props.name}</p>
                    <p>{props.moment} hour</p>
                </div>
                <div className={cx('c-1')}>  <ButtonRadius icon={<FontAwesomeIcon icon={faEllipsis} />} /></div>
                <div className={cx('c-1')}>  <ButtonRadius icon={<FontAwesomeIcon icon={faTimes} />} /></div>


            </div>
       
}
export default InfoPost;