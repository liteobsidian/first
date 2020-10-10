import React from "react";
import s from './dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    return (
        <div className={s.item}>
            <NavLink activeClassName={s.active} to={/message/+props.userId}> {props.name}</NavLink>
        </div>
    );
}

export default Dialog;