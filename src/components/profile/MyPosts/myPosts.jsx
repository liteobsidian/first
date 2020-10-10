import React from "react";
import s from './myPosts.module.css';
import Post from "./Posts/post.jsx";
import CreatePostContainer from "./CreatePost/createPostContainer.jsx";

const MyPosts = React.memo(props => {
    console.log('render')
    let postsData = props.posts.map(
        (el) => <Post key={el.id} user={el.user} message={el.message} like={el.like} profile={props.profile}/>)
    return (
        <div>
            <div className={s.createPost}>
                <h3>My posts</h3>
                <CreatePostContainer/>
            </div>
            <div className={s.posts}>
                {postsData}
            </div>
        </div>
    );
})

export default MyPosts;