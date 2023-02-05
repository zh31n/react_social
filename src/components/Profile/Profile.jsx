import s from './Profile.module.css'
import ProfilePostsContainer from './ProfilePosts/ProfilePostsContainer';

let Profile = (props) => {
    return (
        <div className={s.content}>
            <div className={s.prof_img}>
                <img src="http://www.artmaxtour.ru/upload/iblock/2e3/2e36ad82eed3fd250652815ab9530445.jpg" alt="" />
            </div>
            <div className={s.prof_info}></div>
            <ProfilePostsContainer store={props.store}  />
        </div>
    );
}

export default Profile;