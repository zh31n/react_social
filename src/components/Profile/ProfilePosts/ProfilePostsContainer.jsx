import { connect } from 'react-redux';
import { addPost } from '../../../Redux/ProfileReducer';
import ProfilePosts from './ProfilePosts';



let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        NewPostText: state.profilePage.newPostText
    }

}


let ProfilePostsContainer = connect(mapStateToProps, { addPost })(ProfilePosts);

export default ProfilePostsContainer;