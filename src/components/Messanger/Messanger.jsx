import MessageItem from './MessageItem/MessageItem';
import s from './Messanger.module.css'
import UserName from './UserName/UserName';




let Messanger = () => {

    let UserData = [
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
    ];

    let userElements = UserData.map((user) => {return <UserName UserName={user.UserName} id={user.id} />})

    let messageData = [
        { message: 'hey', id: 1 },
        { message: 'На цирлах', id: 2 },
        { message: 'Иди своей дорогой сталкер', id: 3 }
    ];

    let messageElement = messageData.map((message) => {return <MessageItem message={message.message} />})

    return (
        <div className={s.content}>
            <div className={s.names}>{userElements}</div>
            <div className={s.messages}>{messageElement}</div>
        </div>
    );
}

export default Messanger;