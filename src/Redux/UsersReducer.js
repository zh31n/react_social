const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let randomId = Math.random();

let initialDefault = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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

        default:
            return state;
    }
}

export const followAC = (userId) => { return { type: FOLLOW, userId } }

export const unFollowAC = (userId) => { return { type: UNFOLLOW, userId } }

export const setUsersAC = (users) => { return { type: SET_USERS, users } }

export const setCurrentPageAC = (currentPage) => { return { type: SET_PAGE, currentPage } }

export const setTotalUsersCountAC = (totalUsersCount) => { return { type: SET_TOTAL_USERS_COUNT, count: totalUsersCount } }





export default UsersReducer;
