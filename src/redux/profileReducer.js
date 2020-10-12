import {ProfileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PAGE = 'profile/SET-USER-PAGE';
const SET_STATUS = 'profile/SET-STATUS';
const DELETE_POST = 'profile/DELETE-POST'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE-PHOTO-SUCCESS'

let initialState = {
    posts: [
        {
            id: 1,
            user: 'Strelnykov Roman',
            message: 'You can vizit my profile: https://liteobsidian.github.io/first/#/profile/11682',
            like: 15
        },
        {
            id: 2,
            user: 'Strelnykov Roman',
            message: 'You can try to use posts textarea and send text on state',
            like: 15
        },
        {id: 3, user: 'Strelnykov Roman', message: 'It\'s fake posts', like: 23}
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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
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

export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
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
    try {
        let response = await ProfileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (error) {
        //dispatch error and show dialog window
    }
};

export const savePhoto = (file) => async (dispatch) => {
    let response = await ProfileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let response = await ProfileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]})) //error to redux-form
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;