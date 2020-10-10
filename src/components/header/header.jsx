import React from "react";
import s from "./header.module.css"
import logo from "../../assets/images/gas.png"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.logoWrapper}>
                    <img className={s.logo} src={logo} alt="logo"/>
                    <h2>Social Network</h2>
                </div>
                <div className={s.loginBlock}>
                    {props.isAuth
                        ? <div>{props.login} - <p className={s.logout} onClick={props.logout}>Log Out</p></div>
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>);
}

export default Header;