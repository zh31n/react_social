import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfilePostsContainer from './ProfilePosts/ProfilePostsContainer';

let Profile = (props) => {
    

    return (
        <div className={s.content}>
            <ProfileInfo  profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <ProfilePostsContainer />
        </div>
    );
}

export default Profile;