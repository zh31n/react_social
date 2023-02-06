import React from 'react';
import PostItem from './PostItem/PostItem';
import s from './ProfilePosts.module.css'



let ProfilePosts = (props) => {

    let postElements = props.posts.map(post => <PostItem message={post.postTxt} likes={post.likesCount} />)

    let inputValue = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = inputValue.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={s.prof_posts}>
            <h3>My posts</h3>
            <div className={s.new_posts}>
                <textarea onChange={onPostChange} value={props.NewPostText} ref={inputValue} />
                <button onClick={onAddPost}>add post</button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default ProfilePosts;