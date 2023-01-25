import PostItem from './PostItem/PostItem';
import s from './ProfilePosts.module.css'

let ProfilePosts = () => {

    let postData = [
        { postTxt: 'Здарова епта', likesCount: ' 0' },
        { postTxt: 'Я фронтом скоро стану', likesCount: ' 5' },
        { postTxt: 'Иди своей дорогой сталкер', likesCount: ' 10' }
    ];

    let postElements = postData.map( post =>  <PostItem message={post.postTxt} likes={post.likesCount} />)

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