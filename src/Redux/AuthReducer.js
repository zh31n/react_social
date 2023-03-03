import { authAPI } from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';



let initialDefault = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialDefault, action) => {

    switch (action.type) {
        case SET_USER_DATA: { return { ...state, ...action.payload}; }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.getAuth().then(response => {
            if (response.resultCode === 0) {
                let { id, login, email } = response.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
    }
}

export const loginThunk = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.Login(email, password, rememberMe).then(response => {
            if (response.resultCode === 0) {
                dispatch(getAuthUserData());
            }
        });
    }
}

export const logoutThunk = () => {
    return (dispatch) => {
        authAPI.Logout().then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
    }
}


export default authReducer;
