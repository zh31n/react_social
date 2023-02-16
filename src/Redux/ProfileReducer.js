const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';


let initialDefault = {
    posts: [
        { postTxt: 'Здарова епта', likesCount: ' 0' },
        { postTxt: 'Я фронтом скоро стану', likesCount: ' 5' },
        { postTxt: 'Иди своей дорогой сталкер', likesCount: ' 10' }
    ],

    newPostText: 'zh31n'
};

const ProfileReducer = (state = initialDefault, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                // id: 5,
                postTxt: state.newPostText,
                likesCount: '0'
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return { ...state, newPostText: action.newText };
        }
        default:
            return state;
    }
}

export const addPost = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostText = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

export default ProfileReducer;
