import React from "react";
import s from './post.module.css'
import avaPost from "../../../../assets/images/user.png"


const Post = (props) => {
    return (
        <div className={s.post}>
            <img src={props.profile===null?"":props.profile.photos.small===null?avaPost:props.profile.photos.small} alt="avaPost"/>
            <div className={s.postTxt}>
                <p className={s.postUserName}>{props.profile===null?props.user:props.profile.fullName}</p>
                <p>{props.message}</p>
                <span className={s.likes}>{props.like} likes</span>
            </div>
        </div>
    );
}

export default Post;