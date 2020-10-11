import {ProfileAPI} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PAGE = 'profile/SET-USER-PAGE';
const SET_STATUS = 'profile/SET-STATUS';
const DELETE_POST = 'profile/DELETE-POST'

let initialState = {
    posts: [
        {id: 1, user: 'Strelnykov Roman', message: 'Hello World! I can use props!', like: 15},
        {id: 2, user: 'Strelnykov Roman', message: 'It\'s my first post in this wall', like: 23}
    ],
    text: "",
    profile: null,
    status: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, user: 'Strelnykov Roman', message: action.newPostText, like: 0}],
                text: ''
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case SET_USER_PAGE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
};

//ACTION CREATORS

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
};
export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId
    }
};

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PAGE,
        profile
    }
};

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
};

//THUNKS

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await ProfileAPI.getProfile(userId);
    dispatch(setUserProfile(response))
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await ProfileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await ProfileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
};

export default profileReducer;