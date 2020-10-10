import React from "react";
import {Redirect} from "react-router-dom";

const Music = (props) => {
    if (!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div>music</div>
    );
}

export default Music;