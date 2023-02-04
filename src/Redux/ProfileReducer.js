const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const ProfileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                // id: 5,
                postTxt: state.newPostText,
                likesCount: '0'
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: return state;
    }
    // if (action.type === ADD_POST) {
    //     let newPost = {
    //         // id: 5,
    //         postTxt: state.newPostText,
    //         likesCount: '0'
    //     };

    //     state.posts.push(newPost);
    //     state.newPostText = '';
    //     // this._callSubscriber(this._state);
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //     state.newPostText = action.newText;
    //     // this._callSubscriber(this._state);
    // }

    // return state;
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
