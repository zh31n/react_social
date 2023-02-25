import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessage } from '../../Redux/MessageReducer';
import Messanger from './Messanger';






let mapStateToProps = (state) => {
    return {
        store: state.messangerPage,
        isAuth: state.auth.isAuth
    }

}



export default compose(connect(mapStateToProps, { sendMessage }),
    // withAuthRedirect
)(Messanger);;