import React from "react";
import {Redirect} from "react-router-dom";

const Settings = (props) => {
    if (!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div>settings</div>
    );
}

export default Settings;