import React from "react";
import s from './messageWrapper.module.css'
import messageAvatar from "../../../assets/images/team00.png"


const Message = (props) => {
    return (
        <div className={s.content}>
            <div className={s.from}>
                <img src={messageAvatar} alt="ava" className={s.avatar}/>
                <h4>{props.name}</h4>
            </div>
            <div className={s.message}>
                <p>{props.message}</p>
            </div>
        </div>
    );
}

export default Message;