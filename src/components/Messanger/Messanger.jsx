import React from 'react';
import MessageItem from './MessageItem/MessageItem';
import s from './Messanger.module.css'
import UserName from './UserName/UserName';




let Messanger = (props) => {

    // Снизу методы для вывода данных из массива

    let state = props.store;
    let usersElements = state.users.map((user) => { return <UserName UserName={user.UserName} id={user.id} /> })
    let messagesElement = state.messages.map((message) => { return <MessageItem message={message.message} /> })
    let valueInput = React.createRef();
    

    let newMessageBody = state.newMessageBody;

    // let onNewMessageChange = (e) => {
    //     let body = e.target.value;
    //     props.store.dispatch(updateNewMessageBodyCreator(body));
    // }

    // let sendMessage = () => {
    //     props.store.dispatch(sendMessageCreator());

    // }

    return (
        <div className={s.content}>
            <div className={s.names}>{usersElements}</div>
            <div className={s.messages}>
                {messagesElement}
                <input ref={valueInput} value={newMessageBody} onChange={props.onNewMessageChange} className={s.inputMessage} type="text" placeholder='Введите сообщение' />
                <div className={s.btnAddMessage} onClick={props.sendMessage}>Отправить</div>
            </div>
        </div>
    );
}

export default Messanger;