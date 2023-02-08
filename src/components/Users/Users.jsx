
import s from './Users.module.css'

let Users = (props) => {

    // let users = props.users;
    if (props.users.length === 0) {
        props.setUsers(
            [
                { userName: 'Dmitriy Nebrenchin', status: ' Im noob in CS:GO,and i not try change it', id: 1, location: { city: 'Novaya Usman', country: 'Russia' }, followed: true, photoUrl: 'https://placepic.ru/wp-content/uploads/2021/02/kinopoisk_ru_Brad_Pi-41.jpg', UserAge: '18' },

                { userName: 'Rostislav Volkov', status: 'Godness frontend developer', id: 2, location: { city: 'Moscow', country: 'Russia' }, followed: false, photoUrl: 'https://sun9-4.userapi.com/impg/DD4rC_1dBkz750LxefsJ05wyWZpl7qkKFb8RTA/oYckp_tiujI.jpg?size=1952x2160&quality=95&sign=cda40a092ea2aec8439856053b0d0784&type=album', UserAge: '19' },

                { userName: 'Artur Asanov', status: 'Godness backend developer', id: 3, location: { city: 'Krim', country: 'Russia' }, followed: true, photoUrl: 'https://sun2-9.userapi.com/impg/aLgqfsqyZ2_FZJo-A1yTJ4BpCKM2y8Zmu2_Kog/VeM9eFbwoCY.jpg?size=1600x1200&quality=95&sign=a884e32c61bfc746c13b3fbad3818e4c&type=album', UserAge: '18' },

                { userName: 'Bogdan Bodrov', status: ' I will become very good frontend developer', id: 4, location: { city: 'Novaya Usman', country: 'Russia' }, followed: false, photoUrl: 'https://sun9-21.userapi.com/impg/XI7vAdWHheeYb_VNJOHjMqXb0wk4e3n5LCvgfQ/vb-hmY_NC3w.jpg?size=810x1080&quality=96&sign=4cb358481c570b5bc5a0d2ff7264aaf2&type=album', UserAge: '18' },
            ]
        )
    }


    let usersElements = props.users.map((user) =>

        <div className={s.user_item}>
            <div className={s.img_btn}>
                <div className={s.user_img}><img src={user.photoUrl} alt="" /></div>
                <div>
                    {
                        user.followed
                            ? <div onClick={() => { props.follow(user.id) }} className={s.follow_btn}>follow</div>
                            : <div onClick={() => { props.unFollow(user.id) }} className={s.follow_btn}>unfollow</div>
                    }
                </div>


            </div>
            <div className={s.user_info}>
                <div className={s.name}>{user.userName}, {user.UserAge}</div>
                <div className={s.location}> {user.location.city}, {user.location.country} </div>
                <div className={s.status}> {user.status} </div>
            </div>
        </div>)

    // let usersElements = props.users.map((user) => { return <UserItem status={user.status} userName={user.userName} city={user.location.city} country={user.location.country} UserAge={user.UserAge} img={user.photoUrl} followed={user.followed} follow={props.follow} key={user.id} /> })

    return (
        <div className={s.content}>
            <div className={s.users}> {usersElements} </div>
        </div>

    )
}

export default Users;