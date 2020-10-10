import React from "react";
import s from './userProfile.module.css'
import avatar from "../../../../assets/images/user.png"
import Preloader from "../../../common/preloader/preloader";
import ProfileStatusWithHooks from "./profileStatusWithHooks";


const UserProfile = (props) => {
    if (!props.profile) {
        return (
            <Preloader/>
        )
    } else {
        return (
            <div className={s.profile}>
                <img src={props.profile.photos.large === null ? avatar : props.profile.photos.large} alt="avatar"
                     className={s.avatar}/>
                <div className={s.profileDescription}>
                    <h2 className={s.userName}>{props.profile.fullName}</h2>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    <p>AboutMe: {props.profile.aboutMe === null ? null : props.profile.aboutMe}</p>
                    <p>Contacts:</p>
                    <div className={s.socialsWrapper}>
                        {props.profile.contacts.vk === null ? '' : <a className={s.socials} href={props.profile.contacts.vk}>vk</a>}
                        {props.profile.contacts.facebook === null ? '' :
                            <a className={s.socials} href={props.profile.contacts.facebook}>facebook</a>}
                        {props.profile.contacts.instagram === null ? '' :
                            <a className={s.socials} href={props.profile.contacts.instagram}>instagram</a>}
                        {props.profile.contacts.twitter === null ? '' : <a className={s.socials} href={props.profile.contacts.twitter}>twitter</a>}
                        {props.profile.contacts.youtube === null ? '' : <a className={s.socials} href={props.profile.contacts.youtube}>youtube</a>}
                        {props.profile.contacts.github === null ? '' : <a className={s.socials} href={props.profile.contacts.github}>github</a>}
                        {props.profile.contacts.website === null ? '' : <a className={s.socials} href={props.profile.contacts.website}>website</a>}
                        {props.profile.contacts.mainLink === null ? '' :
                            <a className={s.socials} href={props.profile.contacts.mainLink}>mainLink</a>}
                    </div>
                    <p>Need Job: {props.profile.lookingForAJob===null?'Not found':props.profile.lookingForAJob?props.profile.lookingForAJobDescription:'Not'}</p>
                </div>
            </div>
        );
    }
}

export default UserProfile;