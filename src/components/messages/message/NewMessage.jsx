import React from "react";
import s from './messageWrapper.module.css'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/formControls/formsControls";
import {maxLengthCreator, required} from "../../../utils/validators";


let maxLength = maxLengthCreator(100);

const  NewMessage = (props) => {
    let addNewMessage = (values) => {
        props.addNewMessage(values.newMessageBody)
    }

    return (
        <div className={s.newMessage}>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit} className={s.messageForm}>
                <Field component={Textarea} validate={[required, maxLength]} name={"newMessageBody"} placeholder={"Enter message.."} className={s.messageInput} required/>
                <Field className={s.messageBtn} name={"sendMessage"} component={"button"}>Send Message</Field>
            </form>
    );
}

const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)

export default NewMessage;