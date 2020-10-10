import {AuthAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET-USER-DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

//ACTION CREATORS

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

//THUNKS

export const getAuthUserData = () => async (dispatch) => {
    let response = await AuthAPI.me();
    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const logIn = (email, password, rememberMe) => async (dispatch) => {
    let response = await AuthAPI.logIn(email, password, rememberMe);
    if (response.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}))
    }
};

export const logout = () => async (dispatch) => {
    let response = await AuthAPI.logOut();
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}


export default authReducer;