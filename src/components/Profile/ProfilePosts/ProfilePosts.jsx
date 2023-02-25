import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requried } from '../../../Utils/Validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import PostItem from './PostItem/PostItem';
import s from './ProfilePosts.module.css'

let maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name='postValue' validate={[requried, maxLength10]} />
            <div className="">
                <button type='submit'>add post</button>
            </div>
        </form>
    )
}

const ReduxPostForm = reduxForm({ form: 'PostForm' })(PostForm);

let ProfilePosts = (props) => {

    let postElements = props.posts.map(post => <PostItem message={post.postTxt} key={post.id} likes={post.likesCount} />)

    let AddPost = (values) => {
        debugger;
        props.addPost(values.postValue);
    }

    return (
        <div className={s.prof_posts}>
            <h3>My posts</h3>
            <div className={s.new_posts}>
                <ReduxPostForm onSubmit={AddPost} />
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default ProfilePosts;