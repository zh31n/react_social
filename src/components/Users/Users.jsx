import axios from 'axios';
import s from './Users.module.css';
import userImg from '../../img/userImg.jpg';
import React from 'react';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        };

        return (
            <div className={s.content}>
                <div className={s.buttons_page}>
                    {pages.map(p => {
                        return <div onClick={() => { this.onPageChanged(p); }} className={this.props.currentPage === p && s.selected_page}>{p}</div>
                    })}
                </div>
                <div className={s.users}> {
                    this.props.users.map((user) =>
                        <div className={s.user_item}>
                            <div className={s.img_btn}>
                                <div className={s.user_img}><img src={user.photos.large != null ? user.photos.small : userImg} alt="" /></div>
                                <div>
                                    {
                                        user.followed
                                            ? <div onClick={() => { this.props.follow(user.id) }} className={s.follow_btn}>follow</div>
                                            : <div onClick={() => { this.props.unFollow(user.id) }} className={s.follow_btn}>unfollow</div>
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
}

export default Users;