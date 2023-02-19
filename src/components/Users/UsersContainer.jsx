import { connect } from 'react-redux';
import { follow,  followThunk,  getUsersThunkCreator, setCurrentPage, toggleFollowingProgress, unFollow, unFollowThunk } from '../../Redux/UsersReducer';
import React from 'react';
import Users from './Users';
import Preloader from '../Preloader/Preloader';



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsersThunk(pageNumber, this.props.pageSize);
        // getPageChengedThunk(pageNumber, this.props.pageSize);
        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true);
        // getUsers(pageNumber, this.props.pageSize).then(response => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(response.items)
        // })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        };

        return (<>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                isFetching={this.props.isFetching}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
                followThunk={this.props.followThunk}
                unFollowThunk={this.props.unFollowThunk}
            /></>)
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps,
    {
        follow, unFollow, setCurrentPage, toggleFollowingProgress,
        getUsersThunk: getUsersThunkCreator,unFollowThunk,followThunk
    })(UsersContainer);