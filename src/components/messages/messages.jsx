import React from "react";
import s from './messages.module.css'
import MessageWrapperContainer from "./message/messageWrapperContainer.jsx";
import DialogsContainer from "./dialog/dialogsContainer";


const Messages = (props) => {
    return (
        <div className={s.messages}>
            <h2 className={s.h2}>DIALOGS</h2>
            <div className={s.content}>
                <DialogsContainer/>
                <MessageWrapperContainer/>
            </div>
        </div>
    );
}

export default Messages;