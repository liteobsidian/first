import React from "react";
import s from './dialogs.module.css'
import Dialog from "./dialog.jsx";


const Dialogs = (props) => {
    let dialogsData = props.dialogs.map((d)=><Dialog name={d.name} key={d.userId} userId={d.userId}/>)
    return (
        <div className={s.wrapper}>
            {dialogsData}
        </div>
    );
}

export default Dialogs;