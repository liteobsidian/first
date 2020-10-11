import React, {useState} from "react";
import s from './userProfile.module.css'
import avatar from "../../../../assets/images/user.png"
import Preloader from "../../../common/preloader/preloader";
import ProfileStatusWithHooks from "./profileStatusWithHooks";
import ProfileDataReduxForm from "./profileDataForm";


const UserProfile = ({profile, savePhoto, isOwner, status, updateStatus}) => {

    let [editMode, setEditMode] = useState(false);

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    if (!profile) {
        return (
            <Preloader/>
        )
    } else {
        return (
            <>
                <div className={s.profile}>
                    <img src={profile.photos.large || avatar} alt="avatar"
                         className={s.avatar}/>
                    <div className={s.profileDescription}>
                        <h2 className={s.userName}>{profile.fullName}</h2>
                        <ProfileStatusWithHooks isOwner={isOwner} status={status}
                                                updateStatus={updateStatus}/>
                        {editMode
                            ? <ProfileDataReduxForm profile={profile}/>
                            : <ProfileData goToEditMode={()=>{setEditMode(true)}} profile={profile} isOwner={isOwner}/>}
                    </div>
                </div>
                {isOwner &&
                <div>
                    <p className={s.changePhotoDescription}>Change your profile photo</p>
                    <input type={"file"} onChange={onMainPhotoSelected}/>
                </div>}
            </>
        );
    }
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <a className={s.socials} href={contactValue}>{contactTitle}</a>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <>
        <p>AboutMe: {profile.aboutMe === null ? null : profile.aboutMe}</p>
        <p>Contacts:</p>
        <div className={s.socialsWrapper}>
            {Object.keys(profile.contacts).map(key => {
                if (profile.contacts[key] !== null)
                    return <Contact key={key} contactTitle={key}
                                    contactValue={profile.contacts[key]}/>
            })}
        </div>
        <p>Looking for a Job: {profile.lookingForAJob ? "Yes" : 'No'}</p>
        {profile.lookingForAJob &&
        <p>My professional skills : {profile.lookingForAJobDescription}</p>}
        {isOwner && <button className={s.btn} onClick={goToEditMode}>Edit profile</button>}
    </>
}

export default UserProfile;