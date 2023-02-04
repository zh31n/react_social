const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const MessageReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ message: body, id: 4 });
            return state;
        default: return state;
    }

    // if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //     state.newMessageBody = action.body;
    //     // this._callSubscriber(this._state);
    // } else if (action.type === SEND_MESSAGE) {
    //     let body = state.newMessageBody;
    //     state.newMessageBody = '';
    //     state.messages.push({ message: body, id: 4 });
    //     // this._callSubscriber(this._state);
    // }

    // return state;
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: text
    }
}

export default MessageReducer;