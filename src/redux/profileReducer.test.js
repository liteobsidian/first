import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

it('new post should be added', ()=>{
    // 1. test data
    let action = addPostActionCreator("lol kek");
    let state = {
        posts: [
            {id: 1, user: 'Strelnykov Roman', message: 'Hello World! I can use props!', like: 15},
            {id: 2, user: 'Strelnykov Roman', message: 'It\'s my first post in this wall', like: 23}
        ]
    }
    //2. action
    let newState = profileReducer(state,action);
    //3. expectation
    expect(newState.posts.length).toBe(3);
});

it('text should be added', ()=>{
    // 1. test data
    let action = addPostActionCreator("lol kek");
    let state = {
        posts: [
            {id: 1, user: 'Strelnykov Roman', message: 'Hello World! I can use props!', like: 15},
            {id: 2, user: 'Strelnykov Roman', message: 'It\'s my first post in this wall', like: 23}
        ]
    }
    //2. action
    let newState = profileReducer(state,action);
    //3. expectation
    expect(newState.posts[2].message).toBe("lol kek");
});

it('after deleting length of messages shold be decrement', ()=>{
    // 1. test data
    let action = deletePost(1);
    let state = {
        posts: [
            {id: 1, user: 'Strelnykov Roman', message: 'Hello World! I can use props!', like: 15},
            {id: 2, user: 'Strelnykov Roman', message: 'It\'s my first post in this wall', like: 23}
        ]
    }
    //2. action
    let newState = profileReducer(state,action);
    //3. expectation
    expect(newState.posts.length).toBe(1);
});
