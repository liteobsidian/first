import React from "react";
import MyPosts from "./myPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile
    }
};
const MyPostsContainer = connect(mapStateToProps)(MyPosts );

export default MyPostsContainer;