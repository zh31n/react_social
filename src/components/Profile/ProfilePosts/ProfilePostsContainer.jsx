import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/ProfileReducer';
import StoreContext from '../../../StoreContext';
import ProfilePosts from './ProfilePosts';



// let ProfilePostsContainer = (props) => {

//     // let state = props.store.getState();



//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {

//                     let state = store.getState();

//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     }

//                     let onPostChange = (text) => {
//                         let action = updateNewPostTextActionCreator(text)
//                         store.dispatch(action);
//                     }

//                     return (
//                         <ProfilePosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts}
//                             NewPostText={state.profilePage.newPostText} />
//                     )
//                 }

//             }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        NewPostText : state.profilePage.newPostText
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

let ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts);

export default ProfilePostsContainer;