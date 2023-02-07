const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialDefault = {
    users: [
        { UserName: 'Leha', id: 1 },
        { UserName: 'Sanya', id: 2 },
        { UserName: 'Nebrik', id: 3 },
        { UserName: 'Dima', id: 4 },
        { UserName: 'Maksim', id: 5 },
        { UserName: 'Artur', id: 6 },
        { UserName: 'Leha', id: 7 },
        { UserName: 'Sanya', id: 8 },
        { UserName: 'Nebrik', id: 9 },
        { UserName: 'Dima', id: 10 },
        { UserName: 'Maksim', id: 11 },
        { UserName: 'Artur', id: 12 },
        { UserName: 'Leha', id: 13 },
        { UserName: 'Sanya', id: 14 },
        { UserName: 'Nebrik', id: 15 },
        { UserName: 'Dima', id: 16 },
        { UserName: 'Maksim', id: 17 },
        { UserName: 'Artur', id: 18 },
        { UserName: 'Leha', id: 19 },
        { UserName: 'Sanya', id: 20 },
        { UserName: 'Nebrik', id: 21 },
        { UserName: 'Dima', id: 22 },
        { UserName: 'Maksim', id: 23 },
        { UserName: 'Artur', id: 24 },
        { UserName: 'Leha', id: 25 },
        { UserName: 'Sanya', id: 26 },
        { UserName: 'Nebrik', id: 27 },
        { UserName: 'Dima', id: 28 },
        { UserName: 'Maksim', id: 29 },
        { UserName: 'Artur', id: 30 }
    ],
    messages: [
        { message: 'hey', id: 1 },
        { message: 'На цирлах', id: 2 },
        { message: 'Иди своей дорогой сталкер', id: 3 }
    ],
    newMessageBody: ''
};

const MessageReducer = (state = initialDefault, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:{
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        case SEND_MESSAGE:{
            let stateCopy = {...state};
            let body = stateCopy.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messages.push({ message: body, id: 4 });
            return stateCopy;
        }
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