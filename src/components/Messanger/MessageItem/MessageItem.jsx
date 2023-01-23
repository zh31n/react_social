import s from './MessageItem.module.css'

let MessageItem = (props) => {
    return (
        <div className="MessageItem">
            {props.message}
        </div>
    );
}

export default MessageItem;