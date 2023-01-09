import s from './Profile.module.css'

let Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.prof_img}>
                <img src="http://www.artmaxtour.ru/upload/iblock/2e3/2e36ad82eed3fd250652815ab9530445.jpg" alt="" />
            </div>
            <div className={s.prof_info}></div>
            <div className={s.prof_posts}>
                My posts
                <div className={s.new_posts}></div>
                <div className={s.posts}>
                    <div className={s.post}></div>
                    <div className={s.post}></div>
                    <div className={s.post}></div>
                </div>
            </div>
        </div>
    );
}

export default Profile;