import { UsersApi } from "../API/api";

const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLWING_PROGRESS = 'TOGGLE_IS_FOLLWING_PROGRESS';


let initialDefault = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const UsersReducer = (state = initialDefault, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };
        }
        case SET_USERS: {
            return { ...state, users: action.users }
        }

        case SET_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }

        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }

        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }

        case TOGGLE_IS_FOLLWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state;
    }
}

export const follow = (userId) => { return { type: FOLLOW, userId } }

export const unFollow = (userId) => { return { type: UNFOLLOW, userId } }

export const setUsers = (users) => { return { type: SET_USERS, users } }

export const setCurrentPage = (currentPage) => { return { type: SET_PAGE, currentPage } }

export const setTotalUsersCount = (totalUsersCount) => { return { type: SET_TOTAL_USERS_COUNT, count: totalUsersCount } }

export const toggleIsFetching = (isFetching) => { return { type: TOGGLE_IS_FETCHING, isFetching } }

export const toggleFollowingProgress = (isFetching, userId) => { return { type: TOGGLE_IS_FOLLWING_PROGRESS, isFetching, userId } }





export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        UsersApi.getUsers(currentPage, pageSize).then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
        })
    }
}

export const followThunk = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        UsersApi.getFollowId(id).then(response => {
            if (response.resultCode === 0) {
                dispatch(follow(id));
            }
            dispatch(toggleFollowingProgress(false, id));
        });
    }
}

export const unFollowThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        UsersApi.getUnFollowId(userId).then(response => {
            if (response.resultCode === 0) {
                dispatch(unFollow(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
    }
}



export default UsersReducer;
