const SET_USER_DATA = 'SET_USER_DATA';
// const  = '';


let initialDefault = {
    id: null,
    email: null,
    login: null,
    isFetching: false
};

const authReducer = (state = initialDefault, action) => {

    switch (action.type) {
        case SET_USER_DATA: { return { ...state, ...action.data }; }
        default:
            return state;
    }
}

export const setUserData = (userId, email, login) => { return { type: SET_USER_DATA, data: { userId, email, login } } }


export default authReducer;
