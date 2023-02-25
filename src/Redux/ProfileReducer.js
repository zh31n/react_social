import { profileApi } from "../API/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialDefault = {
    posts: [
        { postTxt: 'Здарова епта', likesCount: ' 0' },
        { postTxt: 'Я фронтом скоро стану', likesCount: ' 5' },
        { postTxt: 'Иди своей дорогой сталкер', likesCount: ' 10' }
    ],

    profile: null,
    status: ''
};

const ProfileReducer = (state = initialDefault, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                // id: 5,
                postTxt: action.text,
                likesCount: '0'
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        default:
            return state;
    }
}

export const addPost = (text) => { return { type: ADD_POST, text } }

export const setUserProfile = (profile) => { return { type: SET_USER_PROFILE, profile } }

export const setStatus = (status) => { return { type: SET_STATUS, status } }

export const getUserProfile = (userId) => (dispatch) => {
    profileApi.getProfile(userId).then(response => {
        dispatch(setUserProfile(response));
    })
}
export const getStatus = (userId) => (dispatch) => {
    profileApi.getStatus(userId).then(response => {
        dispatch(setStatus(response));
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileApi.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    })
}

export default ProfileReducer;
