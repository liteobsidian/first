import React from "react";
import s from './users.module.css';
import defaultUserPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div key={user.id} className={s.user}>
            <div className={s.avatarFollow}>
                <div>
                    <NavLink to={`/profile/` + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : defaultUserPhoto} alt='avatar'
                             className={s.usersPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }} className={s.followBtn}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }} className={s.followBtn}>Follow</button>}
                </div>
            </div>
            <div className={s.userDescription}>
                <div className={s.nameStatus}>
                    <div className={s.userName}>{user.name}</div>
                    <div className={s.status}>{user.status}</div>
                </div>
                <div className={s.countryWrapper}>
                    {/*<div className={s.country}>{"user.location.city"},</div>*/}
                    {/*<div className={s.country}>{"user.location.country"}</div>*/}
                </div>
            </div>
        </div>)
}

export default User;