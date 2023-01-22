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
                <PostItem message='Здарова епта' likes=' 0'/>
                <PostItem message='Я фронтом скоро стану' likes=' 5'/>
                <PostItem message='Иди своей дорогой сталкер' likes=' 10'/>
                {/* <PostItem />
                <PostItem />
                <PostItem />
                <PostItem /> */}
            </div>
        </div>
    );
}

export default ProfilePosts;