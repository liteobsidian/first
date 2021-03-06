import React from "react";
import s from './profile.module.css'
import Wall from "./ProfileWall/wall.jsx";
import MyPostsContainer from "./MyPosts/myPostsContainer.jsx";


const Profile = (props) => {
    return (
        <div className={s.content}>
            <Wall saveProfile={props.saveProfile}
                savePhoto={props.savePhoto}
                  isOwner={props.isOwner}
                  profile={props.profile}
                  status={props.status}
                  updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;