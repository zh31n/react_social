import React from 'react';
import MessageItem from './MessageItem/MessageItem';
import s from './Messanger.module.css'
import UserName from './UserName/UserName';




let Messanger = (props) => {

    // Снизу методы для вывода данных из массива

    let state = props.store;
    let usersElements = state.users.map((user) => { return <UserName UserName={user.UserName} key={user.id}  id={user.id} /> })
    let messagesElement = state.messages.map((message) => { return <MessageItem key={message.id} message={message.message} /> })
    let valueInput = React.createRef();


    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }


    return (
        <div className={s.content}>
            <div className={s.names}>{usersElements}</div>
            <div className={s.messages}>
                {messagesElement}
                <input ref={valueInput} value={newMessageBody} onChange={onNewMessageChange} className={s.inputMessage} type="text" placeholder='Введите сообщение' />
                <div className={s.btnAddMessage} onClick={onSendMessageClick}>Отправить</div>
            </div>
        </div>
    );
}

export default Messanger;