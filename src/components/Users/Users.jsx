import s from './Users.module.css';
import userImg from '../../img/userImg.jpg';
import React from 'react';
import { NavLink } from 'react-router-dom';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    };

    return (
        <div className={s.content}>
            <div className={s.buttons_page}>
                {pages.map(p => {
                    return <div onClick={() => { props.onPageChanged(p); }} className={props.currentPage === p && s.selected_page}>{p}</div>
                })}
            </div>
            <div className={s.users}> {
                props.users.map((user) =>
                    <div className={s.user_item}>
                        <div className={s.img_btn}>
                            <div className={s.user_img}>
                                <NavLink to={'/profile/'+ user.id}>
                                <img src={user.photos.large != null ? user.photos.small : userImg} alt="" />
                                </NavLink>
                            </div>
                            <div>
                                {
                                    user.followed
                                        ? <div onClick={() => { props.follow(user.id) }} className={s.follow_btn}>follow</div>
                                        : <div onClick={() => { props.unFollow(user.id) }} className={s.follow_btn}>unfollow</div>
                                }
                            </div>
                        </div>
                        <div className={s.user_info}>
                            <div className={s.name}>{user.name}, {user.UserAge}</div>
                            <div className={s.location}> {'user.location.city'}, {'user.location.country'} </div>
                            <div className={s.status}> {user.status} </div>
                        </div>
                    </div>)
            } </div>
        </div>
    )
}


export default Users;