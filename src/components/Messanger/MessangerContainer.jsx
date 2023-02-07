import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/MessageReducer';
import StoreContext from '../../StoreContext';
import Messanger from './Messanger';




// let MessangerContainer = (props) => {

//     // Снизу методы для вывода данных из массива



//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {

//                     let state = store.getState().messangerPage;

//                     let onNewMessageChange = (body) => {
//                         // let body = e.target.value;
//                         store.dispatch(updateNewMessageBodyCreator(body));
//                     }

//                     let sendMessage = () => {
//                         store.dispatch(sendMessageCreator());
//                     }

//                     return (
//                         <Messanger sendMessage={sendMessage} updateNewMessageBody={onNewMessageChange} store={store.getState().messangerPage} />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        store: state.messangerPage,
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => { 
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => { 
            dispatch(updateNewMessageBodyCreator(body));
         }
    }
}

let MessangerContainer = connect(mapStateToProps, mapDispatchToProps)(Messanger);

export default MessangerContainer;