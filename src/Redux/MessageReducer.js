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
    ]
};

const MessageReducer = (state = initialDefault, action) => {

    switch (action.type) {
        
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return { ...state, newMessageBody: '', messages: [...state.messages, { message: body, id: 4 }] };
        }
        default:
            return state;
    }
}

export const sendMessage = (newMessageBody) => { return { type: SEND_MESSAGE, newMessageBody } }


export default MessageReducer;