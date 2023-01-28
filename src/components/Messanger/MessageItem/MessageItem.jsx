import s from './MessageItem.module.css'

let MessageItem = (props) => {
    return (
        <div className={s.messageItem}>
            {props.message}
        </div>
    );
}

export default MessageItem;