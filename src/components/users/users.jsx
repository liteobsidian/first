import React from "react";
import s from './users.module.css';
import Paginator from "../common/Paginator/paginator";
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {
    return (
        <div className={s.usersPage}>
            <h2 className={s.h2}>Users</h2>
            <Paginator currentPage={currentPage}
                       totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       onPageChanged={onPageChanged}
            />

            {props.users.map(u => <User
                key={u.id}
                user={u}
                followingInProgress={props.followingInProgress}
                follow={props.follow} unfollow={props.unfollow} />)
            }
        </div>)
}

export default Users;