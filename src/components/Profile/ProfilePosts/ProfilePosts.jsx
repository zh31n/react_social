import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PostItem from './PostItem/PostItem';
import s from './ProfilePosts.module.css'



const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'}  name='postValue' />
            <button>add post</button>
        </form>
    )
}

const ReduxPostForm = reduxForm({form: 'PostForm'})(PostForm);

let ProfilePosts = (props) => {

    let postElements = props.posts.map(post => <PostItem message={post.postTxt} key={post.id} likes={post.likesCount} />)

    let AddPost = (value) => {
        props.addPost(value.postValue);
    }

    return (
        <div className={s.prof_posts}>
            <h3>My posts</h3>
            <div className={s.new_posts}>
                <ReduxPostForm onSubmit={AddPost}/>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default ProfilePosts;