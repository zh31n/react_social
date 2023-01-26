import MessageItem from './MessageItem/MessageItem';
import s from './Messanger.module.css'
import UserName from './UserName/UserName';




let Messanger = (props) => {

    // Снизу методы для вывода данных из массива

    let usersElements = props.state.users.map((user) => { return <UserName UserName={user.UserName} id={user.id} /> })
    let messagesElement = props.state.messages.map((message) => { return <MessageItem message={message.message} /> })


    return (
        <div className={s.content}>
            <div className={s.names}>{usersElements}</div>
            <div className={s.messages}>{messagesElement}</div>
        </div>
    );
}

export default Messanger;