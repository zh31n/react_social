import MessageItem from './MessageItem/MessageItem';
import s from './Messanger.module.css'
import UserName from './UserName/UserName';


let Messanger = () => {
    return (
        <div className={s.content}>
            <div className={s.names}>
                <UserName UserName='Leha' id='1'/>
                <UserName UserName='Sanya' id='2'/>
                <UserName UserName='Nebrik' id='3'/>
                <UserName UserName='Dima' id='4'/>
                <UserName UserName='Maksim' id='5'/>
                <UserName UserName='Artur' id='6'/>
                <UserName UserName='Leha' id='7'/>
                <UserName UserName='Sanya' id='8'/>
                <UserName UserName='Nebrik' id='9'/>
                <UserName UserName='Dima' id='10'/>
                <UserName UserName='Maksim' id='11'/>
                <UserName UserName='Artur' id='12'/>
                <UserName UserName='Leha' id='13'/>
                <UserName UserName='Sanya' id='14'/>
                <UserName UserName='Nebrik' id='15'/>
                <UserName UserName='Dima' id='16'/>
                <UserName UserName='Maksim' id='17'/>
                <UserName UserName='Artur' id='18'/>
                <UserName UserName='Leha' id='19'/>
                <UserName UserName='Sanya' id='20'/>
                <UserName UserName='Nebrik' id='21'/>
                <UserName UserName='Dima' id='22'/>
                <UserName UserName='Maksim' id='23'/>
                <UserName UserName='Artur'id='24'/>
                <UserName UserName='Leha' id='25'/>
                <UserName UserName='Sanya'id='26'/>
                <UserName UserName='Nebrik' id='27'/>
                <UserName UserName='Dima' id='28'/>
                <UserName UserName='Maksim' id='29'/>
                <UserName UserName='Artur' id='30'/>
            </div>
            <div className={s.messages}>
                <MessageItem message='hey'/>
                <MessageItem message='На цирлах'/>
                <MessageItem message='Иди своей дорогой сталкер'/>
            </div>
        </div>
    );
}

export default Messanger;