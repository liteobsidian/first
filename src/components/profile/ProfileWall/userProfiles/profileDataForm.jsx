import React from "react";
import s from "./userProfile.module.css";
import {createField, Input} from "../../../common/formControls/formsControls";
import {reduxForm} from "redux-form";


const ProfileDataForm = ({profile}) => {
    return <form>
        <p>AboutMe: {createField("Full name", "fullName", [], Input, "text")}</p>
        <p>Contacts:</p>
        <div className={s.socialsWrapper}>
            {/*{Object.keys(profile.contacts).map(key => {*/}
            {/*    if (profile.contacts[key] !== null)*/}
            {/*        return <Contact key={key} contactTitle={key}*/}
            {/*                        contactValue={profile.contacts[key]}/>*/}
            {/*})}*/}
        </div>
        <p>Looking for a Job: {profile.lookingForAJob ? "Yes" : 'No'}</p>
        {profile.lookingForAJob &&
        <p>My professional skills : {profile.lookingForAJobDescription}</p>}
        <button className={s.btn} onClick={()=>{}}>save</button>
    </form>
}

let ProfileDataReduxForm = reduxForm({form:'edit-profile'})(ProfileDataForm)

export default ProfileDataReduxForm