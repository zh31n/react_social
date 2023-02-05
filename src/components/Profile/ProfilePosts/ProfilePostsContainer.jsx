import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/ProfileReducer';
import ProfilePosts from './ProfilePosts';



let ProfilePostsContainer = (props) => {

    let state = props.store.getState();
    
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action);
    }

    return (<ProfilePosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} 
        NewPostText={state.profilePage.newPostText}/>);
}

export default ProfilePostsContainer;