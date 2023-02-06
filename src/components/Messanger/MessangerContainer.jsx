import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/MessageReducer';
import Messanger from './Messanger';




let MessangerContainer = (props) => {

    // Снизу методы для вывода данных из массива

    let state = props.store.getState().messangerPage;

    let onNewMessageChange = (body) => {
        // let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    return (<Messanger  sendMessage={sendMessage} updateNewMessageBody={onNewMessageChange} store={state}/>);
}

export default MessangerContainer;