import PostItem from './PostItem/PostItem';
import s from './ProfilePosts.module.css'

let ProfilePosts = (props) => {
    
    let postElements = props.state.posts.map(post => <PostItem message={post.postTxt} likes={post.likesCount} />)

    return (
        <div className={s.prof_posts}>
            My posts
            <div className={s.new_posts}>
                <textarea name="" id=""></textarea>
                <button>add post</button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default ProfilePosts;