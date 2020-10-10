import React from "react";
import s from './messageWrapper.module.css'
import Message from "./message.jsx";
import NewMessageContainer from "./NewMessageContainer.jsx";

const MessageWrapper = (props) => {
    let messageData=props.messages.map((el)=><Message key={el.userId} name={el.name} message={el.message}/>)
    return (
        <div className={s.wrapper}>
            <div className={s.messageWrapper}>
                {messageData}
            </div>
            <NewMessageContainer/>
        </div>
    );
}

export default MessageWrapper;