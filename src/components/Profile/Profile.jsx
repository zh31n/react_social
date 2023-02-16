import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfilePostsContainer from './ProfilePosts/ProfilePostsContainer';

let Profile = (props) => {
    

    return (
        <div className={s.content}>
            <ProfileInfo  profile={props.profile}/>
            <ProfilePostsContainer />
        </div>
    );
}

export default Profile;