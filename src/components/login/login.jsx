import React from "react";
import s from './login.module.css'
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/formControls/formsControls";
import {required} from "../../utils/validators";
import {logIn} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("E-mail", "email", [required], Input, "text")}
            {createField("password", "password", [required], Input, "password")}
            {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
            {captchaUrl &&
            createField("Enter symbols", "captcha", [required], Input, "text")}
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> Remember me
            </div>
            {error && <div className={s.formError}>{error}</div>}
            <div>
                <Field className={s.loginBtn} type={"submit"} component={"button"}>Login</Field>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.logIn(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    } else {
        return (
            <div>
                <h1 className={s.loginHeading}>Login</h1>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
                <p>For test use:</p>
                <p><b>Email:</b> free@samuraijs.com</p>
                <p><b>Password:</b> free</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {logIn})(Login);