import PostItem from './PostItem/PostItem';
import s from './ProfilePosts.module.css'

let ProfilePosts = () => {
    return (
        <div className={s.prof_posts}>
            My posts
            <div className={s.new_posts}>
                <textarea name="" id=""></textarea>
                <button>add post</button>
            </div>
            <div className={s.posts}>
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
            </div>
        </div>
    );
}

export default ProfilePosts;