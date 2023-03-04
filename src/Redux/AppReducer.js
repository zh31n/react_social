import {getAuthUserData} from "./AuthReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialDefault = {
    initialized: false
};

const AppReducer = (state = initialDefault, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {...state, initialized: true};
        }
        default:
            return state;
    }
}

export const setInitialized = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => {
    return (dispatch) => {
        let promised = dispatch(getAuthUserData());
        promised.then(() => {
            dispatch(setInitialized());
        })
    }
}


export default AppReducer;
