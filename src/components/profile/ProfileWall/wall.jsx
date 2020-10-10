import React from "react";
import Wallpaper from "./wallpapers/wallpaper.jsx";
import UserProfile from "./userProfiles/userProfile.jsx";


const Wall = (props) => {
    return (
        <div>
            <Wallpaper />
            <UserProfile profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );
}

export default Wall;