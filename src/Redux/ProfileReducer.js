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
            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = { ...state };
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default: return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

export default ProfileReducer;
