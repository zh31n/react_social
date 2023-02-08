const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';

let randomId = Math.random();

let initialDefault = {
    users: []
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
            return { ...state, users: [...state.users, ...action.users] }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => { return { type: FOLLOW, userId } }

export const unFollowAC = (userId) => { return { type: UNFOLLOW, userId } }

export const setUsersAC = (users) => { return { type: SET_USERS, users } }

export default UsersReducer;
