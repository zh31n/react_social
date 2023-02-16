import { connect } from 'react-redux';
import { sendMessage, updateNewMessageBody } from '../../Redux/MessageReducer';
import Messanger from './Messanger';






let mapStateToProps = (state) => {
    return {
        store: state.messangerPage,
    }

}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         sendMessage: () => { 
//             dispatch(sendMessageCreator());
//         },
//         updateNewMessageBody: (body) => { 
//             dispatch(updateNewMessageBodyCreator(body));
//          }
//     }
// }

let MessangerContainer = connect(mapStateToProps, { sendMessage, updateNewMessageBody })(Messanger);

export default MessangerContainer;