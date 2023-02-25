import React from 'react';
import MessageItem from './MessageItem/MessageItem';
import s from './Messanger.module.css'
import UserName from './UserName/UserName';
import { Field, reduxForm } from 'redux-form'



const MessangerForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'input'} className={s.inputMessage} placeholder='Введите сообщение' name={'message'} />
            <button className={s.btnAddMessage}>Отправить</button>
        </form>
    )
}

const ReduxMessangerForm = reduxForm({ form: 'messanger' })(MessangerForm);


let Messanger = (props) => {

    // Снизу методы для вывода данных из массива

    let state = props.store;
    let usersElements = state.users.map((user) => { return <UserName UserName={user.UserName} key={user.id} id={user.id} /> })
    let messagesElement = state.messages.map((message) => { return <MessageItem key={message.id} message={message.message} /> })

    const addMessage = (values) => {
        props.sendMessage(values.message);
    }

    // if (!props.isAuth) return <Navigate to={'/login'} />

    return (
        <div className={s.content}>
            <div className={s.names}>{usersElements}</div>
            <div className={s.messages}>
                <ReduxMessangerForm onSubmit={addMessage} />
                {messagesElement}
            </div>
        </div>
    );
}





export default Messanger;