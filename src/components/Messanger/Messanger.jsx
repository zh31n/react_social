import React from 'react';
import MessageItem from './MessageItem/MessageItem';
import s from './Messanger.module.css'
import UserName from './UserName/UserName';




let Messanger = (props) => {

    // Снизу методы для вывода данных из массива

    let usersElements = props.state.users.map((user) => { return <UserName UserName={user.UserName} id={user.id} /> })
    let messagesElement = props.state.messages.map((message) => { return <MessageItem message={message.message} /> })
    let valueInput = React.createRef();

    let addMessage = () => {
        let text = valueInput.current.value;
        alert(text)
    }

    return (
        <div className={s.content}>
            <div className={s.names}>{usersElements}</div>
            <div className={s.messages}>
                {messagesElement}
                <input ref={valueInput} className={s.inputMessage} type="text" placeholder='Введите сообщение' />
                <div className={s.btnAddMessage} onClick={addMessage}>Отправить</div>
            </div>
        </div>
    );
}

export default Messanger;