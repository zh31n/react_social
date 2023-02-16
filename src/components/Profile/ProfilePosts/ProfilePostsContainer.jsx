import { connect } from 'react-redux';
import { addPost, updateNewPostText } from '../../../Redux/ProfileReducer';
import ProfilePosts from './ProfilePosts';



let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        NewPostText: state.profilePage.newPostText
    }

}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewPostText: (text) => {
//             let action = updateNewPostTextActionCreator(text)
//             dispatch(action);
//         },
//         addPost: () => {
//             dispatch(addPostActionCreator());
//         }
//     }
// }

let ProfilePostsContainer = connect(mapStateToProps, { addPost, updateNewPostText })(ProfilePosts);

export default ProfilePostsContainer;