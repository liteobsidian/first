import React from "react";
import s from './createPost.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators";
import {Textarea} from "../../../common/formControls/formsControls";


const maxLength30 = maxLengthCreator(30);
const CreatePost = (props) => {
    let addNewPost= (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <PostFormRedux onSubmit={addNewPost}/>
    );
}

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.postForm}>
            <Field className={s.postInput} component={Textarea} name={"newPostText"} placeholder={"your news..."} validate={[required, maxLength30]}/>
            <Field className={s.postsBtn} component={"button"} name={"sendPost"}>Submit</Field>
        </form>
    );
}
const PostFormRedux = reduxForm({form:"postForm"})(PostForm);

export default CreatePost;