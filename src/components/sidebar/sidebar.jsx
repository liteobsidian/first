import React from "react";
import s from './sidebar.module.css'
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <nav>
                <NavLink activeClassName={s.active} to="/profile">Profile</NavLink>
                <NavLink activeClassName={s.active} to="/message">Messages</NavLink>
                <NavLink activeClassName={s.active} to="/users">Find users</NavLink>
                <NavLink activeClassName={s.active} to="/news">News</NavLink>
                <NavLink activeClassName={s.active} to="/music">Music</NavLink>
                <NavLink activeClassName={s.active} to="/settings">Settings</NavLink>
            </nav>
        </div>
    );
}

export default Sidebar;