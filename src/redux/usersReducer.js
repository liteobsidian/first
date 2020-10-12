import {UsersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objectHelpers";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})

            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})

            };
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id !== action.userId)]
            }
        default:
            return state;
    }
};

//ACTION CREATORS

export const followSuccess = (userId) => {
    return {type: FOLLOW, userId}
};
export const unfollowSuccess = (userId) => {
    return {type: UNFOLLOW, userId}
};
export const setUsers = (users) => {
    return {type: SET_USERS, users}
};
export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
};
export const setTotalUsersCount = (totalUsersCount) => {
    return {type: SET_TOTAL_USERS_COUNT, count: totalUsersCount}
};
export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
};
export const toggleIsFollowingProgress = (isFetching, userId) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}
};

//THUNKS

export const getUsersThunk = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    let response = await UsersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
};

//down refactored 2 thunks "follow/unfollow"

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingProgress(true, id));
    let response = await apiMethod(id);
    if (response.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleIsFollowingProgress(false, id));
}

export const follow = (id) => async (dispatch) => {
    followUnfollowFlow(dispatch, id, UsersAPI.toFollow.bind(UsersAPI), followSuccess);
};
export const unfollow = (id) => async (dispatch) => {
    followUnfollowFlow(dispatch, id, UsersAPI.toUnfollow.bind(UsersAPI), unfollowSuccess);
}


export default usersReducer;