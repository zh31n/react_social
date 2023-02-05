import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/MessageReducer';
import Messanger from './Messanger';




let MessangerContainer = (props) => {

    // Снизу методы для вывода данных из массива

    let state = props.store.getState();

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    return (<Messanger  sendMessage={sendMessage} onNewMessageChange={onNewMessageChange} store={state.messangerPage}/>);
}

export default MessangerContainer;