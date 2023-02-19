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
        case SET_USER_DATA: {  return { ...state, ...action.data, isAuth: true }; }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })

export const getAuthUserDataThunk = () => {
    return (dispatch) => {
        authAPI.getAuth().then(response => {
            if (response.resultCode === 0) {
                let { id, login, email } = response.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
    }
}


export default authReducer;
