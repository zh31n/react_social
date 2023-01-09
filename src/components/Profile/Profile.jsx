import s from './Profile.module.css'
import ProfilePosts from './ProfilePosts/ProfilePosts';

let Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.prof_img}>
                <img src="http://www.artmaxtour.ru/upload/iblock/2e3/2e36ad82eed3fd250652815ab9530445.jpg" alt="" />
            </div>
            <div className={s.prof_info}></div>
            <ProfilePosts />
        </div>
    );
}

export default Profile;