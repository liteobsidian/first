import {AuthAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS';


let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

//ACTION CREATORS

export const InitializedSuccess = () => ({type: INITIALIZED_SUCCESS});

//THUNKS

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(()=>{
        dispatch(InitializedSuccess())
    })
}

export default appReducer;