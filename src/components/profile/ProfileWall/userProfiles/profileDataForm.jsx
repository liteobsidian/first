import React from "react";
import s from "./userProfile.module.css";
import {createField, Input, Textarea} from "../../../common/formControls/formsControls";
import {reduxForm} from "redux-form";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <p>Full Name: {createField("Full Name", "fullName", [], Input, "text")}</p>
        <p>About Me: {createField("About me", "aboutMe", [], Input, "text")}</p>
        <p>Contacts:</p>
        <div className={s.socialsWrapper}>
            {Object.keys(profile.contacts).map(key => {
                    return <b key={key}>{key}:
                        {createField(`Enter link to ${key}`, `contacts.${key}`, [], Input, "text")} </b>
            })}
        </div>
        <p>Looking for a Job:
            {createField("", "lookingForAJob", [], Input, "checkbox")}</p>
        <p>My professional skills :
            {createField("Professional skills",
                "lookingForAJobDescription",
                [], Textarea, "textarea")}</p>
        {error && <div className={s.formError}>{error}</div>}
        <button className={s.btn}>save</button>
    </form>
}

let ProfileDataReduxForm = reduxForm({form:'edit-profile'})(ProfileDataForm)

export default ProfileDataReduxForm