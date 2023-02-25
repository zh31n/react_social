import s from './ProfileInfo.module.css'
import profileBack from '../../../img/ProfileBack.jpg'
import userImg from '../../../img/userImg.jpg';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import Preloader from '../../common/Preloader/Preloader';

let ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.prof_img}>
                <img src={profileBack} alt="profile background" />
            </div>
            <div className={s.prof_info}>
                <div className={s.avatarka}>
                    <img src={props.profile.photos.large != null || undefined ? props.profile.photos.large : userImg} alt="" />
                </div>
                <div className={s.inform}>
                    <div className={s.nickName}>{props.profile.fullName}</div>
                    <div className={s.aboutMe}>{props.profile.aboutMe}</div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    );
}



export default ProfileInfo;