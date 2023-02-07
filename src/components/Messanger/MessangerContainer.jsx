import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/MessageReducer';
import StoreContext from '../../StoreContext';
import Messanger from './Messanger';






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