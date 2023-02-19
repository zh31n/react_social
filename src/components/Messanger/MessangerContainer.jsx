import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessage, updateNewMessageBody } from '../../Redux/MessageReducer';
import Messanger from './Messanger';






let mapStateToProps = (state) => {
    return {
        store: state.messangerPage,
        isAuth: state.auth.isAuth
    }

}

let AuthRedirectComponent = withAuthRedirect(Messanger);
// (props) => {
//     if (!props.isAuth) return <Navigate to={'/login'} />
//     return <Messanger {...props} />;
// }


let MessangerContainer = connect(mapStateToProps, { sendMessage, updateNewMessageBody })(AuthRedirectComponent);

export default MessangerContainer;