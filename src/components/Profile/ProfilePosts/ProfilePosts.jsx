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
                {/* <PostItem message={postData[0].postTxt} likes={postData[0].likesCount} />
                <PostItem message={postData[1].postTxt} likes={postData[1].likesCount} />
                <PostItem message={postData[2].postTxt} likes={postData[2].likesCount} /> */}
                {postElements}
            </div>
        </div>
    );
}

export default ProfilePosts;