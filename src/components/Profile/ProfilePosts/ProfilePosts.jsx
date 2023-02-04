import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/ProfileReducer';
import PostItem from './PostItem/PostItem';
import s from './ProfilePosts.module.css'



let ProfilePosts = (props) => {

    let postElements = props.state.posts.map(post => <PostItem message={post.postTxt} likes={post.likesCount} />)

    let inputValue = React.createRef();

    let addPost = () => {
        // debugger;
        // let text = inputValue.current.value;
        props.dispatch(addPostActionCreator());
        // props.updateNewPostText('');
    }

    let onPostChange = () => {
        let text = inputValue.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={s.prof_posts}>
            My posts
            <div className={s.new_posts}>
                <textarea onChange={onPostChange} value={props.newPostText} ref={inputValue} />
                <button onClick={addPost}>add post</button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default ProfilePosts;